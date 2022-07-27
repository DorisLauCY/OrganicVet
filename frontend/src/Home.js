import {Link} from 'react-router-dom'
import styles from './ProductList.module.css'
import { useState, useEffect } from 'react' //react Hook
import Title from './Title'
import MainBanner from './MainBanner'
import ImageBTN from './ImageBTN'

export default function Home() {
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
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
        <MainBanner />
        <div className='py-5'>
        <ImageBTN />
        </div>
       <div className="container">
        <div className="row product-list">
            <div className="col-md-3">
                <section className="panel">
                    <div className="pro-img-box">
                        <img src={process.env.PUBLIC_URL+'/img/product01.jpg'} alt="" />
                        <Link to={'/'} className="adtocart">
                            <i className="fa fa-shopping-cart"></i>
                        </Link>
                    </div>

                    <div className="panel-body text-center">
                        <h4>
                            <Link to={'/'} className="pro-title panel-title">
                                Leopard Shirt Dress
                            </Link>
                        </h4>
                        <p className="price">$300.00</p>
                    </div>
                </section>
            </div>

            <div className="col-md-3">
                <section className="panel">
                    <div className="pro-img-box">
                    <img src={process.env.PUBLIC_URL+'/img/product02.jpg'} alt=""/>
                       
                        <Link to={'/'} className="adtocart">
                            <i className="fa fa-shopping-cart"></i>
                        </Link>
                    </div>

                    <div className="panel-body text-center">
                        <h4>
                            <Link to={'/'} className="pro-title panel-title">
                                Leopard Shirt Dress
                            </Link>
                        </h4>
                        <p className="price">$300.00</p>
                    </div>
                </section>
            </div>

            <div className="col-md-3">
                <section className="panel">
                    <div className="pro-img-box">
                    <img src={process.env.PUBLIC_URL+'/img/product03.jpg'} alt=""/>
                       
                        <Link to={'/'} className="adtocart">
                            <i className="fa fa-shopping-cart"></i>
                        </Link>
                    </div>

                    <div className="panel-body text-center">
                        <h4>
                            <Link to={'/'} className="pro-title panel-title">
                                Leopard Shirt Dress
                            </Link>
                        </h4>
                        <p className="price">$300.00</p>
                    </div>
                </section>
            </div>
        </div>
        </div>
        <input type="text" onChange={ e => setInput(e.target.value)} />
        {/* <button onClick={() => setProductList('change')}> product list</button> */}
      <Title mainTitle="請選擇要購買的水果" />
      <div>
        {
           ProductList.map(product=>(
                <div className={styles.productBorder} key={product.id}>
                    {product.name}<br/>
                    {product.price}<br/>
                    <Link to={'/product/'+product.id}>
                        <img src={process.env.PUBLIC_URL+'/img/'+product.image} alt="" />
                   </Link>
                   <br/>
                    {product.descrpition}<br/>
                </div>
            ))
        }
        </div>

        
    </div>
  )
}
