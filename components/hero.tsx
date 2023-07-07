import Link from 'next/link'

export default function Hero({children}: {children: React.ReactNode}) {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-left">
                <div className="max-w-md">
                    {children}
                </div>
            </div>
        </div>
    )
}
