import {app, appHost} from "./common/db";
import {captureElement} from "./common/dom";
import {MishusoftInstaller} from "./classes/installer";


((command: string): void => {
    if (command === 'install') {
        new MishusoftInstaller(appHost, app).play();
    }
})(captureElement('body').id);
