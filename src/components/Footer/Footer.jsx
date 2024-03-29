import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-part-1'>
                <div className="box__footer">
                    <h4>Soluciones</h4>
                    <a href="#">Preguntas Frecuentes</a>
                    <a href="#">Ayuda</a>
                    <a href="#">Politica de Privacidad</a>
                </div>

                <div className="box__footer">
                    <h4>Acerca de Nosotros</h4>
                    <a href="#">Métodos de pago</a>
                    <Link to={'/nuestroLocal'}>
                        <a>Nuestro Local</a>
                    </Link>
                    <a href="#">Servicios</a>
                </div>


                {/* <div className='placin'>
                    <h5 className='title-footer'></h5>
                    <a></a>
                </div> */}
                <div className='box__footer placin contacto'>
                    <h5 className='title-footer'>Contacto</h5>
                    <a className='links' href='https://mail.google.com/mail/?view=cm&to=perfumeriakarina@gmail.com' target='_blank'>perfumeriakarina@gmail.com</a>
                    <div className='redes-contacto'>
                        <a className='links' href='https://wa.me/+543498436701' target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="wsp icon icon-tabler icon-tabler-brand-whatsapp" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#252525" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                            </svg>
                        </a>
                        <a className='links ' href='https://www.instagram.com/perfumeriakarina_/' target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="insta icon icon-tabler icon-tabler-brand-instagram" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                <path d="M16.5 7.5l0 .01" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className='footer-part-2'>
                <div className='name-store'>Copyright 2023 © Perfumeria Karina</div>

            </div>
        </footer>
    )
}

export default Footer