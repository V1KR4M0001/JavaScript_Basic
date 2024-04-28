itemName = ['Laptop','Mobile','HeadPhone','Printer','Joystick'];
itemPrice = [30000,10000,1500,25000,3000];
var i;
for(i=0;i<itemName.length;i++){
    var nameDisplay = document.querySelector('#item_name');
    nameDisplay.innerHTML += `<option value="${itemPrice[i]}">${itemName[i]}</option>`;
}
var j;
for(j=1;j<10;j++){
    var quantity = document.querySelector('#qty');
    quantity.innerHTML += `<option value="${j}">${j}</option>`;
}
function addItem(){
    var displayItem = document.querySelector('#displayItem');
    var itemName = document.querySelector('#item_name').options[document.querySelector('#item_name').selectedIndex].text;

    var itemPrice = document.querySelector('#item_name').value;
    var qty = document.querySelector('#qty').value;
    var tablebody = document.querySelector('tbody');
    var row = document.createElement('tr');
    var col1 = document.createElement('td');
    col1.innerHTML = itemName;
    row.appendChild(col1);
    var col2 = document.createElement('td');
    col2.innerHTML = qty;
    row.appendChild(col2);
    var col3 = document.createElement('td');
    col3.innerHTML = itemPrice;
    row.appendChild(col3);
     col4 = document.createElement('td');
    var itemPrices = col4.innerHTML = parseInt(itemPrice*qty);
    row.appendChild(col4);
    tablebody.appendChild(row);

    var displayTotal = document.getElementById('total');

    var totalAmount = parseInt(displayTotal.innerHTML || 0);

    totalAmount += itemPrices;

    displayTotal.innerHTML = totalAmount;
}