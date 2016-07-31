const hash = window.location.hash;
if (hash.indexOf('selectedWorklet=13460%2418') != -1) {
    const container = document.createElement('div');
    injectWorklet('Global Sentiment Analysis', container);

/*
    const preloader = document.createElement('image');
    preloader.src = 'images/preloader.gif';
    preloader.className = 'preloader';

    container.appendChild(preloader);



    */
    const sandbox = document.createElement('iframe');
    sandbox.src = chrome.extension.getURL('sandbox.html');
    sandbox.id = 'sentimentMap';

    container.appendChild(sandbox);
    
}