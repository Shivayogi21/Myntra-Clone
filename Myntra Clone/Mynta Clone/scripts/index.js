// let bagItems;
// onLoad();

// function onLoad(){
//   let bagItemsStr=localStorage.getItem('bagItems');
//   bagItems=bagItemsStr? JSON.parse(bagItemsStr):[];
//   displayItemsOnHomePage();
//   displayBagIcon();
// }

// function addToBag(itemId){
//    bagItems.push(itemId);
//    localStorage.setItem('bagItems',JSON.stringify(bagItems));
//    displayBagIcon();
// }

// function displayBagIcon(){
//   let bagItemCountElement=document.querySelector('.bag-item-count');
//   if(bagItems.length>0){
//   bagItemCountElement.style.visibility='visible';
//   bagItemCountElement.innerText=bagItems.length;
//   }else{
//   bagItemCountElement.style.visibility='hidden';
//   }
// }

// function displayItemsOnHomePage(){
// let itemsContainerElement=document.querySelector('.items-container');
// if(!itemsContainerElement){
//   return;
// }

// let innerHTML='';
// items.forEach(item=>{
//     innerHTML+=`  <div class="item-container">
//     <img class="item-image" src="${item.image}" alt="item-image">
//     <div class="rating">
//         ${item.rating.stars}⭐|${item.rating.count}
//     </div>
//     <div class="company-name">${item.company}</div>
//     <div class="item-name">${item.item_name}</div>
//     <div class="price">
//         <span class="current-price"> RS ${item.current_price}</span>
//         <span class="original-price"> Rs ${item.original_price}</span>
//         <span class="discount">(${item.discount_percentage}% OFF)</span>
//     </div>
//     <button class="btn-add-bag" onClick='addToBag(${item.id});'>Add to Bag</button>
//   </div>`;
// });
// itemsContainerElement.innerHTML=innerHTML;
// }


let bagItems;
onLoad()

function onLoad(){
let bagItemsstr=localStorage.getItem('bagItems');
bagItems=bagItemsstr?JSON.parse(bagItemsstr):[];
displayItemsOnHomePage();
displayBagIcon();
}

function addToBag(itemId){
   bagItems.push(itemId);
   localStorage.setItem('bagItems',JSON.stringify(bagItems));
   displayBagIcon();
}

function displayBagIcon(){
  let bagItemCountElement=document.querySelector('.bag_item_count');
  if(bagItems.length>0){
  bagItemCountElement.style.visibility = 'visible';
  bagItemCountElement.innerText=bagItems.length;
  }else{
  bagItemCountElement.style.visibility = 'hidden';
}
}



displayItemsOnHomePage();
function displayItemsOnHomePage(){
let itemsContainerElements=document.querySelector('.items_container');
if(!itemsContainerElements){
  return;
}
// let item={
//   image:'images/1.jpg',
//   rating:{
//     stars:4.5,
//     noOfReviews:1400,
//   },
//   company_name:'Carton London',
//   item_name:'Rhodium-plated CZ floral Studs',
//   current_price:606,
//   orginal_price:1045,
//   discount:43,
// }
let innerHTML='';
items.forEach(item=>{
   innerHTML+=`
   <div class="item_container">
                   <img src="${item.image}" class="item_image" alt="item image">
                   <div class="rating">
                     ${item.rating.stars} ⭐ |${item.rating.count}
                   </div>
                   <div class="company_name">
                       ${item.company}
                   </div>
                   <div class="item_name">
                       ${item.item_name}
                   </div>
                   <div class="price">
                       <span class="current_price">Rs${item.current_price}</span>
                       <span class="orginal_price">Rs ${item.original_price}</span>
                       <span class="discount">(${item.discount_percentage}% OFF)</span>
                   </div>
                   <button class="btn-add-bag"  onclick="addToBag(${item.id});">Add to bag</button>
                   </div>
   `
});

itemsContainerElements.innerHTML=innerHTML;
}