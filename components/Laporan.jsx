"use client";

import { useEffect, useState } from "react";

const arrMonthName = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

const Laporan = () => {
  const [data, setData] = useState([]);
  const [month, setMonth] = useState("");
  const [dates, setDates] = useState([]);

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
      setMonth(arrMonthName[initialMonth]);

      const arrDates = data.map((val) => new Date(val.jamDatang).getDate());
      const maxDate = Math.max(...arrDates);
      let no = [];
      for (let i = 1; i <= maxDate; i++) {
        no.push(i);
      }
      setDates(no);
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
            <th colSpan={dates.length}>{month}</th>
          </tr>
          <tr>
            {
              dates.map(row => <th key={row} className="w-50">{row}</th>)
            }
          </tr>
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
