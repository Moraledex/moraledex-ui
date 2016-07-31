(function() {
const wrapperClass = 'GBAP10EDHWO';
const workletClass = 'GBAP10EDETI GBAP10EDAHG';

class WorkletInjector {
    constructor(container) {
        const parent = container.parentNode;
        //const parent = container
        //container = container.children[0]

        console.log(container, parent);

        this.worklet = document.createElement('div');
        this.worklet.className = wrapperClass;
        this.worklet.style.marginBottom = '20px';
        //this.worklet.style.textAlign = 'center';
        //this.worklet.style.width = '600px';

        const headerContainer = document.createElement('div');
        headerContainer.className = 'GBAP10EDFWO';
        this.worklet.appendChild(headerContainer);

        const span = document.createElement('span');
        span.innerText = 'MoraleDex';
        headerContainer.appendChild(span);

        const sandbox = document.createElement('iframe');
        sandbox.src = chrome.extension.getURL('sandbox.html');
        sandbox.id = 'sentimentMap';

        this.worklet.appendChild(sandbox);

        parent.insertBefore(this.worklet, container);
    }
}

window.WorkletInjector = WorkletInjector;

})();


