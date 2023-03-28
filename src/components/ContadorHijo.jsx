import React, { memo } from 'react'

const ContadorHijo = ({contador,sumar,restar}) => {
    console.log("Hijo Contador se renderiza")
    return (
        <div style={{ border: "thin solid #FFF", margin: "1rem", padding: "1rem" }}>
            <h2>Hijo del Contador</h2>
            <h3>{contador}</h3>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
        </div>
    )
}

export default memo(ContadorHijo)