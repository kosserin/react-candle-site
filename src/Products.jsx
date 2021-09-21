import react, {useEffect, useState} from 'react';
import firstImage from './first.jpg';
import secondImage from './second.jpg';
import thirdImage from './third.jpg';
import fourthImage from './fourth.jpg';
import fifthImage from './fifth.jpg';
import sixthImage from './sixth.jpg';
import styles from './App.css'
import { v4 as uuidv4 } from 'uuid';

function Products() {
    
    const [selectedItems, setSelectedItems] = useState(0);
    const [totalPrices, setTotalPrices] = useState(0)
    const [showBagContainer, setShowBagContainer] = useState(false);
    const [products, setProducts] = useState([
        { id: uuidv4(),
          img: firstImage,
          alt: 'firstImage',
          title: 'Candle of fire',
          price: '10,00',
          a: '#',
          clicked: false
        }, 
        { id: uuidv4(),
          img: secondImage,
          alt: 'secondImage',
          title: 'Candle of fire',
          price: '12,00',
          a: '#',
          clicked: false
        }, 
        { id: uuidv4(),
          img: thirdImage,
          alt: 'thirdImage',
          title: 'Candle of fire',
          price: '6,00',
          a: '#',
          clicked: false
        }, 
        { id: uuidv4(),
          img: fourthImage,
          alt: 'fourthImage',
          title: 'Candle of fire',
          price: '7,50',
          a: '#',
          clicked: false
        }, 
        { id: uuidv4(),
          img: fifthImage,
          alt: 'fifthImage',
          title: 'Candle of fire',
          price: '18,00',
          a: '#',
          clicked: false
        }, 
        { id: uuidv4(),
          img: sixthImage,
          alt: 'firstImage',
          title: 'Candle of fire',
          price: '21,00',
          a: '#',
          clicked: false
        }, 
      ]);

      function showShoppingModal() {
        setShowBagContainer(prev =>{
          return !prev;
        })
      }

    function changeButton(e) {
      const newProducts = [...products];
      const xd = newProducts.find(product => product.id === e.target.parentNode.id);
      xd.clicked = true;
      setSelectedItems(prev =>{
        return prev+1;
      })
      setTotalPrices(prev =>{
        let haha = parseInt(xd.price,10)
        return prev+haha;
      })
      setProducts(newProducts);
    }

    function removeOrders() {
      setTotalPrices(0);
      setSelectedItems(0)
      const newProducts = products.map(product => {
        product.clicked = false;
      })

    }

    return(
        <section id="products">
            <i onClick={showShoppingModal} className="fas fa-shopping-bag">
            { showBagContainer ? <div className="shopping-bag-container">
              { selectedItems>0 ? <span onClick={removeOrders}>Remove All</span> : '' }
              <p>You ordered <span>{selectedItems}</span> {selectedItems>1 ? 'items' : 'item'}</p>
            <p>Total : <span>{totalPrices} €</span></p>
              <a href="#">Checkout</a>
            </div> : '' }
            </i>
            <h1>Featured products</h1>
            <div className="products-container">
                {products.map(product =>(
                    <div className="product" id={product.id} key={uuidv4()}>
                        <img src={product.img} alt={product.alt} />
                        <h2>{product.title}</h2>
                        <p>{product.price} €</p>
                        <button onClick={changeButton} id={uuidv4()} href={product.a}>{ product.clicked ? `ADDED TO CART` : 'Add to cart' }</button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Products;