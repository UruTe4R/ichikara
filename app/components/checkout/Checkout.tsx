'use client'
import { useEffect } from 'react';

import {useSearchParams} from 'next/navigation';

export default function Checkout() {
  const searchParams = useSearchParams();


  useEffect(() => {
    if (searchParams.get('success')) {
      console.log('success', searchParams.get('session_id'));
    }

    if (searchParams.get('canceled')) {
      console.log('canceled')
    }
  }, [searchParams])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('submit');
    const stripe = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/stripe/create-checkout-session/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json());
    console.log(stripe.url);
    window.location.href = stripe.url;
  }

  return (
    <section>
    <div className="product">
      <div className="description">
      <h3>T-shirt</h3>
      <h5>$20.00</h5>
      </div>
    </div>
    <form onSubmit={handleSubmit}>
      <button type="submit">
        Checkout
      </button>
    </form>
  </section>
  )
}