import React from 'react'
import Image from 'next/image'; 
import Personajes from '../Personajes';
async function obtener(id) {
    const res = await fetch(`https://dragonball-api.com/api/characters/${id}`, { cache: "no-store" })
    const products = await res.json()

    return (
        products
    )
}



async function detallePersonaje({params})  {
const { id } = await params;
    const personaje = await obtener(id);
    console.log(id);
    console.log(personaje);


  return (
    <div className=' m-10 flex justify-center items-center  flex-col flex-wrap p-10 text-black   ' key={personaje.id} >
          <div>
              <h2 className='text-amber-100 font-extrabold text-2xl'>Transformaciones:</h2>
          </div>
         
          <div className='text-center text-amber-100 flex flex-row flex-wrap'>
    <Personajes personaje={personaje} />
         
          

          {personaje.transformations.map((transformation) => {
              return (
                  
                  <div key={transformation.id} >
                      
                      <Personajes personaje={transformation} />
      
                    </div>
    

              )
          })}
          </div>
          </div>
  ) 
          
}

export default detallePersonaje