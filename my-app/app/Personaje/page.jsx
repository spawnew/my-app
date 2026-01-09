import Link from "next/link"
import Personajes from "./Personajes"
import Image from "next/image"
async function obtener(page) {
  const res = await fetch(
    `https://dragonball-api.com/api/characters?page=${page}`,
    { cache: "no-store" }
  )

  return res.json()
}

export default async function Page({ searchParams }) {
  const { page = 1 } = await searchParams
  const datos = await obtener(page)

  return (
    <div className="bg-gradient-to-r from--500  via-emerald-900 text-white flex flex-col justify-center items-center" >
      <div className="flex flex-row">
        <h1 className=" text-2xl font-black text-pretty  text-red-600">Personajes de Dragon Ball Z</h1>
       <img className="rounded-4xl border-2 border-red-600 ml-5"
            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjWbk-rDDiyXtJC5SpywZ-XHgGpAnz_xst5g&s"}
          alt="Dragon Ball Z"
        width={50}
          height={30}>
          
      </img>
    
  
      </div>
      
      <div className="flex flex-wrap justify-center p-10 ">
        {datos.items.map((personaje) => (
            <Personajes key={personaje.id} personaje={personaje}
            button={<Link href={`/Personaje/${personaje.id}`} className='text-yellow-300 underline mt-5'>Ver mas</Link>}/>
        ))}
      </div>

      <div className="flex gap-4 pl-3 ml-3 justify-around">
              {page >= 0 && page < 6 ? (
          <div className="text-2xl  flex flex-row ">
            
          <Link href={`?page=${Number(page) - 1}`}><p className="pr-5 text-amber-100">Anterior</p>    </Link>
            
            <p className="text-amber-300">{page }</p>
              <Link href={`?page=${Number(page) + 1}`}><p className="pl-5 text-amber-100">Siguiente</p></Link>
              </div>
                
              ) :
                  <Link href={`?page=${Number(page) - 1}`}>Anterior</Link>
                  }    
      </div>
    </div>
  )
}
