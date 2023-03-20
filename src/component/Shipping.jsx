import useFormContext from "../hooks/useFormContext"


const Shipping = () => {
    const {data,handleChange } = useFormContext()

    const content = (
        <>
        <label htmlFor="sameAsBilling">Same AssBilling</label>
        <input
            type='checkbox'
            id='sameAsBilling'
            name='sameAsBilling'
            checked={data.sameAsBilling}
            onChange={handleChange}
        />

        <div className="split-container">
            <div className="flex-col">
                <label htmlFor="shipFirstName">First Name:</label>
                <input
                type="text"
                id='shipFirstName'
                name='shipFirstName'
                placeholder="First Name"
                pattern="([A-Za-z])[\w+.]{1,}"
                onChange={handleChange}
                disabled={data.sameAsBilling} />
            </div>

            <div className="flex-col">
                <label htmlFor="shipFirstName">First Name:</label>
                <input
                type="text"
                id='shipFirstName'
                name='shipFirstName'
                placeholder="First Name"
                pattern="([A-Za-z])[\w+.]{1,}"
                onChange={handleChange}
                disabled={data.sameAsBilling} />
            </div>
            
        </div>
        </>
    )

  return (
    <div>
      Shipping
    </div>
  )
}

export default Shipping
