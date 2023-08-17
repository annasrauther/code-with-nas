import PropTypes from 'prop-types';

const Seperator = ({size = 1}) => {
  return (
    <hr style={{
      width: '100%',
      border: `${size}px solid rgba(0,0,0,0.1)`
    }} />
  )
}

Seperator.propTypes = {
  size: PropTypes.number.isRequired,
}

export default Seperator