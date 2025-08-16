import '../styles/General.css'

function Policy() {
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
                <h1 className="parking-title">
                    Text "Hello" To Number <a href="https://docs.google.com/document/d/1H2TS5vrcon_N_KF47SQpuabw3oAgYb-Zlpf5U2uiN8M/edit?usp=sharing" target='_blank'>here</a>
                </h1>
                <p>
                    Texting hello will provide you message formats to get texted the parking garage fullness predictions. 
                    Number is protected in a doc to prevent against bot scraping, apologies for the inconvenience.
                </p>
                <h1 className="parking-title">
                    SMS Policy
                </h1>
                <div>
                    <p> Users are sent SMS messages strictly based on a user first initiated policy. SMS messages are only sent to users as a 1 message 
                        response when they first send a message. Different messages users can send can be found <a href="https://docs.google.com/document/d/1H2TS5vrcon_N_KF47SQpuabw3oAgYb-Zlpf5U2uiN8M/edit?usp=sharing" target="_blank">here</a>.
                    </p>
                    <p>
                        Messages are only and <b>strictly</b> sent as a response to user initiated requests. The SMS service is stateless and does not 
                        save any information related to the sender. Requests are simply fulfilled live based on the user's content in the request body. 
                        Since there is no service being provided with scheduled SMS messages, notifications, verifications, or user data being saved, 
                        there is no protocol implemented where users fill out a form or message OPT-IN to “subscribe” to our service. Instead requests are 
                        handled as they come and responses are saved in logs for analytics, but are not tied to user information and users will never be
                        messaged if they do not initiate conversation first.
                    </p>
                </div>
                <div className="return-link">
                    <h2 className="parking-services">
                        <a href="https://docs.google.com/document/d/1H2TS5vrcon_N_KF47SQpuabw3oAgYb-Zlpf5U2uiN8M/edit?usp=sharing" target='_blank'>
                            Full SMS Policy
                        </a>
                    </h2>
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