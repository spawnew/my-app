"use client"
import { useState, useEffect } from "react"
import Formu from "./Formu"
import Personaje from "../../Personaje/Personajes"
import "./Resultado.css"
const Resultado = () => {
  const [personaje, setPersonaje] = useState("")
  const [filtro, setFiltro] = useState(null)
 const [cargando ,setCargando]=useState("false")
  const obtener = (form) => {
    setPersonaje(form.personaje)
  }
console.log(personaje)
  useEffect(() => {
    if (personaje === "") return
    
    async function obtenerFiltrado() {
      const res = await fetch(
        `https://dragonball-api.com/api/characters?name=${personaje}`
      )
      const data = await res.json()
        setFiltro(data)
         setCargando("true")
    }

      obtenerFiltrado()
     
  }, [personaje])
    
console.log(filtro)
  return (
      <div className="fondo">
     
      
      <h2 className="text-amber-500  font-extrabold  text-4 text-5xl  [-webkit-text-stroke:2px_black]">Bienvenidos al buscador de DBZ</h2>
          
      <Formu obtener={obtener} />
{!cargando && <p className="text-amber-100">Cargando...</p>}
          {(filtro !=null&&cargando ) ? (
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