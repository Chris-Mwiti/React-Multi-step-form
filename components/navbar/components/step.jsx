
const Steps = ({currIndex, no,label}) => {
    return (
        <div className = "step-container">
            <div className={`badge ${currIndex + 1 == no ? "active" : " "}`}>{no}</div>
            <div className='badge-label'>
                <span className='steps'>{`STEP ${no}`}</span>
                <span className='step-label'>{label}</span>
            </div>
        </div>
     );
}
 
export default Steps;