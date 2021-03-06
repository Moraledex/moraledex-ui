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

    const span = document.createElement('span');
    span.textContent = 'Icon Set: ';
    container.appendChild(span);

    if (!('icons' in window.localStorage)) {
        window.localStorage.icons = 'default';
    }

    const iconSelector = document.createElement('select');
    for (iconKey of ['thumbs', 'basic', 'default', 'eminem']) {
        const opt = document.createElement('option');
        opt.textContent = iconKey;
        opt.value = iconKey;

        if (iconKey == window.localStorage.icons) {
            console.log(window.localStorage.icons, iconKey);
            opt.selected = true;
        }

        iconSelector.appendChild(opt);
    }
    iconSelector.addEventListener('change', () => {
        window.localStorage.icons = iconSelector.options[iconSelector.selectedIndex].value;

        window.location.reload();
    });
    container.appendChild(iconSelector);

    window.renderMap = function(data) {
        container.removeChild(preloader);

        //console.log(data);

        //container.appendChild(sandbox);
        sandbox.style.height = '';

        //console.log('sending data', sandbox);

        sandbox.contentWindow.postMessage({
            iconKey: window.localStorage.icons,
            data: data
        }, '*');
    }

    $(injectWorklet.bind(null, 'Global Sentiment Analysis', container, () => {
        HussApi.getData().then((realData) => {
            renderMap(realData);
        });
    }));
}