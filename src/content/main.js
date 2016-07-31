console.log('Initializing Morale Dex');

function init() {
    const container = document.getElementsByClassName('GBAP10EDGTI GBAP10EDBHG');
    if (container.length > 0) {
        const injector = new WorkletInjector(container[0]);
    }
    else {
        console.log('missing element, retrying');
        //try again in 5 seconds
        setTimeout(init, 5000);
    }
}

const hash = window.location.hash;
if (hash.indexOf('selectedWorklet=13460%2418') != -1) {
    init();


    /*
    const sandbox = document.createElement('iframe');
    sandbox.src = 'sandbox.html';
    sandbox.id = 'sentimentMap';

    document.getElementById('injectPoint').appendChild(sandbox);
    */
}