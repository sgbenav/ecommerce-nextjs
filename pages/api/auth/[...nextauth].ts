import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import Stripe from 'stripe'

const prisma = new PrismaClient()

export default NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
	],
	events: {
		createUser: async ({ user }) => {
			const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
				apiVersion: '2022-11-15',
			})

			if (user.email && user.name) {
				const customer = await stripe.customers.create({
					email: user.email,
					name: user.name,
				})

				await prisma.user.update({
					where: {
						id: user.id,
					},
					data: {
						stripeCustomerId: customer.id,
					},
				})
			}
		},
	},
})
