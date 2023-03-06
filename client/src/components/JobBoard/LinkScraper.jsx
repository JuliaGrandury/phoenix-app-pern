import { useState } from 'react'
import validator from 'validator'


const LinkScraper = () => {
    const [errorMessage, setErrorMessage] = useState('')


    // HELPER FUNCTION TO VALIDATE URLS
    const validate = (value) => {
        if (validator.isURL(value)) {
            setErrorMessage('Is Valid URL')
        } else {
            setErrorMessage('Is Not Valid URL')
        }
    }

    // Otta Jobs "otta.com/jobs"
    // Linkedin Jobs "linkedin.com/jobs"

    return (
        <div>
            <h3>Enter URL: </h3><input type="text"
                onChange={(e) => validate(e.target.value)}></input>
            <span style={{
                fontWeight: 'bold',
                color: 'red',
            }}>{errorMessage}</span>
        </div>
    )
}

export default LinkScraper