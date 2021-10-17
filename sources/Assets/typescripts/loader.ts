document.addEventListener('readystatechange', () => {
    //hide app loader on document completed
    if (document.readyState === 'complete') {
        //initialize app loader image & application
        if (document.querySelector('#app-loader')) {
            document.querySelector('#app-loader')?.setAttribute('style', 'display:none;');
        }
    }
});
