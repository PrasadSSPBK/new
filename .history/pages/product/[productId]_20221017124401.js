import React from 'react'

const ProductItem = (item) => {
    console.log(Item)
  return (
    <div>ProductItem</div>
  )
}

export default ProductItem
export async function getServerSideProps(context){
 
    const {params}=context
    console.log(params.title)


 
    const response = await fetch("http://localhost:4000/tshirts?title=params.title")
    const data = await response.json()
   

    return {
        props: {
            item: data,

        }
    }
}