import { Outlet } from "react-router-dom";
import Header from "../components/Header";
const RootLayout = () => {
    return (
        <>
            <Header />
            <main className="w-full flex justify-center p-5 z-10">
                <div className="w-screen lg:w-3/4"><Outlet /></div>
            </main>
        </>
    )
};

export default RootLayout;