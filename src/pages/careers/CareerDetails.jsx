import { useLoaderData, useParams } from 'react-router-dom'

export default function CareerDetails() {
    // eslint-disable-next-line
    const { id } = useParams()
    const career = useLoaderData()

    return (
        <div className="bg-[#00000022] block p-4 gap-3 rounded">
            <h1 className='text-[18px]'>Position: {career.title}</h1>
            <p>Starting salary: {career.salary}</p>
            <p>Location: {career.location}</p>
            <div className="details">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed sunt ipsam quam assumenda quasi ipsa facilis laborum rerum voluptatem!</p>
            </div>
        </div>
    )
}

// data loader
export const careerDetailsLoader = async ({ params }) => {
    const { id } = params

    const res = await fetch('http://localhost:4000/careers/' + id)

    if (!res.ok) {
        throw Error('Could not find that career')
    }

    return res.json()
}