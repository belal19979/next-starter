"use client";

import { IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useRouter } from "next/navigation";

export const SearchFormReset = () => {
  const router = useRouter();

  const reset = () => {
    router.replace("/");
  };

  return (
    <IconButton onClick={reset} edge="end" size="small">
      <ClearIcon />
    </IconButton>
  );
};
