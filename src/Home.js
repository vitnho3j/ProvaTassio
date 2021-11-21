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
           <section>
               <UserComponent />
           </section>
           <Footer />
       </article>
       );
    }
}