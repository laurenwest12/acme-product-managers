import React, {Component} from 'react'
import {getProductsThunk, getManagersThunk, postManagerIdThunk} from './store'
import { connect } from 'react-redux'

const mapDispatchToProps = ( dispatch ) => {
    return {
        getProductsThunk: () => dispatch(getProductsThunk()),
        getManagersThunk: () => dispatch(getManagersThunk()),
        postManagerIdThunk: (id) => dispatch(postManagerIdThunk(id))
    }
}

const mapStateToProps = ( state ) => {
    return {
        products: state.products,
        managers: state.managers
    }
}

class Products extends Component {
    async componentDidMount() {
        await this.props.getProductsThunk()
        await this.props.getManagersThunk()
    }

    constructor() {
        super()
        this.state = {
            id: null,
            managerId: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            id: event.target.id,
            managerId: event.target.value
        })

    }

    handleSubmit(event) {
        event.preventDefault()
        postManagerIdThunk((this.state.id * 1))
   }
    

    render() {
        const products = this.props.products
        const managers = this.props.managers

        return (
            <div className='list-group'>
                {
                    products.map(product => (
                        <div key = {product.name} className='list-group-item'>
                            <h6>{product.name}</h6>
                            <div className = 'form-group'>
                            <form onSubmit = {this.handleSubmit}>
                            <label><em>Product Manager</em></label>
                            <select onChange = {this.handleChange} id = {product.id} className='form-control'>
                                <option value> none </option>
                                {managers && managers.map(manager => (
                                    <option value = {manager.id} key = {manager.name}>{manager.name}</option>
                                ))}
                            </select>
                            <button type = 'submit' className = 'btn btn-primary'>Save</button>
                            </form>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)