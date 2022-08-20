document.getElementById("toggle-button").onclick = function() {
    document.getElementById("mobile-menu-open").style.display = "flex";
    document.getElementById("toggle-button").style.display = "none";
}

document.getElementById("toggle-button-close").onclick = function() {
    document.getElementById("mobile-menu-open").style.display = "none";
    document.getElementById("toggle-button").style.display = "flex";
}

var orderedItems = [];
//var orderedItemsConfirm = [];

/* function itemClick(click_id) {
    if (!(orderedItems.includes(click_id))) {
        item_count++;
        document.getElementById("item-count").innerHTML = item_count;
        orderedItems.push(click_id);
    }
} */

var itemOnstock = [
    {
        itemName: "Flowy Blouse",
        itemPrice: "$29.99",
        itemId: "item-01"
    },
    {
        itemName: "Casual Dress",
        itemPrice: "$40.46",
        itemId: "item-02"
    },
    {
        itemName: "Dark Jacket",
        itemPrice: "$169.95",
        itemId: "item-03"
    },
    {
        itemName: "Usher",
        itemPrice: "$74.95",
        itemId: "item-04"
    },
    {
        itemName: "Flowy Blouse",
        itemPrice: "$29.99",
        itemId: "item-05"
    },
    {
        itemName: "Casual Dress",
        itemPrice: "$40.46",
        itemId: "item-06"
    },
    {
        itemName: "Dark Jacket",
        itemPrice: "$169.95",
        itemId: "item-07"
    },
    {
        itemName: "Usher",
        itemPrice: "$74.95",
        itemId: "item-08"
    },
]

const parentList = document.getElementById("unordered-id");
/*
var item = "item-022";
var list_item = ["item-013", "item-024", "item-035"];
for (var a = 0; a < list_item.length; a++) {
    if (list_item[a].substring(0, 7) != item) {
        continue;
    } else if (list_item.includes()){
        console.log(list_item[a].substring(0, 7));
        console.log("false");
    } else {
        console.log(a);
    }
}*/

function itemClick(click_id) {
    //orderbadge icon
    var item_count = document.getElementById("item-count").innerHTML;

    //if (orderedItems[a].substring(0, 7) == click_id) {

    if (!(orderedItems.includes(click_id))) {
        var item_count = document.getElementById("item-count").innerHTML;
        item_count++;
        document.getElementById("item-count").innerHTML = item_count;
        orderedItems.push(click_id);
        //orderedItemsConfirm.push(click_id);

        var orderName;
        var orderPrice;
        //searching for id
        for (var a = 0; a < itemOnstock.length; a++) {
            if (itemOnstock[a].itemId == click_id) {
                orderName = itemOnstock[a].itemName;
                orderPrice = itemOnstock[a].itemPrice;
            }
        }

        //creating li class = list-id
        const newList = document.createElement("li");
        newList.classList.add("list");
        newList.setAttribute("id", "listNo" + item_count);
        parentList.appendChild(newList);
    
        //creating divs item-details and item-name
        const item_name = document.createElement("div");
        item_name.classList.add("item-name");
        const item_details = document.createElement("div");
        item_details.classList.add("item-details");
        newList.appendChild(item_name);
        newList.appendChild(item_details);
    
        //creating p tag for the name of item
        const p_tag_name = document.createElement("p");
        p_tag_name.classList.add("item-name-list");
        item_name.appendChild(p_tag_name);
        var nameText = document.createTextNode(orderName);
        p_tag_name.appendChild(nameText);
    
        //creating divs for price and item comfirm
        const price = document.createElement("div");
        price.classList.add("price");
        const item_comfirm = document.createElement("div");
        item_comfirm.classList.add("item-confirm");
        item_details.appendChild(price);
        item_details.appendChild(item_comfirm);
        var priceText = document.createTextNode(orderPrice);
        price.appendChild(priceText);
    
        //creating divs for comfirm
        //creating minus button
        const minus = document.createElement("div");
        minus.classList.add("minus");
        item_comfirm.appendChild(minus);
        //creating minus child
        const minusBtn = document.createElement("button");
        minusBtn.classList.add("order");
        minusBtn.setAttribute("id", "minus" + item_count);
        minusBtn.setAttribute("onclick", "minusFunction(this.id)");
        minus.appendChild(minusBtn);
        var minusText = document.createTextNode("-");
        minusBtn.appendChild(minusText);
    
        //creating count button
        const count_item = document.createElement("div");
        count_item.classList.add("count-item");
        item_comfirm.appendChild(count_item);
        //creating count child
        const countBtn = document.createElement("button");
        countBtn.classList.add("count-order");
        countBtn.setAttribute("id", "countId" + item_count);
        count_item.appendChild(countBtn);
        var countText = document.createTextNode("1");
        countBtn.appendChild(countText);
    
        //creating plus button
        const plus = document.createElement("div");
        plus.classList.add("plus");
        item_comfirm.appendChild(plus);
        //creating plus child
        const plusBtn = document.createElement("button");
        plusBtn.classList.add("order");
        plusBtn.setAttribute("id", "plus" + item_count);
        plusBtn.setAttribute("onclick", "plusFunction(this.id)");
        plus.appendChild(plusBtn);
        var plusText = document.createTextNode("+");
        plusBtn.appendChild(plusText);
    
        //creating delete button
        const deletes = document.createElement("div");
        deletes.classList.add("delete");
        item_comfirm.appendChild(deletes);
        //creating count child
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-order");
        deleteBtn.setAttribute("id", "delete" + item_count);
        deleteBtn.setAttribute("onclick", "deleteFunction(this.id)");
        deletes.appendChild(deleteBtn);
        var deleteText = document.createTextNode("delete");
        deleteBtn.appendChild(deleteText);
    }
}

document.getElementById("cart-button-close-img").onclick = function() {
    document.getElementById("order-popup-id").style.display = "none";
}

document.getElementById("cart-id").onclick = function() {
    document.getElementById("order-popup-id").style.display = "flex";
}

//Plus order button Function
function plusFunction(id) {
    var initialCount = document.getElementById("countId" + id[id.length - 1]).innerHTML;
    document.getElementById("countId" + id[id.length - 1]).innerHTML = parseInt(initialCount) + 1;
}

//Minus Order button Function
function minusFunction(id) {
    var initialCount = document.getElementById("countId" + id[id.length - 1]).innerHTML;
    if (initialCount != '1') {
        document.getElementById("countId" + id[id.length - 1]).innerHTML = parseInt(initialCount) - 1;
    }
}

//Delete order button function
function deleteFunction(id) {
    document.getElementById("listNo" + id[id.length - 1]).remove();
    let initial_count = document.getElementById("item-count").innerHTML;
    document.getElementById("item-count").innerHTML = parseInt(initial_count) - 1;
    for (var a = 0; a < orderedItems.length; a++) {
        if (orderedItems[a][orderedItems[a].length - 1] == id[id.length - 1]) {
            orderedItems.splice(a, 1);
        }
    }
}