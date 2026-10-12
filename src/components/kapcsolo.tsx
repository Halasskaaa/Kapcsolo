import { useState } from "react"

function ReactKapcsolo() {
    const [kapcsolo, setKapcsolo] = useState(false);

    const kibe = () => {
        setKapcsolo(allapot => !allapot);
    }
    return (
        <div>
            <button onClick={kibe}>
                {kapcsolo ? "Bekapcsolva" : "Kikapcsolva"}
            </button>
        </div>
    )
}

export default ReactKapcsolo;