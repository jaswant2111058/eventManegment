import "./style.css"
import QRCode from 'qrcode.react';

const TicketGenrator = () => {

    return (
        <>
            <div className="ticket_main">
                <div className="ticket_wrapper">
                    <div className="ticket_logo">
                        <img className="logo" src="./images/logo2.jpg" alt=""/>
                    </div>
                    <div className="qrcode">
                        <QRCode value={"qwefjkl"} size={128} />
                    </div>
                    <div className="ticket_detail">
                        <div className="ticket_">
                            <p>Email</p>
                            {"asdfghjklpoiuytcgh"}
                        </div>
                        <div className="ticket_">
                            <p>
                                Show Name
                                </p> BasKar

                        </div>
                        <div className="ticket_">
                            <p>Timing</p> {"10:10 am - 02:00 pm  10 Nov 2023 Wed"}

                        </div>
                        <div className="ticket_">
                            <p>Seats</p> {"M-55,M-56"}
                        </div>
                        <div className="ticket_">
                            <p>
                                Venue</p>    Opluland Mall raj nagar

                        </div>
                    </div>
                    <div className="ticket_print">
                        <button onClick={window.print}>Print</button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default TicketGenrator;