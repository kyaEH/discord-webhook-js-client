var request = new XMLHttpRequest();
request.open("POST", "YOUR-DISCORD-WEBHOOK-LINK");
request.setRequestHeader('Content-type', 'application/json');

var message=JSON.Stringify("Hello World!");

var params = {
        username: "Basic Webhook! - Kyaeh",
        avatar_url: "",
        content: message
}

request.send(JSON.stringify(params));
