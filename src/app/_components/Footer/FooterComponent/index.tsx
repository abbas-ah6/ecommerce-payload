"use client"
import React from 'react'
import { Footer, Media } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'
import classes from './index.module.scss'
import { usePathname } from 'next/navigation'
import { inclusions, noHeaderFooterUrls } from '../../../_constants'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../../Button'

const FooterComponent = ({ footer }: { footer: Footer }) => {
    const pathName = usePathname()
    const navItems = footer?.navItems || [];

    return (
        <footer className={noHeaderFooterUrls.includes(pathName) ? classes.hide : ""}>
            <Gutter>
                <ul className={classes.inclusions}>
                    {inclusions.map(inclusion => (
                        <li key={inclusion.title}>
                            <Image
                                src={inclusion.icon}
                                alt={inclusion.title}
                                height={36}
                                width={36}
                                className={classes.icon} />
                            <h5 className={classes.title}>{inclusion.title}</h5>
                            <p className=''>{inclusion.description}</p>
                        </li>
                    ))}
                </ul>
            </Gutter>
            <div className={classes.footer}>
                <Gutter>
                    <div className={classes.wrap}>
                        <Link href={"/"}>
                            <Image src={"/logo-white.svg"} alt='logo' width={170} height={50}></Image>
                        </Link>

                        <p>{footer.copyright}</p>
                        {navItems.length > 0 && <div className={classes.socialLinks}>
                            {navItems.map((item) => {
                                const icon = item.link.icon as Media;
                                return (
                                    <Button
                                        key={item.link.label}
                                        newTab={item.link.newTab}
                                        el='link'
                                        href={item.link.url}
                                    >
                                        <Image
                                            src={icon.url}
                                            alt={icon.alt}
                                            width={24}
                                            height={24}
                                            className={classes.socialIcon}
                                        />
                                    </Button>
                                )
                            })}
                        </div>}
                    </div>
                </Gutter>
            </div>
        </footer>
    )
}

export default FooterComponent
