import { useState } from 'react'
import validator from 'validator'
import AddJobForm from './AddJobForm'

const LinkScraper = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const [isError, setIsError] = useState(false)

    // HELPER FUNCTION TO VALIDATE URLS
    const validate = (value) => {
        if (validator.isURL(value)) {
            setErrorMessage('THANK YOU! This is a Valid URL')
            setIsError(false)
        } else {
            setErrorMessage('WARNING! This is Not a Valid URL')
            setIsError(true)
        }
    }

    // Otta Jobs "otta.com/jobs"
    // Linkedin Jobs "linkedin.com/jobs"

    return (
        <div className='scraper-container'>
            <div className='scraper-content'>
                <div className='scraper-actions'>
                    <input type="text" placeholder="Enter Job Post URL" onChange={(e) => validate(e.target.value)}></input>
                    <button className='small-btn button-cta'>Automatically Populate</button>
                </div>
                <span className={isError ? 'error' : 'okay'}>{errorMessage}</span>
            </div>
            <AddJobForm className="remove-blue"/>
        </div>
    )
}

export default LinkScraper