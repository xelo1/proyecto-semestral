import React from 'react';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import { Routes, Route } from "react-router-dom";
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