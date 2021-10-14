
// export function createElement(name : string, attributes: any) {
//     let element = document.createElement(name);
//     return assignAttributes(element, attributes);
// }
//
// export function assignAttributes(element : HTMLElement, attributes: any) {
//     if (attributes.length !== 0){
//         for (let attr in attributes) {
//             element.setAttribute(attr, attributes[attr]);
//         }
//     }
//
//     return element;
// }


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

export function removeAttributeById(elements: any []) {
    if (elements.length !== 0) {
        elements.forEach(function (element) {
            captureElement('#' + element.id).removeAttribute(element.attribute);
        })
    }
}

export function changeElementDisplayById(elements: any []) {
    if (elements.length !== 0) {
        elements.forEach(function (element) {
            captureElement('#' + element.id).style.display = element.display;
        });
    }
}

export function changeElementValueById(elements: any []) {
    if (elements.length !== 0) {
        elements.forEach(function (element) {
            captureElement('#' + element.id).value = element.value;
        });
    }
}

export function changeElementAttributeValue(selector: any, keyAttrAndValue: any[]) {
    //init edit pad by default
    if (captureElement(selector)) {
        let data = keyAttrAndValue;
        if (data.length > 0){
            for (let i = 0; i < data.length; i++) {
                captureElement(data[i].key)[data[i].attribute] = data[i].attribute;
            }
        }
    }
}

// function typedArrayToURL(typedArray, mimeType) {
//     return URL.createObjectURL(new Blob([typedArray.buffer], {type: mimeType}))
// }
// const url = typedArrayToURL(bytes, 'text/plain');

