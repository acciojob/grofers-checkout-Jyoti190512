const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	// Get all the prices from the table
    const prices = document.querySelectorAll(".price");
    
    // Initialize total price
    let totalPrice = 0;
    
    // Loop through each price and sum them up
    prices.forEach(price => {
        totalPrice += parseInt(price.textContent);
    });
    
    // Display the total price
    alert("Total Price: " + totalPrice + " Rs");
  
};

getSumBtn.addEventListener("click", getSum);

