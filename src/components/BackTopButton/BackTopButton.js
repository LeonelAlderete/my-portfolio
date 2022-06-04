import React from "react";
//ui
import { BsFillArrowUpSquareFill } from "react-icons/bs";

export default function BackTopButton() {
  return (
    <div className="fixed-bottom d-flex justify-content-end mb-2 me-2">
      <a href="#home">
        <BsFillArrowUpSquareFill size={40} color={"white"} />
      </a>
    </div>
  );
}
