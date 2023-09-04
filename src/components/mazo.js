

const Mazo = () => {

    const mazoCartas = []
    let barajado = []
    const tipos = ["corazon", "diamante", "trebol", "pic"]
    const colores = {
        corazon: "rojo",
        diamante: "rojo",
        trebol: "negro",
        pic: "negro"
    }
    const crearMazo = () => {
        for (let i = 1; i <= 13; i++) {
            for (let j = 0; j < tipos.length; j++) {
                const carta = {
                    numero: i,
                    color: colores[tipos[j]],
                    tipo: tipos[j]
                }
                mazoCartas.push(carta)
            }

        }
    }

    const barajarMazo = () => {
       barajado = mazoCartas.map(carta => ({ carta, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ carta }) => carta)

    }

     crearMazo()
     barajarMazo()

    console.log(mazoCartas)
    console.log(barajado)
    return (
        <>sg</>
    )
}

export default Mazo;