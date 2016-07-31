function init() {
    const map = new Map();
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