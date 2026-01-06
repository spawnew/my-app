import React from 'react'
import Image from 'next/image';
const Personajes = ({personaje}) => {
  return (
    
          <div className='bg-blue-950 m-10 flex justify-center items-center  flex-col flex-wrap p-10 text-black' key={personaje.id} >
          <div className='text-center text-amber-100'>
              <h2>{personaje.name}</h2>
          </div>
          
          <div className='' >
               {personaje.image? (
      <Image
        src={personaje.image}
        alt={personaje.name}
        width={100}
        height={50}
      />
    ) : (
      <p>Sin imagen</p>
          )}
</div>
          <div className='text-center mt-5'>
              <p className='text-amber-100'>Especie: {personaje.race}</p>
                <p className='text-amber-100'>Genero: {personaje.gender}</p>
              <p className='text-amber-100'>Planeta de origen: {personaje.origin}</p> 
               <p className='text-amber-100'>Ki: {personaje.ki}</p> 
      </div>
            </div>
        
       
  )
}

export default Personajes