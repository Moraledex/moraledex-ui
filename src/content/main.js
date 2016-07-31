function init() {
    const fakeData = []
    for (var i = 0; i < 100; i++) {
        fakeData.push({
            lat: Math.random() * 120 - 60,
            lng: Math.random() * 120 - 60,
            sentiment: Math.random() * 4 - 2
        })
    }

    setTimeout(renderMap.bind(window, fakeData), 1000);
}


const hash = window.location.hash;
if (hash.indexOf('selectedWorklet=13460%2418') != -1) {
    const container = document.createElement('div');
    
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

        console.log('sending data', sandbox);

        sandbox.contentWindow.postMessage(data, '*');
    }

    injectWorklet('Global Sentiment Analysis', container, init);
}