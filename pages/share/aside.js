import React, {useState, useEffect, Component} from 'react'
import Image from "next/image";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import AsideItem from "./AsideItem";

function Aside() {

  

  const menu0 = [
      {
          "nombre_menu" : "Submenu1",
          "vinculo" : "/google"
      },
      {
          "nombre_menu" : "Submenu2",
          "vinculo" : "/facebook"
      }
  ]

  const menu1 = [
    {
        "nombre_menu" : "Submenu1",
        "vinculo" : "/google"
    },
    {
        "nombre_menu" : "Submenu2",
        "vinculo" : "/facebook"
    },
    {
      "nombre_menu" : "Submenu3",
      "vinculo" : "/google"
    },
    {
        "nombre_menu" : "Submenu4",
        "vinculo" : "/facebook"
    }
  ]

  

  return (
    <aside className="menuLateral text-white w-xl-25 w-lg-50 w-md-100 d-xl-block d-lg-block">
        <div className="d-flex align-items-center justify-content-between spaceLateral mb-4">
            <div>
                <Image
                    src="/assets/img/logo.png"
                    alt="GFG logo served with static path of public directory"
                    width="104"
                    height="42" 
                />
            </div>
            <div className='icoLadoMenu'>
                <KeyboardArrowLeftIcon></KeyboardArrowLeftIcon>
            </div>
        </div>
        <div>
            <ul className="menu">
                <AsideItem nombre_menu="Inicio con hijos 1" hijos="si" menu={menu0}></AsideItem>
                <AsideItem nombre_menu="Inicio con hijos 2" hijos="si" menu={menu1}></AsideItem>
                <AsideItem nombre_menu="Inicio" hijos="no"></AsideItem>
                <AsideItem nombre_menu="Inicio 2" hijos="no"></AsideItem>
                <AsideItem nombre_menu="Inicio 3" hijos="no"></AsideItem>
                <AsideItem nombre_menu="Inicio 4" hijos="no"></AsideItem>
                <AsideItem nombre_menu="Inicio 5" hijos="no"></AsideItem>
            </ul>
        </div>
    </aside>
  )
}

export default Aside