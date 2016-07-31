function init() {
    const sandbox = document.createElement('iframe');
    sandbox.src = 'sandbox.html';
    sandbox.style.width = '800px';
    sandbox.style.height = '600px';

    document.getElementById('injectPoint').appendChild(sandbox);
}

if (document.readyState == 'complete') {
    init();
}
else {
    const load = () => {
        document.removeEventListener('DOMContentLoaded', load);

        init();
    }

    document.addEventListener('DOMContentLoaded', load);
}