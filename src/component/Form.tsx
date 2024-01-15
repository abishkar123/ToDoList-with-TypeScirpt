import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

export const Form = () => {
    const [ data, setData] = useState({})
    const handleonChange = (e:any)=>{
        const {value, name } = e.target;

        setData({
            ...data,
            [name]:value
        })

    }
    const handleOnSubmit = (e:any) =>{
        e.preventDefault()
        console.log(data)
    }
   
  return (
    <div>
        <form onSubmit={handleOnSubmit}>
            <div className='row mt-3 g-2'>
                <div className='col-md-9'>
                    <input
                    name="tast"
                    type="text"
                    className='form-control'
                    placeholder='Enter The Tasks'
                    onChange={handleonChange}
                    required />

                </div>
                <div className='col-md-2'>
                    <div className='d-grid'>
                    <Button variant="primary" type='submit'>Add The Task</Button>

                    </div>
                </div>
              

            </div>

        </form>
    </div>
  )
}
