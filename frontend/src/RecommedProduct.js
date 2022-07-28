import React from 'react'
import {Link} from 'react-router-dom'
import IndexTitle from './IndexTitle'

export default function RecommedProduct({indexTitle, leftImage}) {
  return (
    <section className='py-4'>
        <h2 className='indextitle'>{indexTitle}</h2>
        
            <div className="row product-list">
                <div className="col-md-4">
                    <section className="panel">
                    <div className="indextitleimg" style={{backgroundImage: leftImage }} alt={leftImage}>
                        {/* <div className="indextitleimg" style={{backgroundImage: "url(\"/img/test-indexproduct.jpg\")"}}> */}
                       <h1 className='indextitletext'>{indexTitle}</h1>
                        {/* <img src={process.env.PUBLIC_URL+'/img/test-indexproduct.jpg'} alt="" /> */}
                    </div>
                    </section>
                </div>
                <div className="col-md-2">
                    <section className="panel">
                        <div className="pro-img-box">
                            <img src={process.env.PUBLIC_URL+'/img/product01.jpg'} alt="" />
                            <Link to={'/'} className="adtocart">
                                <i className="fa fa-shopping-cart"></i>
                            </Link>
                        </div>

                        <div className="panel-body text-center">
                            <h4>
                                <Link to={'/product'} className="pro-title panel-title">
                                    Leopard Shirt Dress
                                </Link>
                            </h4>
                            <p className="price">$300.00</p>
                        </div>
                    </section>
                </div>

                <div className="col-md-2">
                    <section className="panel">
                        <div className="pro-img-box">
                        <img src={process.env.PUBLIC_URL+'/img/product02.jpg'} alt=""/>
                        
                            <Link to={'/'} className="adtocart">
                                <i className="fa fa-shopping-cart"></i>
                            </Link>
                        </div>

                        <div className="panel-body text-center">
                            <h4>
                                <Link to={'/product'} className="pro-title panel-title">
                                    Leopard Shirt Dress
                                </Link>
                            </h4>
                            <p className="price">$300.00</p>
                        </div>
                    </section>
                </div>

                <div className="col-md-2">
                    <section className="panel">
                        <div className="pro-img-box">
                        <img src={process.env.PUBLIC_URL+'/img/product03.jpg'} alt=""/>
                        
                            <Link to={'/'} className="adtocart">
                                <i className="fa fa-shopping-cart"></i>
                            </Link>
                        </div>

                        <div className="panel-body text-center">
                            <h4>
                                <Link to={'/product'} className="pro-title panel-title">
                                    Leopard Shirt Dress
                                </Link>
                            </h4>
                            <p className="price">$300.00</p>
                        </div>
                    </section>
                </div>

                <div className="col-md-2">
                    <section className="panel">
                        <div className="pro-img-box">
                        <img src={process.env.PUBLIC_URL+'/img/product02.jpg'} alt=""/>
                        
                            <Link to={'/'} className="adtocart">
                                <i className="fa fa-shopping-cart"></i>
                            </Link>
                        </div>

                        <div className="panel-body text-center">
                            <h4>
                                <Link to={'/product'} className="pro-title panel-title">
                                    Leopard Shirt Dress
                                </Link>
                            </h4>
                            <p className="price">$300.00</p>
                        </div>
                    </section>
                </div>

            </div>
        </section>
  )
}
