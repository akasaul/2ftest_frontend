import { useMutation } from "@tanstack/react-query";
import { createPizza } from "../api/pizza.service";

export const useCreatePizza = () =>
  useMutation({
    mutationKey: ["createPizza"],
    mutationFn: createPizza,
  });
