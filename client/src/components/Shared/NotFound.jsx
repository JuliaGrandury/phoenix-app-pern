import { NavLink } from 'react-router-dom'

const poem = [`The page you seek, alas, is gone,`,
    `Lost in the ether, forever withdrawn.`,
    `A 404 error is all you see,`,
    `No hint of the page that used to be.`,
    `Perhaps it was a thing of beauty,`,
    `A page that sparkled, a true gem of duty.`,
    `But now it's lost, and you are left,`,
    `With nothing but an error bereft.`,
    `Fear not, my friend, all is not lost,`,
    `For new pages can come at any cost.`,
    `A fresh start, a new beginning,`,
    `A chance to create without the sinning.`,
    `So take heart, and do not despair,`,
    `The future is bright, the world to share.`,
    `A 404 error may be a curse,`,
    `But it's also a chance to write a new verse.`];

const containerStyle = {
    width: '30%',
    padding: '4px 10px',
    margin: '50px auto',
    borderRadius: '8px',
    textAlign: 'center',
    backgroundColor: '#1D1D1D'
}

const headerStyle = {
    margin: '40px 5px',
    color: 'white',
}

const navLinkStyle = {
    color: 'white',
    border: '1px solid white',
    padding: '10px 10px',
    margin: '3rem',
    borderRadius: '8px',
    backgroundColor: '#111111',
}

const lineStyle = {
    margin: '8px',
}

const NotFound = ({ poem, containerStyle, headerStyle, navLinkStyle, lineStyle }) => {

    return (
        <div style={containerStyle}>
            <h3 style={headerStyle}>Okay, Don't Panic.</h3>
            {poem.map((line, index) => <p style={lineStyle} key={index}>{line}</p>)}
            <button style={navLinkStyle}><NavLink to='/' style={{ color: '#fff' }}>This way home</NavLink></button>
        </div>
    )
}

export default NotFound