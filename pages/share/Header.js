import React, {useState, useEffect, Component} from 'react'
import $ from 'jquery'
import Image from "next/image";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {

  const [menuAside, setMenuAside] = useState(0);
  
  const activaAside = () => {
    if(menuAside == "0"){
      setMenuAside(1)
      /*$(".body").removeClass("d-flex");
      $(".body").addClass("d-block");*/
      $("aside").addClass("asideMobile");
    }else{
      setMenuAside(0)
      /*$(".body").removeClass("d-block");
      $(".body").addClass("d-flex");*/
      $("aside").removeClass("asideMobile");
    }
  }

  return (
    <header className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
                <div className="mr-3"><img src="../assets/img/logo_empresa.jpg" className='logoEmpresa' alt="" /></div>
                <div>
                    <span className="d-block">
                        <strong>Inmobiliaria Abril</strong>
                    </span>
                    <span className="d-inline-block badgeTipoEmpresa">32 days lefts</span>
                </div>
            </div>
            <div className="d-flex align-items-center avatarCard p-2" data-notificacion="2">
                <div className="mr-xl-3 mr-lg-3 mr-md-3 mr-sm-2 mr-2">
                    <img src="../assets/img/logo_empresa.jpg" alt="" className="avatar " />
                </div>
                <div className="d-xl-block d-lg-block d-md-block d-sm-block d-none mr-xl-3 mr-lg-3 mr-md-3 mr-sm-2 mr-0">
                    <span className="d-block text-truncate">
                        <strong>Nick Jablonski</strong>
                    </span>
                    <span className="d-block text-truncate">hi@semiflat.studio.com</span>
                </div>
                <div className='d-xl-block d-lg-block d-md-block d-sm-block d-none mr-xl-3 mr-lg-3 mr-md-3 mr-sm-2 mr-0'>
                  <NotificationsActiveIcon className='iconosPlomo'></NotificationsActiveIcon>
                </div>
                <div className="notificacion d-xl-block d-lg-block d-md-block d-sm-block d-none mr-xl-3 mr-lg-3 mr-md-3 mr-sm-2 mr-0">
                  <MoreVertIcon className='iconosPlomo'></MoreVertIcon>
                </div>
                <div className='d-xl-none d-lg-none d-md-block d-sm-block d-block'>
                    <MenuIcon className="iconosPlomo" onClick={activaAside}></MenuIcon>
                </div>
            </div>
        </header>
  )
}

export default Header