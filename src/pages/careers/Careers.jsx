import { useLoaderData, Link } from "react-router-dom"

export default function Careers() {
  const careers = useLoaderData()

  return (
    <div>
      {careers.map(career => (
        <div className="bg-[#00000022] rounded py-1 px-5 my-3">
          <Link to={career.id.toString()} key={career.id}>
            <p className="hover:text-[#fdbf6e]">{career.title}</p>
            <p>Based in{career.location}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

// loader function
export const careersLoader = async () => {
  const res = await fetch('http://localhost:4000/careers')

  if (!res.ok) {
    throw Error('Could not fetch the career')
}

  return res.json()
}
