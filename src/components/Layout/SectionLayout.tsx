import React from "react"
import { Body } from "../Common/Text"

type SectionLayoutProps = {
    title: string
}

const SectionLayout = ({ children, title }: React.PropsWithChildren<SectionLayoutProps>) => {
    return <div className="flex flex-col md:flex-row gap-4 md:gap-16">
        <div className="md:basis-1/4 md:text-right">
            <Body className="font-bold uppercase text-bluec">{title}</Body>
        </div>
        <div className="md:basis-3/4">
            {children}
        </div>
    </div>
}

export default SectionLayout