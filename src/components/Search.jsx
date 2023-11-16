import { useState } from "react";
import { Container, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  const [q, setQ] = useState("");

  const handleChange = (event) => {
    setQ(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (q !== "") {
      alert(`${q} (을)를 검색합니다.`);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSearchSubmit}>
        <TextField
          id="search"
          type="search"
          label="Search"
          value={q}
          onChange={handleChange}
          sx={{ width: "100%" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <button
                  type="submit"
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "rgba(0, 0, 0, 0.54)",
                  }}
                >
                  <SearchIcon />
                </button>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </Container>
  );
}
