let cart = [
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Sehpa", quantity:2, unitPrice:1000},
    {id:3, productName:"Çanta", quantity:9, unitPrice:2000},
    {id:4, productName:"Bardak", quantity:31, unitPrice:40},
]
//MAP: arrayleri tek tek dolaşmamızı sağlar
console.log("<ul>")
cart.map(product=>{
    console.log("<li>"+product.productName+ ":" + product.quantity* product.unitPrice+"</li>")
})
console.log("</ul>")

let total=cart.reduce((acc, product)=>acc+ product.unitPrice, 0)
console.log(total)

//FİLTER fonksiyonu:Herhangi bir işlemi filtrelemek için kullanılır
let quantityOver2= cart.filter(product=>product.quantity>2)
console.log(quantityOver2)


function addToCart(sepet) {
    sepet.push({id:5, productName:"Monitör", quantity:6, unitPrice:7000})
}
addToCart(cart)
console.log(cart)

let sayi=10
function sayiTopla(number) {
    number += 1
}
sayiTopla(sayi)
console.log(sayi)