import '../JobBoard/modal.css'

const DangerModal = (props) => {

    const { onClosePopUp } = props;

    const onConfirmDelete = () => {
        alert(`Deletion of item ... is confirmed.`)
    }

    return (
        <div className="modal-overlay">
            <div className="modal danger-popup">
                <h4>Delete Job</h4>
                <p>Are you sure you want to permanently delete this job? [Insert Job Info Here]</p>
                <button className="small-btn button-info" onClick={onClosePopUp}>Cancel</button>
                <button className="small-btn button-danger" onClick={onConfirmDelete}>Delete</button>
            </div>
        </div>
    )
}

export default DangerModal