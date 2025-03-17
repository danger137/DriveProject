
import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import "./sub.css";
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { useRouter } from 'next/navigation';
export default function SubscriptionForm() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [CompanyName, setCompanylName] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(''); // State for product selection
  const stripe = useStripe();
  const elements = useElements();
  
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [loading, setLoading] = useState(false); // State for loading


  // Define product price IDs
  const productPriceIds = {
    product1: 'price_1QBoCECF6g9z4JDcqjy2QKXq',
    product2: 'price_1QBoHGCF6g9z4JDcBEUqDfl1',
    product3: 'price_1QBoHrCF6g9z4JDcThlMzKAA',
    product4: 'price_1QBoRMCF6g9z4JDcryYZZzwx',
    product5: 'price_1QBoRnCF6g9z4JDcddx94z3H',
    product6: 'price_1QBoWNCF6g9z4JDcCeRjxkK5',
    product7: 'price_1QBoWvCF6g9z4JDchNiFzQfS',
    product8: 'price_1QBoXTCF6g9z4JDczpaqGG7i',
    product9: 'price_1QBoXxCF6g9z4JDchhi0ZMtf',
    product10: 'price_1QBoYOCF6g9z4JDc34jbgmsY',
    product11: 'price_1QBogQCF6g9z4JDcm3m62gSj',
    product12: 'price_1QBoh0CF6g9z4JDctlzNUMYD',
    product13: 'price_1QBohbCF6g9z4JDcLvYJG4vt',
    product14: 'price_1QBoi4CF6g9z4JDccXwDhyMH',
    product15: 'price_1QBoiWCF6g9z4JDc96aMI373',
  };


let move = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!stripe || !elements) {
      console.error("Stripe.js hasn't loaded yet.");
      return;
    }
  
    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      console.error('CardElement not found');
      return;
    }
  
    setLoading(true);
  
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: { email },
    });
  
    if (error) {
      console.error('Error creating payment method:', error);
      setAlertMessage('Error creating payment method. Please try again.');
      setShowAlert(true);
      setLoading(false);
      return;
    }
  
    try {
      setLoading(true);
    
      const { data } = await axios.post('/api/checkout', {
        email,
        paymentMethodId: paymentMethod.id,
        priceId: productPriceIds[selectedProduct],
      });
    
      console.log('Subscription created successfully:', data);
    
      // صارف کو ڈیٹا بیس میں محفوظ کریں
      await axios.post('/api/saveUser', {
        email,
        name: fullName,
        password, // حیش شدہ پاس ورڈ بھیجنا
      });
    
      setAlertMessage('Congratulations! Your subscription was successful.');
      setShowAlert(true);
    
      // اگر منتخب کردہ پروڈکٹ `product1` یا `product2` ہے تو مخصوص URL پر بھیجیں
      if (selectedProduct === 'product1') {
        window.location.href = 'https://www.va-drivercourses.com/clickIn.php?school=326';
      } else if (selectedProduct === 'product2') {
        window.location.href = 'https://www.va-drivercourses.com/clickIn.php?school=448';
      }else if (selectedProduct === 'product3') {
        window.location.href = 'https://www.va-drivercourses.com/clickIn.php?school=449';
      }else if (selectedProduct === 'product4') {
        window.location.href = ' https://www.va-drivercourses.com/clickIn.php?school=450';
      }else {
        move.push('/Login');
      }
    } catch (err) {
      console.error('Error creating subscription:', err.response?.data?.error || err.message);
      setAlertMessage('Subscription failed. Please try again.');
      setShowAlert(true);
    } finally {
      setLoading(false);
    }
    
  
    setEmail('');
    setFullName('');
    setCompanylName('');
    setSelectedProduct('');
    setPassword('');

    elements.getElement(CardElement).clear();
  };
  
  

  return (

<div id='cbg' className="subscription-container">
  <h2 className="subscription-heading">Subscribe to Our Service</h2>
  <form onSubmit={handleSubmit} className="subscription-form">
    <div className="form-group">
      <label htmlFor="fullName" className="form-label">Full Name</label>
      <input
        type="text"
        id="fullName"
        placeholder="Enter your full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="form-input"
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="CompanyName" className="form-label">Company Name</label>
      <input
        type="text"
        id="fullName"
        placeholder="Enter your company name"
        value={CompanyName}
        onChange={(e) => setCompanylName(e.target.value)}
        className="form-input"
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="email" className="form-label">Email address</label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-input"
        required
      />
      <input
        type="password"
        id="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-input"
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="subscriptionPlan" className="form-label">Subscription Plan</label>
      <select
        id="subscriptionPlan"
        value={selectedProduct}
        onChange={(e) => setSelectedProduct(e.target.value)}
        className="form-select"
        required
      >
        <option value="">Choose a plan...</option>
        <option value="product1">Driver Improvement Clinic 8-Hr - $60/month</option>
        <option value="product2">DTS (36/Hour Driver’s Education) - $90/month</option>
        <option value="product3">3XF (Three Times Failure) - $95/month</option>
        <option value="product4">90m (90-Minute Parent/Teen)- $$45/month</option>
        <option value="product5">External Audits - $150/month</option>
        <option value="product6">Fixed Assets Management - $1000/month</option>
        <option value="product7">Secerterial practices - $400/month</option>
        <option value="product8">Corporate solutions - $300/month</option>
        <option value="product9">Management Solutions - $300/month</option>
        <option value="product10">IRS - $100/month</option>
        <option value="product11">Tax returns indibiduals, corporate returns - $200/month</option>
        <option value="product12">Payroll Management systems - $300/month</option>
        <option value="product13">Feasibility of new projects - $5000/month</option>
        <option value="product14">Acuiquistions and mergers - $300/month</option>
        <option value="product15">Investment portfolio - $450/month</option>
      </select>
    </div>
    <div className="form-group">
    <CardElement options={{ style: { base: { fontSize: '16px', color: '#333' } } }} className="cardElement" />
    </div>

    <button type="submit" className="form-button" disabled={!stripe || !elements}>
      Subscribe Now
    </button>
  </form>
  {loading && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(0,0,0,0.5)', padding: '20px', borderRadius: '5px', color: '#fff' }}>
          <p>Loading...</p>
          <div className="spinner" style={{ border: '8px solid #f3f3f3', borderTop: '8px solid #3498db', borderRadius: '50%', width: '50px', height: '50px', animation: 'spin 1s linear infinite' }}></div>
          <style>
            {`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}
          </style>
        </div>
      )}

      {showAlert && (
        <div style={{ position: 'fixed', top: '20px', right: '20px', backgroundColor: '#d4edda', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0,0,0,0.2)' }}>
          <p>{alertMessage}</p>
          <button
            onClick={() => setShowAlert(false)}
            style={{ background: 'none', border: 'none', fontSize: '16px', cursor: 'pointer' }}
          >
            &times;
          </button>
        </div>
      )}
</div>



  

  


  
  );
}
