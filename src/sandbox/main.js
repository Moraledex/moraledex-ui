let map;

function init() {
    map = new Map();    
}

window.addEventListener('message', function(event) {
    console.log('received data');

    map.renderData(event.data);
});

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