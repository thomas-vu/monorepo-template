import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WebApp",
    short_name: "WebApp",
    description: "WebAppDescription",
    start_url: "/",
    display: "standalone",
    background_color: "transparent",
    theme_color: "transparent",
    orientation: "portrait",
    scope: "/",
  };
}
