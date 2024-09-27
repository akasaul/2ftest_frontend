import { cache } from "react";
import { QueryClient } from "@tanstack/react-query";
import { showToast } from "@/utils/showToast";

const STALE_TIME = 1000 * 60 * 5;

export const queryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: STALE_TIME,
    },
    mutations: {
      onError: (error: Error) => {
        showToast("error", error.message);
      },
    },
  },
};

export const getQueryClient = cache(() => new QueryClient(queryClientConfig));
