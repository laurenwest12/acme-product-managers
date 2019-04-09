import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        openings: !state.products.find(product => product.managerId === null)
    }
}


const Home = ({openings}) => {
    return (
        <h6>
            We{!openings && " DON'T"} HAVE openings for Product Managers!
        </h6>
    )
}

export default connect(mapStateToProps)(Home)