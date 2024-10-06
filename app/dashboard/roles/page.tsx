"use client";
import { useEffect, useMemo, useState } from "react";
import {
  MaterialReactTable,
  MRT_Row,
  useMaterialReactTable,
  type MRT_ColumnDef,
  type MRT_ColumnFiltersState,
  type MRT_PaginationState,
} from "material-react-table";
import {
  Box,
  Button,
  IconButton,
  Modal,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useGetRoles } from "@/services/queries/role.query";
import { Role } from "@/services/types/role.type";
import ActivitySwitcher from "./_components/ActivitySwitcher";
import { mkConfig, generateCsv, download } from "export-to-csv";
import RowHeader from "./_components/RowHeader";
import { useUpdateRole } from "@/services/mutations/role.mutations";
import { useAuth } from "@/providers/AuthProvider";
import { Can } from "@casl/react";
import AddRoleForm from "./_components/AddRoleModal";
import UpdateRoleForm from "./_components/UpdateRoleForm";

interface Props {
  handleSetRoleId: (id: number) => void;
  handleUpdateOpen: () => void;
  handleUpdateClose: () => void;
  onUpdateClose: () => void;
}

const RolesTable = ({
  handleSetRoleId,
  handleUpdateClose,
  handleUpdateOpen,
}: Props) => {
  const { ability } = useAuth();
  const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>(
    [],
  );
  const [globalFilter, setGlobalFilter] = useState("");
  const [open, setOpen] = useState(false);

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
        Cell: ({ cell }: { cell: any }) => (
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
                  <Button
                    onClick={() => {
                      handleSetRoleId(cell.getValue().id);
                      handleUpdateOpen();
                    }}
                  >
                    <img src={"/icons/viewIcon.svg"} alt="view" />
                  </Button>
                </Tooltip>
              </Can>
            )}

            {ability && (
              <Can I={"manageRole"} a={"Role"} ability={ability}>
                <Tooltip arrow title="Details">
                  <IconButton>
                    <img src={"/icons/deleteIcon.svg"} alt="delete" />
                  </IconButton>
                </Tooltip>
              </Can>
            )}
          </Stack>
        ),
      },
    ],
    [refetch, updateRole, ability, handleSetRoleId, handleUpdateOpen],
  );

  useEffect(() => {
    refetch();
  }, [refetch, handleUpdateClose]);

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

  const handleClose = () => {
    setOpen(false);
    refetch();
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
            <Button variant="contained" onClick={() => setOpen(true)}>
              Add Role
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 400,
                  bgcolor: "background.paper",
                  border: "none",
                  borderRadius: "20px",
                  boxShadow: 24,
                  p: 4,
                }}
              >
                <AddRoleForm handleClose={handleClose} />
              </Box>
            </Modal>
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

const RolesPage = () => {
  const [updateOpen, setUpdateOpen] = useState(false);
  const [roleId, setRoleId] = useState<number>();

  const handleUpdateClose = () => {
    setUpdateOpen(false);
  };

  const handleUpdateOpen = () => {
    setUpdateOpen(true);
  };

  const handleSetRoleId = (id: number) => {
    setRoleId(id);
  };

  const onUpdateClose = () => {};

  return (
    <>
      <Modal
        open={updateOpen}
        onClose={handleUpdateClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: 400, sm: 600 },
            bgcolor: "background.paper",
            border: "none",
            borderRadius: "20px",
            boxShadow: 24,
            p: 4,
          }}
        >
          {roleId && (
            <UpdateRoleForm id={roleId} handleClose={handleUpdateClose} />
          )}
        </Box>
      </Modal>
      <RolesTable
        handleUpdateOpen={handleUpdateOpen}
        handleUpdateClose={handleUpdateClose}
        onUpdateClose={onUpdateClose}
        handleSetRoleId={handleSetRoleId}
      />
    </>
  );
};

export default RolesPage;
