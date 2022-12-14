import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./index";

function Videos({ videos, direction }) {
  if (!videos?.length) return "loading...";
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="center"
      gap={2}
    >
      {videos &&
        videos.map((item, idx) => (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {/* we can find channel data inside videos data with this  */}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        ))}
    </Stack>
  );
}

export default Videos;
