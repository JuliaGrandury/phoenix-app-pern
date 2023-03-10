import '../JobBoard/modal.css'
import { useDispatch } from 'react-redux'
import { deleteJob } from '../../redux/slices/job/jobsSlice'


const DangerModal = (props) => {

    const { onClosePopUp, toDelete } = props;
    const dispatch = useDispatch();

    const onConfirmDelete = () => {
        console.log(`Deleting job with id ${toDelete}`);
        // dispatch(deleteJob(id));
        onClosePopUp();
    }

    return (
        <div className="modal-overlay">
            <div className="modal danger-popup">
                <h4>Delete Job</h4>
                <p>Are you sure you want to permanently delete this job?</p>
                <button className="small-btn button-info" onClick={onClosePopUp}>Cancel</button>
                <button className="small-btn button-danger" onClick={onConfirmDelete}>Delete</button>
            </div>
        </div>
    )
}

export default DangerModal