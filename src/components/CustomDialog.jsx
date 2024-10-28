import PropTypes from 'prop-types';
import useCustomFetchAI from '../hooks/usecustomFetchAI';

const CustomDialog = ({sendMsg}) => {      
    const respMsg = useCustomFetchAI(sendMsg);
    
    return (
        <div className="response-grid" id="responseGrid">
            <div className="question-card">
                <h3>Question</h3>
                <p>{sendMsg}</p>
            </div>
            <div className="card">
                <h3>Answer</h3>
                <p>{respMsg}</p>
            </div>                                        
        </div>
    )
};
CustomDialog.propTypes = {
    sendMsg: PropTypes.string
}
export default CustomDialog