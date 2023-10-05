import './style.css'

import img1 from './imgs/Box de dúvida.png'

import img2 from './imgs/Frame.png'
import img4 from './imgs/Vector.png'
import img5 from './imgs/logo-facebook.png'
import img6 from './imgs/logo-instagram.png'
import img7 from './imgs/Group 33img_footer.png'
import img8 from './imgs/imgMulher.png'

export const Footer = ()=>{
    return(
        <div className="footer">
            <div className="sectionTop">
                <img src={img1} alt="" />
                <div className="conteudo-top">
                    <img src={img8} alt="" className='mulher'/>
                    <img src={img7} alt="" className='detalhe' />
                    <div className="btn">
                        <button>ACIONE NOSSO TELEVENDAS</button>
                    </div>
                </div>
            </div>
            <div className="sectionBottom">
                <div className="topFooter">
                    <div className="left">
                        <img src={img2} alt="" width={100}/>
                        <span>Venha na Elétrica J.Santos e garanta a melhor opção para sua casa!</span>
                    </div>
                    <div className="right">
                        <span>NOS SIGA NAS REDES</span>
                        <div className="redes">
                            <img src={img4} alt="" />
                            <img src={img5} alt="" />
                            <img src={img6} alt="" />
                        </div>
                    </div>
                </div>
                <div className="bottomFooter">
                    <span>© Copyright 2021 - Elétrica J. Santos - Todos os Direitos Reservados</span>
                    <span>Desenvolvido por Alex Carneiro</span>
                </div>
                <div className="detalhes">
                    <img src={img7} alt="" width={140} />
                </div>
            </div>
        </div>
    )
}