import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import Form from "next/form";
import SearchIcon from "@mui/icons-material/Search";
import { SearchFormReset } from "./SearchFormReset";

export const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <Box
        sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 2 }}
      >
        <TextField
          name="query"
          key={query ?? ""}
          defaultValue={query}
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
                  {query && <SearchFormReset />}
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
    </Form>
  );
};
