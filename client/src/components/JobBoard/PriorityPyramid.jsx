import { AiTwotoneFire } from 'react-icons/ai'

const firstFlame = {
    top: '4px',
    left: '4px',
    zIndex: '3',
}

const thirdFlame = {
    bottom: '4px',
    right: '4px',
    zIndex: '1',
}

const PriorityPyramid = ({ level, color }) => {

    const allFlames = {
        color: color,
        fontSize: '15px',
        position: 'relative',
    }

    switch (level) {
        case 1:
            return <div><AiTwotoneFire style={allFlames} /></div>;
        case 2:
            return <div>
                <AiTwotoneFire style={{ ...allFlames, ...firstFlame }} />
                <AiTwotoneFire style={allFlames} />
            </div>;
        case 3:
            return <div>
                <AiTwotoneFire style={{ ...allFlames, ...firstFlame }} />
                <AiTwotoneFire style={allFlames} />
                <AiTwotoneFire style={{ ...allFlames, ...thirdFlame }} />
            </div>;
        default:
            return null;
    }
}

export default PriorityPyramid