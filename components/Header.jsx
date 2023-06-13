"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();

  return (
    <header>
      <Link href="/dashboard" className="logo">
        <h2>Absen BYOD</h2>
      </Link>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list-item">
            <Link
              href="/dashboard"
              className={`nav__link ${
                pathName == "/dashboard" ? "active" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li className="nav__list-item">
            <Link
              href="/karyawan"
              className={`nav__link ${pathName == "/karyawan" ? "active" : ""}`}
            >
              Karyawan
            </Link>
          </li>
          <li className="nav__list-item">
            <Link
              href="/laporan"
              className={`nav__link ${pathName == "/laporan" ? "active" : ""}`}
            >
              Laporan
            </Link>
          </li>
          <li className="nav__list-item">
            <Link href="/login" className="nav__link">
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
