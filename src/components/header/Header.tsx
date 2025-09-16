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
                            Подменю 1
                        </NavLink>
                        <NavLink to="/menu2" className="page__dropdown-link" role="menuitem">
                            Подменю 2
                        </NavLink>
                        <NavLink to="/menu3" className="page__dropdown-link" role="menuitem">
                            Подменю 3
                        </NavLink>
                    </div>
                </div>

                <NavLink to="/contacts" className="page__link">Контакты</NavLink>
            </nav>
        </header>
    );
}

export default Header;
