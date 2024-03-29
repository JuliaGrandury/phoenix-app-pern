import '../JobBoard/modal.css'
import { useDispatch } from 'react-redux'
import { deleteJob } from '../../redux/thunks/jobsThunks'

const DangerModal = (props) => {

    const { onClosePopUp, dangerObject } = props;
    const dispatch = useDispatch();

    const onConfirmDelete = () => {
        dispatch(deleteJob(dangerObject.toDelete));
        onClosePopUp();
    }

    return (
        <div className="modal-overlay">
            <div className="modal danger-popup">
                <h4>{dangerObject.header}</h4>
                <p>{dangerObject.message}</p>
                <button className="small-btn button-info" onClick={onClosePopUp}>Cancel</button>
                <button className="small-btn button-danger" onClick={onConfirmDelete}>Delete</button>
            </div>
        </div>
    )
}

export default DangerModal