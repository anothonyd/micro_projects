import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <div>
            <h1 className='font-semibold'>Page not found!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odit iste, voluptatem in provident reiciendis iure? Harum itaque doloribus, officia odit pariatur ex aliquam fuga totam molestiae error, perspiciatis tenetur.</p>
            <p>Go to the <Link to='/' className='underline'>Home Page</Link>.</p>
        </div>
    )
}
