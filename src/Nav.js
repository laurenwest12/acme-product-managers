import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {findManager} from './store'

const mapStateToProps = (state) => {
    return {
        products: state.products,
        managers: state.managers
    }
}

const Nav = ({location: { pathname }, products, managers}) => {
    const links = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Products',
            path: '/products'
        },
        {
            title: 'Managers',
            path: '/managers',
        }
    ]

    return (
        <ul className = 'nav nav-pills'>
            {
                links.map(link => (
                    <li key = {link.path} className = 'nav-item'>
                        <Link to = {link.path} className={`nav-link${link.path === pathname ? ' active': ''}`}>
                            {link.title} 
                            {/* {managers && products && link.title === 'Managers' ?  findManager(products, managers).length : ''} */}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default connect(mapStateToProps)(Nav)
