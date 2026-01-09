"use client";
import Image from "next/image"
import Link from "next/link";

const Planetas = ({planeta}) => {
    return (
    
        <div className='bg-gradient-to-r from-amber-500  via-red-600 rounded hover:border-3 hover:border-amber-300 to-amber-500  m-10 flex justify-center items-center  flex-col flex-wrap p-10 text-black' key={planeta.id} >
            <div className='text-center text-amber-200 mb-5'>
                <h2 className='text-xl font-black '>{planeta.name}</h2>
            </div>
              
            

            <Image
                src={planeta.image}
                alt={planeta.name}
                width={100}
                height={100}
            />
            <Link href={`/Planetas/${planeta.id}`} className='text-yellow-300 underline mt-5'>
                <button >Ver mas</button>
            </Link>
        </div>
        
    );                
};

export default Planetas;
