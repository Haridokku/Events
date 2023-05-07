import './index.css'

const EventItem = props => {
  const {eventDetails, eventStatus} = props
  const {imageUrl, name, location, registrationStatus} = eventDetails
  const onGetStatus = () => {
    eventStatus(registrationStatus)
  }
  return (
    <li className="list-item">
      <button type="button" onClick={onGetStatus}>
        <img src={imageUrl} alt="event" className="img" />
      </button>

      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
