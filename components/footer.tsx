import Link from 'next/link'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from 'react'
import { UrlObject } from 'url'

function createSocialMenuWith(classNames: string | undefined) {
    const socialItems = [
        {
            label: "e-mail",
            url: "mailto:michxymi@gmail.com"
        },
        {
            label: "linkedIn",
            url: "https://www.linkedin.com/in/mxymitoulias/"
        },
        {
            label: "github",
            url: "https://github.com/michxymi"
        }
    ]

    return (
        <ul tabIndex={0} className={classNames}>
            {socialItems.map((item: { url: string | UrlObject; label: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined }, index: Key | null | undefined) => {
                return <li><Link href={item.url} key={index}>{item.label}</Link></li>
            })}
        </ul>
    )
}

export default function Footer() {
    return (
        <footer className="footer footer-center bg-base-200 text-base-content rounded">
            { createSocialMenuWith("menu menu-horizontal px-1") }
        </footer>
    )
}
