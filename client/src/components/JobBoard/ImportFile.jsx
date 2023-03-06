
const ImportFile = () => {

    const inputStyles = {
        borderRadius: '8px',
        fontFamily: 'Inter, sans-serif',
    }

    const buttonStyles = {
        
    }

    return (
        <form>
            <input style={inputStyles} type={"file"} accept={".csv"} />
            <button style={buttonStyles} className="small-btn button-cta">Import CSV</button>
        </form>
    )
}

export default ImportFile