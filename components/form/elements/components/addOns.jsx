import '../../form.css'

const AddsOn = ({adds, setAddsOn, currIndex, setCurrIndex}) => {

    const handleNext = (e) => {
        setCurrIndex(currIndex + 1);
    }

    const handleBack = (e) => {
        setCurrIndex(currIndex - 1);
    }

    return ( 
        <div className="adds-container">
            <div className="checkboxes-container">
                <div className="checkbox-container">
                    <input type="checkbox" onChange={(e) => setAddsOn([...adds, e.target.value])} value="online-service" name="checkbox" id="online-service"></input>

                    <label htmlFor="online-service">
                        <div className="add-detail">
                            <h3 className="detail-title">Online Service</h3>
                            <p className="detail">Access to multiple games</p>
                        </div>
                        <div className="add-price">+$1/mo</div>
                    </label>
                </div>

                <div className="checkbox-container">
                    <input type="checkbox" onChange={(e) => setAddsOn([...adds, setAddsOn])} value="large-storage" name="checkbox" id="large-storage"></input>

                    <label htmlFor="large-storage">
                        <div className="add-detail">
                            <h3 className="detail-title">Large storage</h3>
                            <p className="detail">Extra 1TB of cloud save</p>
                        </div>
                        <div className="add-price">+$2/mo</div>
                    </label>
                </div>

                <div className="checkbox-container">
                    <input type="checkbox" onChange={(e) => setAddsOn([...adds, e.target.value])} value="customizable-profile" name="checkbox" id="customizable-profile"></input>

                    <label htmlFor="customizable-profile">
                        <div className="add-detail">
                            <h3 className="detail-title">Customizable Profile</h3>
                            <p className="detail">Custom theme on your profile</p>
                        </div>
                        <div className="add-price">+$2/mo</div>
                    </label>
                </div>

                <div className='btn-container'>
                        <button className='go-back-btn' type="button" onClick={handleBack}>GO BACK</button>
                        <button className='next-btn' type="button" onClick={handleNext}>Next Step</button>
                </div>
            </div>

        </div>
    );
}
 
export default AddsOn;