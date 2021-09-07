export let increaseHeight = () => {
    import('../common/dom').then(function (dom) {
        let captureElement = dom.captureElement;
        let clientHeight: number = captureElement('#flex-center').firstElementChild.clientHeight;
        captureElement('#flex-center').firstElementChild.style = 'height:' + (+clientHeight + 25) + 'px';
    }).catch(function (err) {
        console.log(err)
    });
}