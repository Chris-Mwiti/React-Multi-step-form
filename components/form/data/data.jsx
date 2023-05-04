import AddsOn from "../elements/components/addOns";
import PersonalInfo from "../elements/components/personalnfo";
import PlanInfo from "../elements/components/planInfo";

export const dataElements = [
    {
        title: "Personal Info",
        subtitle:"Please provide your name,email address and phone number",
        props: {},
        element: function returnElement(){
            return(
                < PersonalInfo name={this.props.name} setName={this.props.setName} email={this.props.email} setEmail={this.props.setEmail} phone={this.props.phone} setPhone={this.props.setPhone} error={this.props.error} setCurrIndex={this.props.setCurrIndex} currIndex={this.props.currIndex}/>
            )
        }
         
        
    },

    {
        title: "Select your plan",
        subtitle:"You have the option of monthly or yearly billing",
        props: {},
        element: function returnElement(){
            return(
                < PlanInfo setCurrIndex={this.props.setCurrIndex} currIndex={this.props.currIndex} setPlan={this.props.setPlan} timeMode={this.props.timeMode} setTimeMode={this.props.setTimeMode} priceTag={this.props.priceTag}/>
            )
        }
         
        
    },

    {
        title: "Pick add-ons",
        subtitle:"Add-ons help enhance your gaming experience",
        props: {},
        element: function returnElement(){
            return(
                <AddsOn setAddsOn={this.props.setAddsOn} adds={this.props.adds} currIndex={this.props.currIndex} setCurrIndex={this.props.setCurrIndex}/>
            )
        }
         
        
    }
]