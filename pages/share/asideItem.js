import React, {useState, useEffect, Component} from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function asideItem(props) {
  const menu = props.menu;
  const [menuEstado, setMenuEstado] = useState(0);
  const [flechaEstado, setFlechaEstado] = useState(0);

  const activaSubMenu = (event) => {
    if(menuEstado == "0"){
        /*const boxes = document.querySelectorAll('.subMenu');
        boxes.forEach(box => {
            box.classList.remove('d-block');
            box.classList.add('d-none');
        });*/
        setMenuEstado(1)
        setFlechaEstado(1)
    }else{
        setMenuEstado(0)
        setFlechaEstado(0)
    }
  }

  return (
    (props.hijos == "no") ? 
    (
        <li><a className="d-flex align-items-center justify-content-between" >
            <div className="pr-3">{props.nombre_menu}</div>
            <div><KeyboardArrowDownIcon></KeyboardArrowDownIcon></div>
        </a></li>
    )
    :
    (
        <li><a onClick={activaSubMenu} className={flechaEstado == "0" ? "d-flex align-items-center justify-content-between" : "d-flex align-items-center justify-content-between activaSubMenu"}>
            <div className="pr-3">{props.nombre_menu}</div>
            <div><KeyboardArrowDownIcon></KeyboardArrowDownIcon></div>
        </a>
            <ul className={menuEstado == "0" ? 'subMenu d-none' : 'subMenu d-block'}>
                {
                    
                    menu.map((value, index) => {
                        return (
                            <li key={index}><a href={value.vinculo}>{value.nombre_menu}</a></li>
                        )
                    })
                }
            </ul>
        </li>
    )
    
  )
}

export default asideItem