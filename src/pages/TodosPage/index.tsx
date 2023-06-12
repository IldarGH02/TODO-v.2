import TodoList from "components/TodoList"
import { useAppSelector } from "hooks/hooks"

import { routeMain } from "./routes"
import Form from "components/Form"

const TodosPage = () => {
    const todos = useAppSelector(state => state.todos.todos)

    return (
        <section className="todos">
            <div className="container">
                <div className="todos__content">
                    <Form/>
                    {todos.length > 0 && <TodoList list={todos}/>}
                </div>
            </div>
        </section>
    )
}

export {routeMain}

export default TodosPage 