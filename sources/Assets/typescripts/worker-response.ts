export class WorkerResponse {
    constructor(
        private publicJsUrl:string
    ) {
    }

    public registerMe(){
        let publicJsUrl = this.publicJsUrl;
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register(`${publicJsUrl}sw.js`).then(registration => {
                    //console.log('SW registered: ', registration);
                }).catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
            });
        }
    }

    public getPublicJsUrl() : string {
        return this.publicJsUrl;
    }
}