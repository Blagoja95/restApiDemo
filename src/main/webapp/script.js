function getPersonInfo(){
    let name = document.getElementById('name').value;

    let ajaxRequest = new XMLHttpRequest();
    ajaxRequest.onreadystatechange = function(){
        if(ajaxRequest.readyState == 4){
            if(ajaxRequest.status == 200){
                let person = JSON.parse(ajaxRequest.responseText);
                document.getElementById('birthYear').value = person.birthYear;
                document.getElementById('about').value = person.about;
            }
        }
    }
    ajaxRequest.open('GET', 'http://localhost:8080/people/' + name);
    ajaxRequest.send();
}

function setPersonInfo(){
    let name = document.getElementById('name').value;
    let about = document.getElementById('about').value;
    let birthYear = document.getElementById('birthYear').value;

    let postData = 'name=' + name;
    postData += '&about=' + encodeURIComponent(about);
    postData += '&birthYear=' + birthYear;

    let ajaxRequest = new XMLHttpRequest();
    ajaxRequest.open('POST', 'http://localhost:8080/people/' + name);
    ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajaxRequest.send(postData);
}