import React, { useContext, useState } from 'react';
import axios from 'axios';
import { assets, plans } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const BuyCredit = () => {
  const { user, setShowLogin, backendUrl } = useContext(AppContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePurchase = async (plan) => {
    console.log('Purchase button clicked for', plan);
    console.log('User context:', user);

    if (!user) {
      console.log('User not logged in, triggering login modal or navigating to /login');
      setShowLogin(true); // Show login modal
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${backendUrl}/api/payment/initialize`, {
        email: user.email,
        amount: plan.price * 100, // Paystack uses kobo (₦1 = 100 kobo)
      });

      const { authorization_url } = response.data;
      console.log('Redirecting to Paystack:', authorization_url);
      window.location.href = authorization_url;
      console.log('Authorization url is:', authorization_url)
    } catch (error) {
      console.error('Payment initialization failed:', error);
      const errorMessage = error.response?.data?.message || 'Failed to initialize payment. Please try again.';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-[80vh] text-center pt-14 mt-10'>
      <h1 className='text-center text-3xl font-medium mb-6 sm:mb-10'>Choose Your Plan</h1>
      {error && (
        <p className='text-red-500 mb-4' role='alert'>
          {error}
        </p>
      )}
      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans.map((item, index) => (
          <div
            key={item.id || index}
            className='bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-700 hover:scale-105 transition-all duration-500'
            role='region'
            aria-labelledby={`plan-${item.id || index}`}
          >
            <h2 id={`plan-${item.id || index}`} className='text-2xl sm:text-3xl'>
              AI-Flash📷
            </h2>
            <p className='mt-3 mb-1 font-semibold'>{item.id}</p>
            <p className='text-sm'>{item.desc}</p>
            <p className='mt-6'>
              <span className='text-3xl font-medium'>₦{item.price}</span> / {item.credits} Credits
            </p>
            <button
              className='w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52 disabled:opacity-50'
              onClick={() => handlePurchase(item)}
              disabled={isLoading}
              aria-label={`Purchase ${item.id} plan for ₦${item.price}`}
            >
              {isLoading ? 'Processing...' : user ? 'Purchase' : 'Get Started'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCredit;