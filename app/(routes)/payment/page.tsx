'use client'

import React, { useEffect, useState } from 'react'
import useCart from '@/hooks/use-cart';
import axios from 'axios';

const CheckoutPage = () => {
    const [orderId, setOrderId] = useState('');
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        // Retrieve order details from local storage
        const storedOrderId = localStorage.getItem('orderId');
        const storedAmount = localStorage.getItem('amount');

        if (storedOrderId && storedAmount) {
        setOrderId(storedOrderId);
        setAmount(parseFloat(storedAmount));
        }
    }, []);

    return (
        <div>
            <form method="POST" action="https://api.razorpay.com/v1/checkout/embedded">
                <input type="hidden" name="key_id" value={process.env.NEXT_PUBLIC_KEY_ID} />
                <input type="hidden" name="amount" value={amount} />
                <input type="hidden" name="order_id" value={orderId} />
                <input type="hidden" name="name" value="Vicuna Kouture" />
                <input type="hidden" name="description" value="A Wild Sheep Chase" />
                <input type="hidden" name="image" value="https://qwerty1234.sirv.com/Images/IMG_20240130_142842_046.jpg" />
                <input type="hidden" name="prefill[name]" value="Gaurav Kumar" />
                <input type="hidden" name="prefill[contact]" value="9123456780" />
                <input type="hidden" name="prefill[email]" value="gaurav.kumar@example.com" />
                <input type="hidden" name="notes[shipping address]" value="L-16, The Business Centre, 61 Wellfield Road, New Delhi - 110001" />
                <input type="hidden" name="callback_url" value="https://orthodox-lucille-student4100-e471438e.koyeb.app/api/payments/payment-callback" />
                <input type="hidden" name="cancel_url" value="https://orthodox-lucille-student4100-e471438e.koyeb.app/api/payments/payment-cancel" />
                <div className="mt-4 flex justify-center">
                    <button
                        type='submit'
                        className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                    >
                        Proceed
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutPage
