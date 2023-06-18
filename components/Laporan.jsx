"use client";

import { useEffect, useState } from "react";

const Laporan = () => {
  const [data, setData] = useState([]);
  const [month, setMonth] = useState("");
  const [maxDate, setMaxDate] = useState(0);
  const [cols, setCols] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://test.gwenza.com/public/absen?period=2023-06",
        {
          headers: {
            "x-api-key": "QoaUmKyg60wWQl1LVkKi",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setData(data);

      const initialMonth = new Date(data[0].jamDatang).getMonth();
      setMonth(initialMonth);

      const arrDates = data.map((val) => new Date(val.jamDatang).getDate());
      setMaxDate(Math.max(...arrDates));

      let c = [];
      for (let a = 0; a < maxDate; a++) {
        c.push(<th key={a}>{a}</th>);
      }
      setCols(c);
      console.log(c);
    };

    fetchData();
  }, []);

  return (
    <>
      <input type="date" />
      <table className="table">
        <thead>
          <tr>
            <th rowSpan={2}>No</th>
            <th rowSpan={2}>NIK</th>
            <th rowSpan={2}>Nama</th>
            <th rowSpan={2}>Divisi</th>
            <th rowSpan={2}>Jabatan</th>
            <th colSpan={maxDate}>{month}</th>
          </tr>
          <tr>{cols}</tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{row.nik}</td>
              <td>{row.nama}</td>
              <td>{row.divisi}</td>
              <td>{row.jabatan}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Laporan;
