import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Card(props) {
   
    return (
        <div className="card">
            <img src={`${props.imageUrl}`} className="card--image" />
            <div className="card--stats">
                <span className="location"><FontAwesomeIcon icon={faLocationDot} className="locationIcon"/>{props.location} <span><a  className="link" href={`${props.googleMapsUrl}`} target="_blank">View on Google Maps</a></span></span>
                <h2 className="title">{props.title}</h2>
                <h3 className="dates">{props.startDate} - {props.endDate}</h3>
                <p className="desc">{props.description}</p>
            </div>
        </div>
    )
}