function ValidateCredentials( email, birthyear)
{
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    if(!email.value.match(mailFormat))
    {
        alert("You have entered an invalid email address!");
        email.focus();
        return false;
    }

    else if(birthyear.value < 1900 || birthyear.value > 2019){
        alert("You have entered an invalid Year of birth!");
        email.focus();
        return false;
    }

    else{
        signIn();
        return true;
    }
}

function signIn(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var birthyear = document.getElementById('birthyear').value;
    var info = document.getElementById('user-info');

    while (info.firstChild) {
        info.removeChild(info.firstChild);
      }


    var newInfo = document.createElement('p');


    if(birthyear < 2001){
        newInfo.textContent = name + ' (' + email + ') ' + '[Adult]';
    }else{
        newInfo.textContent = name + ' (' + email + ') ' + '[Child]';
    }
    



    info.appendChild(newInfo);

    addItems();


    return true;
}

function addItems(){
    var items = document.getElementById('available-items');

    for(var i = 0; i < 5; i++){
        var item = document.createElement('li');
        var text = document.createElement('p');
        var due = document.createElement('p');
        var image = document.createElement('img');
        image.src = "rings.jpeg";
        text.textContent = 'Lord of the Rings';
        due.textContent = 'Due in 30 Days';

        items.appendChild(item);

        item.appendChild(image);
        item.appendChild(text);
        item.appendChild(due);
    }

    for(var i = 0; i < 5; i++){
        var item = document.createElement('li');
        var text = document.createElement('p');
        var due = document.createElement('p');
        var image = document.createElement('img');
        image.src = "tyrone.jpeg";
        text.textContent = 'The Best of Tyrone Davis';
        due.textContent = 'Due in 10 Days';

        items.appendChild(item);

        item.appendChild(image);
        item.appendChild(text);
        item.appendChild(due);
    }
    


}

