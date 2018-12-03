import React from 'react'
import {connect} from 'react-redux'
import List from './../../components/product/List'
import { compose } from 'redux'
import { withNamespaces } from 'react-i18next'
import { reqFetchProducts, reqDeleteProduct } from './../../modules/product/actions'
import { productsSelector } from './../../modules/product/selectors';

class Index extends React.Component {
    componentDidMount() {
        this.props.getProducts()
    }

    onDelete = id => {
        if (confirm('Bạn chắc chắn muốn xóa ?')) {
            this.props.deleteProduct(id);
        }
    }

    render () {
        return (
            <List
                products={this.props.products}
                t={this.props.t}
                onDelete={this.onDelete}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        products: productsSelector(state)
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getProducts: () => {
            dispatch(reqFetchProducts());
        },
        deleteProduct: (id) => {
            dispatch(reqDeleteProduct(id));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withNamespaces(['product'])
)(Index);
