const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	 // Get all the price elements
    const priceElements = document.querySelectorAll('.price');

    // Initialize total price
    let totalPrice = 0;

    // Calculate total price
    priceElements.forEach(priceElement => {
        totalPrice += parseInt(priceElement.textContent);
    });

    // Create a new element to display the total price
    const totalPriceElement = document.createElement('div');
    totalPriceElement.textContent = 'Total Price: ' + totalPrice + ' Rs';

    // Append the total price element to the body of the document
    document.body.appendChild(totalPriceElement);
  
};

getSumBtn.addEventListener("click", getSum);

