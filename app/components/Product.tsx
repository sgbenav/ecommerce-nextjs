import { formatPrice } from '@/utils/formatPrice'
import Image from 'next/image'
import Link from 'next/link'

export default function Product({
	id,
	name,
	price,
	image,
	description,
	currency,
}: Product) {
	return (
		<Link href={`/product/${id}`}>
			<div className="relative h-40 w-auto overflow-hidden rounded-t-lg border-b-2 border-purple-500">
				<picture className="block">
					<Image
						src={image as string}
						alt={name}
						fill
						className="hover:scale-125 ease-in duration-150 object-cover"
					/>
				</picture>
				<div className="absolute bottom-0 bg-slate-950 opacity-80 flex justify-between items-center h-12 w-full px-2">
					<span className="text-gray-200 dark:text-gray-100 text-xs break-all w-36">
						{name}
					</span>
					<span className="font-bold text-gray-200 dark:text-gray-100 text-md">
						{price ? formatPrice(price, currency) : 'Free'}
					</span>
				</div>
			</div>
		</Link>
	)
}
