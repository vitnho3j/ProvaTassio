import {Component} from "react";
import './Home.css'
import Header from "./Header";
import Footer from "./Footer"
import Carousel from "./Carousel"
import UserComponent from "./components/UserComponent";


export default class Home extends Component{

    render() {
       return (
       <article>
           <Header />
           <Carousel />
           <section class="Components">
               <div class="textProdutos">
                   <h1> Produtos </h1>
                   <hr align={"left"} className={"localization"}></hr>
               </div>
               <UserComponent />
           </section>
           <Footer />
       </article>
       );
    }
}