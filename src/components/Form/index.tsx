import { useState } from "react"
import { useAppDispatch } from "hooks/hooks"
import { addTodo } from "store/slices/todosSlice"
import ButtonUi from "ui/Button"
import InputUi from "ui/Input"

const Form = () => {
    const [value, setValue] = useState<string>('')
    const dispatch = useAppDispatch() 
    
    const handleClick = () => {
        if (value.length > 0) {
            dispatch(addTodo({
                name: value,
                completed: false,
                id: Date.now()
            }))
            setValue('')
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if(e.key === 'Enter') {
            e.preventDefault()
            e.stopPropagation()
            if (value.length > 0) {
                dispatch(addTodo({
                    name: value,
                    completed: false,
                    id: Date.now()
                }))
                setValue('')
            }
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.currentTarget.value
        setValue(target)
    }

    return (        
        <div className="todos__form">
            <InputUi 
                className="form__input" 
                onChange={handleChange} 
                placeholder="Введите название" 
                value={value} 
                onKeyDown={handleKeyDown}
            />
            <ButtonUi 
                className="form__button" 
                onClick={handleClick} 
                description="Добавить"
            />
        </div>        
    )
}

export default Form