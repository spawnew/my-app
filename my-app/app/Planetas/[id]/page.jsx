import React from 'react'

async function obtener(id) {
  const res = await fetch(
    `https://dragonball-api.com/api/planets/${id}`,
    { cache: "no-store" }
  );

  return res.json();
}

async function DetallePlaneta({ params }) {
  const { id } = await params;
  const planeta = await obtener(id);

  return (
    <div
       className="min-h-screen w-full bg-cover bg-center"
          style={{
              backgroundImage: `url(${planeta.image})`,
              backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          }}
    >
      <div className=" min-h-screen h-full w-full bg-black/70 flex flex-col items-center px-6 py-16 text-center overflow-y-auto">
        
        <h2 className="text-amber-100 font-extrabold text-4xl mb-6">
          {planeta.name}
        </h2>

        <p className=" flex flex-wrap text-amber-100 max-w-2xl mb-10">
          {planeta.description}
        </p>

              <div className="flex flex-col flex-wrap justify-center gap-3 max-w-4xl">
                  <h2 className='text-2xl font-extrabold text-amber-100'>Habitantes </h2>
          {planeta.characters?.map((character) => (
            <div
              key={character.id}
              className="text-amber-100 bg-black/40 px-4 py-1 rounded-full text-sm whitespace-normal text-center"
            >
              {character.name}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default DetallePlaneta;
