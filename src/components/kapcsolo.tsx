import { useState } from "react"

const bulbOn = "public/pic_bulbon.gif";
const bulbOff = "public/pic_bulboff.gif";

function ReactKapcsolo() {
    const [kapcsolo, setKapcsolo] = useState(false);

    const kibe = () => {
        setKapcsolo(allapot => !allapot);
    }
    return (
        <div>
            <KepBetoltes kepUrl={kapcsolo ? bulbOn : bulbOff}/>
            <button onClick={kibe}>
                {kapcsolo ? "Bekapcsolva" : "Kikapcsolva"}
            </button>
        </div>
    )
}

type KepBetoltoProps = {
    kepUrl: string;
}
function KepBetoltes( {kepUrl}: KepBetoltoProps) {
    return <img src={kepUrl} alt="VillanyKörte" width={150}/>
}

export default ReactKapcsolo;