import React from 'react'
import { Header as HeaderType } from '../../../../payload/payload-types'

const MobileNav: React.FC<{ header: HeaderType }> = ({ header }) => {
    const navItems = header?.navItems || [];
    

    return (
        <div>

        </div>
    )
}

export default MobileNav
