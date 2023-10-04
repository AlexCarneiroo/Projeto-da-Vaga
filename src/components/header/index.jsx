import '../header/style.css'
import { ModalCategotias } from './modalCategorias'


//imgs
import imgLogo from '../../logo e imgs/Group19.jpg'
import logoName from '../../logo e imgs/Frame.png'
import vector from '../../logo e imgs/Vector.png'
import menuBar from '../header/pngwing.com (3).png'
import { useState } from 'react'

export const Header = () => {

    const [modalDisplay, setModalDisplay] = useState(false)
    const [menubar , setMenubar] = useState(false)


    const hanldModal = () => {
        if (modalDisplay) {
            setModalDisplay(false)
        } else {
            setModalDisplay(true)
        }
    }

    const handlMenu = ()=>{
        if(menubar){
            setMenubar(false)
        }else{
            setMenubar(true)
            console.log('pegando')
        }
    }

    return (
        <div className="container">
            <div className='sub-Container'>
                <div className="logo">
                    <img className='detalheLogo' src={imgLogo} alt="" />

                    <img src={logoName} className='logoName' alt="" />
                </div>
                <div className="menu">
                    <ul>
                        <li className='active'>Home</li>
                        <li onClick={hanldModal} className='menuCategoria'>Categorias <img src={vector} alt="" /></li>
                        <li>Sobre</li>
                        <li>Localização</li>
                        <li className='menuContato'>Contato</li>
                    </ul>
                </div>

                <div className="mobile">
                    <img src={logoName} className='logoName' alt="" />
                    <img className='menuBar' onClick={handlMenu} src={menuBar} alt="" />
                </div>
            </div>

            {menubar &&
                <div className="resposive">
                    <ul>
                        <li>Home</li>
                        <li>Categorias</li>
                        <li>Sobre</li>
                        <li>Localização</li>
                    </ul>
                </div>
            }
            {modalDisplay && <ModalCategotias modal={setModalDisplay} />}
        </div>
    )
}