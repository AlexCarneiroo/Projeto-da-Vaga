import './styles.css'

import img1 from './img/Group 29.png'

//imgs da categorias

import imgC1 from './img/image 3.png'
import imgC2 from './img/image 4.png'
import imgC3 from './img/image 5.png'
import imgC4 from './img/image 6.png'
import imgC5 from './img/image 7.png'
import imgC6 from './img/image 8.png'
import imgC7 from './img/image 9.png'
import imgC8 from './img/image 10.png'


export const Categotias = ()=>{
    return(
        <div className="Categoria">
            <div className="sub-Categorias">
                <div className="background">
                    <div className="parte-azul">
                        <img src={img1} alt="" className='imgtop' />
                    </div>
                </div>
                <div className="todasCategorias">

                    <h1>CATEGORIAS</h1>
                    <div className="subContainer">
                        <div className="detalhes-categoria">
                            <h2>LÂNPADAS</h2>
                            <div className="Conteudo">
                                <img src={imgC1} alt="" />
                            </div>
                        </div>
                        <div className="detalhes-categoria">
                            <h2>LUSTRES</h2>
                            <div className="Conteudo">
                                <img src={imgC2} alt="" />
                            </div>
                        </div>
                        <div className="detalhes-categoria">
                            <h2>LUMINÁRIAS</h2>
                            <div className="Conteudo">
                                <img src={imgC3} alt="" />
                            </div>
                        </div>
                        <div className="detalhes-categoria">
                            <h2>DECORAÇÕES</h2>
                            <div className="Conteudo">
                                <img src={imgC4} alt="" />
                            </div>
                        </div>
                        <div className="detalhes-categoria">
                            <h2>ACESSÓRIOS</h2>
                            <div className="Conteudo">
                                <img src={imgC5} alt="" />
                            </div>
                        </div>
                        <div className="detalhes-categoria">
                            <h2>FERRAMENTAS</h2>
                            <div className="Conteudo">
                                <img src={imgC6} alt="" className='ferramenta' />
                            </div>
                        </div>
                        <div className="detalhes-categoria">
                            <h2>UTENSILIOS</h2>
                            <div className="Conteudo">
                                <img src={imgC7} alt="" />
                            </div>
                        </div>
                        <div className="detalhes-categoria">
                            <h2>CABOS</h2>
                            <div className="Conteudo">
                                <img src={imgC8} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}