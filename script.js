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

    addItems();

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




    return true;
}

function addItems(){
    var items = document.getElementById('available-items');
    var language = document.getElementById('language').value;
    console.log(language);
    items.appendChild(createBook('Lord of the Rings', language));
    items.appendChild(createBook('Lord of the Rings', language));
    items.appendChild(createBook('Lord of the Rings', language));
    items.appendChild(createBook('Lord of the Rings', language));
    items.appendChild(createBook('Lord of the Rings', language));
    items.appendChild(createCD('The Best of Tyrone Davis', language));
    items.appendChild(createCD('The Best of Tyrone Davis', language));
    items.appendChild(createCD('The Best of Tyrone Davis', language));
    items.appendChild(createCD('The Best of Tyrone Davis', language));
    items.appendChild(createCD('The Best of Tyrone Davis', language));


}

function createBook(name, language){
    var item = document.createElement('li');
    var text = document.createElement('p');
    var altText = document.createElement('p');
    var due = document.createElement('p');
    var image = document.createElement('img');
    var addBtn = document.createElement('input');

    console.log(language);
    
    image.src = "rings.jpeg";
    image.id = "image";
    text.textContent = name;
    altText.textContent = translate(name, language);
    due.textContent = 'Due in 30 Days';
    addBtn.type = "button";
    addBtn.value = 'Add';
    addBtn.onclick = function() { addItem(item); };;


    item.appendChild(image);
    item.appendChild(text);
    item.appendChild(altText);
    item.appendChild(due);
    item.appendChild(addBtn);
    return item;
}

function createCD(name, language){
    var item = document.createElement('li');
    var text = document.createElement('p');
    var altText = document.createElement('p');
    var due = document.createElement('p');
    var image = document.createElement('img');
    var addBtn = document.createElement('input');

    image.src = "tyrone.jpeg";
    image.id = "image";
    text.textContent = name;
    altText.textContent = translate(name, language);
    due.textContent = 'Due in 10 Days';
    addBtn.type = "button";
    addBtn.value = 'Add';
    addBtn.onclick = function() { addItem(item, image); };;


    item.appendChild(image);
    item.appendChild(text);
    item.appendChild(altText);
    item.appendChild(due);
    item.appendChild(addBtn);

    return item;
}

function translateAll(){
    var language = document.getElementById('language').value;

}

function translate(name, language){

    if(language == "AR"){
        return translateArabic(name);
    }

    if(language == "FR"){
        return translateFrench(name);
    }

    if(language == "ZH"){
        return translateMandarin(name);
    }

    if(language == "HI"){
        return translateHindi(name);
    }

}

function translateArabic(name){
    if(name == "Lord of the Rings"){
        return " سيد الخواتم : رفقة الخاتم";
    }
    if(name == 'The Best of Tyrone Davis'){
        return" أفضل ما في تيرون ديفيس";
    }
}

function translateFrench(name){
    if(name == "Lord of the Rings"){
        return "le Seigneur des Anneaux";
    }
    if(name == 'The Best of Tyrone Davis'){
        return "Le meilleur de Tyrone Davis";
    }
}
function translateMandarin(name){
    if(name == "Lord of the Rings"){
        return "指环王";
    }
    if(name == 'The Best of Tyrone Davis'){
        return "最佳泰隆·戴维斯（Tyrone Davis）";
    }
}
function translateHindi(name){
    if(name == "Lord of the Rings"){
        return 'अंगूठियों का मालिक';
    }
    if(name == 'The Best of Tyrone Davis'){
        return 'द बेस्ट ऑफ टाइरोन डेविस';
    }
}

function addItem(item, image){
    var basket = document.getElementById('basket');
    basket.appendChild(item);

}


