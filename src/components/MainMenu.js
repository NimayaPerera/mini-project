import { useEffect, useState, history } from "react";
import "./MainMenu.css";
import axios from "axios";
import { useSelector } from "react-redux";

import MenuItem from "./MenuItem";
import toast, { Toast } from "react-hot-toast";
import { Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";

import { Alert } from "@chakra-ui/react";
import { useGetAllProductsQuery } from "../features/productsApi";

function MainMenu() {
  const { data, status } = useSelector((state) => state.products);

  return (
    <div className="main-menu-container">
      {/* {data.map((item) => {
        return <MenuItem key={item.id} item={item} />;
      })} */}
    </div>
  );
}

export default MainMenu;
