"use client";

import Dashboard from "@components/Dashboard";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Page = () => {
  const [kordinat, setKordinat] = useState("");

  useEffect(() => {
    const updateData = async () => {
      const response = await fetch(
        `${process.env.API_URL}kordinat/${kordinat}`,
        {
          method: "PATCH",
          headers: {
            "x-api-key": process.env.API_KEY,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update data");
      } else {
        toast.success("Success update kordinat");
      }
    };

    if (kordinat != "") {
      updateData();
    }
  }, [kordinat]);

  return (
    <section className="main-container">
      <h1 className="main__title">Dashboard</h1>
      <label htmlFor="kordinat">Set kordinat</label> :
      <select
        name="kordinat"
        id="kordinat"
        onChange={(e) => setKordinat(e.target.value)}
      >
        <option value="">Choose</option>
        <option value="office">Office</option>
        <option value="home">Home</option>
      </select>
      <Dashboard kordinat={kordinat} />
    </section>
  );
};

export default Page;
