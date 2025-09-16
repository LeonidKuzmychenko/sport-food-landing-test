import {Outlet} from "react-router-dom";

import "./Layout.css"
import Header from "./components/header/Header.tsx";

function Layout() {
    return (
        <div className="mainPage">
            <Header/>

            <main className="main">
                <Outlet/> {/* сюда подставляется текущая страница */}
            </main>
        </div>
    );
}

export default Layout
