import React from 'react'
import Image from 'next/image';
import Personajes from './Personajes';
async function obtener() {
  const res = await fetch(
    "https://dragonball-api.com/api/characters"
   
  );
  return res.json();
}






async function page() {
    const datos = await obtener();
    console.log(datos);

  return (
      <div>
          

        <h1>Personajes de Los dbz</h1>
        <div className="flex flex-row flex-wrap justify-center p-10 bg-amber-900">
          {datos.items.map((personaje) => (
            <Personajes key={personaje.id} personaje={personaje} />
          ))}
        </div>
    </div>
  )
}

export default page