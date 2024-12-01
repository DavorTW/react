import {fragment} from 'react';
import PropTypes from 'prop-types';

export const FirstApp = ({title ,subTitle = 'No hay subtitulo', name = 'Davor'}) => {
    
  return (
    //same as writing <fragment></fragment>
    <>
        {/* <code>{JSON.stringify(newMessage)}</code> */}
        {/* <h1>{getSaludo("Hi I am Davor")}</h1> */}
        <h1>{ title }</h1>
        <p>{ subTitle }</p>
        <p>{ name }</p>
    </>
    
  )
}


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}

// FirstApp.defaultProps = {
//   // title: 'No hay titulo',
//   // subTitle: 'No hay subtitulo',
//   // name: 'Davor',
// }
