import { useParams, Link } from "react-router-dom"
import React from 'react'
import Title from "./Title"
import IndexTitle from './IndexTitle'
import RecommedProduct from './RecommedProduct'

export default function ProductDetail() {
    let params = useParams()
  return (
    <div>
       <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
        <Title mainTitle={params.id+'Product Detail'} />
       
       <Link to="/">Back to Home</Link>

       <div className="container bootdey">

       <div class="col-md-12">
          <section class="panel">
      <div class="panel-body row">
          <div class="col-md-6">
              <div class="pro-img-details">
                  <img src={process.env.PUBLIC_URL+'/img/product01.jpg'} alt="" />
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
              <h4 class="pro-d-title">
                  <a href="#" class="">
                      Leopard Shirt Dress
                  </a>
              </h4>
              <p>
                  Praesent ac condimentum felis. Nulla at nisl orci, at dignissim dolor, The best product descriptions address your ideal buyer directly and personally. The best product descriptions address your ideal buyer directly and personally.
              </p>
              <div class="product_meta">
                  <span class="posted_in"> <strong>Categories:</strong> <a rel="tag" href="#">Jackets</a>, <a rel="tag" href="#">Men</a>, <a rel="tag" href="#">Shirts</a>, <a rel="tag" href="#">T-shirt</a>.</span>
                  <span class="tagged_as"><strong>Tags:</strong> <a rel="tag" href="#">mens</a>, <a rel="tag" href="#">womens</a>.</span>
              </div>
              <div class="m-bot15"> <strong>Price : </strong> <span class="amount-old">$544</span>  <span class="pro-price"> $300.00</span></div>
              <div class="form-group">
                  <label>Quantity</label>
                  <input type="quantiy" placeholder="1" class="form-control quantity" />
              </div>
              <p>
                  <button class="btn btn-round btn-danger " type="button"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
              </p>
          </div>
      </div>
  </section>
  </div>

  <RecommedProduct indexTitle='Furtrue Product' leftImage='url(/img/test-indexproduct.jpg)'/>
       
        </div>
    </div>
  )
}
