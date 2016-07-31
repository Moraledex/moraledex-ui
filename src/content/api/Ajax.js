(function() {

const ajax = {
    get: function(url) {
        return new Promise(function(resolve, reject) {
            const req = new XMLHttpRequest();

            req.open('GET', url);
            req.onload = function() {
                if (req.status === 200) {
                    try {
                        resolve(JSON.parse(req.response));
                    }
                    catch(e) {
                        reject(e);
                    }
                }
                else {
                    reject(new Error(req.statusText));
                }
            }

            req.onerror = function() {
                reject(new Error("Network error"));
            };
     
            req.send();
        });
    }

    
}

window.ajax = ajax;
})();