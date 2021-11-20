import logo from "./img/logo.gif"
import { BsSearch } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
    function Header(){
    return(
        <header>
            <img class="logo" src={logo} />
            <div class="headerSearch">
                <input class="inputSearch" type="text" placeholder="O que você está procurando ?"/><button type="button"><BsSearch></BsSearch></button>
            </div>
            <div class="rightNav">
                <p class="pHeader">Minha Conta</p>
            </div>
            <div className="verticalLine">

            </div>
        </header>
    );
}

export default Header;