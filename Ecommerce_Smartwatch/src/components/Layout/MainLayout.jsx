
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

function MainLayout() {
    return (
        <div className="min-h-screen bg-amber-950">
            <Navbar />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default MainLayout;
