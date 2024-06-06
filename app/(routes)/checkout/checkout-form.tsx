'use client'

import useCart from '@/hooks/use-cart';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CheckoutForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pin, setPin] = useState('');
    const [country, setCountry] = useState('');

    const items = useCart((state) => state.items)
    const removeAll = useCart((state) => state.removeAll)

    const [orderId, setOrderId] = useState('');
    const [amount, setAmount] = useState('0');

    useEffect(() => {
        const onCheckout = async () => {
            const response = await axios.post(
                `http://127.0.0.1:5000/api/payments/orders`,
                {
                    productIds: items.map((item) => item.id),
                },
            )
            setOrderId(response.data.orderId);
            setAmount(response.data.amount);
            console.log(orderId, amount);
        }
        onCheckout();
    }, []);

    return (
        <div className="flex mx-auto w-full h-full justify-center">
            <div className="leading-loose">
                <form className="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
                    <p className="text-gray-800 font-medium">
                        Customer information
                    </p>
                    <div className="">
                        <label className="block text-sm text-gray-00">
                            First Name
                        </label>
                        <input
                            className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                            id="cus_name"
                            name="cus_name"
                            type="text"
                            placeholder="Your Name"
                            aria-label="Name"
                            value={firstName}
                            onChange={(e) => { setFirstName(e.target.value) }}
                        />
                    </div>
                    <div className="mt-2">
                        <label className="block text-sm text-gray-00">
                            Last Name
                        </label>
                        <input
                            className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                            id="cus_name"
                            name="cus_name"
                            type="text"
                            placeholder="Your Name"
                            aria-label="Name"
                            value={lastName}
                            onChange={(e) => { setLastName(e.target.value) }}
                        />
                    </div>
                    <div className="mt-2">
                        <label className="block text-sm text-gray-600">
                            Email
                        </label>
                        <input
                            className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
                            id="cus_email"
                            name="cus_email"
                            type="text"
                            placeholder="Your Email"
                            aria-label="Email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                    </div>
                    <div className="mt-2">
                        <label className="block text-sm text-gray-600">
                            Phone
                        </label>
                        <input
                            className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
                            id="cus_email"
                            name="cus_email"
                            type="number"
                            placeholder="Your Phone Number"
                            aria-label="Email"
                            value={phone}
                            onChange={(e) => { setPhone(e.target.value) }}
                        />
                    </div>
                    <div className="mt-2">
                        <label className=" block text-sm text-gray-600">
                            Address Line 1
                        </label>
                        <input
                            className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded"
                            id="cus_email"
                            name="cus_email"
                            type="text"
                            placeholder="Street"
                            aria-label="Email"
                            value={address1}
                            onChange={(e) => { setAddress1(e.target.value) }}
                        />
                    </div>
                    <div className="mt-2">
                        <label className=" block text-sm text-gray-600">
                            Address Line 2
                        </label>
                        <input
                            className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded"
                            id="cus_email"
                            name="cus_email"
                            type="text"
                            placeholder="Street"
                            aria-label="Email"
                            value={address2}
                            onChange={(e) => { setAddress2(e.target.value) }}
                        />
                    </div>
                    <div className="mt-2">
                        <label className="hidden text-sm block text-gray-600">
                            City
                        </label>
                        <input
                            className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded"
                            id="cus_email"
                            name="cus_email"
                            type="text"
                            placeholder="City"
                            aria-label="Email"
                            value={city}
                            onChange={(e) => { setCity(e.target.value) }}
                        />
                    </div>
                    <div className="mt-2">
                        <label className="hidden text-sm block text-gray-600">
                            State
                        </label>
                        <input
                            className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded"
                            id="cus_email"
                            name="cus_email"
                            type="text"
                            placeholder="State"
                            aria-label="Email"
                            value={state}
                            onChange={(e) => { setState(e.target.value) }}
                        />
                    </div>
                    <div className="inline-block mt-2 w-1/2 pr-1">
                        <label className="hidden block text-sm text-gray-600">
                            Country
                        </label>
                        <input
                            className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded"
                            id="cus_email"
                            name="cus_email"
                            type="text"
                            placeholder="Country"
                            aria-label="Email"
                            value={country}
                            onChange={(e) => { setCountry(e.target.value) }}
                        />
                    </div>
                    <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                        <label className="hidden block text-sm text-gray-600">
                            Pincode
                        </label>
                        <input
                            className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded"
                            id="cus_email"
                            name="cus_email"
                            type="text"
                            placeholder="Pincode"
                            aria-label="Email"
                            value={pin}
                            onChange={(e) => { setPin(e.target.value) }}
                        />
                    </div>

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
                        <input type="hidden" name="callback_url" value="http://localhost:5000/api/payments/payment-callback" />
                        <input type="hidden" name="cancel_url" value="http://localhost:5000/api/payments/payment-cancel" />
                        <div className="mt-4 flex justify-center">
                        <button
                            type='submit'
                            className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                        >
                            Proceed
                        </button>
                    </div>
                    </form>
                </form>
            </div>
        </div>
    )
}

export default CheckoutForm
