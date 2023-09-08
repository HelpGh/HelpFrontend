import { useState } from "react";
import io from 'socket.io-client';
import useAuth from "./useAuth";
import socketApi from "../config/socketApi";

export default useAuth1 = () => {
const {setShops}=useAuth()

  const loadPage =async () => {
    
    const socket = io(socketApi.socketApi);
        socket.emit("loadShops", {method:"GET",body:{}});
          socket.on("loadShops", findShops=>{
            setShops(findShops.data);
          });
  };

  

  return { loadPage };
};
