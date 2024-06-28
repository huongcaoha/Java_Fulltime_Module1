
var products = [] ;
for(var i = 1 ; i <= 20 ; i++){
    var product = {
        id : i ,
        productName : `Product ${i}` ,
        price : 20+i ,
        description : `Product ${i} very good` ,
        selling : `Đã bán 10,2k` ,
        sale : `19% giảm` ,
        discount : `-44%` ,
        like : `Yêu thích` ,
        buy : `Buy`
    };
    products.push(product);
}
var productsJSON = JSON.stringify(products);
localStorage.setItem("products",productsJSON);


