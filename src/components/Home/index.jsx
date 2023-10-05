import './styles.css'

import img1 from './imgs/Rectangle29.jpg'
import img2 from './imgs/Vectorr.png'
import img3 from './imgs/Frame 1.png'
import img4 from './imgs/Vector.png'
import img5 from './imgs/Rectangle 30.png'
import img6 from './imgs/pricetags.png'

export const Home = ()=>{


    const scrollToDown = () => {
        window.scrollTo({
          top: window.scrollY + 500, 
          behavior: 'smooth'
        });
      };

    

    return(
        <div className="container">
            <img className='bg' src={img1} alt="" />
            <div className="subContainer">
                <div className="ladoLeft">
                    <h1>Ilumine o seu dia a dia!</h1>
                    <div className="preContainer">
                        <div className="text">
                            <span>Aqui na Elétrica J. Santos queremos trazer mais luz para o seu dia a dia! Temos produtos para toda sua casa com a melhor qualidade e atendimento da região!</span>
                        </div>
                        <div className="btns">
                            <button className='btn1'>Veja nossos produtos</button>
                            <button className='btn2'>Nos conheça melhor</button>
                            <div className="role">
                                <img src={img2} alt="" width={20} />
                                <p onClick={scrollToDown}>Role para ver mais</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ladoRight">
                    <img className='imgMulher' src={img3} alt=""/>
                    <div className="container-lustre">
                        <div className="marcacao">
                            <img src={img6} alt="" width={23}/>
                        </div>
                        <div className="lustre">
                            <img src={img5} alt="" width={210} />
                        </div>
                    </div>
                    <div className="container-estrela">
                        <img src={img4} alt="" width={20} />
                        <img src={img4} alt="" width={20} />
                        <img src={img4} alt="" width={20} />
                        <img src={img4} alt="" width={20} />
                        <img src={img4} alt="" width={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}