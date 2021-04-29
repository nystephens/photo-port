import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {


    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera">
                        📸
          </span>
          Oh Snap!
        </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a
                            data-test-id="about"
                            href="#about"
                            onClick = {() => setContactSelected(false)}
                        >
                            About me
            </a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick = {() => setContactSelected(true)}>Contact</span>
                    </li>
                    {categories.map((categories) => (
                        <li className={`mx-1 ${
                            currentCategory.name === categories.name && !contactSelected && 'navActive'
                            }`} key={categories.name}>
                            <span
                                onClick={() => {
                                    setCurrentCategory(categories)
                                    setContactSelected(false);
                                }}
                            >
                                {capitalizeFirstLetter(categories.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;