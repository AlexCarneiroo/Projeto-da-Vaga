import './styles.css'

//imgs
import img1 from '../../../logo e imgs/image3.png'
import img2 from '../../../logo e imgs/image4.png'
import img3 from '../../../logo e imgs/image1.png'
import img4 from '../../../logo e imgs/image5.png'
import img5 from '../../../logo e imgs/image6.png'
import img6 from '../../../logo e imgs/image7.png'
import img7 from '../../../logo e imgs/image8.png'
import img8 from '../../../logo e imgs/image9.png'


export const ModalCategotias = ({modal})=>{
    return(
        <div className="Container" onMouseOver={()=>modal(true)} onMouseOut={()=>modal(false)} >
            <div className="categorias">
                <div className="areaImg">
                    <img src={img1} alt="" />
                </div>
                <span>Lampadas</span>
            </div>
            <div className="categorias">
                <div className="areaImg">
                    <img src={img2} alt="" />
                </div>
                <span>Lustres</span>
            </div>
            <div className="categorias">
                <div className="areaImg">
                    <img src={img3} alt="" />
                </div>
                <span>Luminárias</span>
            </div>
            <div className="categorias">
                <div className="areaImg">
                    <img src={img4} alt="" />
                </div>
                <span>Decorações</span>
            </div>
            <div className="categorias">
                <div className="areaImg">
                    <img src={img5} alt="" />
                </div>
                <span>Acessórios</span>
            </div>
            <div className="categorias">
                <div className="areaImg">
                    <img className='imgbugada' src={img6} alt=""/>
                </div>
                <span>Ferramentas</span>
            </div>
            <div className="categorias">
                <div className="areaImg">
                    <img src={img7} alt="" />
                </div>
                <span>Lampadas</span>
            </div>
            <div className="categorias">
                <div className="areaImg">
                    <img src={img8} alt="" />
                </div>
                <span>Cabos</span>
            </div>
        </div>
    )
}