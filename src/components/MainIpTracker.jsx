import React, { useState } from 'react'
import style from '../styles/Iptracker.module.css'
import IpTracker from './IpTracker'
import Result from './Result'

import Map from './Map'
function MainIpTracker() {
    const [iptracker, setiptracker] = useState({
        ip: "197.32.143.124",
        location: {
            country: "EG",
            region: "Beheira Governorate",
            city: "Kafr ad Dawwr",
            timezone: "+03:00",
            lat: 31.13379,
            lng: 30.12969
        },
        isp: "Telecom Egypt"
    })
    const [ip, setip] = useState()
    const onchangehandler = (e => {
        setip(e)
    })
    const clickhandler = (e => {
        e.preventDefault()
        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_9NnTLj5GbVTfplYUTE1jRo8KdIr0L&ipAddress=${ip}`)
            .then(res => res.json())
            .then(data => setiptracker(data))
    })
    console.log(iptracker)
    
    return (
        <div>
            <div className={`${style.parent}`}>
                <div className={`${style.tracker}`}>
                    <IpTracker change={onchangehandler} click={clickhandler} />
                </div>
                <div className={`${style.result} row mt-3 mx-auto p-3 rounded-4`}>
                    <Result ipt={iptracker} />
                </div>
                <Map ipt={iptracker}/>
            </div>
        </div>
    )
}

export default MainIpTracker