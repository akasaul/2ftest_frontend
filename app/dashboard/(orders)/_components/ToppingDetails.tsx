"use client";
import { MyOrderTopping } from "@/services/types/order.type";
import { Box, Modal, Stack, Typography } from "@mui/material";

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
        <Stack spacing={2}>
          <Box>
            <Typography
              variant="h5"
              color={"#00000080"}
              fontWeight={500}
              lineHeight={1.2}
            >
              Default Toppings
            </Typography>
            {defaultToppings.map((top) => (
              <Typography key={top.id} id="modal-modal-description">
                {top.name}
              </Typography>
            ))}
          </Box>
          <Box>
            <Typography
              variant="h5"
              color={"#00000080"}
              fontWeight={500}
              lineHeight={1.2}
            >
              Additional Toppings
            </Typography>
            {additionalToppings.map((top) => (
              <Typography key={top.id} id="modal-modal-description">
                {top.name}
              </Typography>
            ))}
          </Box>
        </Stack>
      </Box>
    </Modal>
  );
};

export default ToppingDetails;
