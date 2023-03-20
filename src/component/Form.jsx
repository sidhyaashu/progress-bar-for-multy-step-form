import useFormContext from '../hooks/useFormContext'
import FormInput from './FormInput'


const Form = () => {
    const {
        page,
        setPage,
        data,
        title,
        canSubmit,
        disableNext,
        disablePrev,
        prevHide,
        nextHide,
        submitHide

    } = useFormContext()

    const handlePrev = () => setPage(prev=>prev - 1)
    const handleNext = () => setPage(prev=>prev + 1)

    const handleSubmit = e=>{
        e.preventDefault()
        console.log(JSON.stringify(data))
    }

    
    const content =(
        <form onSubmit={handleSubmit} >
            <header>
                <h2>{title[page]}</h2>

                <div className="button-container">
                    <button className={`button ${prevHide}`} disabled={disablePrev} type='button' onClick={handlePrev} > &glt;&glt; Prev</button>
                    <button className={`button ${nextHide}`} disabled={disableNext} type='button' onClick={handleNext} >Next &git;&git;</button>
                    <button className={`button ${submitHide}`} type='submit' disabled={!canSubmit} >Submit</button>
                </div>
            </header>

            <FormInput/>

        </form>
    )

  return content
}

export default Form
