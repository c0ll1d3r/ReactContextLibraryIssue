import React from 'react'
import { myContext } from '../contexts'
import { useMyContext } from '../hooks'

function MyProvider ({ children }) {
    const value = useMyContext()

    console.log('MyLib :: MyProvider :: value', value)

    return (
        <myContext.Provider value={value}>
            { children }
        </myContext.Provider>
    )
}

export default MyProvider