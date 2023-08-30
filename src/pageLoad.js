import { createHome } from './home';
import { createLayout } from './layout';
// import { createMenu } from './menu';


export function initialPageLoad() {
    createLayout()
    createHome();
    // createMenu();

}