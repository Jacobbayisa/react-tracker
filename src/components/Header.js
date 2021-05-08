import PropTypes from "prop-types"

const Header = ({title}) => {
    return (
        <header className="container">
            <h1 > {title}</h1>
        </header>
    )
}

// HOw to use css in jsx
// const HeadingStyle ={
//     color:'red',
//     backgroundColor:'black'
// }
Header.propTypes = {
    title: PropTypes.string
}
Header.defaultProps = {
    title: "task tracker",
}
export default Header;