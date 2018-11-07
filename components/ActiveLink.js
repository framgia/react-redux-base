import { withRouter } from 'next/router'
import {Router, Link} from '../routes'

const ActiveLink = ({ children, name, className, params}) => {
    const handleClick = (e) => {
        e.preventDefault()
        Router.pushRoute(name, params)
    }

    return (
        <Link route={name} params={params}>
            <a onClick={handleClick} className={className}>
                {children}
            </a>
        </Link>
    )
}

export default withRouter(ActiveLink)
