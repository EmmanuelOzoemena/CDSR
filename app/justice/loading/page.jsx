import React from "react";
import Image from "next/image";

export default function AdminHeader() {
  return (
    <div className="loading">
      <div className="loading__content">
        <div>
          <Image
            alt=""
            src="/assets/logo.png"
            width={40}
            height={40}
            style={{ marginBottom: "15x" }}
          />
          <h2>CLEDAS</h2>
          <p>Centralized Law Enforcement Dentention Administration System</p>
        </div>

        <div>
          <h3>Please Wait</h3>
          <span>Searching For Login Access</span>
        </div>
      </div>
    </div>
  );
}
