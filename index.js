//Stores the items the user has chosen
const cartItemList = document.querySelector('.item-list.cart--item-list')
//Stores the items the user can choose from
const storeItemList = document.querySelector('.item-list.store--item-list')

const state = {
    groceries: [
        {
            id: 1,
            name: 'beetroot',
            price: 0.35,
            count: 0
        },
        {
            id: 2,
            name: 'carrot',
            price: 0.25,
            count: 0
        },
        {
            id: 3,
            name: 'apple',
            price: 0.45,
            count: 0
        },
        {
            id: 4,
            name: 'apricot',
            price: 0.20,
            count: 0
        },
        {
            id: 5,
            name: 'avocado',
            price: 0.80,
            count: 0
        },
        {
            id: 6,
            name: 'bananas',
            price: 1.10,
            count: 0
        },
        {
            id: 7,
            name: 'bell-pepper',
            price: 0.30,
            count: 0
        },
        {
            id: 8,
            name: 'berry',
            price: 0.70,
            count: 0
        },
        {
            id: 9,
            name: 'blueberry',
            price: 0.90,
            count: 0
        },
        {
            id: 10,
            name: 'eggplant',
            price: 0.55,
            count: 0
        }
    ]
}

function addZeros(number) {
    const str = "" + number;
    const pad = "000";
    return pad.substring(0, pad.length - str.length) + str;
}

function getCartItems() {
    return state.groceries.filter(function (item) {
        return item.count > 0
    })
}

function renderTotalPrice() {
    let totalPrice = 0
    for (const item of state.groceries) {
        totalPrice += (item.price * item.count)
    }
    const totalPriceSpan = document.querySelector('.total-number')
    totalPriceSpan.textContent = `£${totalPrice.toFixed(2)}`
}

function renderCartItem() {
    cartItemList.innerHTML = ''
    for (const item of getCartItems()) {
        const cartItemListLi = document.createElement('li')
        const cartItemListIcon = document.createElement('img')
        cartItemListIcon.setAttribute('class', 'cart--item-icon')
        cartItemListIcon.setAttribute('src', `assets/icons/${addZeros(item.id)}-${item.name}.svg`)
        cartItemListIcon.setAttribute('alt', `${item.name}`)

        const cartItemListTitle = document.createElement('p')
        cartItemListTitle.textContent = `${item.name}`
        const cartItemListRemoveButton = document.createElement('button')
        cartItemListRemoveButton.setAttribute('class', 'quantity-btn.remove-btn.center')
        cartItemListRemoveButton.textContent = '-'
        const cartItemListQuantity = document.createElement('span')
        cartItemListQuantity.setAttribute('class', 'quantity-text.center')
        cartItemListQuantity.textContent = `${item.count}`
        const cartItemListAddButton = document.createElement('button')
        cartItemListAddButton.setAttribute('class', 'quantity-btn.add-btn.center')
        cartItemListAddButton.textContent = '+'
        cartItemListLi.append(cartItemListIcon, cartItemListTitle, cartItemListRemoveButton, cartItemListQuantity, cartItemListAddButton)

        cartItemList.append(cartItemListLi)


        cartItemListRemoveButton.addEventListener('click', function () {
            item.count--
            render()
        })
        cartItemListAddButton.addEventListener('click', function () {
            item.count++
            render()
        })
    }
}

function renderStoreItems() {
    storeItemList.innerHTML=''
    for (const item of state.groceries) {
        const storeItemListLi = document.createElement('li')
        storeItemListLi.setAttribute('class', 'store--item')

        const storeItemListIcon = document.createElement('div')
        storeItemListIcon.setAttribute('class', 'store--item-icon')
        const storeItemListIconImage = document.createElement('img')
        storeItemListIconImage.setAttribute('src', `assets/icons/${addZeros(item.id)}-${item.name}.svg`)
        storeItemListIconImage.setAttribute('alt', `${item.name}`)
        storeItemListIcon.append(storeItemListIconImage)

        const storeItemListButton = document.createElement('button')
        storeItemListButton.textContent = 'Add to cart'
        storeItemListLi.append(storeItemListIcon, storeItemListButton)
        storeItemList.append(storeItemListLi)

        listenToStoreItemButton(storeItemListButton, item)
    }
}


function listenToStoreItemButton(button, item) {
    button.addEventListener('click', function () {
        item.count++
        render()
    })
}

function render(){
renderStoreItems()
renderCartItem()
renderTotalPrice()
}

render()