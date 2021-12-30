import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Amazon Banner" />
            </div>

            <div className="home__row">
                <Product 
                    id="12321341" 
                    title='The Lean Startup' 
                    price={19.99} 
                    image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' 
                    rating={4} 
                    />
                <Product 
                    id="49538094" 
                    title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl' 
                    price={239.0} 
                    image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX350_.jpg' 
                    rating={4} 
                    />
                {/* Product */}
            </div>

            <div className="home__row">
                <Product 
                    id="4903850"
                    title="Samsung LC49RG90 49' Curved LED Gaming Montior"
                    price={199.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                <Product 
                    id="4903850"
                    title="Samsung LC49RG90 49' Curved LED Gaming Montior"
                    price={199.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                <Product 
                    id="4903850"
                    title="Samsung LC49RG90 49' Curved LED Gaming Montior"
                    price={199.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
            </div>

            <div className="home__row">
                <Product 
                    id="90829332"
                    title="Samsung LC49RG90 49' Curved LED Gaming Montior- UltraWide"
                    price={1099.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
            </div>
        </div>
    )
}

export default Home
