import React from "react";
import { categories } from "../utils/Constans";
import { Stack, Typography } from "@mui/material";
function Sidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          onClick={() => {
            setSelectedCategory(category.name);
          }}
          className="category-btn"
          key={category.name}
          style={{
            background: category.name === selectedCategory && "#FC1503",
            color: "#FFF",
          }}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              paddingBottom: "5px",
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
}

export default Sidebar;
