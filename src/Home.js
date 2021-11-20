import {Component} from "react";
import './Home.css'
import Header from "./Header";
import Footer from "./Footer"
import Carousel from "./Carousel"

export default class Home extends Component{

    render() {
       return (
       <article>
           <Header />
           <Carousel />
           <section>
               <h1>Aqui será a section</h1>
           </section>
           <Footer />
       </article>
       );
    }
}