import {Link} from 'react-router-dom'
import styles from './ProductList.module.css'
import { useState, useEffect } from 'react' //react Hook
import Title from './Title'
import MainBanner from './MainBanner'
import IndexTitle from './IndexTitle'
import ImageBTN from './ImageBTN'
import RecommedProduct from './RecommedProduct'
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
            <RecommedProduct indexTitle='Fresh Fruit' leftImage='url(/img/test-indexproduct.jpg)'/>
            <RecommedProduct indexTitle='Snack' leftImage='url(/img/test-indexproduct02.jpg)'/>
            <RecommedProduct indexTitle='Test' leftImage='url(/img/test-indexproduct03.jpg)'/>
            <RecommedProduct indexTitle='Beverage' leftImage='url(/img/test-indexproduct.jpg)'/>
        </div>
        {/* <input type="text" onChange={ e => setInput(e.target.value)} /> */}
        {/* <button onClick={() => setProductList('change')}> product list</button> */}
      {/* <Title mainTitle="請選擇要購買的水果" /> */}
      {/* <div>
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
        </div> */}

        
    </div>
  )
}
