function randomlyPickItems(arr) {
  let randomArr = [];
  while (randomArr.length < 3) {
    let random = Math.floor(Math.random() * arr.length);
    if (!randomArr.includes(random)) {
      randomArr.push(random);
    }
  }

  return randomArr.map((item) => arr[item]);
}

function getMenu() {
  return fetch(
    "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json"
  ).then((responseObj) => {
    return responseObj.json();
  });
}

function TakeOrder(dataArrayOf3Arr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(randomlyPickItems(dataArr));
    }, 2500);
  });
}

function orderPrep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ order_status: true, paid: false });
    }, 1500);
  });
}

function payOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ order_status: true, paid: true });
    }, 1000);
  });
}

function thankyouFnc() {
  alert("Thank you for eating with us today!");
}

getMenu()
  .then((data) => {
    const containerDiv = document.querySelector(".container");
    data.forEach((obj, index) => {
      containerDiv.innerHTML += `<div class="sub-con">
      <img src=${obj.imgSrc} alt="image"${index}>
      <div class="sub-con1"> 
        <h4>${obj.name}<p>${obj.price}</p></h4>
        <button>+</button>
      </div>
    </div>`;
    });

    return TakeOrder(data);
  })
  .then((dataArrayOf3) => {
    // Handle UI for the order
    console.log("Order placed:", dataArrayOf3);
    
    const containerDiv1 = document.querySelector(".container1");
    dataArrayOf3.forEach((obj, index) => {
      containerDiv1.innerHTML += `<div class="sub-con">
      <img src=${obj.imgSrc} alt="image"${index}>
      <div class="sub-con1"> 
        <h4>${obj.name}<p>${obj.price}</p></h4>
        <button>+</button>
      </div>
    </div>`;
    });
    return orderPrep();
  })
  .then((orderPrepResult) => {
    console.log("Order preparation:", orderPrepResult);
    return payOrder();
  })
  .then((payOrderResult) => {
    console.log("Order paid:", payOrderResult);
    thankyouFnc();
  })
  .catch((error) => {
    console.error("Error:", error);
  });
