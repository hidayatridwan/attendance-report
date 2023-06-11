"use client";

import { useEffect, useState } from "react";

const Karyawan = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://test.gwenza.com/public/karyawan?period=2023-06`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>NIK</th>
          <th>Nama</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td></td>
            <td>{row.nik}</td>
            <td>{row.nama}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Karyawan;
