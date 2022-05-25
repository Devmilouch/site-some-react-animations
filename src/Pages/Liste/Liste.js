import "./Liste.css";
import { useTrail, animated } from "react-spring";
import Card from "../../Components/Card/Card";



const Liste = (props) => {
    let xNumber = 0;
    let yNumber = 0;
    const xOrY = Math.floor(Math.random() * 2);
    
    if (xOrY === 0) xNumber = 500;
    else yNumber = 500;

    const trail = useTrail(9, {
        from: {
            opacity: 0,
            x: xNumber,
            y: yNumber
        },
        to: {
            opacity: 1,
            x: 0,
            y: 0
        }
    });

    return (
        <div className="list-container">
            {
                trail.map((cardStyle, index) => {
                    return (
                        <animated.div key={index} style={cardStyle}>
                            <Card />
                        </animated.div>
                    );
                })
            }
        </div>
    );
};

export default Liste;