import './style.css'

import img1 from './imgs/Group 65.png'

export const Sobre = ()=>{
    return(
        <div className="Sobre">
            <h1>SUA MELHOR OPÇÃO</h1>
            <div className="sub-Sobre">
                <img src={img1} alt=""/>
                <div className="detalhes-Sobre">
                    <span>Desde 1970 somos especializados em materiais elétricos, sendo uma das principais distribuidoras do setor. ⠀ Oferecemos os melhores produtos, com o preço que cabe no seu bolso e atende todas as necessidades do seu dia a dia. ⠀ 📍 Venha conhecer a nossa loja, estamos na Avenida Rio das Pedras, 85/89, em Vila Carrão-SP. ⠀ Aqui você irá encontrar lustres, luminárias, utilidades domésticas, ferramentas, acessórios, lâmpadas, fios e cabos, quadros de distribuição, caixas de entrada padrão Eletropaulo, materiais elétricos em geral, equipamentos de segurança e comunicação.</span>
                    <button>SAIBA MAIS SOBRE NÓS</button>
                </div>
            </div>
        </div>
    )
}