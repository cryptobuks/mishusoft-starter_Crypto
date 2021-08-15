export function createElement(details: any[]) {
    let element, i, j, k;
    for (i in details) {
        let data: any = details[i];
        for (j in data) {
            let elementName = j;
            let elementData = data[j];
            element = document.createElement(elementName);
            for (k in elementData) {
                let element_attribute = k;
                let element_attribute_value = elementData[k];
                element.setAttribute(element_attribute, element_attribute_value);
            }
        }
    }
    return (element as HTMLElement);
}

export function captureElement<E extends Element = Element>(selectors: string): any {
    if (document.querySelector(selectors) !== null) {
        return document.querySelector(selectors) as HTMLElement;
    }
}

export function captureElements<E extends Element = Element>(selectors: string): any {
    if (document.querySelectorAll(selectors) !== null) {
        return document.querySelectorAll(selectors) as NodeList;
    }
}
