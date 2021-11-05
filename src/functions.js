function addToCart(productName= "Elma", quantity) {
    console.log("Sepete eklendi:" + productName + "adet:" + quantity)

}
//addToCard()
//addToCard("vişne")
addToCart("karpuz", 10)



let sayHello = ()=>{
    console.log("Helloooo!")
}
sayHello()

let sayHello2 = function(){
    console.log("Hello2")
}
sayHello2()

function addToCart2(productName, quantity, unitPrice ) {
    
}
addToCart("Elma", 5, 7)
addToCart("armut", 15, 17)
addToCart("karpuz", 8, 47)

let product1 = {productName: "Elma", unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("Ürün : " + product.productName)
    console.log("Adet : " + product.unitPrice)
    console.log("Fiyat : " + product.quantity)
}

addToCart3(product1)

let product2 = {productName: "Elma", unitPrice:10, quantity:5}
let product3 = {productName: "Elma", unitPrice:10, quantity:5}
product2 = product3
product2.productName="Karpuzz"
console.log(product3.productName)

function addToCart4(products) {
    console.log(products)
}
let products = [
    {productName: "Elma", unitPrice:10, quantity:5},
    {productName: "Çilek", unitPrice:10, quantity:5},
    {productName: "Fasülye", unitPrice:10, quantity:5}
]
addToCart4(products)

function add(...numbers ) { //rest operatörü
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total+ numbers[i]    
    }
    console.log(total)
}

add(20,30)
add(20,30, 40)
add(20,30, 40, 50)

let numbers= [30, 101, 580, 120]
console.log(Math.max(...numbers))

let [icAnadolu, marmara,karadeniz, [icAnadoluSehirleri]] = [
    {name: "İç Anadolu", population:"20M"}, 
    {name: "Marmara", population:"35M"},  
    {name: "Karadeniz", population:"22M"},
    [
        ["Ankara","Konya"],
        ["İstanbul, Bursa"],
        ["Sinop","Ordu"]
    ] 
]
console.log(icAnadolu)
console.log(marmara)
console.log(karadeniz)
console.log(icAnadoluSehirleri)

let newproductName, newUnitPrice, newQuantity
({productName: newproductName, unitPrice:newUnitPrice, quantity:newQuantity} 
= {productName: "Çilek", unitPrice:10, quantity:5})

console.log(newproductName)
console.log(newUnitPrice)
console.log(newQuantity)

