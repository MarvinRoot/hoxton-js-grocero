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
    ],
    shoppingList: [],
    totalPrice: 0
}

function addZeros(number) {
    const str = "" + number;
    const pad = "000";
    return pad.substring(0, pad.length - str.length) + str;
}

function calculateTotalPrice(){
    state.totalPrice = (state.groceries[0].price*state.groceries[0].count)+(state.groceries[1].price*state.groceries[1].count)+(state.groceries[2].price*state.groceries[2].count)+(state.groceries[3].price*state.groceries[3].count)+(state.groceries[4].price*state.groceries[4].count)+(state.groceries[5].price*state.groceries[5].count)+(state.groceries[6].price*state.groceries[6].count)+(state.groceries[7].price*state.groceries[7].count)+(state.groceries[8].price*state.groceries[8].count)+(state.groceries[9].price*state.groceries[9].count)
    
    const totalPriceSpan = document.querySelector('.total-number')
    totalPriceSpan.textContent = `£${state.totalPrice.toFixed(2)}`
}

function renderCartItem() {
    cartItemList.innerHTML = ''
    for(const item of state.shoppingList){
        const cartItemListLi = document.createElement('li')
            const cartItemListIcon = document.createElement('img')
            cartItemListIcon.setAttribute('class', 'cart--item-icon')
            cartItemListIcon.setAttribute('src', `assets/icons/${addZeros(item.id)}-${item.name}.svg`)
            cartItemListIcon.setAttribute('alt', `${item.name}`)

            const cartItemListTitle = document.createElement('p')
            cartItemListTitle.textContent = `${item.name}`
            const cartItemListRemoveButton = document.createElement('button')
            cartItemListRemoveButton.setAttribute('class','quantity-btn.remove-btn.center')
            cartItemListRemoveButton.textContent = '-'
            const cartItemListQuantity = document.createElement('span')
            cartItemListQuantity.setAttribute('class', 'quantity-text.center')
            cartItemListQuantity.textContent = `${item.count}`
            const cartItemListAddButton = document.createElement('button')
            cartItemListAddButton.setAttribute('class', 'quantity-btn.add-btn.center')
            cartItemListAddButton.textContent = '+'
        cartItemListLi.append(cartItemListIcon,cartItemListTitle,cartItemListRemoveButton,cartItemListQuantity,cartItemListAddButton)
        
        cartItemList.append(cartItemListLi)

        cartItemListRemoveButton.addEventListener('click',function(){
            item.count -- 
            renderCartItem()
            calculateTotalPrice()
        })
        cartItemListAddButton.addEventListener('click', function(){
            item.count ++
            renderCartItem()
            calculateTotalPrice()
        })
    }
}

/************QUESTION FOR NICO: HOW DO YOU ACCESS VARIABLES FROM OTHER FUNCTIONS
 *                              TO ANOTHER FUNCTION? FOR EXAMPLE THE FUNCTION BELOW
 *                              WAS INTENDED TO CREATE THE STORE ITEMS LIST ON THE
 *                              HEADER AND NOTHING ELSE. BUT SINCE I HAD CREATED THE
 *                              BUTTON FOR EVERY ITEM IN THE FIRST FUNCTION, I COULDNT 
 *                              ACCESS IT ON ANOTHER FUNCTION, THEREFORE I ADDED THE
 *                              EVENT LISTENER AND RESTATE-RERENDER INSIDE THE FIRST
 *                              FUNCTION.
 */

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

    storeItemListButton.addEventListener('click', function(){
        if(item.count <= 0){
        state.shoppingList.push(state.groceries[(item.id)-1])
        item.count ++
        }else item.count ++

    renderCartItem()
        calculateTotalPrice()
    })
    }
}

initializeStoreItems()
