import { showToast } from "@/utils/showToast";
import { useEffect } from "react";
import { toast } from "react-toastify";

interface Props {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  errors: string[] | null;
  successMessage?: string;
  loadingMessage?: string;
}

const useToast = ({
  isLoading: isPending,
  loadingMessage,
  successMessage,
  isError,
  isSuccess,
  errors,
}: Props) => {
  useEffect(() => {
    let tId;
    if (isPending) {
      tId = showToast("loading", loadingMessage ?? "Logging you in");
    } else {
      toast.dismiss(tId);
    }

    if (isError && errors) {
      errors.map((err: string) => {
        showToast("error", err, {});
      });
    }

    if (isSuccess) {
      showToast("success", successMessage ?? "Succesfully registered", {});
    }
  }, [isPending, isError, isSuccess, errors, loadingMessage, successMessage]);
};

export default useToast;
