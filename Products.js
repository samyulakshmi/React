import { useState } from "react";
import Product from "./Product";

function Products(){

    let[productList,setProductList] = useState([
        {name:"Samsung" ,price : 25000, url : "https://images.samsung.com/is/image/samsung/assets/in/2307/pcd/PCD_Q5_Whats-new_160x160_pc_default.png?$160_160_PNG$"},
        {name : "Redmi" , price : 35000 , url : "https://th.bing.com/th/id/OIP.UxJYIZhrr6WfaB1zvIJd2QHaHa?rs=1&pid=ImgDetMain"},
        {name : "Apple" , price : 100000 ,url : "https://i5.walmartimages.com/asr/199ab764-f112-4508-888c-86a1094624e8.17daf90b726900a539a8b9873fdea1f5.jpeg"}
    ])
    return(
        <div className="products">
            {
                productList.map((product,index) => {return (
                    <Product name={product.name} price={product.price} url={product.url} key={index}></Product>)
                })

            }
        </div>
    )

}

export default Products;