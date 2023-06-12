import { IPropsInput } from "types"

const InputUi = (props: IPropsInput) => {
    return (
        <input 
            className={props.className}
            onChange={props.onChange} 
            placeholder={props.placeholder} 
            value={props.value}
            onKeyDown={props.onKeyDown}
        />
    )
}

export default InputUi