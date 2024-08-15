import React from 'react'

function Result({ipt}) {
    console.log(ipt.location)
    return (
        <>
            <div className='col-lg-3 col-md-3 col-sm-1 ps-2 border-start-0'>
                <p>ip address</p>
                <h3>{ipt.ip}</h3>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-1 ps-4'> 
                <p>location</p>
                <h3>{`${ipt.location.country}, ${ipt.location.region}`}</h3>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-1 ps-4'>
                <p>timezone</p>
                <h3>{`UTC ${ipt.location.timezone}`}</h3>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-1 ps-4'>
                <p>isp</p>
                <h3>{ipt.isp}</h3>
            </div>
        </>
    )
}

export default Result