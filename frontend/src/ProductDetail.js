import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import React from 'react'
import Title from "./Title"
import QuantityBtn from "./QuantityBtn"
import RecommedProduct from './RecommedProduct'

export default function ProductDetail() {
    let params = useParams()
    let [productDetail, setProductDetail] = useState(null)
    // useEffect
    useEffect(() => {
        //component 每次render
        fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
        .then(response => response.json())
        .then(data => {
          let productInfo = data.find((element) => {
            return element.id === parseInt(params.id)
          })
          setProductDetail(productInfo)
        })
    },[params.id]) // < == Dependeny array
  return (
    <div>
       <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
        <Title mainTitle={'Product Detail'} />
       
       {/* <Link to="/">Back to Home</Link> */}

       <div className="container bootdey">

       <div class="col-md-12">
          <section class="panel">
          { 
        productDetail &&
            <div class="panel-body row">
            <div class="col-md-6">
                <div class="pro-img-details">
                <img src={process.env.PUBLIC_URL+'/img/'+productDetail.image} alt={productDetail.name} width="300" />
                    {/* <img src={process.env.PUBLIC_URL+'/img/product01.jpg'} alt="" /> */}
                </div>
                {/* <div class="pro-img-list">
                    <a href="#">
                        <img src="https://via.placeholder.com/115x100/87CEFA/000000" alt="" />
                    </a>
                    <a href="#">
                        <img src="https://via.placeholder.com/115x100/FF7F50/000000" alt="" />
                    </a>
                    <a href="#">
                        <img src="https://via.placeholder.com/115x100/20B2AA/000000" alt="" />
                    </a>
                    <a href="#">
                        <img src="https://via.placeholder.com/120x100/20B2AA/000000" alt="" />
                    </a>
                </div> */}
            </div>
            <div class="col-md-6">
                <h4>
                    
                    {productDetail.name}
                   
                </h4>
                <p>
                {productDetail.description}
                </p>
                {/* <div class="product_meta">
                    <span class="posted_in"> <strong>Categories:</strong> <a rel="tag" href="#">Jackets</a>, <a rel="tag" href="#">Men</a>, <a rel="tag" href="#">Shirts</a>, <a rel="tag" href="#">T-shirt</a>.</span>
                    <span class="tagged_as"><strong>Tags:</strong> <a rel="tag" href="#">mens</a>, <a rel="tag" href="#">womens</a>.</span>
                </div> */}
                <div class="m-bot15"> <strong>Price : </strong> <span class="amount-old">${productDetail.price}</span>  <span class="pro-price"> ${productDetail.price}</span></div>
                <div class="form-group">
                    <label>Quantity</label>
                    
                    {/* <QuantityBtn productInfo={productDetail} /> */}
                </div>
                <div class="form-group">
                    <label>Quantity</label>
                    <input type="quantiy" placeholder="1" class="form-control quantity" />
                </div>
                <p>
                    <button class="btn btn-round btn-danger " type="button"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
                </p>
            </div>
        </div>
        }
  </section>
  </div>

  <RecommedProduct indexTitle='Furtrue Product' leftImage='url(/img/test-indexproduct.jpg)'/>
       
        </div>
    </div>
  )
}
