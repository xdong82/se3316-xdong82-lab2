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
    var checkoutBtn = document.createElement('input');
    var basket = document.getElementById('basket');
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

    checkoutBtn.type = "button";
    checkoutBtn.value = 'Checkout';
    checkoutBtn.onclick = function() { checkout(basket); };;

    info.appendChild(newInfo);
    basket.appendChild(checkoutBtn);



    return true;
}

function addItems(){
    var items = document.getElementById('available-items');
    var language = document.getElementById('language').value;

    items.appendChild(createBook('Lord of the Rings'), language);
    items.appendChild(createBook('Lord of the Rings'), language);
    items.appendChild(createBook('Lord of the Rings'), language);
    items.appendChild(createBook('Lord of the Rings'), language);
    items.appendChild(createBook('Lord of the Rings'), language);
    items.appendChild(createCD('The Best of Tyrone Davis'), language);
    items.appendChild(createCD('The Best of Tyrone Davis'), language);
    items.appendChild(createCD('The Best of Tyrone Davis'), language);
    items.appendChild(createCD('The Best of Tyrone Davis'), language);
    items.appendChild(createCD('The Best of Tyrone Davis'), language);


}

function createBook(name, language){
    var item = document.createElement('li');
    var text = document.createElement('p');
    var altText = document.createElement('p');
    var due = document.createElement('p');
    var image = document.createElement('img');
    var addBtn = document.createElement('input');

    item.id="item-book"
    image.src = "rings.jpeg";
    image.id = "image";
    text.textContent = name;
    altText.textContent = translate(name, language);
    due.textContent = 'Due in 30 Days';
    addBtn.type = "button";
    addBtn.value = 'Add';
    addBtn.onclick = function() { addItem(item, image, addBtn, due); };;

    item.appendChild(text);
    item.appendChild(altText);
    item.appendChild(image);
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

    item.id="item-cd";
    image.src = "tyrone.jpeg";
    image.id = "image";
    text.textContent = name;
    altText.textContent = translate(name, language);
    due.textContent = 'Due in 10 Days';
    addBtn.type = "button";
    addBtn.value = 'Add';
    addBtn.onclick = function() { addItem(item, image, addBtn, due); };;

    item.appendChild(text);
    item.appendChild(altText);
    item.appendChild(image);
    item.appendChild(due);
    item.appendChild(addBtn);

    return item;
}

function translateAll(language){
    var items = document.getElementsByTagName('LI');
    for (let item of items) {
        item.childNodes[1].textContent = translate(item.childNodes[0].textContent, language.value);
    }


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

function addItem(item, image, addBtn, due){
    var basket = document.getElementById('basket');
    var returnDate = document.createElement('p');
    var removeBtn = document.createElement('input');

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    if(due.textContent == 'Due in 10 Days'){
        returnDate.textContent = "Due in: " + addDays(today, 10);
    }else{
        returnDate.textContent = "Due in: " + addDays(today, 30);
    }

    removeBtn.type = "button";
    removeBtn.value = 'Remove';
    removeBtn.onclick = function() { removeItem(item, image, addBtn, due, returnDate, removeBtn); };;


    item.removeChild(image);
    item.removeChild(addBtn);
    item.removeChild(due);

    item.appendChild(returnDate);
    item.appendChild(removeBtn);
    
    basket.appendChild(item);

}

function removeItem(item, image, addBtn, due, returnDate, removeBtn){
    var items = document.getElementById('available-items');

    items.appendChild(item);

    item.removeChild(returnDate);
    item.removeChild(removeBtn);
    
    item.appendChild(image);
    item.appendChild(due);
    item.appendChild(addBtn)

}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function checkout(basket){
    var checkoutItems = document.getElementById('basket').getElementsByTagName('LI');
    var language = document.getElementById('language').value;
    var items = document.getElementById('available-items');

    console.log(language);
    console.log(basket.lastChild.childNodes[0].textContent);


    if(confirm("Confirm checkout of: " + (checkoutItems.length) + " items?")){
        while (basket.childNodes.length > 1) {
            basket.removeChild(basket.lastChild);
        }
    }else{
        while (basket.childNodes.length > 1) {
            if(basket.lastChild.id == 'item-cd'){
                items.appendChild(createCD(basket.lastChild.childNodes[0].textContent, language));
            }else{
                items.appendChild(createBook(basket.lastChild.childNodes[0].textContent, language));
            }
            basket.removeChild(basket.lastChild);
        }
    }

}


