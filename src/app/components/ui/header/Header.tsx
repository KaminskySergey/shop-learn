

'use client'
import Link from "next/link"
import Modal from "../modal/Modal";
import HeaderCart from "./HeaderCart";
import Search from "../search/Search";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  const [isActiveRoute, setIsActiveRoute] = useState(false);

  useEffect(() => {
    setIsActiveRoute(pathname === '/');
  }, [pathname]);

  return (
    <header style={{ maxWidth: '1650px'}} className={`mx-auto px-4 h-full flex items-center bg-black ${isActiveRoute ? 'active' : ''}`}>
      <div className="flex flex-row justify-between w-full">
        <div>
          <Link href={'/'} className={`text-white font-bold text-lg hover:text-blue-400 ${isActiveRoute ? 'text-blue-700' : ''}`}>Kama-Shop</Link>
        </div>
        <div className="w-96">
          <Search />
        </div>
        <div>
          <HeaderCart />
        </div>
      </div>
    </header>
  );
};