export function appInitializer() {
    return () => new Promise<void>((resolve) => {
        // wait for facebook sdk to initialize before starting the angular app
        window['fbAsyncInit'] = function () {
            FB.init({
                appId: "", //TODO: get app id from fb
                cookie: true,
                xfbml: true,
                version: 'v21.0'
            });
        };
        // load facebook sdk script
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = <HTMLScriptElement>d.createElement(s); js.id = id;
            js.defer = true;
            js.crossOrigin = "anonymous";
            js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v21.0&appId=" //TODO: get app id from fb;
            fjs.parentNode?.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        resolve();
    });
}