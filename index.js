const productContainer = document.querySelector(".product-con");

let products = [
  {
    img:"https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
    name:"Bag",
    price:"34"
  },
  {
    img:"https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
    name:"Shose",
    price:"100"
  },
  {
    img:"https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    name:"Toys",
    price:"12"
  },
  {
    img:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    name:"Tools All in one",
    price:"55"
  }
];
let clutter = '';

console.log(products.length);
for(let i = 0 ; i < products.length; i++){
  clutter += `<div class="product"><div class="image"><img src=${products[i].img}></div><h3>${products[i].name}</h3><div><p>Price: ${products[i].price}</p><button>+</button></div></div>`;
}
productContainer.innerHTML = clutter;