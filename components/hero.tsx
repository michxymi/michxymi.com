import Link from 'next/link'

export default function Hero() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-left">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Michael Xymitoulias</h1>
                    <p className="pt-6">Technical Software Manager</p>
                    <Link href="https://nanoporetech.com/" className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">@Oxford Nanopore Technologies</Link>
                </div>
            </div>
        </div>
    )
}
