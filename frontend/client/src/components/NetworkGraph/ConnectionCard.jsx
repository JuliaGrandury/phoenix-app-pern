import styles from './NetworkGraph.module.css'
import StatusDot from '../Shared/StatusDot'
import Tag from '../Shared/Tag'

const ConnectionCard = () => {

    // DELETE LATER
    const connection = {
        name: "Liam Jolley",
        title: "Software Engineer",
        company: "X the Moonshot Factory",
        origin: 'LinkedIn',
        status: "Active",
        contactDates: ['Sep 8', 'Oct 3', 'Oct 19'],
        contactInfo: { phone: '+1 917 564 7645', email: 'liamjoll@gmail.com', linkedin: 'google.com' },
        offers: ['Industry Advice', 'Referral to Connection', 'Mock Interview'],
        secondaryConnections: ['Julia Lawrence', 'Melody Gibson'],
        homework: ['Schedule Mock Interview', 'Send Resume', 'Finish Zoo Problem Design']
    }
    const statusInfo = {
        label: 'inactive',
        date: '03/09/2022',
    }

    return (
        <div className={styles.CardContainer}>

            <div className={styles.CardHeader}>
                <h2>{connection.name}</h2>
                <StatusDot statusInfo={statusInfo} />
                {/* <h3 className={styles.OriginDiv}>Connected Through {connection.origin}</h3> */}
            </div>
            <h4>{connection.title}</h4>
            <h4>@ {connection.company}</h4>

            <div className={styles.CardSection}>
                {/* Think of linking each date to note document */}
                <h4>Past Meetings</h4>
                <ul>
                    {connection.contactDates.map((date) => <li>{date}</li>)}
                </ul>
            </div>
            <div className={styles.CardSection}>
                <h4>Contact Information</h4>
                <ul>
                    <li>{connection.contactInfo['phone']}</li>
                    <li>{connection.contactInfo['email']}</li>
                    <li>{connection.contactInfo['linkedin']}</li>
                </ul>
            </div>
            <div className={styles.CardSection}>
                <h4>Homework</h4>
                <ul>
                    {connection.homework.map((item) => <li>{item}</li>)}
                </ul>
            </div>
            <div className={styles.CardSection}>
                <h4>Offered Services</h4>
                <div className={styles.TagContainer}>
                    {connection.offers.map((offer) => <Tag label={offer}/>)}
                </div>
            </div>

        </div>
    )
}

export default ConnectionCard