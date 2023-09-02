window.addEventListener('load', function (event) {
    fetch('https://live.local/api/environment').then(async res => {
        if (!res.ok) return;
        const body = (await res.json()).pricing;
        console.log(body);

        function setData() {
            console.log('Applying changes…');
            for (const plan in body.prices) {
                if (!body.prices[plan]) continue;
                for (const priceType in body.prices[plan]) {
                    if (typeof body.prices[plan][priceType] !== 'object') continue;
                    const es = document.getElementsByClassName(`dynamic-data-plan-${plan}-${priceType}`);
                    for (let i = 0; i < es.length; i++) {
                        es[i].innerHTML = new Intl.NumberFormat(window.location.pathname.split('/')[1] === 'de' ? 'de' : 'en', {
                            currency: 'eur',
                            style: 'currency'
                        }).format(body.prices[plan][priceType]['EUR'] / 100);
                    }
                }
            }
        }

        setData();
        let previousUrl = '';
        const observer = new MutationObserver(function (mutations) {
            if (location.href !== previousUrl) {
                previousUrl = location.href;
                setTimeout(() => {
                    setData();
                }, 750);
                console.log(`URL changed to ${location.href}`);
            }
        });
        const config = {subtree: true, childList: true};
        observer.observe(document, config);
    });
});
/*
 fetch('https://scnx.app/api/environment').then(async res => {
            if (!res.ok) return;
            const body = await res.json();
            const e = document.getElementById('ai-credits');
            let aiPackagesHTML = '';
            for (const item of body.aiPackages) {
                aiPackagesHTML = aiPackagesHTML + `<tr><td>${item.price}</td><td>${item.amount}</td></tr>`
            }
            e.innerHTML = aiPackagesHTML;
        })
 */