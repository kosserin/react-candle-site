import React, {useState} from "react";

function About() {

    const [toggle, setToggle] = useState(false);

    function handleBurgerClick() {
        setToggle(!toggle);
    }

    return(
        <section id="about" className="first-section">
            <div className="image-container"></div>
            <div className="text-container">
                <h1>Our candles are crazy good</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, nostrum vitae nesciunt totam, aut similique eius non facere perferendis tenetur rem nisi voluptatibus quaerat incidunt sed deleniti autem, molestiae libero eaque atque? Nemo fuga exercitationem, tempora repellat vel voluptatem minus saepe odit nesciunt, qui esse id quam perferendis, deleniti perspiciatis!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet praesentium veniam libero. Esse numquam, possimus eaque et totam quisquam velit perferendis. Impedit perspiciatis laudantium minus aut dignissimos ea velit cum?</p>
                <a href="#">Explore Now</a>
            </div>
        </section>
    )
}

export default About;