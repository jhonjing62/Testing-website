
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

function MainLayout() {
    return (
        <div className="min-h-screen mx-auto">
            <Navbar />

            <main>
                <Outlet />
                <Footer />
            </main>

            <Footer />
        </div>
    );
}

export default MainLayout;
