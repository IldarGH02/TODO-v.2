export interface IPropsButton { 
    className: string | undefined,
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined,
    description: string | null
}

export interface IPropsInput {
    className: string | undefined,
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined,
    placeholder: string,
    value: string,
    onKeyDown: React.KeyboardEventHandler<HTMLInputElement>
}
