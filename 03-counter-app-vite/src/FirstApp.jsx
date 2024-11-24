import {fragment} from 'react';
import PropTypes from 'prop-types';

const newMessage = {
    message: 'Hola mundo',
    title: 'Davor',
};

const getSaludo = (message) => {
    return message
};

export const FirstApp = ({title}) => {
    
  return (
    //same as writing <fragment></fragment>
    <>
        {/* <code>{JSON.stringify(newMessage)}</code> */}
        {/* <h1>{getSaludo("Hi I am Davor")}</h1> */}
        <h1>{title}</h1>
        <p>Soy un subtitulo</p>
    </>
    
  )
}


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
}
