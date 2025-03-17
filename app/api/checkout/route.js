import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51QBmYBCF6g9z4JDcaj2IZrHNleEhWF1D6XrLwyTbLgXF3Rwb1bwCjlZ2R8KG0ZG1PLUXWqs3mPzaR6caj4m8g2jJ00Fcu0kXwx'); // Replace with your actual Stripe secret key

export async function POST(req) {
  const { email, paymentMethodId, priceId } = await req.json();

  try {
    // Create a customer in Stripe
    const customer = await stripe.customers.create({
      payment_method: paymentMethodId,
      email: email,
      invoice_settings: { default_payment_method: paymentMethodId },
    });

    // Create a subscription
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: priceId }],
      expand: ['latest_invoice.payment_intent'],
    });

    return new Response(JSON.stringify(subscription), { status: 200 });
  } catch (error) {
    console.error('Subscription creation failed:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
