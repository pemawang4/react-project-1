import React, { useCallback, useEffect, useState } from 'react'
import { getLocations, isNameValid } from '../mock-api/apis'

function Form({ addPerson }) {
    const [name, setName] = useState("")
    const [error, setError] = useState(false)

    const [location, setLocation] = useState("")

    const [locationList, setLocationList] = useState([""])

    const handleLocationSelect = (e) => {
        setLocation(e.target.value)
    }

    const handleSave = async () => {
        const nameError = await isNameValid(name);
        if(!nameError) {
            setError(true);
            return;
        } else {
            addPerson(
                name, 
                location
            )
        }
    }

    const resetForm = () => {
        setName("")
        setLocation("")
        setError(false)
    }

    const initLocation = useCallback(async () => {
        const location = await getLocations()
        setLocationList(location)
    }, [getLocations])
    
    useEffect(() => {
        initLocation()
     }, [initLocation])
    const locations =  getLocations()
    
  return (
    <>
        <div className="row g-3 align-items-center mb-3">
            <div className="col-auto">
                <label for="inputPassword6" className="col-form-label">Name</label>
            </div>
            <div className="col-auto">
                <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="inputPassword6" 
                    className="form-control" 
                    aria-describedby="passwordHelpInline" />
            </div>
            {error && <em className='text-danger'>this name has already been taken</em>}
        </div>

        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label for="inputPassword6" className="col-form-label">Location</label>
            </div>
            <div className="col-auto">
                <select
                    className="form-select"
                    value={location}
                    onChange={handleLocationSelect}
                    id="floatingSelectDisabled"
                    aria-label="Floating label disabled select example"
                >
                    <option value="">Select an  Option!</option>
                    {
                        locationList?.map(l => {
                            return (
                                <option 
                                    key={l} 
                                    placeholder='Select Location'
                                    selected={l === location}
                                    value={l}
                                >
                                    {l}
                                </option>
                            )
                        })
                    }
                </select>
            </div>
        </div>

        <div className="d-flex flex-row-reverse my-3">
            <button 
                type="button"
                onClick={handleSave} 
                className='btn btn-success mx-3'
            >
                Save
            </button>

            <button 
                type="button"
                onClick={resetForm} 
                className='btn btn-danger'
            >
                Clear
            </button>
        </div>
    </>
  )

}

export default Form