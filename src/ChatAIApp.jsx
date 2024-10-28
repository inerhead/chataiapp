import { useState } from 'react'
import CustomInput from './components/CustomInput'
import CustomDialog from './components/CustomDialog';

const ChatAIApp = () => {
    const [sendMsg, setSendMsg] = useState('')   
    const sendMessage = (respMsg) => {
        setSendMsg(respMsg)
    }           
   
    return (
        <div className="body">
            <div className="container">
                <CustomInput onSendMsg={sendMessage} />
                {
                    sendMsg != '' && <CustomDialog sendMsg={sendMsg} />
                }                
            </div>
        </div>        
    )
}
export default ChatAIApp;