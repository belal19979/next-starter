"use client";

import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const SearchForm = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const router = useRouter();
  const [inputValue, setInputValue] = useState(query);

  useEffect(() => {
    setInputValue(query);
  }, [query]);

  const handleReset = () => {
    const params = new URLSearchParams(searchParams);

    params.delete("query");
    const newUrl = params.toString() ? `?${params}` : ".";
    router.replace(newUrl);
  };

  return (
    <Box
      component="form"
      action="/"
      sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 2 }}
    >
      <TextField
        name="query"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search Statups"
        variant="outlined"
        size="small"
        sx={{
          flex: 1,
          minWidth: "250px",
          backgroundColor: "white",
          color: "black",
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
                {inputValue && (
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
    </Box>
  );
};
