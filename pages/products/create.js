import React from 'react'
import {connect} from 'react-redux'
import Form from './../../components/product/Form'
import { reqCreateProduct } from './../../modules/product/actions'
import { withRouter } from 'next/router'

class CreatePage extends React.Component {
    static getInitialProps ({ store, isServer }) {
        return { isServer }
    }

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            price: ''
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    onSubmit = e => {
        e.preventDefault();
        const { name, description, price } = this.state;
        const params = {name, description, price};
        this.props.createProduct(params, this.props.router)
    };

    render () {
        return (
            <Form
                product={this.state}
                onChange={this.onChange}
                onSubmit={this.onSubmit}
            />
        )
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, props) => {
    return {
        createProduct: (product, router) => {
            dispatch(reqCreateProduct(product, router));
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePage));
