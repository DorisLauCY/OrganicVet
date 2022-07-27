import { useParams, Link } from "react-router-dom"
import React from 'react'
import Title from "./Title"

export default function ProductDetail() {
    let params = useParams()
  return (
    <div>
        <Title mainTitle={params.id+'Product Detail'} />
       
       <Link to="/">Back to Home</Link>
    </div>
  )
}
