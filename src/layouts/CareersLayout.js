import { Outlet } from 'react-router-dom'

const CareersLayout = () => {
  return (
    <div className='careers-layout w-full'>
      <h2>Careers</h2>
      <p className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit animi fugit distinctio, voluptas hic inventore delectus assumenda deleniti iure cumque atque nemo rem duc.</p>

      <div className='block bg-[#00000033] p-5 rounded my-5'>
        <Outlet />
      </div>
    </div>
  )
}

export default CareersLayout;