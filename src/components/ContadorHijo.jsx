import React, { memo } from 'react'

const ContadorHijo = () => {
    console.log("Hijo Contador se renderiza")
    return (
        <div style={{ border: "thin solid #FFF", margin: "1rem", padding: "1rem" }}>
            <h2>Hijo del Contador</h2>
        </div>
    )
}

export default memo(ContadorHijo)