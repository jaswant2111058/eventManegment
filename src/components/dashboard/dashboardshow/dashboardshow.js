import axios from "axios";
import "./dashboardshow.css"
import { TbDots } from "react-icons/tb";
import { useState } from "react";
import { useEffect } from "react";


const DashboardShow = () => {

    const [events, setEvents] = useState([]);
    const [eventDetails, setEventDetails] = useState({});

    useEffect(() => {
        axios.post('http://localhost:5000/getevents', { user_id: "65243cea544688418b07bed5" }).then((res, err) => {
            if (res) {
                axios.post('http://localhost:5000/getevents/details', { events: res.data }).then((res, err) => {
                    if (res) {
                        setEvents(res.data)
                        setEventDetails(res.data[0])
                    }
                })
            }
        })
    }, [])
    return (
        <>
            <div className="eventMain">
                <h3>Posted Events</h3>
                <div className="eventCardsWraper">
                    {events.map((item) => {
                        return (
                            <>
                                <div className="eventcards1" key={item._id} onClick={() => { setEventDetails(item) }}>
                                    <div className="eventName">
                                        {item.name}
                                        <TbDots />
                                    </div>
                                    <div className="timeday">
                                        {`${item.startTime} - ${item.endTime}`}
                                    </div>
                                    <div className="venue_Status" >
                                        <div className="eventCity">
                                            {item.city}
                                        </div>
                                        <div className="eventStatus">
                                            {"complete"}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
                <div className="evtDlt">
                    <div className="eventDetails">
                        <h3>Event Detail</h3>
                        <div className="title">
                            {eventDetails.name}
                        </div>
                        <div className="dateTime">
                            {eventDetails.date}
                            <p> {`${eventDetails.startTime} - ${eventDetails.endTime}`}</p>
                        </div>
                        <div className="venue">
                            {eventDetails.city}
                            <p>{eventDetails.fullAddress}</p>
                        </div>
                        <div className="content_">
                            <h4>Content </h4>
                            {eventDetails.content}
                        </div>
                    </div>
                    <div className="dashImage">
                        <h3>Event Images</h3>
                        <img src={`http://localhost:5000/img/${eventDetails.img}`}/>
                    </div>
                </div>
                <div className="bookingDetail">
                    <h4>Booked Seat Deatail</h4>
                    <table className="tableDashboard">
                        <tr className="tableRow1">
                            <td className="tableData"> Type </td>
                            <td className="tableData"> Total </td>
                            <td className="tableData"> Booked </td>
                            <td className="tableData"> Avilable </td>
                            <td className="tableData"> Collection </td>
                        </tr>
                        <tr className="tableRow2">
                            <td className="tableData"> Front </td>
                            <td className="tableData"> {eventDetails?.seats?.middel} </td>
                            <td className="tableData"> {eventDetails?.seats?.middel - eventDetails?.seats?.middel} </td>
                            <td className="tableData"> {eventDetails?.seats?.middel} </td>
                            <td className="tableData"> {`$ ${eventDetails?.price?.middel}`} </td>
                        </tr>
                        <tr className="tableRow3">
                            <td className="tableData"> Middle </td>
                            <td className="tableData"> {eventDetails?.seats?.middel} </td>
                            <td className="tableData"> {eventDetails?.seats?.middel - eventDetails?.seats?.middel} </td>
                            <td className="tableData"> {eventDetails?.seats?.middel} </td>
                            <td className="tableData"> {`$ ${eventDetails?.price?.middel}`} </td>
                        </tr>
                        <tr className="tableRow1">
                            <td className="tableData"> Back </td>
                            <td className="tableData"> {eventDetails?.seats?.back} </td>
                            <td className="tableData"> {eventDetails?.seats?.back - eventDetails?.seats?.back} </td>
                            <td className="tableData"> {eventDetails?.seats?.back} </td>
                            <td className="tableData"> {`$ ${eventDetails?.price?.back}`} </td>
                        </tr>
                        <tr className="tableRow2">
                            <td className="tableData"> Primium </td>
                            <td className="tableData"> {eventDetails?.seats?.primium} </td>
                            <td className="tableData"> {eventDetails?.seats?.primium - eventDetails?.seats?.primium} </td>
                            <td className="tableData"> {eventDetails?.seats?.primium} </td>
                            <td className="tableData"> {`$ ${eventDetails?.price?.primium}`} </td>
                        </tr>
                        <tr className="tableRow3">
                            <td className="tableData"> Normal </td>
                            <td className="tableData"> {eventDetails?.seats?.normal} </td>
                            <td className="tableData"> {eventDetails?.seats?.normal - eventDetails?.seats?.normal} </td>
                            <td className="tableData"> {eventDetails?.seats?.normal} </td>
                            <td className="tableData"> {`$ ${eventDetails?.price?.normal}`} </td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}
export default DashboardShow
