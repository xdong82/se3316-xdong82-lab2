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

    items.appendChild(createBook('Lord of the Rings'));
    items.appendChild(createBook('Lord of the Rings'));
    items.appendChild(createBook('Lord of the Rings'));
    items.appendChild(createBook('Lord of the Rings'));
    items.appendChild(createBook('Lord of the Rings'));
    items.appendChild(createCD('The Best of Tyrone Davis'));
    items.appendChild(createCD('The Best of Tyrone Davis'));
    items.appendChild(createCD('The Best of Tyrone Davis'));
    items.appendChild(createCD('The Best of Tyrone Davis'));
    items.appendChild(createCD('The Best of Tyrone Davis'));

        
        
    
    


}

function createBook(name){
    var item = document.createElement('li');
    var text = document.createElement('p');
    var due = document.createElement('p');
    var image = document.createElement('img');
    var addBtn = document.createElement('input');
    

    image.src = "rings.jpeg";
    text.textContent = name;
    due.textContent = 'Due in 30 Days';
    addBtn.type = "button";
    addBtn.value = 'Add';
    addBtn.onclick = function() { addItem(item); };;


    item.appendChild(image);
    item.appendChild(text);
    item.appendChild(due);
    item.appendChild(addBtn);
    return item;
}

function createCD(name){
    var item = document.createElement('li');
    var text = document.createElement('p');
    var due = document.createElement('p');
    var image = document.createElement('img');
    var addBtn = document.createElement('input');

    image.src = "tyrone.jpeg";
    text.textContent = name;
    due.textContent = 'Due in 10 Days';
    addBtn.type = "button";
    addBtn.value = 'Add';
    addBtn.onclick = function() { addItem(item); };;


    item.appendChild(image);
    item.appendChild(text);
    item.appendChild(due);
    item.appendChild(addBtn);

    return item;
}



function addItem(item){
    var items = document.getElementById('basket');
    items.appendChild(item);
}
