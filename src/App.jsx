import './App.css'
import Form from './component/Form'
import { FormProvider } from './context/Formcontext'


function App() {

  return (
    <div className="App">
      <FormProvider>
        <Form/>
      </FormProvider>
    </div>
  )
}

export default App
