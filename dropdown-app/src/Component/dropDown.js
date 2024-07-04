import React, { useEffect, useState } from "react";
import Dropdownapi from "../Api/dropdownApi";

const Dropdown = () => {
    const [selectEmail, setSelectEmail] = useState("")
    const [selectName, setSelectName] = useState("")
    const [selectuserName, setSelectuserName] = useState("")
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    const [options, setOptions] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {

                const data = await Dropdownapi();
                setOptions(data)
                setLoading(false);
            }
            catch (err) {
                setError("error")
            }
        }
        fetchData();
    }, [])

    const handleEmail = (event) => {
        setSelectEmail(event.target.value);
    }

    const handleName = (event) => {
        setSelectName(event.target.value)
    }

    const handleuserName = (event) => {
        setSelectuserName(event.target.value)
    }
    return (
        <div className="dropdown-container">
            <div className="dropdown-item">
                <label htmlFor="name-select">Select Name:</label>
                <select id="name-select" value={selectName} onChange={handleName}>
                    <option value="">select..</option>
                    {
                        options.map((option) => (

                            <option key={option.id} value={option.name}>
                                {option.name}
                            </option>

                        ))
                    }
                </select>
            </div>
            <div className="dropdown-item">
                <label htmlFor="userName-select">Select userName:</label>
                <select id="userName-select" value={selectuserName} onChange={handleuserName}>
                    <option value="">select..</option>
                    {
                        options.map((option) => (

                            <option key={option.id} value={option.username}>
                                {option.username}
                            </option>

                        ))
                    }
                </select>
            </div>
            <div className="dropdown-item">
                <label htmlFor="email-select">Select Email:</label>
                <select id="email-select" value={selectEmail} onChange={handleEmail}>
                    <option value="">select..</option>
                    {
                        options.map((option) => (

                            <option key={option.id} value={option.email}>
                                {option.email}
                            </option>

                        ))
                    }
                </select>
            </div>

        </div>
    )
}
export default Dropdown;