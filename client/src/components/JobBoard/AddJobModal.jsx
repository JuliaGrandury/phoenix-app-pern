import './modal.css'
import { useState } from 'react'
import AddJobForm from './AddJobForm'


const AddJobModal = (props) => {

    const [formVisibility, setFormVisibility] = useState(false);

    const notAvailable = () => {
        alert('This feature is not available at the time');
    }

    // RECENTLY ADDED
    const { onCloseModal } = props;

    return (
        <div className="modal-overlay">
            <div className="modal">

                {/* HEADER AND CONSTANT MODAL ELEMENTS */}
                <span className="modal-close" onClick={onCloseModal}>&#10005;</span>
                <h3>Add Job Data</h3>
                <div className="button-container">
                    <button className='button-cta modal-btn' onClick={() => setFormVisibility(true)}>Add Job Manually</button>
                    <button className='button-cta modal-btn' onClick={notAvailable}>Automatically Populate from URL</button>
                    <button className='button-cta modal-btn' onClick={notAvailable}>Import CSV File</button>
                </div>

                {/* CHANGING MODAL ELEMENTS */}
                {/* {formVisibility ? <AddJobForm /> : <></>} */}
                {/* input field for link to webscrape along with fields that will populate to approve by user*/}
                {/* field to upload csv file and parse */}
            </div>
        </div>
    )
}

export default AddJobModal