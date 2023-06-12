import { NavLink } from "react-router-dom"

import { routeMain as routeTodosPage } from "pages/TodosPage"
import { routeMain as routeAboutPage } from "pages/AboutPage"

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <h2 className="header__title">TO<span>DO</span></h2>
                    <nav className="header__nav nav">
                        <NavLink to={routeTodosPage()} className="header__link">Список задач</NavLink>
                        <NavLink to={routeAboutPage()} className="header__link">Обо мне</NavLink>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header