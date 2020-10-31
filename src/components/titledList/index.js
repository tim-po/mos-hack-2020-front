import React, { useState } from 'react';
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';

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
                        {/* <Autocomplete
                            id="combo-box-demo"
                            options={top3okraski}
                            getOptionLabel={(option) => option.title}
                            style={{ width: 300 }}
                            onClose={event => {
                                let newLocalState = Object.assign(localState)
                                newLocalState[key] = event.target.value
                                console.log(newLocalState)
                                setLocalState({...newLocalState})
                            }}
                            onChange={event => {
                                let newLocalState = Object.assign(localState)
                                newLocalState[key] = event.target.value
                                setLocalState({...newLocalState})
                            }} 
                            inputValue={localState[key]}
                            renderInput={(params) => 
                                <TextField {...params} 
                                className={"card_value"}
                                type="text" 
                                label="Заполнить" 
                                variant="outlined" />}
                            /> */}
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