import React, {Component} from 'react'
import { connect } from 'react-redux'
import {findManager} from './store'

const mapStateToProps = ( state ) => {
    return {
        products: state.products,
        managers: state.managers
    }
}


class Managers extends Component {


    render() {
        const products = this.props.products
        const managers = this.props.managers
        return (
            <div className='list-group'>
            
                { managers && products ? <ul>
                    <ul>{
                        findManager(products, managers).map(manager => <li key = {manager.name}>{manager.name}</li>)}
                    </ul>
                </ul> : ''
                }
            </div>
        )
    }
}

export default connect(mapStateToProps)(Managers)
