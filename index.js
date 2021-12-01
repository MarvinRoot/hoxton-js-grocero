/*

This is how a cart-item should look like

<li>
  <img
    class="cart--item-icon"
    src="assets/icons/001-beetroot.svg"
    alt="beetroot"
  />
  <p>beetroot</p>
  <button class="quantity-btn remove-btn center">-</button>
  <span class="quantity-text center">1</span>
  <button class="quantity-btn add-btn center">+</button>
</li>


////////////////////////

This is how a store-item should look like

<li>
  <div class="store--item-icon">
    <img src="assets/icons/001-beetroot.svg" alt="beetroot" />
  </div>
  <button>Add to cart</button>
</li>

*/

//Stores the items the user has chosen
const cartItemList = document.querySelector('.item-list.cart--item-list')
//Stores the items the user can choose from
const storeItemList = document.querySelector('.item-list.store--item-list')

const state = {
    groceries: [
        {
            id: 1,
            name: 'beetroot',
            price: 0.35
        },
        {
            id: 2,
            name: 'carrot',
            price: 0.25
        },
        {
            id: 3,
            name: 'apple',
            price: 0.45
        },
        {
            id: 4,
            name: 'apricot',
            price: 0.20
        },
        {
            id: 5,
            name: 'avocado',
            price: 0.80
        },
        {
            id: 6,
            name: 'bananas',
            price: 1.10
        },
        {
            id: 7,
            name: 'bell-pepper',
            price: 0.30
        },
        {
            id: 8,
            name: 'berry',
            price: 0.70
        },
        {
            id: 9,
            name: 'blueberry',
            price: 0.90
        },
        {
            id: 10,
            name: 'eggplant',
            price: 0.55
        }
    ],
    shoppingList: []
}

function initializeStoreItems() {
    for(const item of state.groceries){
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
    }
}

function addZeros(number) {
    const str = "" + number;
    const pad = "000";
    return pad.substring(0, pad.length - str.length) + str;
}

initializeStoreItems()