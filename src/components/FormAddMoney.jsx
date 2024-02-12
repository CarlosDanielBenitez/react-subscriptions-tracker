import { useState } from "react";

const FormAddMoney = ({setCount, setIsValid}) => {
    const [input, setInput] = useState("")
    const [error, setError] = useState(false)

    const handlerForm = (e) => {
        e.preventDefault();
        if (input === "" || Number(input) < 0) {
            setError(true)
            return;
        }
        setError(false)
        setCount(Number(input));
        setIsValid(true)
    }
    return (
        <div className="form-add-money">
            <form onSubmit={handlerForm}>
                <p>Agregar Presupuesto</p>
                <input type="number" placeholder="300$" onChange={e => setInput(e.target.value)} />
                <input type="submit" value="Agregar" />
            </form>
            {error ? <p className="error">Presupuesto inválido</p> : null}

        </div>
    );
}

export default FormAddMoney;