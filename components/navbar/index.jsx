import {ReactComponent as Background} from '../../src/assets/images/bg-sidebar-desktop.svg';
import Steps from './components/step';
import './style.css';
const Navbar = ({currIndex}) => {
    return ( 
        <div className="navbar-wrapper">
           <Background />

           <div className='multi-step-container'>
                <Steps currIndex={currIndex} no="1" label="YOUR INFO" />
                <Steps currIndex={currIndex} no="2" label="SELECT PLAN" />
                <Steps currIndex={currIndex} no="3" label="ADD-ONS" />
                <Steps currIndex={currIndex} no="4" label="SUMMARY"/>
           </div>
        </div>
    );
}
 
export default Navbar;