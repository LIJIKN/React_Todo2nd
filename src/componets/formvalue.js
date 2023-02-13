import React, { useState } from 'react'

function useForm(inputs) {
    var [values,setvalues] = useState(inputs)
  return [ values, (e) => {
    setvalues({
        ...values,
        [e.target.name]: e.target.value
    })
    }]
    
}

export default useForm
