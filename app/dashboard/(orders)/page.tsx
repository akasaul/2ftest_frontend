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
import {
  Box,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { mkConfig, generateCsv, download } from "export-to-csv";
import { useGetOrders } from "@/services/queries/order.query";
import { RestaurantOrder } from "@/services/types/order.type";
import RowHeader from "../roles/_components/RowHeader";
import { useAuth } from "@/providers/AuthProvider";
import StatusSelector from "./_components/Selector";
import { orderStatuses } from "@/utils/constants";
import ToppingDetails from "./_components/ToppingDetails";

const OrdersTable = () => {
  const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>(
    [],
  );
  const [globalFilter, setGlobalFilter] = useState("");
  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 1,
    pageSize: 11,
  });

  const { data, isError, isRefetching, isLoading, refetch } = useGetOrders({
    pageIndex: pagination.pageIndex,
    pageSize: pagination.pageSize,
    globalFilter,
    columnFilters,
  });

  const { ability } = useAuth();
  const [status, setStatus] = useState<string>("");
  const [open, setIsOpen] = useState(false);

  console.log({open});

  const columns = useMemo<MRT_ColumnDef<RestaurantOrder>[]>(
    () => [
      {
        accessorFn: (row) => ({ name: row.pizzaName, cover: row.pizzaCover }),
        header: "Name",

        Header: () => <RowHeader header="Name" />,
        Cell: ({ cell }: { cell: any }) => (
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <img style={{
              height: 30,
              width: 30,
              borderRadius: '50%',
            }} src={cell.getValue()?.cover} alt="delete" />
            <Typography>{cell.getValue()?.name}</Typography>
          </Stack>
        ),
      },

      {
        accessorFn: (row) => ({
          defaultToppings: row.defaultToppings,
          additionalToppings: row.additionalToppings,
        }),
        header: "Toppings",
        Header: () => <RowHeader header="Toppings" />,
        Cell: ({ cell }: {cell: any}) => (
          <Tooltip arrow title="Details">
            <IconButton
              onClick={() => {
                setIsOpen(true);
              }}
              color="primary"
            >
              <ToppingDetails
                isOpen={open}
                handleClose={() => setIsOpen(false)}
                defaultToppings={cell.getValue()?.defaultToppings}
                additionalToppings={cell.getValue()?.additionalToppings}
              />
              <img src={"/icons/viewIcon.svg"} alt="view" />
              <Typography>Toppings</Typography>
            </IconButton>
          </Tooltip>
        ),
      },
      {
        accessorKey: "qty",
        header: "Quantity",
        Header: () => <RowHeader header="Quantity" />,
        Cell: ({ cell }) => (
          <Typography>{cell.getValue() as string}</Typography>
        ),
      },

      {
        accessorKey: "customerNumber",
        header: "Customer No.",
        Header: () => <RowHeader header="Customer No." />,
        Cell: ({ cell }) => (
          <Typography>{cell.getValue() as string}</Typography>
        ),
      },

      {
        accessorFn: (row) => new Date(row.createdAt),
        header: "Created At",
        Header: () => <RowHeader header="Created At" />,
        Cell: ({ cell }) => (
          <Stack direction={"row"} spacing={1}>
            <Typography>
              {new Date(cell.getValue<Date>()).toLocaleString().split(",")[1]}
            </Typography>
            <Typography color="textDisabled">
              {new Date(cell.getValue<Date>()).toLocaleString().split(",")[0]}
            </Typography>
          </Stack>
        ),
      },
      {
        accessorFn: (row) => ({ status: row.status, id: row.id }),
        header: "Status",
        Header: () => <RowHeader header="Status" />,
        Cell: ({ cell }: { cell: any }) => (
          <>
            {ability?.can("update", "Order") &&
            cell.getValue()?.status !== orderStatuses.DELIVERED ? (
              <Box maxWidth={100}>
                <StatusSelector
                  onStatusChange={() => refetch()}
                  defaultStatus={cell.getValue()?.status as string}
                  id={cell.getValue()?.id as number}
                />
              </Box>
            ) : (
              <Typography sx={{ fontWeight: 600 }} color="secondary">
                {cell.getValue()?.status as string}
              </Typography>
            )}
          </>
        ),
      },
    ],
    [ability, refetch],
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
      density: "compact",
      globalFilter,
      isLoading,
      pagination,
      showAlertBanner: isError,
      showProgressBars: isRefetching,
    },
  });

  return <MaterialReactTable table={table} />;
};

const OrdersPage = () => <OrdersTable />;

export default OrdersPage;
