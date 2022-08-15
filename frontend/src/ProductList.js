import {Link, i} from 'react-router-dom'
import styles from './ProductList.module.css'
import { useState, useEffect } from 'react' //react Hook
import Title from './Title'
import MainBanner from './MainBanner'
import ImageBTN from './ImageBTN'
export default function ProductList() {

    let [ProductList, setProductList] = useState([])
    let [Input, setInput] = useState('')
    // console.log(ProductList)

  

    // useEffect
    useEffect(() => {
        //component 每次render
        fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
        .then(response => response.json())
        .then(data => setProductList(data))
        console.log(ProductList)
    },[]) // < == Dependeny array

    useEffect(() => {
        if(Input.length>4)
            console.log('too long')
        else
            console.log('too short')
    },[Input])

  return (
    <div>
         <Title mainTitle="Product" />
         <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
        <div class="container bootdey py-5">
            <div className='row'>
            <div class="col-md-3">
                <section class="panel">
                    <div class="panel-body">
                        <input type="text" placeholder="Keyword Search" class="form-control" />
                    </div>
                </section>
                <section class="panel">
                    <header class="panel-heading">
                        Category
                    </header>
                    <div class="panel-body">
                        <ul className="catnav prod-cat">
                            <li>
                                <a href="#" className="active"><i className="fa fa-angle-right"></i>Vegetable</a>
                                {/* <ul className="catnav">
                                    <li className="active"><a href="#">- Shirt</a></li>
                                    <li><a href="#">- Pant</a></li>
                                    <li><a href="#">- Shoes</a></li>
                                </ul> */}
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-angle-right"></i> Fruit</a>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-angle-right"></i> Snacks</a>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-angle-right"></i> Dairy &amp; Egg</a>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-angle-right"></i> Beverage</a>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-angle-right"></i> Grains</a>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-angle-right"></i> Groceries</a>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-angle-right"></i> Dry Foods</a>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-angle-right"></i> Frozen Bakery &amp; Pastry </a>
                            </li>
                            
                        </ul>
                    </div>
                </section>
                {/* <section class="panel">
                    <header class="panel-heading">
                        Price Range
                    </header>
                    <div class="panel-body sliders">
                        <div id="slider-range" class="slider"></div>
                        <div class="slider-info">
                            <span id="slider-range-amount"></span>
                        </div>
                    </div>
                </section> */}
                {/* <section class="panel">
                    <header class="panel-heading">
                        Filter
                    </header>
                    <div class="panel-body">
                        <form role="form product-form">
                            <div class="form-group">
                                <label>Brand</label>
                                <select class="form-control hasCustomSelect" style="-webkit-appearance: menulist-button; width: 231px; position: absolute; opacity: 0; height: 34px; font-size: 12px;">
                                    <option>Wallmart</option>
                                    <option>Catseye</option>
                                    <option>Moonsoon</option>
                                    <option>Textmart</option>
                                </select>
                                <span class="customSelect form-control" style="display: inline-block;"><span class="customSelectInner" style="width: 209px; display: inline-block;">Wallmart</span></span>
                            </div>
                            <div class="form-group">
                                <label>Color</label>
                                <select class="form-control hasCustomSelect" style="-webkit-appearance: menulist-button; width: 231px; position: absolute; opacity: 0; height: 34px; font-size: 12px;">
                                    <option>White</option>
                                    <option>Black</option>
                                    <option>Red</option>
                                    <option>Green</option>
                                </select>
                                <span class="customSelect form-control" style="display: inline-block;"><span class="customSelectInner" style="width: 209px; display: inline-block;">White</span></span>
                            </div>
                            <div class="form-group">
                                <label>Type</label>
                                <select class="form-control hasCustomSelect" style="-webkit-appearance: menulist-button; width: 231px; position: absolute; opacity: 0; height: 34px; font-size: 12px;">
                                    <option>Small</option>
                                    <option>Medium</option>
                                    <option>Large</option>
                                    <option>Extra Large</option>
                                </select>
                                <span class="customSelect form-control" style="display: inline-block;"><span class="customSelectInner" style="width: 209px; display: inline-block;">Small</span></span>
                            </div>
                            <button class="btn btn-primary" type="submit">Filter</button>
                        </form>
                    </div>
                </section> */}
            </div>
            <div class="col-md-9">
                {/* <section class="panel">
                    <div class="panel-body">
                        <div class="pull-right">
                            <ul class="pagination pagination-sm pro-page-list">
                                <li><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">»</a></li>
                            </ul>
                        </div>
                    </div>
                </section> */}
                <div class="row product-list">
                {
                    ProductList.map(product=>(
                    <div class="col-md-3">
                        <section class="panel">
                            <div class="pro-img-box">
                                <img src={process.env.PUBLIC_URL+'/img/'+product.image} alt="" />
                               
                                <Link to={'/'} className="adtocart">
                                    <i class="fa fa-shopping-cart"></i>
                                </Link>
                            </div>

                            <div class="panel-body text-center">
                                <h4>
                                    <Link to={'/product/'+product.id} className="pro-title">
                                        {product.name}
                                    </Link>
                                </h4>
                                <p class="price"> ${product.price}</p>
                            </div>
                        </section>
                    </div>
                     ))
                    }
                    <div class="col-md-3">
                        <section class="panel">
                            <div class="pro-img-box">
                            <img src={process.env.PUBLIC_URL+'/img/product02.jpg'} alt="" />
                                <Link to={'/'} className="adtocart">
                                    <i class="fa fa-shopping-cart"></i>
                                </Link>
                            </div>

                            <div class="panel-body text-center">
                                <h4>
                                    <Link to={'/product'} className="pro-title">
                                        Leopard Shirt Dress
                                    </Link>
                                </h4>
                                <p class="price">$300.00</p>
                            </div>
                        </section>
                    </div>
                    <div class="col-md-3">
                        <section class="panel">
                            <div class="pro-img-box">
                            <img src={process.env.PUBLIC_URL+'/img/product03.jpg'} alt="" />
                                <Link to={'/'} className="adtocart">
                                    <i class="fa fa-shopping-cart"></i>
                                </Link>
                            </div>

                            <div class="panel-body text-center">
                                <h4>
                                    <Link to={'/product'} className="pro-title">
                                        Leopard Shirt Dress
                                    </Link>
                                </h4>
                                <p class="price">$300.00</p>
                            </div>
                        </section>
                    </div>
                    <div class="col-md-3">
                        <section class="panel">
                            <div class="pro-img-box">
                            <img src={process.env.PUBLIC_URL+'/img/product01.jpg'} alt="" />
                                <Link to={'/'} className="adtocart">
                                    <i class="fa fa-shopping-cart"></i>
                                </Link>
                            </div>

                            <div class="panel-body text-center">
                                <h4>
                                    <Link to={'/product'} className="pro-title">
                                        Leopard Shirt Dress
                                    </Link>
                                </h4>
                                <p class="price">$300.00</p>
                            </div>
                        </section>
                    </div>
                    <div class="col-md-3">
                        <section class="panel">
                            <div class="pro-img-box">
                            <img src={process.env.PUBLIC_URL+'/img/product02.jpg'} alt="" />
                                <Link to={'/'} className="adtocart">
                                    <i class="fa fa-shopping-cart"></i>
                                </Link>
                            </div>

                            <div class="panel-body text-center">
                                <h4>
                                    <Link to={'/product'} className="pro-title">
                                        Leopard Shirt Dress
                                    </Link>
                                </h4>
                                <p class="price">$300.00</p>
                            </div>
                        </section>
                    </div>
                    <div class="col-md-3">
                        <section class="panel">
                            <div class="pro-img-box">
                            <img src={process.env.PUBLIC_URL+'/img/product03.jpg'} alt="" />
                                <Link to={'/'} className="adtocart">
                                    <i class="fa fa-shopping-cart"></i>
                                </Link>
                            </div>

                            <div class="panel-body text-center">
                                <h4>
                                    <Link to={'/product'} className="pro-title">
                                        Leopard Shirt Dress
                                    </Link>
                                </h4>
                                <p class="price">$300.00</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <ImageBTN />
    </div>
  )
}
