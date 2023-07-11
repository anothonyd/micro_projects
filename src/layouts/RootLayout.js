import { Outlet } from "react-router-dom";
import Header from "../components/Header";
const RootLayout = () => {
    return (
        <>
            <Header />
            <main className="relative flex justify-center top-16 p-5 z-10">
                <div className="w-screen md:w-3/4"><Outlet /></div>
            </main>
        </>
    )
};

export default RootLayout;