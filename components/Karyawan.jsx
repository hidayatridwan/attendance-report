"use client";

import { useEffect, useState } from "react";

const Karyawan = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.API_URL}karyawan`, {
        headers: {
          "x-api-key": process.env.API_KEY,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();

      setData(data);
    };

    fetchData();
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>No</th>
          <th>NIK</th>
          <th>Nama</th>
          <th>JK</th>
          <th>Divisi</th>
          <th>Jabatan</th>
          <th>No HP</th>
          <th>Tanggal lahir</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={row.id}>
            <td>{idx + 1}</td>
            <td>{row.nik}</td>
            <td>{row.nama}</td>
            <td>{row.jenisKelamin}</td>
            <td>{row.divisi}</td>
            <td>{row.jabatan}</td>
            <td>{row.noHp}</td>
            <td>{row.tanggalLahir}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Karyawan;
