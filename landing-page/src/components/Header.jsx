import React, { useState } from 'react';
import { navItems } from '../assets/constants';
import Logo from "../assets/img/logo_sem_fundo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 py-3 text-white bg-black/90 backdrop-blur shadow">
  <div className="container px-4 mx-auto flex items-center justify-between relative md:grid md:grid-cols-3">
        {/* Logo e nome */}
  <div className="flex items-center gap-2">
          <a href="#" className="flex items-center gap-2">
            <img src={Logo} alt="Logo BlockchainTech" className="h-10 w-10 rounded-full shadow" />
            <span className="text-xl font-bold tracking-tight">Blockchain Tech</span>
          </a>
        </div>

        {/* Menu desktop centralizado */}
  <ul className="hidden md:flex gap-10 lg:gap-14 items-center justify-center col-span-1 mx-auto">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="transition-colors outline-none px-1 text-gray-200 hover:text-white focus:text-white"
                tabIndex={0}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botão Contact Us e menu mobile à direita */}
  <div className="flex justify-end items-center gap-2">
          <a
            href="#contact"
            className="hidden md:inline-block px-5 py-2 rounded-full border border-green-500 text-green-500 bg-transparent font-semibold transition-colors shadow focus:outline-none focus:ring-2 focus:ring-green-400 hover:bg-green-50 hover:text-green-600"
          >
            Contact Us
          </a>
          <button
            className="md:hidden flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-cyan-400 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Menu mobile */}
        {menuOpen && (
          <div className="absolute left-0 right-0 top-full bg-gray-900 rounded-b-xl shadow-lg p-6 flex flex-col gap-6 md:hidden animate-fade-in z-50 ">
            <nav className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="hover:text-white focus:text-white transition-colors outline-none focus:underline text-lg text-gray-200"
                  tabIndex={0}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              className="mt-2 px-5 py-2 rounded-full border border-green-500 text-green-500 bg-transparent font-semibold transition-colors shadow focus:outline-none focus:ring-2 focus:ring-green-400 hover:bg-green-50 hover:text-green-600 text-center"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;