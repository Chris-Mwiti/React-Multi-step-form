import {ReactComponent as ArcadeIcon} from  '../assets/icon-arcade.svg'
import {ReactComponent as AdvancedIcon} from '../assets/icon-advanced.svg'
import {ReactComponent as ProIcon} from '../assets/icon-pro.svg'
import '../../form.css'

const PlanInfo = ({setPlan,timeMode,setTimeMode,priceTag,currIndex,setCurrIndex}) => {
    
    const handleNext = (e) => {
        setCurrIndex(currIndex + 1);
    }

    const handleBack = (e) => {
        setCurrIndex(currIndex - 1);
    }

    return ( 
        <div className="radio-container">
            <div className='cards-container'>
                <ul>
                    <li className='card-container'>
                        <input type='radio' onChange={(e) =>  setPlan(e.target.value)} value="arcade" name='arcade-option' className='radio-btn' id='radio-arcade'></input>

                        <label htmlFor='radio-arcade' className='card-option'>
                            <div className='card'>
                                <ArcadeIcon />
                                <div className='plan-details'>
                                    <h3 className='plan-title'>Arcade</h3>
                                    <span className='price-tag'>{priceTag.arcade}</span>
                                    <span className={`${timeMode == "yearly" ? "discount" : "no-discount"}`}>2 months free</span>
                                </div>
                            </div>
                        </label>
                    </li>

                    <li className='card-container'>
                        <input type='radio' onChange={(e) =>  setPlan(e.target.value)} value="arcade" name='arcade-option' className='radio-btn' id='radio-advanced'></input>

                        <label htmlFor='radio-advanced' className='card-option'>
                            <div className='card'>
                                <AdvancedIcon />
                                <div className='plan-details'>
                                    <h3 className='plan-title'>Advanced</h3>
                                    <span className='price-tag'>{priceTag.advanced}</span>
                                    <span className={`${timeMode == "yearly" ? "discount" : "no-discount"}`}>2 months free</span>
                                </div>
                            </div>
                        </label>
                    </li>

                    <li className='card-container'>
                        <input type='radio' onChange={(e) =>  setPlan(e.target.value)} value="pro" name='arcade-option' className='radio-btn' id='radio-pro'></input>

                        <label htmlFor='radio-pro' className='card-option'>
                            <div className='card'>
                                <ProIcon />
                                <div className='plan-details'>
                                    <h3 className='plan-title'>Pro</h3>
                                    <span className='price-tag'>{priceTag.pro}</span>
                                    <span className={`${timeMode == "yearly" ? "discount" : "no-discount"}`}>2 months free</span>
                                </div>
                            </div>
                        </label>
                    </li>
                </ul>

                <div className='toggle-container'>
                    <ul className='timeline-container'>
                        <li className='timeline'>
                            <input type='radio' id='monthly-timeline' value="monthly" name='timeline' onChange={(e) =>  setTimeMode(e.target.value)}></input>
                            <label htmlFor='monthly-timeline' className={`  ${timeMode == "monthly" ? "active" : "disactive"}`}>Monthly</label>
                        </li>

                        <li className='timeline'>
                            <input type='radio' id='yearly-timeline' value="yearly" name='timeline' onChange={(e) =>  setTimeMode(e.target.value)}></input>
                            <label htmlFor='yearly-timeline' className={`${timeMode == "yearly" ? "active" : "disactive"}`}>Yearly</label>
                        </li>
                    </ul>
                </div>

                <div className='btn-container'>
                    <button className='go-back-btn' onClick={handleBack}>GO BACK</button>
                    <button className='next-btn' onClick={handleNext}>Next Step</button>
                </div>
            </div>

           
        </div>
     );
}
 
export default PlanInfo;