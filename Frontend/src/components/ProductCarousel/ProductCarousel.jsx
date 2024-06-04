import React from 'react';
import './ProductCarousel.css'; // Import the CSS file for styling

const products = [
    {
        id: 1,
        sourceImage: 'https://i.pinimg.com/564x/f2/40/97/f24097c9f29abe501cd2fa7995103bc4.jpg',
        productName: 'Product 1',
        price: '$19.99',
        discount: 10
    },
    {
        id: 2,
        sourceImage: 'https://i.pinimg.com/564x/d6/b7/bb/d6b7bb04ece0033e5e8922c1d5d11e44.jpg',
        productName: 'Product 2',
        price: '$29.99',
        discount: 20
    },
    {
        id: 3,
        sourceImage: 'https://i.pinimg.com/564x/ed/f0/d1/edf0d1f3f6d42c6b18e4866c3b0cc02b.jpg',
        productName: 'Product 3',
        price: '$39.99',
        discount: 15
    },
    {
        id: 4,
        sourceImage: 'https://i.pinimg.com/564x/8e/3f/24/8e3f24ba4a34efa105a86395c66f1e44.jpg',
        productName: 'Product 3',
        price: '$39.99',
        discount: 15
    },
    {
        id: 5,
        sourceImage: 'https://i.pinimg.com/564x/f2/40/97/f24097c9f29abe501cd2fa7995103bc4.jpg',
        productName: 'Product 3',
        price: '$39.99',
        discount: 15
    },
    {
        id: 6,
        sourceImage: 'https://i.pinimg.com/564x/ed/f0/d1/edf0d1f3f6d42c6b18e4866c3b0cc02b.jpg',
        productName: 'Product 3',
        price: '$39.99',
        discount: 15
    }
];

const ProductCarousel = () => {
    return (
        <div className="product-carousel">
            <h2 className="carousel-title">Our Featured Products</h2>
            <div className="carousel-container">
                {products.map(product => (
                    <div className="product-card" key={product.id}>
                        <img src={product.sourceImage} alt={product.productName} className="product-image" />
                        <div className="product-details">
                            <h3 className="product-name">{product.productName}</h3>
                            <p className="product-price">Price: {product.price}</p>
                            <p className="product-discount">Discount: {product.discount}% OFF</p>
                        </div>
                        <div className="product-actions">
                            <button className="purchase-button">Add to Cart</button>
                            <button className="purchase-button">Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCarousel;
