'use client'

import { Session } from 'next-auth'
import { signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import Cart from './Cart'
import { useCart } from '@/store/cart'
import { LucideProps, ShoppingBag } from 'lucide-react'

interface NavProps {
	session: Session
}

export default function Nav({ user }: Session) {
	const cartStore = useCart()
	return (
		<nav className="flex justify-between items-center py-8">
			<h1 className="font-extrabold  text-4xl">
				<span className="text-white">Prompt</span>
				<span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r  from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
					Mania!
				</span>
			</h1>
			<ul className="flex items-center gap-10">
				{!user ? (
					<button
						className="px-6 py-2 text-purple-100 rounded bg-gradient-to-r bg-purple-500"
						onClick={() => signIn()}
					>
						Sign in
					</button>
				) : (
					<>
						<li onClick={() => cartStore.toggleCart()} className="text-white relative cursor-pointer">
							<ShoppingBag />
							<span className="absolute -top-2 -right-2 bg-purple-400 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs">{cartStore.cart.length}</span>						
						</li>
						<li>
							<Image
								width={36}
								height={36}
								src={user.image as string}
								alt="Profile picture"
								referrerPolicy="no-referrer"
								className="rounded-full"
							/>
						</li>
					</>
				)}
			</ul>
				{cartStore.isOpen && <Cart />}
		</nav>
	)
}
