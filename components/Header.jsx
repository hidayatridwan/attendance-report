"use client";

import { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      router.replace("/");
    }
  }, []);

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
            <Link href="#" className="nav__link" onClick={() => signOut()}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
