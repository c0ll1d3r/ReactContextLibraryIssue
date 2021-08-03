
import { useContext, useEffect } from 'react';
//import { myContext } from 'mylib/dist/components'
import { myContext } from 'mylib/dist/contexts'

function MyComponent () {
    const { random, doSomething } = useContext(myContext)

    console.log('example :: MyComponent :: random', random)

    useEffect(() => {
        console.log('example :: MyComponent :: useEffect :: doSomething', doSomething)
        doSomething()
    }, [doSomething])

    return (
        <span>{ random }</span>
    )
}

export default MyComponent;
