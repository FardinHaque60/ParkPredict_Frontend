import '../styles/General.css';

import { useState } from "react"
import emailjs from "@emailjs/browser"

function About() {
    const [formData, setFormData] = useState({
        message: "",
    })
    const [status, setStatus] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus("Sending...")

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    message: formData.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setStatus("Message sent successfully ✅")
                    setFormData({ name: "", message: "" })
                },
                (error) => {
                    console.error("Email error:", error)
                    setStatus("Failed to send ❌")
                }
            )
            .finally(() => {
                setTimeout(() => {
                    setStatus("")
                }, 5000)
            })
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
                    Had a question, feature suggestion, or wanted to learn more about ParkPredict? Drop us a message below! 
                    Be sure to include an email or phone number if you would like for us to get back to you.
                    <form
                        onSubmit={handleSubmit}
                    >
                        <textarea
                            name="message"
                            placeholder="Your message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            style={{
                                width: '100%',
                                padding: '0.5rem',
                                border: '1px solid #ccc',
                                borderRadius: '6px',
                                marginBottom: '1rem',
                                marginTop: '1rem',
                                resize: 'vertical'
                            }}
                            required
                        />

                        <button
                            type="submit"
                            style={{
                                backgroundColor: formData.message ? '#007bff' : '#ccc',
                                color: 'white',
                                padding: '0.5rem 1rem',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: formData.message ? 'pointer' : 'not-allowed',
                                marginBottom: '1rem',
                                fontSize: '1rem'
                            }}
                            disabled={!formData.message}
                        >
                            Send
                        </button>

                        {status && <p style={{ marginTop: '0.75rem', fontSize: '0.95rem' }}>{status}</p>}
                    </form>
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