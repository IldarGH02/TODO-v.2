import { ITodoItem } from "store/slices/todosSlice"
import TodoItem from "./components/intex"

interface IList {
    list: ITodoItem[]
}

const TodoList: React.FC<IList> = ({list}) => {
    return (
        <ul className="todo__list">
            {list.length > 0 && list.map((todo: ITodoItem) => {
                return <TodoItem
                    key={todo.id}
                    item={todo}
                />
            })}
        </ul>
    )
}

export default TodoList