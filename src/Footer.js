import {Component} from "react";
import buttonContato from "./buttonContato"

export default class Footer extends Component{
    render() {
        return (

                <footer>
                    <div class={"LC"}>
                        <b><h1>Localização</h1></b>
                        <hr align={"left"} class={"localization"}></hr>
                    </div>
                    <div class="SP">
                        <b><h3>São Paulo</h3></b>
                        <p>Rua do Rócio, 423/1801</p>
                        <p>Vila Olímpia - SP</p>
                        <p>040552-000</p>
                        <p>+55 11 3333 3333</p>
                    </div>
                    <div class={"RJ"}>
                        <b><h4>Rio de Janeiro</h4></b>
                        <p>Vol. da Pátria 301/702</p>
                        <p>Botafogo - RJ</p>
                        <p>22270-000</p>
                        <p>+55 21 3333 3333</p>
                    </div>
                    <div class="divButtons">
                        <div class="buttonContato">
                            <i class={"mail"}><h1>Entre em contato</h1></i>
                        </div>
                        <div className="buttonConsulter">
                            <i className={"mail"}><h2>Fale com o nosso consultor online</h2></i>
                        </div>
                    </div>
                    <div class="created">
                        <p>Created by</p>
                        <h1><b>PROFIT</b></h1>
                    </div>
                    <div className="powered">
                        <p>Powered by</p>
                        <h1><b>VITEX</b></h1>
                    </div>
                </footer>
        )
    }
}