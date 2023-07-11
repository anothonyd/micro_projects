import { Outlet, NavLink } from 'react-router-dom'

const HelpLayout = () => {
    return (
        <div className='help-layout'>
            <h2> Website Help</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nesciunt adipisci a ipsam neque delectus unde excepturi officiis voluptatibus. Dolor eligendi debitis non fugit porro eos? Libero officiis odit nisi.</p>

            <nav className='flex justify-center gap-8 m-8'>
                <NavLink to='faq' className='border-2 border-white p-2 '>View the FAQ</NavLink>
                <NavLink to='contact' className='border-2 border-white p-2'>Contact Us</NavLink>
            </nav>

            <div className='flex items-center justify-center'>
                <Outlet />
            </div>
        </div >
    )
}

export default HelpLayout