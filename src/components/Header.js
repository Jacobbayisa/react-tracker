import PropTypes from "prop-types"
import { useLocation } from "react-router"
import Button from "./Button"

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation()
    return (
        <header className="header">
            <h1 > {title}</h1>
            {location.pathname === '/' && <Button onClick ={onAdd} text = { showAdd ? 'Close' : 'Add'} color = { showAdd ? 'red' : 'green' }/> }
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