"use client";

import { useEffect, useState } from "react";

const arrMonthName = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const Laporan = ({ dateFilter }) => {
  const [data, setData] = useState([]);
  const [month, setMonth] = useState("");
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.API_URL}absen?period=${dateFilter}`,
        {
          headers: {
            "x-api-key": process.env.API_KEY,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();

      let arrUsers = [];
      data.forEach((row) => {
        const exists = arrUsers.some((obj) => obj.nik === row.nik);

        if (!exists) {
          arrUsers.push(row);
        }
      });

      arrUsers.forEach((row) => {
        const dataFiltered = data.filter((obj) => obj.nik === row.nik);
        let arrAbsen = [];
        dataFiltered.forEach((row2) => {
          arrAbsen.push({
            tgl: new Date(row2.jamDatang).getDate(),
            jam: new Date(row2.jamDatang).getHours(),
            menit: new Date(row2.jamDatang).getMinutes(),
          });
        });
        row.absen = arrAbsen;
      });

      setData(arrUsers);

      const initialMonth = new Date(`${dateFilter}-01`).getMonth();
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
  }, [dateFilter]);

  return (
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
          {dates.map((row) => (
            <th key={row} className="w-50">
              {row}
            </th>
          ))}
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
            {dates.map((row2, idx2) => {
              const absen = row.absen.filter((abs) => abs.tgl === row2);

              if (absen.length > 0) {
                let st = "H";
                if (absen[0].jam >= 8 && absen[0].menit >= 1) {
                  st = "T";
                }
                return (
                  <td key={idx2} className="w-50">
                    {st}
                  </td>
                );
              } else {
                return (
                  <td key={idx2} className="w-50">
                    -
                  </td>
                );
              }
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Laporan;
