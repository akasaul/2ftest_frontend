import { useMutation } from "@tanstack/react-query";
import { createTopping } from "../api/topping.service";

export const useCreateTopping = () =>
  useMutation({
    mutationKey: ["createTopping"],
    mutationFn: createTopping,
  });
