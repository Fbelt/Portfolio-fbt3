import React from "react";
import "./App.css";
import { useState } from "react";
import { Header } from "./components/header";

export default function App() {
  return (
    <div
      style={{
        backgroundColor: "#FFFF",
        color: "white",
        width: "100%",
        height: "100%",
      }}
    >
      <Header />
    </div>
  );
}
