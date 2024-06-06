'use client'

import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import Button from '@/components/ui/button'
import Currency from '@/components/ui/currency'
import useCart from '@/hooks/use-cart'
import { toast } from 'react-hot-toast'
import Link from 'next/link'

const Summary = () => {
    const searchParams = useSearchParams()
    const items = useCart((state) => state.items)
    const removeAll = useCart((state) => state.removeAll)

    useEffect(() => {
        if (searchParams.get('success')) {
            toast.success('Payment completed.')
            removeAll()
        }

        if (searchParams.get('canceled')) {
            toast.error('Something went wrong.')
        }
    }, [searchParams, removeAll])

    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.price)
    }, 0)


    // const [orderId, setOrderId] = useState('');
    // const [amount, setAmount] = useState('0');

    // useEffect(() => {
    //     const onCheckout = async () => {
    //         const response = await axios.post(
    //             `http://127.0.0.1:5000/api/payments/orders`,
    //             {
    //                 productIds: items.map((item) => item.id),
    //             },
    //         )
    //         setOrderId(response.data.orderId);
    //         setAmount(response.data.amount);
    //         console.log(orderId, amount);
    //     }
    //     onCheckout();
    // }, []);

    return (
        <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <div className="text-base font-medium text-gray-900">
                        Order total
                    </div>
                    <Currency value={totalPrice} />
                </div>
            </div>
            {/* <form method="POST" action="https://api.razorpay.com/v1/checkout/embedded">
                <input type="hidden" name="key_id" value={process.env.NEXT_PUBLIC_KEY_ID} />
                <input type="hidden" name="amount" value={amount}/>
                <input type="hidden" name="order_id" value={orderId} />
                <input type="hidden" name="name" value="Vicuna Kouture" />
                <input type="hidden" name="description" value="A Wild Sheep Chase" />
                <input type="hidden" name="image" value="https://cdn.razorpay.com/logos/BUVwvgaqVByGp2_large.jpg" />
                <input type="hidden" name="prefill[name]" value="Gaurav Kumar" />
                <input type="hidden" name="prefill[contact]" value="9123456780" />
                <input type="hidden" name="prefill[email]" value="gaurav.kumar@example.com" />
                <input type="hidden" name="notes[shipping address]" value="L-16, The Business Centre, 61 Wellfield Road, New Delhi - 110001" />
                <input type="hidden" name="callback_url" value="http://localhost:5000/api/payments/payment-callback" />
                <input type="hidden" name="cancel_url" value="http://localhost:5000/api/payments/payment-cancel" />
                <Button
                type='submit'
                disabled={items.length === 0}
                className="w-full mt-6"
            >
                Checkout
            </Button>
            </form> */}
            <Link href='/checkout'>
            <Button
                disabled={items.length === 0}
                className="w-full mt-6"
            >
                Checkout
            </Button>
            </Link>

        </div>
    )
}

export default Summary
