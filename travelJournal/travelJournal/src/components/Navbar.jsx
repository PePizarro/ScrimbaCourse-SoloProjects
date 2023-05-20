import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
        <nav>
            <div className="icon"><FontAwesomeIcon icon={faEarthAmerica} /></div>
            <h1>my travel journal.</h1>
        </nav>
    )
}