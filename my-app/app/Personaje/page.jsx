import Link from "next/link"
import Personajes from "./Personajes"

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
    <div>
      <h1>Personajes de Dragon Ball</h1>

      <div className="flex flex-wrap justify-center p-10 bg-black">
        {datos.items.map((personaje) => (
          <Personajes key={personaje.id} personaje={personaje} />
        ))}
      </div>

      <div className="flex gap-4 justify-center">
              {page > 1 && page < 6 ? (
                  <div>
          <Link href={`?page=${Number(page) - 1}`}>Anterior</Link>
       
        <Link href={`?page=${Number(page) + 1}`}>Siguiente</Link>
                 </div>
              ) :
                  <Link href={`?page=${Number(page) - 1}`}>Anterior</Link>
                  }    
      </div>
    </div>
  )
}
