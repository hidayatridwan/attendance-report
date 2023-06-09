'use client';

import { useEffect, useState } from "react";

const Karyawan = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch(`https://test.gwenza.com/public/karyawan`, {
                mode: 'cors',
                headers: {
                    'Access-Control-Allow-Origin': 'https://test.gwenza.com',
                    'Content-Type': 'application/json',
                    'X-API-KEY': 'ridwan123'
                }
            });
            console.log(response);
            const data2 = await response.json();
            setData(data2);
        }

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
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    )
}

export default Karyawan