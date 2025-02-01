"use client";
import "@fontsource/poppins"; // Default weight (400)
import "@fontsource/poppins/700.css"; // Bold weight

import { createTheme } from "@mantine/core";

export const theme = createTheme({
  fontFamily: "Poppins, sans-serif",
  colors: {
    // Add your color
    purple: [
      "#5C3FBC",
      "#764EE9",
      "#b9c7e2",
      "#94a8d0",
      "#748dc1",
      "#5f7cb8",
      "#5474b4",
      "#44639f",
      "#39588f",
      "#2d4b81",
    ],
  },
});
