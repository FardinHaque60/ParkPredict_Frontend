function TopBar() {
    return (
        <span>
            <header className="sjsu-header u-bg--dark" role="banner">
                <div className="wrap">
                    <a className="sjsu-title" href="https://www.sjsu.edu/" target="_blank" rel="noopener noreferrer">
                        SJSU
                    </a>
                </div>
            </header>

            <span className="sjsu-gradientbar"></span>
            <main className="sjsu-main"></main>
        </span>
    );
}

export default TopBar;