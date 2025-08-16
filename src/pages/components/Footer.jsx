import '../styles/FooterStyles.css'

function Footer() {
    return (
        <span className="footer">
            <div className="footer-container">
                <p className="footer-links left">
                    <a href="/sms-policy" style={{ color: 'white' }}>Get Predictions in Your Messages</a>
                </p>
                <div className="footer-divider"></div>
                <p className="footer-links right">
                    <a href="/about" style={{ color: 'white' }}>About</a>
                </p>
            </div>
        </span>
    )
}

export default Footer;