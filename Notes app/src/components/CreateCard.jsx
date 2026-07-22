import React from 'react'
import { useState } from 'react'

function CreateCard({setNotes}) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
   
    const submitHandler = (e) =>{

        const newNote = {
            title, 
            description
        }

        setNotes(prev => [
            ...prev,
            {
                id: Date.now(),
                title,
                description,
            }
]);
        e.preventDefault()
        console.log('form submitted')

        setTitle('')
        setDescription('')
    }

    

    return (
        <div className='flex p-5 bg-amber-200'>
            <form className='flex flex-col gap-4 h-50 items-start'
                onSubmit={(e)=>{
                    submitHandler(e)
                }}>
                <h1></h1>
                <input type="text" placeholder='Enter Heading' className='outline-none border-2' value={title} onChange={(e)=>{
                    setTitle(e.target.value)
                }}/>
                <textarea placeholder='Enter Details outline-none' className='outline-none border-2' value={description} onChange={(e)=>{
                    setDescription(e.target.value)
                }}></textarea>
                <button>Add Note</button>
            </form>
                
            

        </div>
    )
}

export default CreateCard