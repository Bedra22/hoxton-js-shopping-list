let shoppinglist=[{item:"Milk",price:1.20},{item:"Cocoa ",price:2.00},{item:"Salad",price:2.00},{item:"Carrots",price:2.00},{item:"Tomato",price:2.50}]
console.log(shoppinglist)
let question=prompt("Are you adding a new item?")
if (question==true){
    let newitem=prompt("Add your new item:")
    item.push(newitem)
    let newprice=prompt("Add the price for the new item:")
    price.push(newprice)
}
else{
    alert("Array stays the same no changes are made.")
}
console.log(shoppinglist)
let totalprice=0
for (let item of shoppinglist) {
    totalprice += item.price
  }
console.log(totalprice)
