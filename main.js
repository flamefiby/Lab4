let requestURL = 'https://flamefiby.github.io/Lab4/package.json';
//create new XHR object
let request = new XMLHttpRequest();


request.open('GET', requestURL);
//request type
request.responseType = 'json';
//send the request by using send method
request.send();


request.onload = function(){
    let productInfo = request.response;
    console.log(productInfo);
    pizzaTypes(productInfo);
};


function products(jsonObj){
    let products = jsonObj.strangeProducts;
    let section = document.querySelector('section');
    for (let i =0; i < products.length; i++){
        //build HTML elements

        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let p1 = document.createElement('p1');
        let p2 = document.createElement('p2');
        let ul = document.createElement('ul');

        img.setAttribute('src',
            'https://flamefiby.github.io/Lab4/img/' + products[i].image);
        img.setAttribute('alt', products[i].image);

        h2.textContent = products[i].name;
        p1.textContent = 'Price, ' + products[i].price;
        p2.textContent = 'details, ' + products[i].details;

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        section.appendChild(article);

    }
}