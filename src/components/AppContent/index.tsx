import Layout from "pages/Layout"
import TodosPage, { routeMain as routeTodosPage } from "pages/TodosPage"
import AboutPage, { routeMain as routeAboutPage } from "pages/AboutPage"
import { Suspense } from "react"

import { Routes, Route } from "react-router-dom"

const AppContent = () => {
    return (
        <div className="mainWrapper">
            <Suspense fallback={''}>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path={routeTodosPage()} element={<TodosPage/>}/>
                        <Route path={routeAboutPage()} element={<AboutPage/>}/>
                    </Route>
                </Routes>
            </Suspense>
        </div>
    )
}

export default AppContent