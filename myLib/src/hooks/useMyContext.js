import { useState } from 'react'

function useMyContext () {
    const [state, setState] = useState('INITIAL VALUE')

    const doSomething = () => {
        setState(Math.random())
    }

    return {
        random: state,
        doSomething
    }
}

export default useMyContext