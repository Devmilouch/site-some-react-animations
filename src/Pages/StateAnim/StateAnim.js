import { useState, useRef } from "react";
import { useTrail , useTransition, animated } from "react-spring";
import { v4 as uuidv4 } from "uuid";
import "./StateAnim.css";



const StateAnim = (props) => {
    const [ firstLoad, setFirstLoad ] = useState(true);
    const [ inputWrong, setInputWrong ] = useState(false);
    const [ inputData, setInputData ] = useState([
        {
            id: uuidv4(),
            name: "Son Goku"
        },
        {
            id: uuidv4(),
            name: "Izuku"
        },
        {
            id: uuidv4(),
            name: "Luffy"
        }
    ]);

    const inputRef = useRef();

    const handleData = e => {
        e.preventDefault();

        if (inputRef.current.value) {
            const newObj = {
                id: uuidv4(),
                name: inputRef.current.value
            };
    
            const newInputData = [...inputData];
            newInputData.push(newObj);
            setInputData(newInputData);
            inputRef.current.value = "";
            setInputWrong(false);
            if (firstLoad) setFirstLoad(false);
        } else {
            setInputWrong(true);
        }
    }

    const trail = useTrail(inputData.length, {
        from: {
            opacity: 0,
            x: 200,
            y: 200
        },
        to: {
            opacity: 1,
            x: 0,
            y: 0
        }
    });

    const listTransitions = useTransition(inputData, {
        from: {opacity: 0, transform: "translateY(15px"},
        enter: {opacity: 1, transform: "translateY(0px)"},
        keys: inputData.map(item => item.id)
    })

    return (
        <form onSubmit={handleData}>
            <label htmlFor="heros">Quels sont vos personnages de fiction préférés ?</label>
            <input 
                ref={inputRef} 
                type="text" 
                id="heros"
            />
            {inputWrong && <span>Veuillez entrer un nom.</span>}

            <ul>
                {
                    !firstLoad ? (
                        listTransitions((styles, item) => {
                            return <animated.li style={styles}>
                                {item.name}
                            </animated.li>
                        })
                    ) : (
                        trail.map((itemStyle, index) => {
                            return <animated.li key={index} style={itemStyle}>{inputData[index].name}</animated.li>
                        })
                    )
                }
            </ul>
        </form>
    );
};

export default StateAnim;