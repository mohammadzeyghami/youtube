import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Stack, Box } from "@mui/material";
import {
  Feed,
  VideoDetail,
  ChannelDetail,
  Navbar,
  SearchFeed,
} from "./Componnets";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;

//for handeling search we get search value and put that in state api after that we navigate that
// api because after api we have /search  the searchFeed is active and we navigate on that
// inside SearchFeed we got api with use params and handel this with Videos Component
