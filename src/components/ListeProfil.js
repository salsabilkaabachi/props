import React from 'react'
import Carte from './Carte'


const ListeProfil = ({profil}) => {
    const handleName = (elem) =>{
    alert (elem);  };

    return (
        <div>
             { profil.map((el, index) =>(<Carte key={index} el={el} handleName={handleName} />))}
            
        </div>
    )
}

export default ListeProfil