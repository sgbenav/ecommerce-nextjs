'use client'

import { ReactNode, useEffect, useState } from 'react'
import { SessionProvider } from 'next-auth/react'

export default function Hydrate({ children }: { children: ReactNode }) {
	const [isHydrated, setIsHydrated] = useState(false)

	//Wait till Nextjs rehydration completes
	useEffect(() => {
		setIsHydrated(true)
	}, [])
	return (
		<SessionProvider>
			{isHydrated ? (
				<body className="px-4 lg:px-48 font-roboto bg-slate-900">{children}</body>
			) : (
				<body></body>
			)}
		</SessionProvider>
	)
}
