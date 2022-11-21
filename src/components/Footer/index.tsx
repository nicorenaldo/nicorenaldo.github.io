import { Link } from "react-router-dom"

const Footer = () => {
    return <div className="flex p-8 gap-4 justify-end">
        <a href="mailto:nicorenald@gmail.com" className="font-bold text-bluec">Email</a>
        <a href="https://www.linkedin.com/in/nicorenaldo/" className="font-bold text-bluec">LinkedIn</a>
        <a href="https://github.com/nicorenaldo/" className="font-bold text-bluec">Github</a>
        <a href="https://nicorenaldo.medium.com/" className=" font-bold text-bluec">Medium</a>
    </div >
}

export default Footer