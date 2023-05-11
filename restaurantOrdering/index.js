



let totalPrice = 0
let totalOrders = []
const orders = document.getElementById('orders')
const cart = document.getElementById('cart')
const payment = document.getElementById('payment')

const Form = document.getElementById('card-input')
const completed = document.getElementById('order-complete')


/* Determinar donde se clickeó */

document.addEventListener('click', function(e) {
    if (e.target.dataset.add){
        addItemToCart(e.target.parentElement.id)
        let calc = calculateOrder()
        renderOrder(calc.burgerAmount, calc.beerAmount, calc.breadAmount)
    }
    if (e.target.dataset.remove){
        removeItem(e.target.dataset.remove)
    }

    if (e.target.id === 'complete-order'){
        paymentWindow()
    }

})

Form.addEventListener('submit', function(e){
    e.preventDefault()
    closePayment()
    
})





function addItemToCart(item) {
    let selectedItem = document.getElementById(item)
    let itemPrice = selectedItem.querySelector('.price').innerHTML
    /* Agregar precio al total */
    totalPrice += parseInt(itemPrice)

    totalOrders.push(item)

}

let totalBurgers = 0
let totalBeers = 0
let totalBread = 0

const burgerPrice = 5
const beerPrice = 2
const breadPrice = 15

function calculateOrder() {
    let totalBurgers = 0
    let totalBeers = 0
    let totalBread = 0

    totalOrders.forEach(function(order){
        if (order === 'Burger'){
            totalBurgers += 1
        } else if (order === 'Beer'){
            totalBeers += 1
        } else if (order === 'Bread'){
            totalBread += 1
        }
    })

    let totales = {
        burgerAmount: totalBurgers,
        beerAmount: totalBeers,
        breadAmount: totalBread
    }
    return totales
}

function removeItem(item) {
    let index = totalOrders.indexOf(item)
    if (index !== -1) {
        totalOrders.splice(index, 1);
        if (item === 'Burger'){
            totalPrice -= burgerPrice
        } else if (item === 'Beer'){
            totalPrice -= beerPrice
        } else if (item === 'Bread'){
            totalPrice -= breadPrice
        }
      }
    

    let calc = calculateOrder()
    renderOrder(calc.burgerAmount, calc.beerAmount, calc.breadAmount)
}

function renderOrder(burger, beer, bread){


    if (totalOrders.length > 0){
        cart.style.display = 'flex'
    } else {
        cart.style.display = 'none'
    }


    orders.innerHTML = ''


    if (burger > 0){
        orders.innerHTML += `
            <div class="order">
                <p>Burger x${burger}<span class="remove" data-remove="Burger">remove</span></p>
                <p>$${burger * burgerPrice}</p>
            </div> 
        `
    } if (beer > 0){
        orders.innerHTML += `
            <div class="order">
                <p>Beer x${beer}<span class="remove" data-remove="Beer">remove</span></p>
                <p>$${beer * beerPrice}</p>
            </div> 
        `
    } if (bread > 0){
        orders.innerHTML += `
            <div class="order">
                <p>Bread x${bread}<span class="remove" data-remove="Bread">remove</span></p>
                <p>$${bread * breadPrice}</p>
            </div> 
        `
    }

    document.getElementById('total-price').innerHTML = `
        <p>Total price:</p>        
        <p>$${totalPrice}</p>	
    `
}

function paymentWindow(){
    let payment = document.getElementById('payment')
    cart.style.display = 'none'
    payment.style.display = 'flex'
}

function closePayment(){
    payment.style.display = 'none'
    completed.style.display = 'flex'
    const input = document.getElementById('name');
    const username = input.value;
    completed.innerHTML = `
    <p>Thanks ${username}! your order is on it's way</p>
    `

}







