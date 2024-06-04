import React from 'react';
import './CredibilitySection.css'; // Import the CSS file for styling

const CredibilitySection = () => {
    return (
        <section className="credibility-section">
            <div className="container">
                <h2 className="section-title"><p>Why Us?</p> Facts speak louder than words</h2>
                <div className="credibility-content">
                    <div className="credibility-item">
                       
                        <h3>Secure Payment</h3>
                        <p>We use industry-leading encryption to ensure your payment information is safe and secure.</p>
                    </div>
                    <div className="credibility-item">
                       
                        <h3>Verified Reviews</h3>
                        <p>Read thousands of verified reviews from our satisfied customers.</p>
                    </div>
                    <div className="credibility-item">
                        
                        <h3>Fast Shipping</h3>
                        <p>We ensure fast and reliable shipping to get your products to you on time.</p>
                    </div>
                    <div className="credibility-item">
                        
                        <h3>24/7 Customer Support</h3>
                        <p>Our customer support team is available 24/7 to assist you with any inquiries.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CredibilitySection;
