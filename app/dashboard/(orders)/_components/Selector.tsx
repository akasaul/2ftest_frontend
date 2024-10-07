import { useUpdateOrder } from "@/services/mutations/order.mutations";
import { orderStatuses } from "@/utils/constants";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";

interface Props {
  defaultStatus: string;
  id: number;
  onStatusChange: () => void;
}

const StatusSelector = ({ defaultStatus, id, onStatusChange }: Props) => {
  const [status, setStatus] = useState<string>(defaultStatus);

  const { mutateAsync: updateOrder } = useUpdateOrder();

  const handleStatusChange = async (event: SelectChangeEvent) => {
    console.log(event.target.value, "evet target value");
    setStatus(event.target.value as string);
    await updateOrder({
      status: event.target.value,
      orderId: id,
    });
    onStatusChange();
    toast.success("Status changed successfully!");
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="status-select-label">Status</InputLabel>
      <Select
        labelId="status-select-label"
        id="status-select"
        value={status}
        label="Status"
        onChange={handleStatusChange}
      >
        {Object.values(orderStatuses).map((val: string) => (
          <MenuItem key={val} value={val} sx={{ textTransform: "capitalize" }}>
            {val.toLowerCase()}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default StatusSelector;
