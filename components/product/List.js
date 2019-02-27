import React, {Component} from 'react';
import Main from './../Main'
import ActiveLink from './../ActiveLink';
import Link from 'next/link'

export default class List extends Component {
    render() {
        const { products, t, onDelete } = this.props;
        let showProducts = (products) =>{
            let result = null;
            if (products.length > 0) {
                result = products.map((product, index) => {
                    return (
                        <tr key={ index }>
                            <td>{ product.name }</td>
                            <td>{ product.description }</td>
                            <td>{ product.price }</td>
                            <td><ActiveLink className='' name='edit_product' params={{id: product.id}}>Edit</ActiveLink></td>
                            <td><Link href="javascript:;"><a onClick={() => onDelete(product.id)}>Delete</a></Link></td>
                        </tr>
                    );
                });
            }

            return result;
        }

        return (
            <Main>
                <h2>{ t('product:list') }</h2>
                <ActiveLink name='create_product' className='btn btn-block btn-light col-md-3'>Create</ActiveLink>
                <br/>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { products && products.products ? showProducts(products.products) : 
                        <tr>
                            <td className="table-bitterz__no-record" colSpan="4">No Product</td>
                        </tr>
                        }
                    </tbody>
                </table>
            </Main>
        );
    }
}
