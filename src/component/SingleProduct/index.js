import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const SingleProduct = () => {
    const { id } = useParams();
    const [products, setProducts] = useState({});

    const fetchData = () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setProducts(data)
                console.log(data)
            })
    }
    useEffect(() => {
        fetchData()
    }, [id])

    return (
        <div>
            <section className="bg-light">
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-lg-5 mt-5">
                            <div className="card mb-3">
                                <img
                                    className="card-img img-fluid"
                                    src={products.image}
                                    alt="Card image cap"
                                    id="product-detail"
                                />
                            </div>
                        </div>
                        {/* col end */}
                        <div className="col-lg-7 mt-5">
                            <div className="card">
                                <div className="card-body">
                                    <h1 className="h2"> {products.title}</h1>
                                    <p className="h3 py-2">Price : {products.price}</p>
                                    <p className="py-2">
                                        <i className="fa fa-star text-warning" />
                                        <i className="fa fa-star text-warning" />
                                        <i className="fa fa-star text-warning" />
                                        <i className="fa fa-star text-warning" />
                                        <i className="fa fa-star text-secondary" />
                                        <span className="list-inline-item text-dark">
                                            Rating 4.8 | 36 Comments
                                        </span>
                                    </p>
                                    <h6>Description:</h6>
                                    <p>
                                        {products.description}
                                    </p>
                                    <h6>Category:</h6>
                                    <ul className="list-unstyled pb-3">
                                        <li>Category: {products.category}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SingleProduct;