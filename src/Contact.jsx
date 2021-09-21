import react from 'react';

function Contact() {
    


    return(
        <section id="contact">
            <h1>Contact</h1>
            <h2>We would love to help</h2>
            <p>We like to create candales with fun, open-minded people. Feel free to say hello!</p>
            <div className="contact-container">
                <form>
                    <input type="text" name="name" id="name" placeholder='Your Name...' />
                    <input type="email" name="email" id="email" placeholder='Your Email...' />
                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Your Message...'></textarea>
                    <button type="submit">Send</button>
                </form>
                <div className="contact-right-side">
                <div className="contact-text-container">
                    <div className="items-container">
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="item-text">
                        <h2>Grover Web Design</h2>
                        <p>Columbia, SC</p>
                    </div>
                    </div>
                    <div className="items-container">
                        <i className="fas fa-phone"></i>
                        <p>(+381) 061234567</p>
                    </div>
                    <div className="items-container">
                        <i className="fas fa-envelope"></i>
                        <p>koss@frontend.com</p>
                    </div>
                </div>
                <div className="contact-social-container">
                    <div className="contact-icons">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-google"></i></a>
                    </div>
                    <a href='#'>Koss candles on Thumbback</a>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;