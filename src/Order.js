import moment from 'moment';
import React from 'react';
import './Order.css';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';

function Order(order) {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className='order__id'>
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct
                id={item.id}
                image={item.image}
                price={item.price}
                rating={item.rating}
                title={item.title}
                hideButton />
            ))}
            <CurrencyFormat 
                renderText={(value) => (
                    <h3>Order Value: {value}</h3>
                )}
                decimalScale={2}
                value={getBasketTotal(basket) / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}

export default Order
