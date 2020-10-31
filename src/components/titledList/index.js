import React, {useState} from 'react';

import check from '../img/check.svg';
import not_check from '../img/not_check.svg';

function TitledList(props) {

  const [localState, setLocalState] = useState(props.state)

  const [isEditing, setIsEditing] = useState(false)

  function onSave() {
    props.onSave(localState)
    setIsEditing(false)
  }

  function onDelete() {
    setLocalState(props.state)
    setIsEditing(false)
  }

  return ([
    <div className={"extra_info"}>
      {props.children}
      {Object.keys(localState).map(key => {
        return (
          <div className={"line"} key={key}>
            <div className={"card_title"}>
              {key}
            </div>
            <input
              className={"card_value" + (isEditing ? "" : " not-editing")}
              type="text"
              onFocus={() => {
                setIsEditing(true)
              }}
              onChange={event => {
                let newLocalState = Object.assign(localState)
                newLocalState[key] = event.target.value
                setLocalState({...newLocalState})
              }} value={localState[key]}
            />
          </div>
        )
      })}
    </div>,
    <div className={"agree_container"}>
      {isEditing ?
        [
          <button className={"agree_button"} onClick={() => onSave()}>
            <img src={check}/>
          </button>,
          <button className={"disagree_button"} onClick={() => onDelete()}>
            <img src={not_check}/>
          </button>
        ]
        : null}
    </div>
  ])
}

export default TitledList;