import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Categories from './components/Categories';
import TopSellers from './components/TopSellers';
import 'tailwindcss/tailwind.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navbar />
            </header>
            <main className="p-4">
                <Slider />
                <Categories />
                <TopSellers />
            </main>
        </div>
    );
}

export default App;
