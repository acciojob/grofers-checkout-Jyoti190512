const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	 const prices = document.querySelectorAll(".price");
    
    // Initialize total price
    let totalPrice = 0;
    
    // Loop through each price and sum them up
    prices.forEach(price => {
        totalPrice += parseInt(price.textContent);
    });
    
    // Create a new element to display the total price
    const totalPriceElement = document.createElement("div");
    totalPriceElement.textContent = "Total Price: " + totalPrice + " Rs";
    
    // Append the total price element to the body of the document
    document.body.appendChild(totalPriceElement);
  
};

getSumBtn.addEventListener("click", getSum);

