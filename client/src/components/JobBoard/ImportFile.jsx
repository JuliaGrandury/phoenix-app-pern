import { useRef, useState } from 'react'

const ImportFile = () => {

    const [file, setFile] = useState();
    const fileReader = new FileReader();

    const handleOnChange = e => {
        setFile(e.target.files[0])
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        if (file) {
            fileReader.onload = function (event) {
                const csvOutput = event.target.result;
            };
            fileReader.readAsText(file);
            console.log(file);
        }
    }

    return (
        <form className="importer-container">
            <input type={"file"} accept={".csv"} id={"csvFileInput"} onChange={handleOnChange} />
            {/* <button className='small-btn button-cta' onClick={() => fileInput.current.click()}>Choose File</button> */}
            <button className='small-btn button-cta' onClick={(e) => { handleOnSubmit(e) }}>Submit CSV</button>
        </form>
    )
}

export default ImportFile