"use client";

import Laporan from "@components/Laporan";
import { useState } from "react";

const Page = () => {
  const date = new Date();
  const [dateFilter, setDateFilter] = useState(
    `${date.getFullYear()}-${date.getMonth() + 1}`
  );

  return (
    <section className="main-container">
      <h1 className="main__title">Laporan</h1>
      <input type="month" onChange={(e) => setDateFilter(e.target.value)} />
      <Laporan dateFilter={dateFilter} />
    </section>
  );
};

export default Page;
