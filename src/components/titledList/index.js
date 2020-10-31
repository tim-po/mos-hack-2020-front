import React, { useState } from 'react';
import 

function TitledList(props){

    const [localState, setLocalState] = useState(props.state)

    function onSave(){
        props.onSave(localState)
    }

    function onDelete() {
        setLocalState(props.state)
    }

    return([
        <div className={"extra_info"}>
            {Object.keys(localState).map(key => {
                return(
                    <div className={"line"} key={key}>
                        <div className={"card_title"}>
                            {key}
                        </div>
                        <input 
                            className={"card_value"}
                            type="text" 
                            onChange={event => {
                                let newLocalState = Object.assign(localState)
                                newLocalState[key] = event.target.value
                                console.log(newLocalState)
                                setLocalState({...newLocalState})
                            }} value={localState[key]}
                        />
                    </div>
                )
            })}
        </div>,
        <div className={"agree_container"}>
            <button className={"agree_button"} onClick={() => onSave()}>Yes</button>
            <button className={"disagree_button"} onClick={() => onDelete()}>No</button>
        </div>
    ])
}

export default TitledList;