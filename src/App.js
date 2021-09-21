import react, {useState,useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header'
import Navbar from './Navbar';
import About from './About';
import Shop from './Shop';
import Footer from './Footer';
import Carousel from './Carousel';
import Products from './Products';
import firstImage from './first.jpg';
import secondImage from './second.jpg';
import thirdImage from './third.jpg';
import fourthImage from './fourth.jpg';
import fifthImage from './fifth.jpg';
import sixthImage from './sixth.jpg';
import AboutPage from './AboutPage';
import Contact from './Contact';
import './App.css';

function App() {

  const [toggle, setToggle] = useState(false);
  const [offset, setOffset] = useState(0);
  const [focus,setFocus] = useState(false);
 
  const handleOnScroll = () => {
    window.onscroll = () => {
        setOffset(window.pageYOffset)
      }
}

  return (
    < Router>
    <div className="App">
      < Navbar handleOnScroll={handleOnScroll} offset={offset} toggle={toggle} setToggle={setToggle} />
      < Switch>
        < Route path='/react-candle-site/' exact component={Home} />
        < Route path='/react-candle-site/products' exact component={Products} />
        < Route path='/react-candle-site/about-page' exact component={AboutPage} />
        < Route path='/react-candle-site/contact' exact component={Contact} />
      </Switch>
        < Footer focus={focus} setFocus={setFocus} />
    </div>
    </Router>
  );
}


function Home() {

  const [cards, setCards] = useState([
    {
        image: firstImage,
        alt: 'firstImage',
        heading: 'Birthday candles',
        text: 'Variety of traditional, real flame candles that allow you to customize the look and feel of your venue',
        tag: '#'
    },
    {
        image: secondImage,
        alt: 'secondImage',
        heading: 'Tea Light',
        text: 'Surround a reception area or add them to dining tables to help set the mood at venues',
        tag: '#'
    },
    {
        image: thirdImage,
        alt: 'thirdImage',
        heading: 'Votives',
        text: "Like tea lights, they're great for decorating the area surrounding dining areas and parties",
        tag: '#'
    },
    {
        image: fourthImage,
        alt: 'fourthImage',
        heading: 'Real Flame Candles',
        text: 'Flame produce a real, warm, flickering glow',
        tag: '#'
    },
    {
        image: fifthImage,
        alt: 'fifthImage',
        heading: 'Flameless Candles',
        text: 'Runs on batteries or electric charges to minimize replacement costs',
        tag: '#'
    },
    {
        image: sixthImage,
        alt: 'sixthImage',
        heading: 'Both',
        text: 'Enchances the ambience at restaurants, bistros, catered events, hotels and spas',
        tag: '#'
    },
])
  const [slides, setSlides] = useState([
    { image: firstImage, alt: 'firstImage' , name: 'Borko Mirić', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet dolor veniam tenetur accusamus eaque. Dicta aliquid fugit. Placeat dolorum ratione, eius quam voluptate aspernatur atque laboriosam corrupti eos dolores laborum nemo est ut voluptatibus ullam consectetur minima id autem facilis molestiae. Perspiciatis animi.' },
    { image: secondImage, alt: 'secondImage' , name: 'Milan Stojanović', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet dolor veniam tenetur accusamus eaque similique laboriosam dignissimos maiores a non nisi ipsam explicabo natus, dicta aliquidis molestiae. Perspiciatis animi.' },
    { image: thirdImage, alt: 'thirdImage' , name: 'Dušan Kostić', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet dolor veniam tenetur accusamus eaque similique laboriosam dignissimos ' },
    { image: fourthImage, alt: 'fourthImage' , name: 'Darko Janković', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet dolor veniam tenetur accusamus eaque similique laboriosam dignissimos maiores aspernatur sed. Doloribus harum temporibus dolor corrupti quod expedita tempora cupiditate laudantium, non nisi ipsam explicabo natus, dicta aliquid fugit.' },
  ]);
  
  return(
    <div>
        <Header />
        < About />
        < Shop cards={cards} />
        < Carousel slides={slides} />
    </div>
  )
}

export default App;