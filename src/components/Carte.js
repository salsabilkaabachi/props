import React from 'react'
import {  Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

import Image from './Image';

 const Carte = ({ el: { profession, bio, name}, handleName})=> {
  
    return (
     
         <Card style={{ width: '30rem',
         borderRadius: '50px',
         backgroundColor:'#DCDCDC',
         
         }} onClick={ ()=> handleName(name)} >
  <Image>
  <div>
<img src="data:image/jpeg;base64,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" alt="" />
</div>

</Image>
<Card.Body>
    <Card.Title className='name'>{name} </Card.Title>
    <Card.Text className='text'>{profession}</Card.Text>
    <Card.Text className='text'>{bio}</Card.Text>

    <button
          onClick={() => handleName(`My name is ${name} `)}
          
        >
         Clique me
        </button>
    
  </Card.Body>

</Card>
) 
};
Carte.defaultProps = {
  name: "byla",
};
   

Carte.propTypes={
    bio:PropTypes.string,

  };
  
export default Carte