import Link from 'next/link'

function NavbarMenu(classNames: string) {
    const menuItems = [
        {
            label: "About",
            url: "/about",
        },
        {
            label: "Articles",
            url: "/articles",
        },
        {
            label: "Projects",
            url: "/projects",
        }
    ]

    return (
        <ul tabIndex={0} className={classNames}>
            {menuItems.map((item: { url: string; label: string }, index) => {
                return <li key={index}><Link href={item.url} key={index}>{item.label}</Link></li>
            })}
        </ul>
    )
}

export default function NavBar() {
    return (
        <nav className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    { NavbarMenu("menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52")}
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                {NavbarMenu("menu menu-horizontal px-1")}
            </div>
            <div className="navbar-end"/>
        </nav>
    )
}
