export function PopUpWindowCenterPosition(url: string | undefined, title: string | undefined, w: number, h: number) {
    // Fixes dual-screen position                         Most browsers      Firefox
    let dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screenLeft;
    let dualScreenTop = window.screenTop !== undefined ? window.screenTop : screenTop;

    let width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    let height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    let left = ((width / 2) - (w / 2)) + dualScreenLeft;
    let top = ((height / 2) - (h / 2)) + dualScreenTop;
    let newWindow = window.open(url, title, 'scrollbars=yes,resizable=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    newWindow?.focus();
}
