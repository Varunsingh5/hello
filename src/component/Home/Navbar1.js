import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Navbar1 = () => {

    const navigate = useNavigate()
    const [myOptions, setMyOptions] = useState([]);
    const [products, setProducts] = useState([]);

    const getDataFromAPI = () => {
        console.log("Options Fetched from API")
        const temp = []
        products.forEach(p => temp.push(p.title))
        setMyOptions(temp)
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then((response) => {
            return response.json()
        }).then((res) => {
            setProducts(res)
        })
    }, [])

    return (
        <div>
            <nav
                className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block"
                id="templatemo_nav_top" >
                <div className="container text-light">
                    <div className="w-100 d-flex justify-content-between">
                        <div>
                            <i className="fa fa-envelope mx-2" />
                            <a className="navbar-sm-brand text-light text-decoration-none"
                                href="mailto:info@company.com"  >
                                info@company.com
                            </a>
                            <i className="fa fa-phone mx-2" />
                            <a className="navbar-sm-brand text-light text-decoration-none"
                                href="tel:010-020-0340"  >
                                010-020-0340
                            </a>
                        </div>
                        <div>
                            <a
                                className="text-light"
                                href="https://fb.com/templatemo"
                                target="_blank"
                                rel="sponsored"  >
                                <i className="fab fa-facebook-f fa-sm fa-fw me-2" />
                            </a>
                            <a
                                className="text-light"
                                href="https://www.instagram.com/"
                                target="_blank"
                            >
                                <i className="fab fa-instagram fa-sm fa-fw me-2" />
                            </a>
                            <a className="text-light" href="https://twitter.com/" target="_blank">
                                <i className="fab fa-twitter fa-sm fa-fw me-2" />
                            </a>
                            <a
                                className="text-light"
                                href="https://www.linkedin.com/"
                                target="_blank"
                            >
                                <i className="fab fa-linkedin fa-sm fa-fw" />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Header */}
            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container d-flex justify-content-between align-items-center">
                    <a className="navbar-brand text-success logo h1 align-self-center"   >
                        Zay
                    </a>
                    <button
                        className="navbar-toggler border-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#templatemo_main_nav"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
                        id="templatemo_main_nav"
                    >
                        <div className="flex-fill">
                            <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/shop">Shop</Link>
                                </li>

                            </ul>
                        </div>
                        <div className="navbar align-self-center d-flex">
                            <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                                <div className="input-group">
                                    <div
                                        className="modal fade bg-white"
                                        id="templatemo_search"
                                        tabIndex={-1}
                                        role="dialog"
                                        aria-labelledby="exampleModalLabel"
                                        aria-hidden="true"
                                    >
                                        <div className="modal-dialog modal-lg" role="document">
                                            <div className="w-100 pt-1 mb-5 text-right">
                                                <button
                                                    type="button"
                                                    className="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="input-group  mb-2">
                                <Autocomplete
                                    style={{ width: 250 }}
                                    freeSolo
                                    autoComplete
                                    autoHighlight
                                    options={myOptions}
                                    onChange={(e) => {
                                        const cp = products.filter(p => p.title.trim() === e.target.innerText.trim())
                                        navigate(`/singleProduct/${cp[0].id}`)
                                    }}
                                    renderInput={(params) => (
                                        <TextField {...params}
                                            onChange={getDataFromAPI}
                                            variant="outlined"
                                            onClick={() => console.log(123)}
                                        />
                                    )}
                                />
                                <button type="submit" className="input-group-text bg-success text-light" >
                                    <i className="fa fa-fw fa-search text-white" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar1