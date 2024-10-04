"use client";
import { useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
  type MRT_ColumnFiltersState,
  type MRT_PaginationState,
  type MRT_SortingState,
} from "material-react-table";
import { Button, IconButton, Stack, Tooltip } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useGetRoles } from "@/services/queries/role.query";
import { Role } from "@/services/types/role.type";
import ActivitySwitcher from "./_components/ActivitySwitcher";
import { Eye } from "@phosphor-icons/react/dist/ssr/Eye";
import { DeleteSharp } from "@mui/icons-material";

const RolesTable = () => {
  const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>(
    [],
  );
  const [globalFilter, setGlobalFilter] = useState("");
  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isError, isRefetching, isLoading, refetch } = useGetRoles({
    pageIndex: pagination.pageIndex,
    pageSize: pagination.pageSize,
    globalFilter,
    columnFilters,
  });

  const columns = useMemo<MRT_ColumnDef<Role>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Role Name",
      },
      {
        accessorFn: (row) => new Date(row.createdAt),
        header: "Created At",
        Cell: ({ cell }) =>
          new Date(cell.getValue<Date>()).toLocaleString().split(",")[0],
      },
      {
        accessorKey: "isActive",
        header: "Actions",
        Cell: ({ cell }) => (
          <Stack direction={"row"} spacing={2} alignItems="center">
            <ActivitySwitcher isActive={cell.getValue() as boolean} />
            <Eye />
            <DeleteSharp />
          </Stack>
        ),
      },
    ],
    [],
  );

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
      <Stack direction="row" spacing={2}>
        <Button variant="contained">Add Role</Button>
        <Tooltip arrow title="Refresh Data">
          <IconButton onClick={() => refetch()}>
            <RefreshIcon />
          </IconButton>
        </Tooltip>
      </Stack>
    ),
    rowCount: data?.data?.pagination?.rowCount ?? 0,
    state: {
      columnFilters,
      globalFilter,
      isLoading,
      pagination,
      showAlertBanner: isError,
      showProgressBars: isRefetching,
    },
  });

  return <MaterialReactTable table={table} />;
};

const RolesPage = () => <RolesTable />;

export default RolesPage;
