'use client'

import { Session } from 'next-auth'
import { signIn, signOut } from 'next-auth/react'
import Image from 'next/image'

interface NavProps {
	session: Session
}

export default function Nav({ user, expires }: Session) {
	return (
		<nav className="flex justify-between items-center py-8">
			<h1 className="font-extrabold  text-4xl">
				<span className="text-white">Prompt</span>
				<span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r  from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
					Mania!
				</span>
			</h1>
			<ul>
				{!user ? (
					<button
						className="px-6 py-2 text-purple-100 rounded bg-gradient-to-r bg-purple-500"
						onClick={() => signIn()}
					>
						Sign in
					</button>
				) : (
					<>
						<li>
							<Image
								width={48}
								height={48}
								src={user.image as string}
								alt="Profile picture"
								referrerPolicy="no-referrer"
								className="rounded-full"
							/>
						</li>
					</>
				)}
			</ul>
		</nav>
	)
}
