import '../styles/General.css'
import { useState } from 'react';

function Policy() {
    const [isChecked, setIsChecked] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    function handleCheckboxChange() {
        setIsChecked(prev => !prev);
    }

    function handleSubmit() {
        setSubmitted(true);
    }

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

            {/* main content 
                <h1 className="parking-title">
                    Text "Hello" To Number <a href="https://docs.google.com/document/d/1H2TS5vrcon_N_KF47SQpuabw3oAgYb-Zlpf5U2uiN8M/edit?usp=sharing" target='_blank'>here</a>
                </h1>
                <p>
                    Texting hello will provide you message formats to get texted the parking garage fullness predictions. 
                    Number is protected in a doc to prevent against bot scraping, apologies for the inconvenience.
                </p>
            */}
            <div className="wrap">
                <h1 className="parking-title">
                    SMS Communication Policy for Student Parking Predictions
                </h1>
                <p> 
                    This policy outlines the terms and conditions for our non-profit SMS service, which is designed as a convenient solution to help students 
                    find available parking. We are committed to ensuring transparency and protecting your privacy. Our service is strictly user-initiated and 
                    operates on a request-response basis. For more information about our mission, please visit our <a href="/about"> about page</a>.
                </p>

                <h2> Consent to Receive SMS Messages </h2>
                <p> 
                    To utilize our service, you must first provide explicit consent to receive a one-time SMS response. Communication is initiated solely by you, the user. 
                    By checking the box below, you are providing your express written consent and agree to the following terms: You acknowledge and consent that by sending 
                    a text message to our SMS number, you will receive a single, automated SMS response containing the requested parking garage predictions. 
                    You understand that this service is user-initiated. You will only receive a message from us as a direct and immediate response to your specific request.
                    <p>
                        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                            <input type="checkbox" style={{ marginRight: '1em' }} onClick={handleCheckboxChange}/>
                            I agree to receive a one-time text message from ParkPredict with parking garage prediction information in response to my direct SMS inquiry. 
                        </label>
                        Upon hitting submit below, you will be provided with the SMS number to which you can send your request for parking predictions.
                        <p></p>
                        <button
                            type="button"
                            disabled={!isChecked}
                            style={{
                                backgroundColor: isChecked ? '#007bff' : '#ccc',
                                color: 'white',
                                padding: '0.5rem 1rem',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: isChecked ? 'pointer' : 'not-allowed',
                                marginBottom: '1rem'
                            }}
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </p>
                </p>
                {submitted && (
                    <div style={{ padding: '1rem', background: '#f5f5f5', borderRadius: '6px' }}>
                        <h2>Get Started</h2>
                        <p>
                            Text <b>"hello"</b> to the phone number found <a href="https://docs.google.com/document/d/1H2TS5vrcon_N_KF47SQpuabw3oAgYb-Zlpf5U2uiN8M/edit?usp=sharing" target="_blank" rel="noopener noreferrer">here</a> to get started.
                        </p>
                    </div>
                )}

                <div>
                    <h2> Data Privacy and User Information </h2>
                    <p> 
                        We prioritize your privacy. Our system is built to be completely stateless, meaning it does not store any personal data associated 
                        with the sender. 
                        <ul> 
                            <li> <b> No Data Storage: </b>Your phone number will not be saved, used for marketing, or shared with any third parties. It is not 
                        stored in any database or linked to any user profile. Each request is treated as an independent and anonymous transaction. </li>   
                            <li> <b> Stateless Service: </b>Requests are processed live as they are received. Because we do not save any user data, no information is 
                        retained after a response is sent. While anonymized logs of requests (e.g., timestamps, requested garage) may be kept for analytical purposes to improve
                        the service, they are never tied to user information. </li> 
                        </ul>
                    </p>

                    <h2> Description of Messages </h2>
                    <p> 
                        The SMS messages you receive are strictly informational and contain only the data you have requested.
                        <ul>
                            <li> <b> Message Content: </b> The sole purpose of the SMS response is to provide real-time parking garage availability predictions for
                            students. </li>
                            <li> <b> No Unsolicited Messages: </b> You will never receive any promotional materials, advertisements, account alerts, or any other type of message 
                        that is not a direct reply to your initial inquiry. </li>
                        </ul>
                        Examples of Message Requests and Responses
                        <ul>
                            <li> <b> q </b> - 
                            This will invoke a response to send “quick predictions” or parking garage predictions for the next 30 mins, 1 hr, and 2 hrs. Responses will follow the format:
                            <br></br>
                            Parking Garage Predictions -
                                <ul>        
                                    <li>In the next 30 mins: North Garage: 34%, West Garage: 45%, South Garage: 76%
                                    </li>
                                    <li>
                                    In the next 1 hr: North Garage: 45%, West Garage: 66%, South Garage: 80%
                                    </li>
                                    <li> 
                                    In the next 2 hrs: North Garage: 85%, West Garage: 87%, South Garage: 90%
                                    </li>
                                </ul> 
                            </li>
                            <li> <b> p HH:MM AM/PM </b> -
                            This request is intended to get the parking garage prediction for the given time in HH:MM AM/PM format. Example request may look like: “p 10:34 AM” this will give a response for all garage fullness predictions at that time. Response example:
                            <br></br>
                            Parking Garage Predictions at 10:34 AM -
                                <ul> 
                                    <li>North Garage: 34%</li>
                                    <li>West Garage: 45%</li>
                                    <li>South Garage: 76%</li>
                                </ul>
                            </li>
                            <li> <b> hello </b> - 
                                This request is to get help/reference on what message requests formats are accepted, and may also act as an initial request to get started with SMS requests. Example Response:
                                <br></br>
                                Welcome to the SJSU park predict sms service! Message me in the following formats to get started -
                                <ul>
                                    <li>q - quick predictions, returns parking garage predictions for the 30 mins, 1 hr, and 2 hrs</li>
                                    <li>p HH:MM AM/PM - returns the predictions for a given time, example: p 10:34 AM</li>
                                    <li>hello - type this to see this dialogue again</li>
                                </ul>
                            </li>
                            <li> Anything else -
                                Any other requests will result in the following response:
                                <br></br>
                                Hmm don't think I know that one, reference the message formats and try again -
                                <ul>
                                    <li>q - quick predictions, returns parking garage predictions for the 30 mins, 1 hr, and 2 hrs</li>
                                    <li>p HH:MM AM/PM - returns the predictions for a given time, example: p 10:34 AM</li>
                                    <li>hello - type this to see this dialogue again</li>
                                </ul>
                            </li>
                        </ul>
                    </p>
                </div>
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

export default Policy;