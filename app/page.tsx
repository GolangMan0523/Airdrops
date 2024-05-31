import Link from 'next/link'

export default function Page() {
	return (
		<>
			<h1 className="text-center">click <Link href="/quests">here!</Link></h1>
		</>
	);
}
