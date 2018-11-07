import React from 'react'
import {connect} from 'react-redux'
import Form from './../../components/product/Form'
import Head from './../../components/Seo';
import { withRouter } from 'next/router'
import { reqEditProduct, reqUpdateProduct } from './../../modules/product/actions';
import { productsSelector } from './../../modules/product/selectors';

class EditPage extends React.Component {
    static async getInitialProps ({ctx}) {
        const { query } = ctx;

        return {
            id: query.id
        }
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
        this.props.updateProduct(this.props.id, params, this.props.router)
    };

    componentDidMount() {
        this.props.editProduct(this.props.id)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.products) {
            const {product} = nextProps.products;
            if (product) {
                this.setState({
                    name: product.name,
                    description: product.description,
                    price: product.price
                });
            }
        }
    }

    render (props) {
        const {product} = this.props.products;
        const renderHead = product && Object.keys(product).length > 0 && (
            <Head 
                object={
                    [
                        {
                            key: 'title',
                            content: product.name
                        },
                        {
                            key: 'description',
                            title: 'name',
                            content: product.name
                        },
                        {
                            key: 'og:title',
                            title: 'property',
                            content: product.name
                        },
                        {
                            key: 'og:description',
                            title: 'property',
                            content: product.description
                        },
                        {
                            key: 'site_name',
                            title: 'property',
                            content: 'anything',
                        },
                        {
                            key: 'og:type',
                            title: 'property',
                            content: 'anything'
                        },
                        {
                            key: 'og:image',
                            title: 'property',
                            content: 'anything'
                        }
                    ]
                }
            ></Head>
        );

        return (
            <React.Fragment>
                {renderHead}
                <Form
                    product={this.state}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        products : productsSelector(state)
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        editProduct: (id) => {
            dispatch(reqEditProduct(id));
        },
        updateProduct: (id, product, router) => {
            dispatch(reqUpdateProduct(id, product, router));
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPage));
