import React from 'react'
import Image from 'next/image';

const Personajes = ({personaje,button}) => {
  return (
    
          <div className='bg-gradient-to-r from-amber-500  via-red-600 rounded hover:border-3 hover:border-amber-300 to-amber-500  m-10 flex justify-center items-center  flex-col flex-wrap p-10 text-black' key={personaje.id} >
          <div className='text-center text-amber-200 mb-5'>
              <h2 className='text-xl font-black'>{personaje.name}</h2>
          </div>
          
        
               {personaje.image? (
      <Image
        src={personaje.image}
        alt={personaje.name}
        width={80}
        height={50}
      />
    ) : (
      <p>Sin imagen</p>
          )}

          <div className='text-center mt-5 flex flex-col md:flex-col flex-wrap justify-center items-center'>
              <p className='text-amber-100 te'>Especie: {personaje.race}</p>
                <p className='text-amber-100'>Genero: {personaje.gender}</p>
              <p className='text-amber-100'>Planeta de origen: {personaje.origin}</p> 
              <p className='text-amber-100'>Ki: {personaje.ki}</p> 
             <button>{button}</button>
      </div>
            </div>
        
       
  )
}

export default Personajes