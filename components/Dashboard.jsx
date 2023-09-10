"use client";

import { useEffect, useState } from "react";

const Dashboard = ({ kordinat }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.API_URL}kordinat/XXX`, {
        headers: {
          "x-api-key": process.env.API_KEY,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();

      setData(data.result);
    };

    setTimeout(() => {
      fetchData();
    }, 2000);
  }, [kordinat]);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>No</th>
          <th>Location</th>
          <th>Latitude</th>
          <th>Longitude</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={row.id}>
            <td>{idx + 1}</td>
            <td>{row.nama}</td>
            <td>{row.lat}</td>
            <td>{row.lng}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Dashboard;
