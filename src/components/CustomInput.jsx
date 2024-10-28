import { useState } from 'react';

import PropTypes from 'prop-types';

const CustomInput = ({onSendMsg}) => {
    const [inputMsg, setInputMsg] = useState('');
    const onInputChange = (event) => {
        setInputMsg(event.target.value)
    }
    const onSendInputMsg = () => {
        onSendMsg(inputMsg)
        setInputMsg('')
       // setRespMsg('')
    }
    return (
        <div className="chat-input">                    
            <input type="text" id="prompt" placeholder="Enter your message here..." value={inputMsg} onChange={onInputChange}></input>
            <button id="sendButton" onClick={onSendInputMsg}>Send</button>
        </div>
    )
}

CustomInput.propTypes = {
    onSendMsg: PropTypes.func.isRequired,
   // setRespMsg: PropTypes.func.isRequired
}
export default CustomInput;