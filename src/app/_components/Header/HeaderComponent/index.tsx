"use client"
import React from 'react'
import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'
import Link from 'next/link'
import classes from './index.module.scss'
import Image from 'next/image'
import { HeaderNav } from '../Nav'
import MobileNav from '../MobileNav'
import { noHeaderFooterUrls } from '../../../_constants'
import { usePathname } from 'next/navigation'

const HeaderComponent = ({ header }: { header: Header }) => {
    const pathName = usePathname();

    return (
        <nav className={[classes.header, noHeaderFooterUrls.includes(pathName) && classes.hide]
            .filter(Boolean)
            .join(" ")}>
            <Gutter className={classes.wrap}>
                <Link href="/">
                    <Image src='/logo-black.svg' alt='logo' width={170} height={50} />
                </Link>
                <HeaderNav header={header} />
                {/* <MobileNav header={header} /> */}
            </Gutter>
        </nav>
    )
}

export default HeaderComponent
