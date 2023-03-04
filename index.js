function incrementVisitorCount() {
    var xhr = new XMLHttpRequest();
    var url = "https://nb1ll0ilcf.execute-api.ap-northeast-1.amazonaws.com/test/dynamodbmanager";
    var data = JSON.stringify({"operation": "incrementViewCount"});
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            console.log(response);
        }
    };
    xhr.send(data);
}

visitorCount = incrementVisitorCount();

// Update the visitor counter on the page
document.getElementById("counter").innerText = visitorCount;