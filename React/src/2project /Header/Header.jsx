import {Title,Description} from "./About";

function Header() {
    return (
        <header className=" shadow-md my-4 p-6">
            <Title />
            <Description />
        </header>
    );
}

export default Header;