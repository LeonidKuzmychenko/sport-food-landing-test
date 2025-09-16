import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <header className="page__header">
            <nav className="page__nav">
                <NavLink to="/" className="page__link">Главная</NavLink>

                <div className="page__dropdown">
                    <button
                        type="button"
                        className="page__link page__dropdown-btn"
                        aria-haspopup="menu"
                    >
                        Меню ▾
                    </button>

                    <div className="page__dropdown-content" role="menu">
                        <NavLink to="/menu1" className="page__dropdown-link" role="menuitem">
                            1200 - Slim Control
                        </NavLink>
                        <NavLink to="/menu2" className="page__dropdown-link" role="menuitem">
                            1600 - Slim Fit
                        </NavLink>
                        <NavLink to="/menu3" className="page__dropdown-link" role="menuitem">
                            1800 - Fir Balance
                        </NavLink>
                        <NavLink to="/menu4" className="page__dropdown-link" role="menuitem">
                            2200 - Balance Energy
                        </NavLink>
                        <NavLink to="/menu5" className="page__dropdown-link" role="menuitem">
                            2500 - Active Energy
                        </NavLink>
                        <NavLink to="/menu6" className="page__dropdown-link" role="menuitem">
                            3000 - Muscle Gain
                        </NavLink>
                        <NavLink to="/menu7" className="page__dropdown-link" role="menuitem">
                            3200 - Mass Builder
                        </NavLink>
                        <NavLink to="/menu8" className="page__dropdown-link" role="menuitem">
                            Преміум меню
                        </NavLink>
                    </div>
                </div>

                <NavLink to="/contacts" className="page__link">Контакты</NavLink>
            </nav>
        </header>
    );
}

export default Header;
