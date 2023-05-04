import { useState } from "react";
import  { dataElements } from "./data/data";
import './form.css';

const Form = ({currIndex,setCurrIndex}) => {
    // Error state
    const [error, setError] = useState(false);

    // Personal info states
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    // Plan info states
    const [plan, setPlan] = useState("");
    const [timemode, setTimeMode] = useState("monthly");

    // Adds On states
    const [adds, setAdds] = useState([]);
    console.log(adds)

    // Price tag options
    const priceTag = {
        monthly:{
            arcade: "$9/mo",
            advanced: "$12/mo",
            pro: "$15/mo"
        },
        
        yearly: {
            arcade: "$90/yr",
            advanced: "$120/yr",
            pro: "$150/yr"
        }
    }

    switch(currIndex){
        case 0:
            dataElements[currIndex].props={
                name: name,
                setName: setName,
                email: email,
                setEmail: setEmail,
                phone:phone,
                setPhone: setPhone,
                error: error,
                currIndex: currIndex,
                setCurrIndex: setCurrIndex
            }
        break;

        case 1:
            dataElements[currIndex].props={
                timeMode: timemode,
                setTimeMode: setTimeMode,
                setPlan: setPlan,
                priceTag: priceTag[timemode],
                currIndex: currIndex,
                setCurrIndex: setCurrIndex,
            }
        break;

        case 2: 
            dataElements[currIndex].props={
                adds: adds,
                setAddsOn: setAdds,
                currIndex: currIndex,
                setCurrIndex: setCurrIndex
            }

        break;

        default:
            dataElements[0].props={
                name: name,
                setName: setName,
                email: email,
                setEmail: setEmail,
                phone:phone,
                setPhone: setPhone,
                error: error
            }
        break;
    }

    console.log(name)
    return ( 
        <form>
            <h2 className="title">{dataElements[currIndex].title}</h2>
            <p className="subtitle">{dataElements[currIndex].subtitle}</p>
            {dataElements[currIndex].element()}
        </form>
     );
}
 
export default Form;