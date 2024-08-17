import { useState } from 'react';
import '../App.css';
import { Bars3Icon } from '@heroicons/react/24/solid'

function Header() {
    const [toggleMenu, setToggle] = useState(false)

    const handleToggle=()=>{
        setToggle(!toggleMenu)
    }
    return (
        <header className="flex justify-between px-5 py-8 bg-primary shadow-lg sticky top-0 z-10">
            <a href="#" className='font-bold text-white text-2xl'>Suba Bha</a>
            <nav className="hidden md:block font-bold">
                <ul className="flex text-white">
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            {toggleMenu && <nav className="block md:hidden mobile-nav">
                <ul onClick={()=>setToggle(!toggleMenu)} className="flex flex-col text-2xl items-center gap-5 mt-6">
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#contact" >Contact</a></li>
                </ul>
            </nav>}
            <button onClick={handleToggle} className="block md:hidden"><Bars3Icon className="text-white h-5"></Bars3Icon></button>
        </header>
    )
}

export default Header