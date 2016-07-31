const hash = window.location.hash;
if (hash.indexOf('selectedWorklet=13460%2418') != -1) {
    const container = document.createElement('div');
    injectWorklet('Global Sentiment Analysis', container);

    //put up our loader
    const preloader = document.createElement('img');
    preloader.src = chrome.extension.getURL('images/gears.svg');
    preloader.className = 'preloader';

    container.appendChild(preloader);

    const sandbox = document.createElement('iframe');
    sandbox.src = chrome.extension.getURL('sandbox.html');
    sandbox.id = 'sentimentMap';
    sandbox.style.height = '0px';
    container.appendChild(sandbox);

    window.renderMap = function(data) {
        container.removeChild(preloader);

        //container.appendChild(sandbox);
        sandbox.style.height = '';

        console.log('sending data');

        sandbox.contentWindow.postMessage(data, '*');
    }


    setTimeout(renderMap.bind(window, [
        {
            lat: 30,
            lng: 30,
            sentiment: 1.0
        }
    ]), 1000);

    /*
    
    */
}