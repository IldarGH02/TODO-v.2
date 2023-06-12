import { useAppDispatch } from "hooks/hooks"
import { ITodoItem, removeTodo, toggleCompleted } from "store/slices/todosSlice"
import ButtonUi from "ui/Button"

interface IItem {
    item: ITodoItem
}

const TodoItem: React.FC<IItem> = ({item}) => {
    const dispatch = useAppDispatch()

    const deleteTodo = () => {
        dispatch(removeTodo(item.id))
    }

    const toggleTodoComleted = () => {
        dispatch(toggleCompleted(item))
    }

    return (
        <li className="todo__item">
            <div className="item__content">
                <input type="checkbox" onChange={toggleTodoComleted} checked={item.completed} className="item__ckeckbox"/>
                <h3 className={item.completed === true ? "completed item__name" : 'item__name'}>{item.name}</h3>
                <ButtonUi 
                    className="item__delete" 
                    onClick={deleteTodo} 
                    description="Удалить"                
                />
            </div>
        </li>
    )
}

export default TodoItem