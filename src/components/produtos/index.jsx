import './styles.css'


import img1 from './imgs/Group 29.png'

import imgD1 from './imgs/Group 30.png'
import imgD2 from './imgs/Group 42.png'
import imgD3 from './imgs/Group43.png'
import imgD4 from './imgs/Group44.png'
import imgD5 from './imgs/Group45.png'
import imgD6 from './imgs/Group46.png'
import imgD7 from './imgs/Group48.png'
export const ProdutosDestaques = ()=>{
    return(
        <div className="Produtos">
            <div className="produtosDestaquess">
                <img className='imgBg' src={img1} alt="" />
                <div className="destaques">
                    <h1>PRODUTOS EM DESTAQUE</h1>
                    
                    <img src={imgD1} alt=""  width={200}/>
                    <img src={imgD2} alt=""  width={200}/>
                    <img src={imgD3} alt=""  width={200}/>
                    <img src={imgD4} alt=""  width={200}/>
                    <img src={imgD5} alt=""  width={200}/>
                    <img src={imgD6} alt=""  width={200}/>
                    <img src={imgD7} alt=""  width={200}/>
                    <img src={imgD4} alt=""  width={200}/>
                </div>
            </div>
        </div>
    )
}