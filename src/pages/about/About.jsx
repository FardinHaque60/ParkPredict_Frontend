import '../styles/General.css';

function About() {
  return (
    <div className="main-container">
            {/* header */}
            <header className="sjsu-header u-bg--dark" role="banner">
                <div className="wrap">
                    <a className="sjsu-title" href="https://www.sjsu.edu/" target="_blank" rel="noopener noreferrer">
                        SJSU
                    </a>
                </div>
            </header>
            <span className="sjsu-gradientbar"></span>
            <main className="sjsu-main"></main>
            {/* main content */}
            <div className="wrap">
                <h2 className="parking-title"> About </h2>
                    <p> 
                        ParkPredict is a non-profit project designed to help fellow students more effectively find parking spots when coming to class. 
                        Parking garages at SJSU often fill up quickly, and students who commute long distances can benefit from knowing how full a garage will be
                        in the next 1-2 hours. By providing predictions of parking garage fullness, ParkPredict enables students to plan ahead and improve their 
                        chances of finding a spot. This service offers a website where users can select any time during the day to receive a prediction for 
                        parking garage occupancy. Additionally, an SMS service is available, allowing users to text a number and receive parking garage fullness
                        predictions on their phone.
                    </p>
                <h2> Services </h2>
                    <p>
                        <ul>
                            <li> Parking garage fullness <a href="/"> website </a> </li>
                            <li> <a href="/sms-policy"> SMS service </a> </li>
                        </ul>
                    </p>
                <h2> Data Privacy </h2>
                     <p>
                        ParkPredict does not collect or store any personal user information. Service requests are logged only for performance tracking, 
                        which helps us rate the prediction model and compare its accuracy to actual parking data. For the SMS service, users are not 
                        enrolled in any subscription or marketing program. SMS messages are sent only in direct response to a user-initiated request. 
                        To receive a prediction, users must first send a message to our toll-free number; this action serves as their opt-in for a one-time 
                        response. Users will never receive unsolicited messages, and no ongoing messaging or subscription is provided. All SMS communications
                        are strictly request-initiated and sent only to the number that made the request.
                    </p>
                <h2> Contact Us </h2>
                    <p> 
                        Feel free to contact me with any questions or comments you have relate to the app. We are always open to feedback!
                        <ul>
                            <li> Name: Fardin Haque </li>
                            <li> Email: fardinhaque60@gmail.com </li>
                            <li> Phone: +1 (669) 275-3912 </li>
                            <li> Address: 1 Washington Sq. San Jose, CA 95112 </li>
                        </ul>
                    </p>
                <div className="return-link">
                    <h2 className="parking-services">
                        <a href="/">
                            Return to dashboard
                        </a>
                    </h2>
                </div>
            </div>
        </div>
  );
}

export default About;