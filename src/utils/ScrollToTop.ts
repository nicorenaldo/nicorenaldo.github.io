import React from 'react'
import { useLocation } from 'react-router'

const ScrollToTop: React.FC = () => {
    const { pathname } = useLocation()
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

export default ScrollToTop