"use client";
import { useMemo, useState } from "react";
import {
  MaterialReactTable,
  MRT_Row,
  useMaterialReactTable,
  type MRT_ColumnDef,
  type MRT_ColumnFiltersState,
  type MRT_PaginationState,
} from "material-react-table";
import { Button, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useGetRoles } from "@/services/queries/role.query";
import { Role } from "@/services/types/role.type";
import ActivitySwitcher from "./_components/ActivitySwitcher";
import { mkConfig, generateCsv, download } from "export-to-csv";
import RowHeader from "./_components/RowHeader";
import { useUpdateRole } from "@/services/mutations/role.mutations";
import { useAuth } from "@/providers/AuthProvider";
import { Can } from "@casl/react";

const RolesTable = () => {
  const { ability } = useAuth();
  const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>(
    [],
  );
  const [globalFilter, setGlobalFilter] = useState("");
  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 1,
    pageSize: 11,
  });

  const { data, isError, isRefetching, isLoading, refetch } = useGetRoles({
    pageIndex: pagination.pageIndex,
    pageSize: pagination.pageSize,
    globalFilter,
    columnFilters,
  });

  const { mutateAsync: updateRole } = useUpdateRole();

  const columns = useMemo<MRT_ColumnDef<Role>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Role Name",
        Header: () => <RowHeader header="Name" />,
        Cell: ({ cell }) => (
          <Typography>{cell.getValue() as string}</Typography>
        ),
      },
      {
        accessorFn: (row) => new Date(row.createdAt),
        header: "Created At",
        Header: () => <RowHeader header="Created At" />,
        Cell: ({ cell }) => (
          <Typography>
            {" "}
            {new Date(cell.getValue<Date>()).toLocaleString().split(",")[0]}
          </Typography>
        ),
      },
      {
        accessorFn: (row) => ({ isActive: row.isActive, id: row.id }),
        header: "Actions",
        Header: () => <RowHeader header="Actions" />,
        Cell: ({ cell }: {cell: any}) => (
          <Stack direction={"row"} spacing={1} alignItems="center">
            {ability && (
              <Can I={"manageRole"} a={"Role"} ability={ability}>
                <ActivitySwitcher
                  isActive={cell.getValue()?.isActive as boolean}
                  onActivityChange={async (active) => {
                    await updateRole({
                      roleId: cell.getValue()?.id as number,
                      isActive: active,
                    });
                    refetch();
                  }}
                />
              </Can>
            )}

            {ability && (
              <Can I={"readPermission"} a={"Role"} ability={ability}>
                <Tooltip arrow title="Details">
                  <IconButton onClick={() => {}}>
                    <img src={"/icons/viewIcon.svg"} alt="view" />
                  </IconButton>
                </Tooltip>
              </Can>
            )}

            {ability && (
              <Can I={"manageRole"} a={"Role"} ability={ability}>
                <Tooltip arrow title="Details">
                  <IconButton onClick={() => {}}>
                    <img src={"/icons/deleteIcon.svg"} alt="delete" />
                  </IconButton>
                </Tooltip>
              </Can>
            )}
          </Stack>
        ),
      },
    ],
    [refetch, updateRole],
  );

  const csvConfig = mkConfig({
    fieldSeparator: ",",
    decimalSeparator: ".",
    useKeysAsHeaders: true,
  });

  const handleExportRows = (rows: MRT_Row<any>[]) => {
    const rowData = rows.map((row) => row.original);

    const csv = generateCsv(csvConfig)(rowData);

    download(csvConfig)(csv);
  };

  const table = useMaterialReactTable({
    columns,
    data: data?.data?.data ?? [],
    manualFiltering: true,
    manualPagination: true,
    manualSorting: true,
    muiToolbarAlertBannerProps: isError
      ? {
          color: "error",
          children: "Error loading data",
        }
      : undefined,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    enableColumnActions: false,
    enableSorting: false,
    onPaginationChange: setPagination,
    renderTopToolbarCustomActions: () => (
      <Stack direction="row" spacing={3}>
        {ability && (
          <Can I={"manageRole"} a={"Role"} ability={ability}>
            <Button variant="contained">Add Role</Button>
          </Can>
        )}
        <Tooltip arrow title="Download Data">
          <IconButton
            onClick={() => handleExportRows(table.getRowModel().rows)}
          >
            <img src={"/icons/download.svg"} />
          </IconButton>
        </Tooltip>

        <Tooltip arrow title="Refresh Data">
          <IconButton onClick={() => refetch()}>
            <RefreshIcon />
          </IconButton>
        </Tooltip>
      </Stack>
    ),
    rowCount: data?.data?.pagination?.rowCount ?? 1,
    state: {
      columnFilters,
      globalFilter,
      isLoading,
      pagination,
      showAlertBanner: isError,
      showProgressBars: isRefetching,
      density: "compact",
    },
  });

  return <MaterialReactTable table={table} />;
};

const RolesPage = () => <RolesTable />;

export default RolesPage;
