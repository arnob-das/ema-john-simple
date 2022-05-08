import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/localStorageHandler';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);

    // load product information
    useEffect(() => {
        fetch('products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProducts(data)
            })
    }, []);

    // handle get saved products from local storage
    useEffect(() => {
        if (products.length) {
            const storedCart = [];
            const savedCart = getStoredCart()
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    addedProduct.quantity = savedCart[key]
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products]);

    // handle add to cart
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        // add to local storage
        addToDb(product.key);
    }

    // handle search for products
    const handleSearch = event => {
        const searchText = event.target.value;
        const filteredProducts = products.filter(product => (product.name.toLowerCase()).includes(searchText.toLowerCase()))
        setDisplayProducts(filteredProducts);

    }


    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search Products"
                    onChange={handleSearch}
                />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        displayProducts.map(product =>
                            <Product key={product.key}
                                product={product}
                                handleAddToCart={handleAddToCart}
                            />)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart} />
                </div>
            </div>
        </>
    );
}
export default Shop;