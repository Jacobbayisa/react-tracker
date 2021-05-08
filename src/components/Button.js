import PropTypes from 'prop-types'
const Button = ({ color, text }) => {
    return (
        <button style ={{backgroundColor:color}} classNmae='btn'> {text} </button>
    )
}

Button.defaultProps = {
    color:"lightblue"
}

Button.propTypes ={
    color:PropTypes.string,
    text:PropTypes.string
}
export default Button;