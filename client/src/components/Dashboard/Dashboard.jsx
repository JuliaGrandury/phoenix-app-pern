import { FaUserCircle } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'
import { RiCloseFill } from 'react-icons/ri'
import KanbanBoard from '../KanbanBoard'
import ProgressCircle from '../ProgressCircle'
import StatisticsCard from './StatisticsCard'
import './dashboard.css'

const Home = () => {

    const applicationStats = {

    }

    const networkStats = {
        
    }

    return (
        <div className="dashboard-container">

            <div className="statistics-overview">
                <div className="statistics-card">
                    <StatisticsCard />
                </div>
                <div className="statistics-card">
                    <StatisticsCard />
                </div>
            </div>

            <div className="kanban-container">
                <div>Kanban Board</div>
            </div>

            <div class="extra-cards">
                <div class="card">Calendar Integration</div>

                <div class="card">
                    <h3>Current Courses</h3>
                    <table className="extra-table">
                        <tbody>
                            <tr>
                                <td className="extra-pg-circle">[PG Circle Here]</td>
                                <td className="extra-name"><a href="https://google.com" target="_blank">Design Databases with PostgresSQL</a></td>
                                <td className="extra-author">Codecademy</td>
                                <td className="extra-date">Started on Aug 9, 2022</td>
                            </tr>
                            <tr>
                                <td className="extra-pg-circle">[PG Circle Here]</td>
                                <td className="extra-name"><a href="https://google.com" target="_blank">Full Stack Engineer Career Path</a></td>
                                <td className="extra-author">Codecademy</td>
                                <td className="extra-date">Started on Dec 3, 2022</td>
                            </tr>
                            <tr>
                                <td className="extra-pg-circle">[PG Circle Here]</td>
                                <td className="extra-name"><a href="https://google.com" target="_blank">Deep Learning Specialization</a></td>
                                <td className="extra-author">Coursera</td>
                                <td className="extra-date">Started on Jan 15, 2023</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="card">
                    <h3>Current Projects</h3>
                    <table className="extra-table">
                        <tbody>
                            <tr>
                                <td className="extra-pg-circle">[PG Circle Here]</td>
                                <td className="extra-name"><a href="https://google.com" target="_blank">Website for Little Zelda Cafe</a></td>
                                <td className="extra-author">Little Zelda</td>
                                <td className="extra-date">Started on Aug 9, 2022</td>
                            </tr>
                            <tr>
                                <td className="extra-pg-circle">[PG Circle Here]</td>
                                <td className="extra-name"><a href="https://google.com" target="_blank">Justice Through Code Program App</a></td>
                                <td className="extra-author">Columbia University</td>
                                <td className="extra-date">Started on Dec 3, 2022</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Home