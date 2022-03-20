// Callback function to execute when mutations are observed
import {mutationConfig} from "../db/motion";

export function mutationDefault(mutationsList : any[], observer:any) {
    // Use traditional 'for loops' for IE 11
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
        }
        else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
}

export function mutationObserver(targetNode:any, callback:any) {
    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, mutationConfig)
}