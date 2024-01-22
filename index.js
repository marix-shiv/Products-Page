async function getData() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    // console.log(data);
    const products = data.products
    appendData(products)
  } catch (e) {
    console.log(e.message);
  }
}
getData();

function appendData(data){
    data.map((el,index)=>{
        console.log(el);
        const img = document.createElement("img");
        img.src = el.images[0]
        const brand = document.createElement('h3');
        brand.textContent = `Brand: ${el.brand}`;
        const title = document.createElement('h4');
        title.textContent = `Title: ${el.title}`
        const price = document.createElement('h5');
        price.textContent = `Price: ₹ ${el.price}`
        const rating = document.createElement('h5')
        rating.textContent = `rating: ${el.rating}`

        const div = document.createElement("div")
        div.className = 'products'
        div.append(img,brand,title,price,rating);
        document.querySelector('.container').append(div)

    })

}
