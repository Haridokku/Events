import {Component} from "react"
import './index.css'

const eventObject={
        yetToRegister:'YET_TO_REGISTER',
        registered:'REGISTERED',
        registrationsClosed:'REGISTRATIONS_CLOSED'
    }

class ActiveEventRegistrationDetails extends Component{


    renderInitialView = () => (
                <p className="describe">Click on an event, to view its registration details</p>
        )

    renderRegisterView = () => (
            <>
            <img src="https://assets.ccbp.in/frontend/react-js/events-register-img.png" className="img" alt="yet to register" />
            <p className="describe">A live performance brings so much to your relationship with dance.Seeing dance live can often make you fall totally in love with this beautiful art form</p>
            <button className="button">Register Here</button>
            </>
        )

    registeredView = () => (
             <>
             <img src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png" className="register" alt="registered" />
             <p className="describe">You have already registered for the event</p>
             </>
        )

    renderRegistrationsClosedView= () => (

            <>
            <img src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png" alt="registrations closed" className="img" />
            <h1 className="heading">Registrations Are Closed Now!</h1>
            <p className="describe">Stay tuned.We will reopen</p>
            <p className="describe">the registrations soon</p>
            </>
        )
    
    render() {
        const {activeEvent} = this.props
        return(
            switch (activeEvent){
                case eventObject.yetToRegister:
                    return this.renderRegisterView()
                case eventObject.registered:
                    return this.registeredView()
                case eventObject.registrationsClosed:
                    return this.renderRegistrationsClosedView()
                default :
                    return this.renderInitialView()
            }

        )
    }
}
export default ActiveEventRegistrationDetails
