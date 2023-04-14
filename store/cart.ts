import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartItem {
	id: string
	name: string
	price: number
	images?: string[]
	description?: string
	unit_amount: number
	quantity: number
}

interface CartStore {
	cart: CartItem[]
	isOpen: boolean
	toggleCart: () => void
}

export const useCart = create<CartStore>()(
	persist(
		(set) => ({
			cart: [],
			isOpen: false,
			toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
		}),
		{
			name: 'cart',
		},
	),
)
