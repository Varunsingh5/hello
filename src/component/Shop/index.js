import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const Shop = () => {
    const [product, setProduct] = useState([]);
    const fetchData = () => {
        fetch("https://fakestoreapi.com/products")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setProduct(data)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-3">
                        <h1 className="h2 pb-4">Categories</h1>
                        <ul className="list-unstyled templatemo-accordion">
                            <li className="pb-3">
                                <a className="collapsed d-flex justify-content-between h3 text-decoration-none"
                                    href="#"   >
                                    Gender
                                    <i className="fa fa-fw fa-chevron-circle-down mt-1" />
                                </a>
                                <ul className="collapse show list-unstyled pl-3">
                                    <li>
                                        <a className="text-decoration-none" href="#">
                                            Men
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-decoration-none" href="#">
                                            Women
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="pb-3">
                                <a
                                    className="collapsed d-flex justify-content-between h3 text-decoration-none"
                                    href="#"
                                >
                                    Sale
                                    <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1" />
                                </a>
                                <ul id="collapseTwo" className="collapse list-unstyled pl-3">
                                    <li>
                                        <a className="text-decoration-none" href="#">
                                            Sport
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-decoration-none" href="#">
                                            Luxury
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="pb-3">
                                <a
                                    className="collapsed d-flex justify-content-between h3 text-decoration-none"
                                    href="#"
                                >
                                    Product
                                    <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1" />
                                </a>
                                <ul id="collapseThree" className="collapse list-unstyled pl-3">
                                    <li>
                                        <a className="text-decoration-none" href="#">
                                            Bag
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-decoration-none" href="#">
                                            Sweather
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-decoration-none" href="#">
                                            Sunglass
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="list-inline shop-top-menu pb-3 pt-1">
                                    <li className="list-inline-item">
                                        <a className="h3 text-dark text-decoration-none mr-3" href="#">
                                            All
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="h3 text-dark text-decoration-none mr-3" href="#">
                                            Men's
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="h3 text-dark text-decoration-none" href="#">
                                            Women's
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 pb-4">
                                <div className="d-flex">
                                    <select className="form-control">
                                        <option>Featured</option>
                                        <option>A to Z</option>
                                        <option>Item</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {product.map(user => (
                                <div className="col-md-4" key={user.id}>
                                    <div className="card mb-4 product-wap rounded-0">
                                        <div className="card rounded-0">
                                            <img
                                                className="card-img rounded-0 img-fluid"
                                                src={user.image}
                                            />
                                            <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <Link to={"/singleProduct/" + user.id}>
                                                            <a className="btn btn-success text-white">
                                                                <i className="far fa-heart" />
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"/singleProduct/" + user.id}>
                                                            <a className="btn btn-success text-white mt-2" >
                                                                <i className="far fa-eye" />
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"/singleProduct/" + user.id}>
                                                            <a className="btn btn-success text-white mt-2"  >
                                                                <i className="fas fa-cart-plus" />
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <Link to={"/singleProduct/" + user.id}>
                                                {user.title}
                                                {user.rating.rate}
                                                {user.category}
                                            </Link>
                                            <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                                <li>M/L/X/XL</li>
                                                <li className="pt-2">
                                                    <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                                                    <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                                                    <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                                                    <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                                                    <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                                                </li>
                                            </ul>
                                            <ul className="list-unstyled d-flex justify-content-center mb-1">
                                                <li>
                                                    <i className="text-warning fa fa-star" />
                                                    <i className="text-warning fa fa-star" />
                                                    <i className="text-warning fa fa-star" />
                                                    <i className="text-muted fa fa-star" />
                                                    <i className="text-muted fa fa-star" />
                                                </li>
                                            </ul>
                                            <p className="text-center mb-0">$250.00</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div div="row">
                            <ul className="pagination pagination-lg justify-content-end">
                                <li className="page-item disabled">
                                    <a
                                        className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0"
                                        href="#"
                                        tabIndex={-1}
                                    >
                                        1
                                    </a>
                                </li>
                                {/*   <li className="page-item">
                                    <a className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark"
                                        href="#" >
                                        2
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a
                                        className="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark"
                                        href="#"
                                    >
                                        3
                                    </a>
                            </li>  */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop;