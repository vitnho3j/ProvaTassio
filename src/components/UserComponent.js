import React from "react";
import UserService from '../services/testeServices';
import slide1 from "../img/1.jpg";
import ProductService from "../services/ProductService";

class UserComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {

        ProductService.getProducts().then((res => {
            this.setState({products: res})
        }));
    }

    render(){
        return(
            this.state.products.map(
                product =>
            <div class="Products">
                <img className="productImage" src= {product.image}/>
                <h1 class="productName">{product.name}</h1>
                <p><s>de R${product.oldPrice},00</s></p>
                <h1 class="ProductPrice">por R$ {product.price},00</h1>
                <p>ou em 3x de R$ 133,00</p>
                <div className="buttonComprar">
                    <i className={"mail"}><h1>Comprar</h1></i>
                </div>
            </div>
            )
        )
    }
}

export default UserComponent

