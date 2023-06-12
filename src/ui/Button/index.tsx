import { IPropsButton } from "types";

const ButtonUi = (props: IPropsButton) => {
    return (
        <button className={props.className} onClick={props.onClick}>{props.description}</button>
    )
}

export default ButtonUi