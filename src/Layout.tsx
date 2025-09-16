import {Outlet} from "react-router-dom";

import "./Layout.css"
import Header from "./components/header/Header.tsx";

function Layout() {
    return (
        <div className="page">
            <Header/>

            <main className="page__main">
                <Outlet/>
            </main>
        </div>
    );
}

export default Layout
