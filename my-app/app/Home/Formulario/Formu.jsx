"use client"
import React from 'react'
import { useState } from 'react'
const Formu = ({ obtener }) => {

    const [form, setForm] = useState({ personaje:"" })
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
      
        obtener(form)
        setForm({ personaje:"" })
    }
    return (
        <div className=' w-full m-2 p-2 rounded-lg flex flex-col items-center justify-center'>

          
                 <h3 className='text-amber-900 text-2xl font-bold'><b>Ingresa el nombre de una personaje</b> </h3>

            



            <form onSubmit={handleSubmit}>
                <input className='bg-amber-100 text-amber-100 rounded-b-sm p-1 border-2 border-black' type="text"required onChange={handleChange} name="personaje" value={form.personaje} placeholder='Ingresa una personaje'>
                </input>
               

                <input className='bg-blue-500 p-2 m-2 rounded-xl text-amber-50 hover:bg-blue-400' type="submit" ></input>

            </form>


        </div>
    )
}

export default Formu;