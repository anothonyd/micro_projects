import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="flex w-screen fixed px-5 z-50 top-0 border-b-2 shadow backdrop-blur justify-center border-[#9E8279] h-16 items-center">
            <nav className="flex  justify-between items-center w-screen md:w-3/4">
                <h1 className="font-extrabold">Jobarouter</h1>
                <div className="flex gap-2 md:gap-3">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='about'>About</NavLink>
                    <NavLink to='careers'>Careers</NavLink>
                    <NavLink to='help'>Help</NavLink>
                </div>
            </nav>
        </header>

    )
}

export default Header