import './modal.css'
import { useState } from 'react'
import AddJobForm from './AddJobForm'
import ImportFile from './ImportFile'
import LinkScraper from './LinkScraper'

import { FiEdit3 } from 'react-icons/fi'
import { BsLink } from 'react-icons/bs'
import { FaFileCsv } from 'react-icons/fa'

const AddJobModal = (props) => {

    const { onCloseModal } = props;
    const [activeTab, setActiveTab] = useState("form");

    const titleMap = {
        form: ['Add Manually', <FiEdit3 />],
        scraper: ['Populate from URL', <BsLink />],
        importer: ['Import from CSV File', <FaFileCsv />]
    }

    return (
        <div className="modal-overlay">

            <div className="tab-container">
                <div className={activeTab === "form" ? "active modal-tab" : "modal-tab"} onClick={() => setActiveTab('form')}>
                    <div className='modal-tab__overline'></div>
                    <p className='modal-tab__text'>Add Manually</p>
                </div>
                <div className={activeTab === "scraper" ? "active modal-tab" : "modal-tab"} onClick={() => setActiveTab('scraper')}>
                    <div className='modal-tab__overline'></div>
                    <p className='modal-tab__text'>Populate from URL</p>
                </div>
                <div className={activeTab === "importer" ? "active modal-tab" : "modal-tab"} onClick={() => setActiveTab('importer')}>
                    <div className='modal-tab__overline'></div>
                    <p className='modal-tab__text'>Import from CSV</p>
                </div>
            </div>

            <div className="modal">
                {/* HEADER AND CONSTANT MODAL ELEMENTS */}
                <span className="modal-close" onClick={onCloseModal}>&#10005;</span>
                {window.innerWidth <= 480 ? <h3>{titleMap[activeTab][1]}</h3> : <h3>{titleMap[activeTab][0]}</h3>}

                {/* CHANGING MODAL ELEMENTS */}
                <div className="action-container">
                    {activeTab === 'form' ? <AddJobForm /> : <></>}
                    {activeTab === 'scraper' ? <LinkScraper /> : <></>}
                    {activeTab === 'importer' ? <ImportFile /> : <></>}
                </div>
            </div>
        </div>

    )
}

export default AddJobModal