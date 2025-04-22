"use client";

import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

import { useSearchParams } from "next/navigation";

export const SearchForm = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const handleReset = () => {
    console.log("reset");
  };

  return (
    <Box
      component="form"
      action="/"
      sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 2 }}
    >
      <TextField
        name="query"
        defaultValue={query}
        placeholder="Search Statups"
        variant="outlined"
        size="small"
        sx={{
          flex: 1,
          minWidth: "250px",
          backgroundColor: "white",
          borderRadius: 2,
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
          },
          "& .MuiInputBase-input": {
            color: "black",
          },
        }}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                {query && (
                  <IconButton onClick={handleReset} edge="end" size="small">
                    <ClearIcon />
                  </IconButton>
                )}
                <IconButton
                  type="submit"
                  edge="end"
                  size="small"
                  sx={{ ml: 1 }}
                >
                  <SearchIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
      <Stack direction="row" spacing={1}></Stack>
    </Box>
  );
};
