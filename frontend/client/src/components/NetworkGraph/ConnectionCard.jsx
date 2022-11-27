import styles from './NetworkGraph.module.css'

const ConnectionCard = () => {
    const connection = {
        name: "Liam Jolley",
        title: "Software Engineer",
        company: "X the Moonshot Factory",
        origin: 'LinkedIn',
        status: "Active",
        contactDates: ['Sep 8', 'Oct 3', 'Oct 19'],
        contactInfo: { phone: '917 564 7645', email: 'liamjoll@gmail.com', linkedin: 'google.com' },
        offers: ['Industry Advice', 'Referral to Connection', 'Mock Interview'],
        secondaryConnections: ['Julia Lawrence', 'Melody Gibson'],
        homework: ['Schedule Mock Interview', 'Send Resume', 'Finish Zoo Problem Design']
    }

    return (
        <div>
            <h2>{connection.name}</h2>
            <div className={styles.StatusCircle}></div>
            <h3>{connection.title} @ {connection.company}</h3>
            <h4>Connected Through: {connection.origin}</h4>
            <div className={styles.LeftDiv}>
                {/* Think of linking each date to note document */}
                <h4>Past Meetings</h4>
                {connection.contactDates.map((date) => <li>{date}</li>)}
            </div>
            <div className={styles.RightDiv}>
                <h4>Offered Services</h4>
            </div>
            <div className={styles.RightDiv}>
                <h4>Contact Information</h4>
                <ul>
                    <li>{connection.contactInfo['phone']}</li>
                    <li>{connection.contactInfo['email']}</li>
                    <li>{connection.contactInfo['linkedin']}</li>
                </ul>
            </div>
            <div>
                <h3>Offered Services</h3>
                <ul>
                    {connection.offers.map((offer) => <li>{offer}</li>)}
                </ul>
                {/* TAGS */}
                {/* Resume Review */}
                {/* Code Review */}
                {/* Mock Interview */}
                {/* Referral to Company */}
                {/* Referral to Connection */}
                {/* Industry Advice */}
            </div>

        </div>
    )
}

export default ConnectionCard