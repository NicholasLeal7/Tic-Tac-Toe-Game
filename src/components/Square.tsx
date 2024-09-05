import { useState } from 'react'

type Props = {
    value: string,
    onSquareClick: () => void
};
export const Square = (props: Props) => {
    const [value, setValue] = useState('');

    return (
        <div className="box" onClick={props.onSquareClick}>{props.value}</div>
    );
};