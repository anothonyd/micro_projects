import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="flex w-full  z-50 px-5 top-0 border-b-2 shadow backdrop-blur justify-center border-[#9E8279] h-16">
            <nav className="flex justify-between items-center w-screen lg:w-3/4">
                <h1 className="font-bold text-[25px]">Jobarouter</h1>
                <div className="flex gap-2 md:gap-3">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='about'>About</NavLink>
                    <NavLink to='careers'>Careers</NavLink>
                    <NavLink to='help'>Help</NavLink>
                </div>
                <button className="flex gap-2 rounded-2xl px-4">
                    <NavLink to='login'>Log In</NavLink>|
                    <NavLink to='signup'>Sign Up</NavLink>
                </button>
            </nav>
        </header>

    )
}

export default Header