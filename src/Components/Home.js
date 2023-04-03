import React from "react";
import { motion } from "framer-motion";
import logo from "./IMAGES/LOGO.png";

export default function Home() {
  return (
    <>
      <body
        style={{
          background: "black",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <motion.img
          src={logo}
          alt=""
          height="70%"
          style={{ margin: "8em" }}
          animate={{ filter:["drop-shadow(-5px 6px 9px #ED4000)"], opacity: [1, 0.7, 1]}}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </body>
    </>
  );
}