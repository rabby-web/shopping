
const cardArray = [];
function display(cardProduct){
    let totalPrice = 0;
    // console.log(cardProduct);
    const tableBody = document.getElementById('card-product');
    tableBody.innerHTML = '';

    for(let i = 0; i < cardProduct.length; i++){
        const name = cardArray[i].productName;
        const price = cardArray[i].productPrice;
        totalPrice = totalPrice + price;
        // console.log(name, price)
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        <td></td>
        <td>${price}</td>
        `;
        tableBody.appendChild(tr)
    }
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <th></th>
        <td>Total Price</td>
        <td></td>
        <td>${totalPrice}</td>
    `;
    tableBody.appendChild(tr);
}

function addToCard(element){ 
    const productName = element.parentNode.parentNode.children[0].innerText;
    // console.log(productName);
    const productPrice = element.parentNode.parentNode.children[1].children[0].innerText;
    // console.log(productPrice);
    const productObj = {
        productName: productName,
        productPrice: parseFloat(productPrice),
    }
    cardArray.push(productObj);
    console.log(cardArray.length)
    document.getElementById('total-add-product').innerText = cardArray.length
    display(cardArray);

}