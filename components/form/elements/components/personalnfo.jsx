const PersonalInfo = ({name,setName,email,setEmail,phone,setPhone,error,setCurrIndex,currIndex}) => {
    const handleClick = (e) => {
        setCurrIndex(currIndex + 1);
    }
    return ( 
        <div className="input-container">
            <div className="input">
                <div className="label-container">
                    <label>Name</label>
                    <span className={`error-message ${error ? "active": ""}`}>Enter name</span>
                </div>
                <input
                className={`${error ? "active" : ""}`} 
                type="text" 
                placeholder="e.g.Stephen King"
                value={name}
                onChange={(e) => setName(e.target.value)}>
                </input>
            </div>

            <div className="input">
                <div className="label-container">
                    <label>Email Address</label>
                    <span className={`error-message ${error ? "active": ""}`}></span>
                </div>
                <input
                className={`${error ? "active" : ""}`}  
                type="email" 
                placeholder="eg stephenking@lorem.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}>
                </input>
            </div>

            <div className="input">
                <div className="label-container">
                    <label>Phone Number</label>
                    <span className={`error-message ${error ? "active": ""}`}></span>
                </div>
                <input 
                className={`${error ? "active" : ""}`} 
                type="text" 
                placeholder="e.g. +1 234 567 890"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}>
                </input>
            </div>

            <button className="btn-next" onClick={handleClick} type="button">Next Step</button>
        </div>
    );
}
 
export default PersonalInfo;