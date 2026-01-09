import Link from "next/link"
import Planetas from "./Planetas"
async function obtener() {
    const res = await fetch(
      

    `https://dragonball-api.com/api/planets/`,
    { cache: "no-store" }
  )

  return res.json()
}

export default async function Page({ searchParams }) {
  const { page = 1 } = await searchParams
  const datos = await obtener(page)
console.log (datos);
  return (
    <div className="bg-gradient-to-r from--500  via-emerald-900 text-white flex flex-col justify-center items-center" >
      <div className="flex flex-row">
        <h1 className=" text-2xl font-black text-pretty  text-red-600">Planeta de Dragon Ball Z</h1>
       
  
      </div>
      
      <div className="flex flex-wrap justify-center p-10 ">
        {datos.items.map((planeta) => (
            <Planetas key={planeta.id} planeta={planeta}
            button={<Link href={`/Planeta/${planeta.id}`} className='text-yellow-300 underline mt-5'>Ver mas</Link>}/>
        ))}
      </div>

      
    </div>
  )
}
