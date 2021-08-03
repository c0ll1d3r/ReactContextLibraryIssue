import { createContext } from 'react'

const initialValue = {
    random: 'NOT SET',
    doSomething: () => {
        console.log('MyLib/contexts :: myContext :: doSomething', 'I\m the initial function')
    }
}

const myContext = createContext(initialValue)

export default myContext