import { NextResponse, NextRequest } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
    try {
        const origin = req.headers.get('origin');
        if (!origin) {
            throw new Error('Missing origin header');
        }

        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    price: 'price_1PSUg8DaTb4s8lulW7JbRjYC',
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${origin}/?success=true`,
            cancel_url: `${origin}/?canceled=true`,
            automatic_tax: { enabled: true },
        });
        return NextResponse.redirect(session.url, 303);
    } catch (err) {
        console.error('Error creating Stripe session:', err);
        return NextResponse.json({ message: err.message }, { status: err.statusCode || 500 });
    }
}

export function GET() {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
}
