const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	   const priceElements = document.querySelectorAll('.price');
    
    // Initialize total price
    let totalPrice = 0;

    // Calculate total price
    priceElements.forEach(priceElement => {
        totalPrice += parseInt(priceElement.textContent);
    });

    // Create or select the element to display the total price
    let totalPriceElement = document.getElementById("ans");
    if (!totalPriceElement) {
        totalPriceElement = document.createElement("div");
        totalPriceElement.id = "ans";
        document.body.appendChild(totalPriceElement);
    }

    // Update the content of the total price element
    totalPriceElement.textContent = "Total Price: " + totalPrice + " Rs";
	
  
};

getSumBtn.addEventListener("click", getSum);

