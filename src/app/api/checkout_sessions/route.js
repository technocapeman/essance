// TODO: Implement webhooks and store user data in Firestore to prevent fraud
import { NextResponse, NextRequest } from 'next/server'; // Importing Next.js server-side response and request helpers
import Stripe from 'stripe'; // Importing Stripe library

// Initializing Stripe with secret key from environment variables
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Function to handle POST requests
export async function POST(req) {
    try {
        const origin = req.headers.get('origin'); // Getting the origin header from the request
        if (!origin) {
            throw new Error('Missing origin header'); // Throw an error if the origin header is missing
        }

        // Creating a new Stripe checkout session
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    price: 'price_1PSUg8DaTb4s8lulW7JbRjYC',
                    quantity: 1, // Quantity of the item
                },
            ],
            mode: 'payment', // Setting the payment mode
            success_url: `${origin}/?success=true`,  // Redirect URL for successful payment
            cancel_url: `${origin}/?canceled=true`,  // Redirect URL for canceled payment
            automatic_tax: { enabled: true }, // Enabling automatic tax calculation
        });

        // Returning the session URL as a JSON response with status 200
        return NextResponse.json({ url: session.url }, { status: 200 });
    } catch (err) {
        console.error('Error creating Stripe session:', err); // Logging the error
        // Returning the error message as a JSON response with appropriate status code
        return NextResponse.json({ message: err.message }, { status: err.statusCode || 500 });
    }
}

// Function to handle GET requests
export function GET() {
    // Returning a 405 Method Not Allowed response
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
}
