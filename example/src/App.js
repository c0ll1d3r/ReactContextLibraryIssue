import { MyProvider } from 'mylib/dist/components'
import MyComponent from './MyComponent'

function App() {
  return (
    <MyProvider>
      <MyComponent />
    </MyProvider>
  );
}

export default App;
