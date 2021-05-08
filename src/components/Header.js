import PropTypes from "prop-types"
import Button from "./Button"

const Header = ({title}) => {

    const onClick = () => {
        console.log("you clicked me")
    }

    return (
        <header className="header">
            <h1 > {title}</h1>
            <Button onClick ={onClick} text = "Add" color ="green"/>
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
    title: "Task Tracker",
}

export default Header;