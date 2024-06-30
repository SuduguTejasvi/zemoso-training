document.addEventListener('DOMContentLoaded', function() {
    const menuSearchInput = document.getElementById('menuSearch');
    const tableSearchInput = document.getElementById('tableSearch');
    let foodItems = [];
    let tables = [];
    function loadTableData() {
        const storedTables = localStorage.getItem('tables');
        if (storedTables) {
            tables = JSON.parse(storedTables);
        } else {
            // If no data in localStorage, use default tables
            tables = [
                {
                    name: "Table 1",
                    items: [
                        { name: "Pizza", price: 12.99, itemCount: 1 },
                        { name: "Burger", price: 8.99, itemCount: 1 }
                    ],
                    totalCount: 2,
                    totalCost: 21.98
                },
                {
                    name: "Table 2",
                    items: [
                        { name: "Pasta", price: 10.99, itemCount: 1 },
                        { name: "Salad", price: 5.99, itemCount: 1 }
                    ],
                    totalCount: 2,
                    totalCost: 16.98
                }
            ];
            // Save default tables to localStorage
            localStorage.setItem('tables', JSON.stringify(tables));
        }
    }

    // Load initial table data
    loadTableData();

    function createItemCard(fooditems) {
        const cardContainer = document.getElementById("card-container");
        const tableContainer = document.getElementById('table-section');
        tableContainer.innerHTML = "";
        cardContainer.innerHTML = ''; // Clear existing cards

        tables.forEach(table => {
            const tableCard = document.createElement('div');
            tableCard.classList.add('tcard');
            tableCard.dataset.tableName = table.name; // Add a data attribute to identify the table

            const tableName = document.createElement("h2");
            tableName.classList.add('itemName');
            tableName.textContent = table.name;

            const totalPrice = document.createElement("p");
            totalPrice.classList.add('totalPrice');
            totalPrice.textContent = `Rs-${table.totalCost.toFixed(2)}`;

            const totalItemCount = document.createElement("p");
            totalItemCount.classList.add('totalCount');
            totalItemCount.textContent = `Total-items-${table.totalCount}`;

            tableCard.appendChild(tableName);
            tableCard.appendChild(totalPrice);
            tableCard.appendChild(totalItemCount);

            tableContainer.appendChild(tableCard);

            // Add drag event listeners to the table card
            tableCard.addEventListener('dragover', handleDragOver);
            tableCard.addEventListener('drop', handleDrop);
            tableCard.addEventListener('click', function(event) {
                console.log("Clicked table");
                showModal(table);
            });
        });

        fooditems.forEach(item => {
            const card = document.createElement("div");
            card.classList.add('card');
            card.setAttribute('draggable', true); // Make the card draggable
            card.dataset.name = item.name;
            card.dataset.price = item.price;
        
            const itemImage = document.createElement("img");
            itemImage.classList.add('item-image');
            itemImage.src = item.image;
        
            const cardContent = document.createElement("div");
            cardContent.classList.add('card-content');
        
            const itemName = document.createElement("h2");
            itemName.classList.add('itemName');
            itemName.textContent = item.name;
        
            const itemCost = document.createElement("p");
            itemCost.classList.add('itemCost');
            itemCost.textContent = `Price: ${item.price.toFixed(2)}`;
        
            const category = document.createElement("p");
            category.classList.add('category');
            category.textContent = `Category: ${item.category}`;
        
            cardContent.appendChild(itemName);
            cardContent.appendChild(itemCost);
            cardContent.appendChild(category);
        
            card.appendChild(itemImage);
            card.appendChild(cardContent);
        
            cardContainer.appendChild(card);
        
            // Add drag event listeners to the card
            card.addEventListener('dragstart', handleDragStart);
        });
    }        

    function filterItems(query) {
        const filteredItems = foodItems.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase())
        );
        createItemCard(filteredItems);
    }

    function filterTables(query) {
        const filteredTables = tables.filter(table => table.name.toLowerCase().includes(query.toLowerCase()));
        createTableCard(filteredTables);
    }

    function createTableCard(tables) {
        const tableContainer = document.getElementById('table-section');
        tableContainer.innerHTML = ''; // Clear existing cards

        tables.forEach(table => {
            const tableCard = document.createElement('div');
            tableCard.classList.add('tcard');
            tableCard.dataset.tableName = table.name; // Add a data attribute to identify the table

            const tableName = document.createElement("h2");
            tableName.classList.add('itemName');
            tableName.textContent = table.name;

            const totalPrice = document.createElement("p");
            totalPrice.classList.add('totalPrice');
            totalPrice.textContent = `Rs-${table.totalCost.toFixed(2)}`;

            const totalItemCount = document.createElement("p");
            totalItemCount.classList.add('totalCount');
            totalItemCount.textContent = `Total-items-${table.totalCount}`;

            tableCard.appendChild(tableName);
            tableCard.appendChild(totalPrice);
            tableCard.appendChild(totalItemCount);

            tableContainer.appendChild(tableCard);

            // Add drag event listeners to the table card
            tableCard.addEventListener('dragover', handleDragOver);
            tableCard.addEventListener('drop', handleDrop);
            tableCard.addEventListener('click', function(event) {
                console.log("after changing");
                showModal(table);
            });
        });
    }

    function handleDragStart(event) {
        const card = event.target;
        const itemName = card.querySelector('.itemName').textContent;
        const item = foodItems.find(item => item.name === itemName);

        console.log(item.name);
        
    
        if (item) {
            event.dataTransfer.setData('text/plain', JSON.stringify({
                name: item.name,
                price: item.price // Ensure item.price is set correctly
            }));
        }
    }
    

    function handleDragOver(event) {
        event.preventDefault(); // Necessary to allow dropping
    }

    function handleDrop(event) {
        event.preventDefault();
        console.log('Event target:', event.target);
    
        // Check if event.target or its closest card exists
        const closestCard = event.target.closest('.tcard');
        if (!closestCard) {
            console.error('No .div element found in event target or its ancestors.');
            return;
        }
    
        const tableName = closestCard.dataset.tableName;
        if (!tableName) {
            console.error('Dataset tableName not found on the target element.');
            return;
        }
    
        const data = event.dataTransfer.getData('text/plain');
        const item = JSON.parse(data);
    
        addToTable(tableName, item);
    }

    function showModal(table) {
        const modal = document.getElementById('billpopup');
        const modalBody = document.getElementById('bill-details');
        modalBody.innerHTML = ''; // Clear existing content

        console.log(table.name);
        const tableName = document.createElement('h3');
        tableName.textContent = table.name;
        modalBody.appendChild(tableName);

        const itemstable = document.createElement('table');
        const itemheader = document.createElement('thead');
        const itemheaderrow = document.createElement('tr');
        const sno = document.createElement('th');
        const itemheadername = document.createElement('th');
        const itemheaderprice = document.createElement('th');
        const itemcount = document.createElement('th');
        const actions = document.createElement('th');
        const totalitemsCost=document.createElement('th');
        totalitemsCost.textContent="total item Cost";
        actions.textContent = "Actions";
        actions.setAttribute('colspan', '3');
        sno.textContent = "S.No";
        itemheadername.textContent = "Item Name";
        itemheaderprice.textContent = "Item Price";
        itemcount.textContent = "Item Count";
        itemheaderrow.classList.add('billrow');
        itemheaderrow.appendChild(sno);
        itemheaderrow.appendChild(itemheadername);
        itemheaderrow.appendChild(itemheaderprice);
        itemheaderrow.appendChild(itemcount);
        itemheaderrow.appendChild(actions);
        itemheaderrow.appendChild(totalitemsCost);
        itemheader.appendChild(itemheaderrow);
        itemheader.classList.add('billheader');
        itemheader.appendChild(itemheaderrow);
        itemstable.append(itemheader);
        itemstable.classList.add('billTable');

        let s = 1;
        table.items.forEach(item => {
            const itemrow = document.createElement('tr');
            const sno = document.createElement('td');
            const itemname = document.createElement('td');
            const itemprice = document.createElement('td');
            const itemcount = document.createElement('td');
            const totalitemscost=document.createElement('td');
            const insert = document.createElement('td');
            const subtract = document.createElement('td');
            const del = document.createElement('td');
            totalitemscost.textContent="Rs-"+item.itemCount*item.price.toFixed(2);
            sno.textContent = s;
            s = s + 1;
            itemname.textContent = item.name;
            itemprice.textContent = `Rs-${item.price.toFixed(2)}`;
            itemcount.textContent = item.itemCount;

            // Create buttons for Insert, Subtract, and Delete actions
            const addButton = document.createElement('button');
            addButton.textContent = '+';
            addButton.classList.add('btn', 'btn-primary');
            addButton.addEventListener('click', function() {
                updateItemCount(table, item, 'increment');
            });

            const subtractButton = document.createElement('button');
            subtractButton.textContent = '-';
            subtractButton.classList.add('btn', 'btn-primary');
            subtractButton.addEventListener('click', function() {
                updateItemCount(table, item, 'decrement');
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'X';
            deleteButton.classList.add('btn', 'btn-danger');
            deleteButton.addEventListener('click', function() {
                deleteItem(table, item);
            });

            // Append buttons to the respective cells
            insert.appendChild(addButton);
            subtract.appendChild(subtractButton);
            del.appendChild(deleteButton);

            itemrow.classList.add('billrow');
            itemrow.appendChild(sno);
            itemrow.appendChild(itemname);
            itemrow.appendChild(itemprice);
            itemrow.appendChild(itemcount);
            itemrow.appendChild(insert);
            itemrow.appendChild(subtract);
            itemrow.appendChild(del);
            itemrow.appendChild(totalitemscost);
            itemstable.appendChild(itemrow);
        });

        const tfooter = document.createElement('tfoot');
        const tfootrow1 = document.createElement('tr');
        const tfootrow2 = document.createElement('tr');
        const tfootcell1 = document.createElement('td');
        const tfootcell2 = document.createElement('td');
        const tfootcell3 = document.createElement('td');
        const tfootcell4 = document.createElement('td');

        // Set colspan for footer cells
        tfootcell1.setAttribute('colspan', '7');
        tfootcell3.setAttribute('colspan', '7');

        tfootcell1.textContent = "Total Price";
        tfootcell2.textContent = table.totalCost.toFixed(2);
        tfootcell3.textContent = "Total Items";
        tfootcell4.textContent = table.totalCount;

        tfootrow1.appendChild(tfootcell1);
        tfootrow1.appendChild(tfootcell2);
        tfootrow2.appendChild(tfootcell3);
        tfootrow2.appendChild(tfootcell4);

        tfooter.appendChild(tfootrow1);
        tfooter.appendChild(tfootrow2);

        itemstable.appendChild(tfooter);
        modalBody.appendChild(itemstable);

        modal.style.display = "block";

        const closeModal = document.getElementById('closeModal');
        const closeButton = document.getElementById('closeButton');
        const generateBillButton = document.getElementById('generateBillButton');

        closeModal.onclick = function() {
            localStorage.setItem('tables', JSON.stringify(tables));
            modal.style.display = "none";
        }

        closeButton.onclick = function() {
            localStorage.setItem('tables', JSON.stringify(tables));
            modal.style.display = "none";
        }

        generateBillButton.onclick = function() {
            const generateBillModal = document.getElementById('generateBillModal');
            generateBillModal.style.display = "block";
            const generateBillContent = document.getElementById('generateBillContent');
        
            // Clear existing content in generateBillContent
            generateBillContent.innerHTML = '';
        
            // Create an unordered list to display items and their counts
            const itemList = document.createElement('ul');
            itemList.classList.add('item-list');
        
            // Iterate over each item in the table and create list items
            table.items.forEach((item, index) => {
                const listItem = document.createElement('li');
                listItem.textContent = `${item.name} - Count: ${item.itemCount}`;
                itemList.appendChild(listItem);
            });
        
            // Add the unordered list to the modal content
            generateBillContent.appendChild(itemList);
        
            // Display total cost and total items
            const totalDetails = document.createElement('div');
            totalDetails.classList.add('total-details');
            totalDetails.textContent = `Total Price: Rs-${table.totalCost.toFixed(2)} | Total Items: ${table.totalCount}`;
            generateBillContent.appendChild(totalDetails);
        
            // Close generate bill modal when close button is clicked
            const closeGenerateModal = document.getElementById('closeGenerateModal');
            const closeGenerateButton = document.getElementById('closeGenerateButton');
        
            closeGenerateModal.onclick = function() {
                console.log("delete " + table.name);
                console.log("reset " + table.name);
            
                // Remove all items from the table
                table.items = [];
            
                // Update totalCount and totalCost of the table
                table.totalCount = 0;
                table.totalCost = 0;
            
                // Update the UI to reflect changes
                createTableCard(tables);
                localStorage.setItem('tables', JSON.stringify(tables));
            
                generateBillModal.style.display = "none";
            };
            
        
            closeGenerateButton.onclick = function() {
                console.log("delete " + table.name);
                console.log("reset " + table.name);
            
                // Remove all items from the table
                table.items = [];
            
                // Update totalCount and totalCost of the table
                table.totalCount = 0;
                table.totalCost = 0;
            
                // Update the UI to reflect changes
                createTableCard(tables);
                localStorage.setItem('tables', JSON.stringify(tables));
            
                generateBillModal.style.display = "none";
               
            };
        
            // Close generate bill modal when user clicks outside the modal
            window.onclick = function(event) {
                if (event.target == generateBillModal) {
                    generateBillModal.style.display = "none";
                }
            };
            const billpopupModal = document.getElementById('billpopup');
            billpopupModal.style.display = "none";
        };
        

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    function updateItemCount(table, item, action) {
        if (action === 'increment') {
            item.itemCount += 1;
            table.totalCount += 1;
            table.totalCost += parseFloat(item.price);
        } else if (action === 'decrement') {
            if (item.itemCount > 1) {
                item.itemCount -= 1;
                table.totalCount -= 1;
                table.totalCost -= parseFloat(item.price);
            }
        }
        showModal(table);
        createTableCard(tables);
    }

    function deleteItem(table, item) {
        table.items = table.items.filter(i => i.name !== item.name);
        table.totalCount -= item.itemCount;
        table.totalCost -= parseFloat(item.price) * item.itemCount;
        showModal(table);
        createTableCard(tables);
    }

    function addToTable(tableName, newItem) {
        const table = tables.find(t => t.name === tableName);
    
        if (table) {
            const existingItem = table.items.find(item => item.name === newItem.name);
            if (existingItem) {
                existingItem.itemCount += 1;
            } else {
                newItem.itemCount = 1;
                table.items.push(newItem);
            }
            table.totalCount += 1;
            table.totalCost += parseFloat(newItem.price || 0); // Ensure newItem.price is numeric
        }
        localStorage.setItem('tables', JSON.stringify(tables));
    
        createTableCard(tables); // Update the UI to reflect changes
    }
    

    // Fetch data and create cards
    fetch('http://192.168.0.103:8082/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(function(fooditem) {
            foodItems = fooditem; // Store fetched items
            console.log(foodItems);
            createItemCard(foodItems); // Display all items initially
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    // Add event listener for search input
    menuSearchInput.addEventListener('input', function(event) {
        const query = event.target.value;
        filterItems(query);
    });

    tableSearchInput.addEventListener('input', function(event) {
        const query = event.target.value;
        filterTables(query);
    });

    const addTablebtn=document.getElementById("addTablebtn");
    addTablebtn.addEventListener("click",function(event){
        const menuModal =document.getElementById("addTable");
        menuModal.style.display = "block";
        
    const closeaddMenu=document.getElementById("closeaddTable");
    closeaddMenu.addEventListener("click",function(event){
        menuModal.style.display='none';
    });
    const closeAddMenubtn=document.getElementById("closeAddTablebtn");
    closeAddMenubtn.classList.add('btn','btn-danger');
    closeAddMenubtn.addEventListener("click",function(event){
        menuModal.style.display='none';
    });
    });

    const addMenuBtn=document.getElementById("addmenubtn");
    addMenuBtn.addEventListener('click',(event)=>{
        const menuModal =document.getElementById("addMenu");
        menuModal.style.display = "block";

    const closeaddMenu=document.getElementById("closeaddMenu");
    closeaddMenu.addEventListener("click",function(event){
        menuModal.style.display='none';
    });
    const closeAddMenubtn=document.getElementById("closeAddMenubtn");
    closeAddMenubtn.classList.add('btn','btn-danger');
    closeAddMenubtn.addEventListener("click",function(event){
        menuModal.style.display='none';
    });

    })

    const addnewtablebtn = document.getElementById("addTablebtn");
    addnewtablebtn.addEventListener("click", function(event) {
        const menuModal = document.getElementById("addTable");
        menuModal.style.display = "block";

        const closeaddMenu = document.getElementById("closeaddTable");
        closeaddMenu.addEventListener("click", function(event) {
            menuModal.style.display = 'none';
        });

        const closeAddMenubtn = document.getElementById("closeAddTablebtn");
        closeAddMenubtn.classList.add('btn', 'btn-danger');
        closeAddMenubtn.addEventListener("click", function(event) {
            menuModal.style.display = 'none';
        });

        // Handle form submission to add a new table
        const addTableForm = document.getElementById('addTableForm');
        addTableForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const tableNameInput = document.getElementById('tableName');
            const tableName = tableNameInput.value.trim();
            

            // Create a new table object with initial values
            const newTable = {
                name: tableName,
                items: [],
                totalCount: 0,
                totalCost: 0
            };

            // Add the new table to the tables array
            tables.push(newTable);


            // Update UI to display the new table card
            createTableCard(tables);
            localStorage.setItem('tables', JSON.stringify(tables));

            // Clear form input
            tableNameInput.value = '';

            // Close the modal
            menuModal.style.display = 'none';
        });
    });
    // const menuModal = document.getElementById('addMenu');
    const addMenuItemClick = document.getElementById('addMenuSubmit');
addMenuItemClick.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve form values
    const itemName = document.getElementById('itemName').value;
    const itemPrice = parseFloat(document.getElementById('itemPrice').value); // Parse price as float
    const itemCategory = document.getElementById('itemCategory').value;
    const imageURL=document.getElementById('imageurl').value;
    // Perform any validation if needed

    // Example alert to show values (remove this in actual implementation)
    alert(`Item Name: ${itemName}\nItem Price: ${itemPrice}\nItem Category: ${itemCategory}`);

    // Create new item object
    const newItem = {
        name: itemName,
        price: itemPrice,
        category: itemCategory,
        image:imageURL
        // Add more properties as needed
    };

    // Add the new item to foodItems array
    foodItems.push(newItem);

    // Call function to recreate item cards with updated data
    createItemCard(foodItems);

    // Optionally, you can clear the form fields after submission
    document.getElementById('itemName').value = '';
    document.getElementById('itemPrice').value = '';
    document.getElementById('itemCategory').value = ''; 

    // You can now perform further actions like sending data to server, etc.
});
const closeaddMenu=document.getElementById("closeaddMenu");
const menuModal=document.getElementById("addMenu");
closeaddMenu.addEventListener("click",function(event){
    menuModal.display="none";
});
const closeAddMenubtn=document.getElementById("closeAddMenubtn");
closeAddMenubtn.addEventListener("click",function(event){
    menuModal.display="none";
})

});
