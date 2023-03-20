import {useContext} from 'react'
import FormContext from '../context/Formcontext'

const useFormContext = () => {
  return useContext(FormContext)
}

export default useFormContext
