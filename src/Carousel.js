import slide1 from "./img/1.jpg"
import slide2 from "./img/2.jpg"
import logo from "./img/logo.gif";
    function Carousel(){
        return(
            <carousel>
                <div class="textImage">
                    <h1>Nossa especialidade: experiência de compra</h1>
                </div>
                <div>
                    <img class="bannerImage" src={slide1}/>
                </div>
            </carousel>
        )
    }

export default Carousel;