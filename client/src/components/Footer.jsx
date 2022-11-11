import Logo from "../img/logo.png"
import Logo2 from "../img/logo2.png"

export default function Footer (){
    return(
        <footer>
            <img src={Logo2} alt=""/>
            {/* <img src={Logo} alt=""/> */}
            {/* <i className="logo fa-brands fa-microblog"></i> */}

            <span>
                Made with sweat, tears, heart and <b>React</b>.
            </span>
        </footer>
    )
}