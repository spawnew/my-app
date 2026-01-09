"use client"
import { useState, useEffect } from "react"
import Formu from "./Formu"
import Personaje from "../../Personaje/Personajes"

const Resultado = () => {
  const [personaje, setPersonaje] = useState("")
  const [filtro, setFiltro] = useState(null)

  const obtener = (form) => {
    setPersonaje(form.personaje)
  }
console.log(personaje)
  useEffect(() => {
    if (personaje === "") return

    async function obtenerFiltrado() {
      const res = await fetch(
        `https://dragonball-api.com/api/characters?name=${personaje}||race=${personaje}`
      )
      const data = await res.json()
      setFiltro(data)
    }

    obtenerFiltrado()
  }, [personaje])
console.log(filtro)
  return (
    <div>
      <Formu obtener={obtener} />

          {(filtro !=null ) ? (
              filtro.map((fil)=>{
              return(
                  <div key={fil.id}>
                      <Personaje
                      personaje={fil}></Personaje>
          </div>
              )
              })
            )
              : <p>no existe</p>}
    </div>
  )
}

export default Resultado