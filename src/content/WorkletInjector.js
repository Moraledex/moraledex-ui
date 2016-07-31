(function() {
const wrapperClass = 'GBAP10EDHWO';
const workletClass = 'GBAP10EDGTI GBAP10EDBHG';

function injectWorklet(title, worklet) {
    const containers = document.getElementsByClassName(workletClass);

    if (containers.length > 0) {
        const container = containers[0];
        const parent = container.parentNode;

        const wrapper = document.createElement('div');
        wrapper.className = wrapperClass;
        wrapper.style.marginBottom = '20px';


        const headerContainer = document.createElement('div');
        headerContainer.className = 'GBAP10EDFWO';
        wrapper.appendChild(headerContainer);
        const span = document.createElement('span');
        span.innerText = title;
        headerContainer.appendChild(span);

        wrapper.appendChild(worklet);

        parent.insertBefore(wrapper, container);
    }
    else {
        console.log('missing element, retrying');
        //try again in 5 seconds
        setTimeout(injectWorklet.bind(null, title, worklet), 5000);
    }
}

window.injectWorklet = injectWorklet;

})();


