"use client";
import { MyOrderTopping } from "@/services/types/order.type";
import { Box, Modal, Typography } from "@mui/material";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  defaultToppings: MyOrderTopping[];
  additionalToppings: MyOrderTopping[];
}

const ToppingDetails = ({
  isOpen,
  defaultToppings,
  additionalToppings,
  handleClose,
}: Props) => {
  return (
    <Modal
      open={isOpen}
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
        {defaultToppings.map((top) => (
          <Typography key={top.id} id="modal-modal-description" sx={{ mt: 2 }}>
            {top.name}
          </Typography>
        ))}

        {additionalToppings.map((top) => (
          <Typography key={top.id} id="modal-modal-description" sx={{ mt: 2 }}>
            {top.name}
          </Typography>
        ))}
      </Box>
    </Modal>
  );
};

export default ToppingDetails;
