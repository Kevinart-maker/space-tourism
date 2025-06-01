'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar flex items-center justify-between p-6 py-10 pl-[3rem] lg:pt-[5rem] fixed w-full overflow-hidden">
            <img src="/logo.svg" alt="logo" />

            {/* Mobile Navigation */}
            <div className="md:hidden relative">
                {/* Hamburger Button */}
                <button
                    className="flex flex-col justify-center items-center w-10 h-10 z-20 relative"
                    aria-label="Toggle navigation"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    <span
                        className={`block h-0.5 w-8 bg-white my-1 transition-transform duration-300 ${
                            open ? "rotate-45 translate-y-2" : ""
                        }`}
                    />
                    <span
                        className={`block h-0.5 w-8 bg-white my-1 transition-all duration-300 ${
                            open ? "opacity-0" : ""
                        }`}
                    />
                    <span
                        className={`block h-0.5 w-8 bg-white my-1 transition-transform duration-300 ${
                            open ? "-rotate-45 -translate-y-3" : ""
                        }`}
                    />
                </button>
                {/* Animated Mobile Menu */}
                <div
                    className={`fixed top-0 right-0 h-full w-2/3 max-w-xs blurry px-6 pt-24 transition-transform duration-300 z-10 ${
                        open ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <Link
                        href="/"
                        className={`block py-4 ${pathname === "/" ? "mobile-active" : ""}`}
                        onClick={() => setOpen(false)}
                    >
                        <strong>00</strong> HOME
                    </Link>
                    <Link
                        href="/destination"
                        className={`block py-4 ${pathname === "/destination" ? "mobile-active" : ""}`}
                        onClick={() => setOpen(false)}
                    >
                        <strong>01</strong> DESTINATION
                    </Link>
                    <Link
                        href="/crew"
                        className={`block py-4 ${pathname === "/crew" ? "mobile-active" : ""}`}
                        onClick={() => setOpen(false)}
                    >
                        <strong>02</strong> CREW
                    </Link>
                    <Link
                        href="/technology"
                        className={`block py-4 ${pathname === "/technology" ? "mobile-active" : ""}`}
                        onClick={() => setOpen(false)}
                    >
                        <strong>03</strong> TECHNOLOGY
                    </Link>
                </div>
            </div>

            {/* Tablet Navigation */}
            <div className="hidden lg:flex xl:hidden items-center gap-8 blurry px-8 absolute right-0 w-[65%]">
                <Link href="/" className={`py-6 ${pathname === '/' ? 'active' : ''}`}><strong>00</strong> HOME</Link>
                <Link href="/destination" className={`py-6 ${pathname === '/destination' ? 'active' : ''}`}><strong>01</strong> DESTINATION</Link>
                <Link href="/crew" className={`py-6 ${pathname === '/crew' ? 'active' : ''}`}><strong>02</strong> CREW</Link>
                <Link href="/technology" className={`py-6 ${pathname === '/technology' ? 'active' : ''}`}><strong>03</strong> TECHNOLOGY</Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-10 blurry px-4 pl-[12rem] absolute -right-10 w-[50%]">
                <div className="w-[90%] h-[0.1px] bg-[var(--primary)] left-[-85%] absolute"/>
                <Link href="/" className={`py-10 ${pathname === '/' ? ' active' : ''}`}><strong>00</strong> HOME</Link>
                <Link href="/destination" className={`py-10 ${pathname === '/destination' ? 'active' : ''}`}><strong>01</strong> DESTINATION</Link>
                <Link href="/crew" className={`py-10 ${pathname === '/crew' ? 'active' : ''}`}><strong>02</strong> CREW</Link>
                <Link href="/technology" className={`py-10 ${pathname === '/technology' ? 'active' : ''}`}><strong>03</strong> TECHNOLOGY</Link>
            </div>
        </nav>
    )
}