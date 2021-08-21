// Variable Name Id 

const ramEightGB = document.getElementById('ram8GB');
const ramSixtenGB = document.getElementById('ram16GB');
const storage256GB = document.getElementById('storage256GB');
const storage512GB = document.getElementById('storage512GB');
const storage1TB = document.getElementById('storage1TB');
const freeDelivery = document.getElementById('freeDelivary');
const paidDelivery = document.getElementById('paidDelivary');
const coponInput = document.getElementById('copon-input');
const coponButton = document.getElementById('copon-button')


// Input Value and Update Price  Function

function priceUpdate(newLocation, price) {
    const location = document.getElementById(newLocation)
    location.innerText = price;
}

// Total Update  Function 

function totalUpdate(laptopId, memoryId, storageId, deliveryId, displayId) {
    const costForLaptop = document.getElementById(laptopId).innerText;
    const costForMemory = document.getElementById(memoryId).innerText;
    const costForStorage = document.getElementById(storageId).innerText;
    const costForDelivery = document.getElementById(deliveryId).innerText;
    const displayTotal = document.getElementById(displayId);
    const totalAll = document.getElementById('totalFinal');

    const total = parseInt(costForLaptop) + parseInt(costForMemory) + parseInt(costForStorage) + parseInt(costForDelivery);
    displayTotal.innerText = total;
    totalAll.innerText = total;
}

// Copon Function With Stevekaku 

function coponCard() {
    const coponInput = document.getElementById('copon-input');
    const currentTotal = document.getElementById('total');
    const currentTotalText = currentTotal.innerText;
    const currentTotalAmount = parseInt(currentTotalText);
    const lastTotal = document.getElementById('totalFinal');
    const lastTotalText = lastTotal.innerText;
    const lastTotalAmount = parseInt(lastTotalText);


    if (coponInput.value == 'stevekaku') {
        lastTotal.innerText = currentTotalAmount - (currentTotalAmount * 20 / 100)
    } else if (coponInput.value == '' || coponInput.value !== 'stevekaku') {
        alert('Sorry not allowed')
    } else {
        lastTotal.innerText = currentTotalAmount;
    }
}


// Add Even Lisaner 

ramEightGB.addEventListener('click', function () {
    priceUpdate('cost-memory', 0);
    totalUpdate('cost-laptop', 'cost-memory', 'cost-storage', 'cost-delivery', 'total')

})
ramSixtenGB.addEventListener('click', function () {
    priceUpdate('cost-memory', 180);
    totalUpdate('cost-laptop', 'cost-memory', 'cost-storage', 'cost-delivery', 'total')

})
storage256GB.addEventListener('click', function () {
    priceUpdate('cost-storage', 0);
    totalUpdate('cost-laptop', 'cost-memory', 'cost-storage', 'cost-delivery', 'total')

})
storage512GB.addEventListener('click', function () {
    priceUpdate('cost-storage', 100);
    totalUpdate('cost-laptop', 'cost-memory', 'cost-storage', 'cost-delivery', 'total')

})
storage1TB.addEventListener('click', function () {
    priceUpdate('cost-storage', 180);
    totalUpdate('cost-laptop', 'cost-memory', 'cost-storage', 'cost-delivery', 'total')

})
freeDelivery.addEventListener('click', function () {
    priceUpdate('cost-delivery', 0);
    totalUpdate('cost-laptop', 'cost-memory', 'cost-storage', 'cost-delivery', 'total')

})
paidDelivery.addEventListener('click', function () {
    priceUpdate('cost-delivery', 20);
    totalUpdate('cost-laptop', 'cost-memory', 'cost-storage', 'cost-delivery', 'total')

})
coponButton.addEventListener('click', function () {
    coponCard()
})