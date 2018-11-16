import React, {Component} from 'react';
import Main from './../Main'
import ActiveLink from './../ActiveLink';

export default (props) => (
    <Main>
        <div className="container mb-4">
            <div className="row">
                <form onSubmit={props.onSubmit}>
                    <div className="">
                        <div className="form-group">
                            <label>Name</label>
                            <input 
                                name="name"
                                type="text"
                                placeholder="Name Product"
                                className="form-control"
                                value={props.product.name}
                                onChange={props.onChange}
                                />
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea
                                className="form-control"
                                rows="3"
                                placeholder="Description Product"
                                name="description"
                                value={props.product.description}
                                onChange={props.onChange}
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label>Price</label>
                            <input
                                name="price"
                                type="text"
                                placeholder="Price Product"
                                className="form-control"
                                value={props.product.price}
                                onChange={props.onChange}
                                />
                        </div>
                        <div className="clearfix"></div>
                        <div className="">
                            <div className="row">
                                <div className="col-sm-12  col-md-6">
                                    <ActiveLink name='products' className='btn btn-block btn-light'>Back</ActiveLink>
                                    <br/>
                                </div>
                                <div className="col-sm-12 col-md-6 text-right">
                                    <button className="btn btn-lg btn-block btn-primary text-uppercase">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </Main>
);
