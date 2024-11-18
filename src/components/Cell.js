import { useState } from "react";

function Cell (params) {
    const [guess, setGuess] = useState(false);
    const change_guess = () => {
        setGuess(!guess);
    }
    return(
        <button className={
            guess ? (params.set ? "cell_hit" : "cell_miss")
            : "cell_clear"
        }
            onClick={change_guess}></button>
    )
}

export default Cell;