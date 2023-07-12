import { Outlet } from 'react-router-dom'

const CareersLayout = () => {
  return (
    <div className='careers-layout h-screen mb-5'>
      <h1 className='text-[20px]'>Careers</h1>
      <p className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit animi fugit distinctio, voluptas hic inventore delectus assumenda deleniti iure cumque atque nemo rem duc.</p>

        <Outlet />
    </div>
  )
}

export default CareersLayout;