import './styles.css'

import img1 from './img/Group 63.png'

import imgC1 from './img/Group 49.png'
import imgC2 from './img/Group 50.png'
import imgC3 from './img/Group 51.png'
import imgC4 from './img/Group 52.png'
import imgC5 from './img/Group 53.png'
import imgC6 from './img/Group 54.png'
import imgC7 from './img/Group 55.png'
import imgC8 from './img/Group 60.png'

export const Categotias = ()=>{
    return(
        <div className="Categoria">
            <div className="sub-Categorias">
                <img className='imgbg' src={img1} alt="" />
                <div className="todasCategorias">

                    <h1>CATEGORIAS</h1>
                    <div className="teste">
                        <img src={imgC1} alt="" width={170} />
                        <img src={imgC2} alt="" width={170} />
                        <img src={imgC3} alt="" width={170} />
                        <img src={imgC4} alt="" width={170} />
                        <img src={imgC5} alt="" width={170} />
                        <img src={imgC6} alt="" width={170} />
                        <img src={imgC7} alt="" width={170} />
                        <img src={imgC8} alt="" width={170} />
                    </div>
                </div>
            </div>
        </div>
    )
}