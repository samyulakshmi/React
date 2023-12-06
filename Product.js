function Product(props){

    return(
        <div className="product">
            <h1>{props.name}</h1>
            <p>{props.price}</p>
            <img className="picture"src={props.url} alt={props.alt}></img>

        </div>
    )

}

export default Product;