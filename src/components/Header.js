
import { PropTypes } from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {

    const buttonClicked = () => {
        console.log("Button clicked");
    }

    return (
        <header className="header">
            <h2>{title}</h2>

            <Button color={"red"} text="Test Btn" onClick={buttonClicked}/>
        </header>
    )
}

//setting default props
Header.defaultProps = {
    title: 'Task Tracker',
}

//props validations - use typescript, has strong typing
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JSX
const headingStyle = {
    color: 'red',
    backgroundColor: 'black',
}

export default Header;