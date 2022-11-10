import React, { useEffect, useState }  from 'react'
import './Services.css'

const TopServices = () => {
    const [top5, setTop5] = useState([])

    useEffect(() => {
        fetch('https://eptome-parlor.herokuapp.com/service_types')
        .then(res => res.json())
        .then(data => setTop5(data))
    }, [])

    return (
        <div className="top-services">
            <h1>Top Services</h1>
            <div className="top-services-container">
                {top5.slice(0, 5).map(service => (
                    <div className="top-service">
                        <img src={service.imageURL} alt=""/>
                        <h3>{service.service_type_name}</h3>
                        <p>{service.service_type_description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopServices
