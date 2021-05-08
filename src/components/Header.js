import PropTypes from "prop-types"
import Button from "./Button"

const Header = ({ title, onAdd, showAdd }) => {

    return (
        <header className="header">
            <h1 > {title}</h1>
            <Button onClick ={onAdd} text = { showAdd ? 'Close' : 'Add'} color = { showAdd ? 'red' : 'green' }/>
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