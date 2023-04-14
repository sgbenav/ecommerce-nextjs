'use client'

import { useCart } from '@/store/cart'

export default function Cart() {
	return (
		<div className="fixed w-full h-screen left-0 top-0 bg-black/60 z-50">
			<div className="absolute right-0 top-0 w-1/4 h-screen text-gray-700  bg-gradient-to-t  from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] pl-1">
				<div className="h-full w-full bg-slate-900 p-12">
					<h1>Here&apos;s your shopping list</h1>
				</div>
			</div>
		</div>
	)
}
