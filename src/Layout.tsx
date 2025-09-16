import {Outlet, useLocation} from "react-router-dom";
import {useEffect} from "react";

import "./Layout.css";
import Header from "./components/header/Header.tsx";

function Layout() {
    const location = useLocation();

    useEffect(() => {
        const titles: Record<string, string> = {
            "/": "Главная",
            "/contacts": "Контакты",
            "/menu1": "1200 - Slim Control",
            "/menu2": "1600 - Slim Fit",
            "/menu3": "1800 - Fit Balance",
            "/menu4": "2200 - Balance Energy",
            "/menu5": "2500 - Active Energy",
            "/menu6": "3000 - Muscle Gain",
            "/menu7": "3200 - Mass Builder",
            "/menu8": "Преміум меню",
        };

        document.title = "Food | " + titles[location.pathname] || "Мій сайт";
    }, [location]);

    return (
        <div className="page">
            <Header/>

            <main className="page__main">
                <Outlet/>
            </main>
        </div>
    );
}

export default Layout;
