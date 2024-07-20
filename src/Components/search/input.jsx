import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import "./input.css";
function SearchInput({ valueProp, onChangeProp }) {
  return (
    <div className="searchContainer">
      <Paper
        component="form"
        sx={{
          borderRadius: "20px",
          backgroundColor: "#ffffff",
          p: "2px 2px",
          display: "flex",
          alignItems: "center",
          width: 400,
          marginTop: "1rem",
        }}
      >
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          style={{ color: "#151515", boxShadow: "none", marginBottom: "-5px" }}
        >
          <SearchIcon />
        </IconButton>
        <InputBase
          style={{ color: "#151515" }}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Country"
          inputProps={{ "aria-label": "search Crypto" }}
          value={valueProp}
          onChange={onChangeProp}
        />
      </Paper>
    </div>
  );
}

export default SearchInput;

// @@@@@@@@@@@..@@@@@@@@@@@@  %@@@@@@@@@@@=    +@@@@@@@@@@    %@@@@@@@@#
// @@@@@@@@@@@..@@@@@@@@@@@@  %@@@@@@@@@@@@    @@@@@@@@@@@   =@@@@@@@@@@-
// @@@@@@@@@@@..@@@@@@@@@@@@  %@@@@@@@@@@@@.  .@@@@@@@@@@@   #@@@@@@@@@@+
// @@@-..*@@@%  .#@@@*..=@@@  .+@@@@.:*@@@@.  :@@@@%:-@@@@   %@@@%:-@@@@*
// @@@: +@@@#    #@@@+  =@@@   =@@@@   @@@@   -@@@@=  @@@@   @@@@=  #@@@#
//     *@@@*     #@@@*..-=--   =@@@@ .+@@@-   -@@@@.  ----   @@@@-  #@@@#
//    #@@@#      #@@@@@@@-     =@@@@@@@@*.    -@@@@.-@@@@@@* @@@@-  #@@@#
//   #@@@#       #@@@#===.     =@@@@=+@@@%.   -@@@@.-@@@@@@* @@@@-  #@@@#
//  #@@@* +###.  #@@@+  -%%%:  =@@@@  -@@@= : -@@@@: :@@@@-. @@@@-  #@@@#
// #@@@*  #@@@.  #@@@+  =@@@:  =@@@@  :@@@+ @=-@@@@+ .@@@@   @@@@+  @@@@#
// *@@@@***@@@@..*@@@@%**#@@@: +#@@@@*::@@@%+@+-@@@@@#%@@@@   %@@@@*#@@@@*
// #@@@@@@@@@@@..@@@@@@@@@@@@: %@@@@@@=:@@@@@@+:@@@@@@@@@@@   *@@@@@@@@@@+
// #@@@@@@@@@@@..@@@@@@@@@@@@: %@@@@@@= @@@@@@- @@@@@@@@@@@   -@@@@@@@@@@.
// %@@@@@@@@@@@..@@@@@@@@@@@@: %@@@@@@= =@@@@#  =@@@@@@**@@    *@@@@@@@@-
