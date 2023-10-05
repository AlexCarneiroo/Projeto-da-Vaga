import './styles.css'


import img1 from './imgs/Group 29.png'
import img2 from './imgs/Group 32.png'

//imgs dos produtos
import imgP1 from './imgs/Rectangle 30.png'
import imgP2 from './imgs/Rectangle 31.png'
import imgP3 from './imgs/Rectangle 32.png'
import imgP4 from './imgs/Rectangle 33.png'
import imgP5 from './imgs/Rectangle 34.png'
import imgP6 from './imgs/Rectangle 35.png'
import imgP7 from './imgs/Rectangle 36.png'
import imgP8 from './imgs/Rectangle 37.png'

export const ProdutosDestaques = ()=>{
    return(
        <div className="Produtos">
            <div className="produtosDestaquess">
                <img src={img2} alt="" className='imgDetalhe'/>
                <div className="background">
                    <div className="parte-azul">
                        <img src={img1} alt="" />
                    </div>
                </div>

                <div className="area-destaques">
                    <h1>PRODUTOS EM DESTAQUE</h1>
                    <div className="destaques">

                        <div className="detalhes-produto">
                            <div className="part-top">
                                <img src={imgP1} alt="" />
                                <span>lustres</span>
                            </div>
                            <div className="part-bottom">
                                <div className="barra-divizao"></div>
                                <h3>Lustre suspenso rústico</h3>
                                <div className="price">
                                    <div className="price-atual">
                                        <span>R$ 1.500,00</span>
                                    </div>
                                    <div className="price-promo">
                                        <span>R$ 1.000,00</span>
                                    </div>
                                </div>
                            </div>
                                <div className="parcelas">
                                    <span>ou em 3x de R$ 333,33</span>
                                </div>
                        </div>
                        <div className="detalhes-produto">
                            <div className="part-top">
                                <img src={imgP2} alt="" />
                                <span>Lampadas</span>
                            </div>
                            <div className="part-bottom">
                                <div className="barra-divizao"></div>
                                <h3>Lampada</h3>
                                <div className="price">
                                    <div className="price-atual">
                                        <span>R$ 60,00</span>
                                    </div>
                                    <div className="price-promo">
                                        <span>R$ 45,00</span>
                                    </div>
                                </div>
                            </div>
                                <div className="parcelas">
                                    <span>ou em 2x de R$ 22,50</span>
                                </div>
                        </div>
                        <div className="detalhes-produto">
                            <div className="part-top">
                                <img src={imgP3} alt="" />
                                <span>Acessório</span>
                            </div>
                            <div className="part-bottom">
                                <div className="barra-divizao"></div>
                                <h3>Lustre suspenso rústico</h3>
                                <div className="price">
                                    <div className="price-atual">
                                        <span>R$ 25,00</span>
                                    </div>
                                    <div className="price-promo">
                                        <span>R$ 17,00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="detalhes-produto">
                            <div className="part-top">
                                <img src={imgP4} alt="" />
                                <span>Ferramentas</span>
                            </div>
                            <div className="part-bottom">
                                <div className="barra-divizao"></div>
                                <h3>Kit de Ferramentas</h3>
                                <div className="price">
                                    <div className="price-atual">
                                        <span>R$ 100,00</span>
                                    </div>
                                    <div className="price-promo">
                                        <span>R$ 80,00</span>
                                    </div>
                                </div>
                            </div>
                                <div className="parcelas">
                                    <span>ou em 2x de R$ 40,00</span>
                                </div>
                        </div>
                        <div className="detalhes-produto">
                            <div className="part-top">
                                <img src={imgP5} alt="" />
                                <span>Utensilios domestico</span>
                            </div>
                            <div className="part-bottom">
                                <div className="barra-divizao"></div>
                                <h3>Garfos de mesa inox</h3>
                                <div className="price">
                                    <div className="price-atual">
                                        <span>R$ 15,00</span>
                                    </div>
                                    <div className="price-promo">
                                        <span>R$8,00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="parcelas">
                            </div>

                        </div>
                        <div className="detalhes-produto">
                            <div className="part-top">
                                <img src={imgP6} alt="" />
                                <span>Acessório</span>
                            </div>
                            <div className="part-bottom">
                                <div className="barra-divizao"></div>
                                <h3>Chuveiro</h3>
                                <div className="price">
                                    <div className="price-atual">
                                        <span>R$ 120,00</span>
                                    </div>
                                    <div className="price-promo">
                                        <span>R$ 100,00</span>
                                    </div>
                                </div>
                            </div>
                                <div className="parcelas">
                                    <span>ou em 4x de R$ 25,00</span>
                                </div>
                        </div>
                        <div className="detalhes-produto">
                            <div className="part-top">
                                <img src={imgP7} alt="" />
                                <span>Utensilios domestico</span>
                            </div>
                            <div className="part-bottom">
                                <div className="barra-divizao"></div>
                                <h3>Ventilador 2 em 1 mesa e parede</h3>
                                <div className="price">
                                    <div className="price-atual">
                                        <span>R$ 50,00</span>
                                    </div>
                                    <div className="price-promo">
                                        <span>R$ 30,00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="detalhes-produto">
                            <div className="part-top">
                                <img src={imgP8} alt="" />
                                <span>Acessório</span>
                            </div>
                            <div className="part-bottom">
                                <div className="barra-divizao"></div>
                                <h3>Tomadas</h3>
                                <div className="price">
                                    <div className="price-atual">
                                        <span>R$ 20,00</span>
                                    </div>
                                    <div className="price-promo">
                                        <span>R$ 10,00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
                
            </div>
        </div>
    )
}