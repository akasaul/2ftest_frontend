import { showToast } from "@/utils/showToast";
import { useEffect } from "react";
import { toast } from "react-toastify";

interface Props {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  errors: string[] | null;
}

const useToast = ({
  isLoading: isPending,
  isError,
  isSuccess,
  errors,
}: Props) => {
  useEffect(() => {
    let tId;
    if (isPending) {
      tId = showToast("loading", "Logging you in");
    } else {
      toast.dismiss(tId);
    }

    if (isError && errors) {
      errors.map((err: string) => {
        showToast("error", err, {});
      });
    }

    if (isSuccess) {
      showToast("success", "Succesfully registered", {});
    }
  }, [isPending, isError, isSuccess, errors]);
};

export default useToast;
