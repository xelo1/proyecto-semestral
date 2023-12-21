import React from 'react';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";

export const sidebarData = [
{
    title: "Inicio",
    icon: <HomeOutlinedIcon/>,
    link: "/",
  },
  {
    title: "Inventario",
    icon: <InventoryOutlinedIcon/>,
    link: "/inventario",
  },
];