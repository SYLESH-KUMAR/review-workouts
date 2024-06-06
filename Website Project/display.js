const product = [
  {
      id: 0,
      image: 'iqoo.webp',
      title: 'iQOO Neo9 Pro',
      price: 39999 
  },
  {
      id: 1,
      image: 'oneplus.webp',
      title: 'OnePlus 11',
      price: 45999, 
  },
  {
      id: 2,
      image: 'iphone.webp',
      title: 'Apple iPhone 12',
      price: 41499, 
  },
  {
      id: 3,
      image: 'pixel.webp',
      title: 'Google Pixel 7A',
      price: 36999, 
  }
];

const categories = [...new Set(product.map((item)=>
  {return item}))]
  let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
  var {image, title, price} = item;
  return(
      `<div class='box'>
          <div class='img-box'>
              <img class='images' src=${image}></img>
          </div>
      <div class='bottom'>
      <p>${title}</p>
      <h2>₹ ${price}</h2>`+
      "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
      `</div>
      </div>`
  )
}).join('')

var cart =[];

function addtocart(a){
  cart.push({...categories[a]});
  displaycart();
}
function delElement(a){
  cart.splice(a, 1);
  displaycart();
}

function displaycart(){
  let j = 0, total=0;
  document.getElementById("count").innerHTML=cart.length;
  if(cart.length==0){
      document.getElementById('cartItem').innerHTML = "Your cart is empty";
      document.getElementById("total").innerHTML = "₹ "+0+".00";
  }
  else{
      document.getElementById("cartItem").innerHTML = cart.map((items)=>
      {
          var {image, title, price} = items;
          total=total+price;
          document.getElementById("total").innerHTML = "₹ "+total+".00";
          return(
              `<div class='cart-item'>
              <div class='row-img'>
                  <img class='rowimg' src=${image}>
              </div>
              <p style='font-size:12px;'>${title}</p>
              <h2 style='font-size: 15px;'>₹ ${price}.00</h2>`+
              "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
          );
      }).join('');
  }
}


