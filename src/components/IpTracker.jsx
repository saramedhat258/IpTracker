
import arrowicon from '../images/icon-arrow.svg'
function IpTracker({click,change}) {
    return (
        <>
            <h1>IP Address Tracker</h1>
            <form action="" >
                <input type="text" placeholder='Search for any IP address or domain' className='rounded-start-4' onChange={e=>change(e.target.value)} />
                <button type='submit' className='rounded-end-4' onClick={e=>click(e)}><img src={arrowicon} alt="" /></button>
            </form>
        </>
    )
}

export default IpTracker