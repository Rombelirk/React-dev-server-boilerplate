import Main from "./Layout/Main";
import Header from "./Layout/Header";
import Content from "./Layout/Content";
import FixedSidebar from "./Menus/FixedSidebar";
import Pool from "./Menus/Pool";
import Block from "./Containers/Block";
import Button from "./InteractiveUI/Button";
import Checkbox from "./InteractiveUI/Checkbox";
import Select from "./InteractiveUI/Select";
import Timer from "./InteractiveUI/Timer";
import ModalWindow from "./Dialog/ModalWindow";



/**
 * @Layout
 *
 * Static app container
 */

export const Layout = {
    Main,       /** General container */
    Header,     /** Everything between Header and Footer */
    Content
};

/**
 * @Menus
 *
 * Navigation menus and sidebars
 */


export const Menus = {
    FixedSidebar, /** Vertical side-menus for navigation etc. */
    Pool
};


/**
 * @Containers
 *
 */

export const Containers = {
    Block, /**  */
};

/**
 * @InteractiveUI
 *
 */

export const InteractiveUI = {
    Button, /**  */
    Checkbox,
    Select,
    Timer
};

/**
 * @Dialog
 *
 */

export const Dialog = {
    ModalWindow, /**  */

};





