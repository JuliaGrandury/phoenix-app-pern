import styles from './spinner.module.css'

const Spinner = () => {
    return (
        <div className={styles.loadingSpinnerContainer}>
            <div className={styles.loadingSpinner}></div>
        </div>
    )
}

export default Spinner