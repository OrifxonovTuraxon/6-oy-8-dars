import React from 'react';
import logo from '../assets/logo.svg';
import header1 from '../assets/header1.svg';
import header2 from '../assets/header2.svg';
import header3 from '../assets/header3.svg';
import header_top from '../assets/header_top.svg';

function Navbar() {
    return (
        <div>
            <div className="flex justify-end items-center p-2 bg-gray-100 text-sm">
                <img src={header_top} alt="Top Header" className="h-5 mr-2" />
                <span className="mr-20">Aloqa uchun</span>
                <select className="border rounded px-2 py-1 mr-32">
                    <option>UZ</option>
                    <option>EN</option>
                </select>
            </div>
            <nav className="flex items-center p-4 bg-white shadow-md">
                <img src={logo} alt="Logo" className="h-10 ml-48" />
                <div className="flex items-center space-x-32 ml-32">
                    <button className="w-48 h-12 rounded-lg bg-gradient-to-l from-blue-500 to-red-500 text-white">Katalog</button>
                    <div className="flex items-center border rounded ml-16">
                        <input type="text" placeholder="Maxsulotlarni izlash" className="px-2 py-1" />
                        <button className="px-4 py-1 bg-blue-500 text-white rounded-r">
                            <img src={header1} alt="Search" className="h-5" />
                        </button>
                    </div>
                    <button className="ml-20 w-12 h-12 rounded-lg bg-gray-200 flex items-center justify-center">
                        <img src={header2} alt="Favorites" className="h-5" />
                    </button>
                    <button className="ml-20 w-12 h-12 rounded-lg bg-gray-200 flex items-center justify-center">
                        <img src={header3} alt="Cart" className="h-5" />
                    </button>
                    <button className="w-28 h-11 rounded-lg bg-gradient-to-l from-blue-500 to-red-500 text-white ml-16">Kirish</button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
