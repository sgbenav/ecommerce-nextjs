interface ProductDetailProps {
	params: {
		productId: string
	}
}

async function getProduct(productId: string) {
	// Fetch product from Stripe API
  
}

export default async function ProductDetails({ params }: ProductDetailProps) {
  const { productId } = params
  const product = await getProduct(productId)
	return (
		<div>
			<h1>{product.name}</h1>
		</div>
	)
}
