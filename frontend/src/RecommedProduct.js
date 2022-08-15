import {Link} from 'react-router-dom'
// import IndexTitle from './IndexTitle'
import React, { useState, useEffect } from 'react' //react Hook
// import QuantityBtn from './QuantityBtn'


export default function RecommedProduct({indexTitle, leftImage}) {
    let [ProductList, setProductList] = useState([])
    // let [Input, setInput] = useState('')
    // console.log(ProductList)

    

    // useEffect
    useEffect(() => {
        //component 每次render
        fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
        .then(response => response.json())
        .then(data => setProductList(data))
        console.log(ProductList)
    },[ProductList]) // < == Dependeny array

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

                {
                    ProductList.map(product=>(
                <div className="col-md-2"  key={product.id}>
                    <section className="panel">
                        <div className="pro-img-box">
                        <img src={process.env.PUBLIC_URL+'/img/'+product.image} alt="" style={{ height:'150px'}}/>
                            <Link to={'/'} className="adtocart">
                                <i className="fa fa-shopping-cart"></i>
                            </Link>
                        </div>
                        {/* <QuantityBtn productInfo={product}/> */}
                        <div className="panel-body text-center">
                            <h4>
                                <a href={'/product/'+product.id} className="pro-title panel-title">
                                    {product.name}
                                </a>
                            </h4>
                            <p className="price">${product.price}</p>
                        </div>
                    </section>
                </div>
                ))
                }
                {/* <div className="col-md-2">
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
                </div> */}

            </div>
        </section>
  )
}
