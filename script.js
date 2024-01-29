/**
 * Make 5 functions
First function - getMenu() -> On the load of the screen run this function and In this function you'll make an call using fetch to get the food items from the JSON and show them to a user
TakeOrder() - Now assume that the user is ordering and make a functiion called TakeOrder() -This function should return a promise and shoud take 2500 milliseconds to resolve the order. in teh resolve choose any 3 burgers randomly and add them in the object.
orderPrep() - This function also returns a promise and takes 1500 milliseconds to resolve and the resolve should return {order_status:true; paid:false}
payOrder() - This function also returns a promise and tajes 1000 milliseconds to reolve and the resolve returns the object {order_status:true; paid:true}
thankyouFnc() - Once {paid:true} is received, give an alert on the screen saying thankyou for eating with us today!
You need to handle 4 promises back to back and run the last thankyou function one after the other. Use either promise chaining or async await or promise methods to do the following.
So inshort you need to handle 4 promises back to back and run the last thankyou fnc one after the other. use either promise chaining or async await or promise methods to do the following.
You are expected to replicate the same UI for the project. Remember there are 2 screens that are to be built.
 */
function getMenu() {
  //fetch Api
  fetch(
    "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json"
  )
    .then((responseObj) => {
      return responseObj.json();
    }).then((data) => {
      // add the UI
      const containerDiv = document.querySelector(".container");

      data.forEach((obj, index, dataArray) => {
        containerDiv.innerHTML += `<div class="sub-con">
          <img src=${obj.imgSrc} alt="image"${index}>
          <div class="sub-con1"> 
            <h4>${obj.name}<p>${obj.price}</p></h4>
            <button>+</button>
          </div>
        </div>`;
      });
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}
function TakeOrder() {}
function orderPrep() {}
function payOrder() {}
function thankyouFnc() {}

getMenu();