import React from 'react'
import PropTypes from 'prop-types'

const Student = ({name, age, isStudent}) => {
  return (
    <div className='student'>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Student: {isStudent ? 'Yes' : 'No'}</p>
    </div>
  )
}

Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool.isRequired,
}


Student.defaultProps = {
  name: 'Guest',
  age: 0,
  isStudent: false,
}


export default Student