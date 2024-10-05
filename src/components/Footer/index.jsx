import corvoOdin from '../../assets/corvo-odin.png';
import './style.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return(
        <footer className='container-footer'>
            <img src={corvoOdin} alt="Logo - Corvo Odin" className='image-footer' />
            <p className='footer-text'>ODIN - VISUALIZAÇÃO DE DADOS | {currentYear} </p>
        </footer>
    )
}

export default Footer;