let container = document.createElement("div");
for (let i = 0; i < 8; i++) {
  let productTitle = ["Polo T-Shirt"];
  let productImages = [
    "images/1.webp",
    "images/2.webp",
    "images/3.webp",
    "images/4.webp",
    "images/5.webp",
    "images/6.webp",
    "images/7.webp",
    "images/8.webp",
  ];
  let productDescription = [
    "Regular Fit Shirt Collar Short Sleeve T-Shirt",
    "Regular Fit Polo T-Shirt",
    "Regular Fit Short Sleeve T-Shirt",
    "Regular Fit Short Sleeve Stripe Detail T-Shirt",
    "Modern Fit Polo Neck One Pocket Short Sleeve T-Shirt",
    "Modern Fit Short Sleeve T-Shirt",
    "Slim Fit Short Sleeve Front Half Zip T-Shirt",
    "Regular Fit Short Sleeve T-Shirt",
  ];
  let mainDiv = document.createElement("div");
  let headLine = document.createElement("h3");

  let headLineText = document.createTextNode(productTitle);
  let productImg = document.createElement("img");
  let imgContainer = document.createElement("div");
  productImg.src = productImages[i];
  let ph = document.createElement("p");
  let phText = document.createTextNode(productDescription[i]);
  let butBuy = document.createElement("span");
  let butText = document.createTextNode("Buy Now");

  container.appendChild(mainDiv);
  mainDiv.appendChild(headLine);
  mainDiv.appendChild(imgContainer);
  imgContainer.appendChild(productImg);
  headLine.appendChild(headLineText);
  mainDiv.appendChild(ph);
  ph.appendChild(phText);
  mainDiv.appendChild(butBuy);
  butBuy.appendChild(butText);
  mainDiv.style.cssText =
    "width:350px;overflow: hidden;margin: 20px 25px;overflow: hidden;display: flex;flex-wrap: wrap;align-content: center;justify-content: center;align-items: center;flex-direction: column;";
  headLine.style.cssText = "padding:10px 0;";
  ph.style.cssText =
    "width:85%;text-align:center;padding:10px 0;min-height: 65px;margin:10px auto;";
  butBuy.style.cssText =
    "margin:10px auto;cursor:pointer;background-color:#2b2b2b;padding:10px 20px;border-radius:5px;";

  //Images All Css
  imgContainer.style.cssText = "width: 100%;height: 525px;overflow: hidden;";

  productImg.style.cssText =
    "cursor:pointer;width:100%;transition: all .3s ease-in-out;object-fit: cover;";

  productImg.onmouseenter = () => {
    productImg.style.cssText =
      "cursor:pointer;width:100%;transition:1s;transform: scale(1.5);";
  };

  productImg.onmouseleave = () => {
    productImg.style.cssText = "cursor:pointer;width:100%;transform: scale(1);";
  };

  //button All Css
  butBuy.onmouseenter = () => {
    butBuy.style.cssText =
      "margin:10px auto;background-color:#b1361e;transition:1.8s;cursor:pointer;padding:10px 20px;border-radius:5px;";
  };
  butBuy.onmouseleave = () => {
    butBuy.style.cssText =
      "margin:10px auto;background-color:#2b2b2b;cursor:pointer;padding:10px 20px;border-radius:5px;";
  };
}
container.style.cssText =
  " display:flex;flex-wrap:wrap;justify-content:center;align-content: center;align-items: center;width:100%;";
document.body.appendChild(container);
