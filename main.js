/*document.addEventListener('DOMContentLoaded', function () {
    const addItems = document.querySelector('.add-items');
    const platesList = document.querySelector('.plates');
    let items = JSON.parse(localStorage.getItem('items')) || [];
    let editIndex = null;

    function addItem(e) {
        e.preventDefault();
        const text = (this.querySelector('[name=item]')).value;
        if (editIndex !== null) {
            // update item
            items[editIndex].text = text;
            // reset state
            editIndex = null;
            this.querySelector('input[type="submit"]').value = '+ Add Item';
        } else {
            // add new item
            const item = {
                text,
                done: false
            };
            items.push(item);
        }
        populateList(items, platesList);
        localStorage.setItem('items', JSON.stringify(items)); // Update localStorage
        this.reset();
    }

    function populateList(plates = [], platesList) {
        platesList.innerHTML = plates.map((plate, i) => {
            return `
          <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} ${editIndex !== null ? 'disabled' : ''} class="${platesList.classList.contains('edit-mode') ? 'fade-out' : ''}" />
            <label for="item${i}">${plate.text}</label>
            <button class="edit" data-index=${i} ${editIndex !== null || plate.done ? 'disabled' : ''} class="${platesList.classList.contains('edit-mode') ? 'fade-out' : ''}">Edit</button>
            <button class="delete" data-index=${i} ${editIndex !== null || plate.done ? 'disabled' : ''}>Delete</button>
          </li>
        `;
        }).join('');
    }

    function handleButtons(e) {
        if (e.target.matches('.edit')) {
            const index = e.target.dataset.index;
            editIndex = parseInt(index);
            addItems.querySelector('input[type="submit"]').value = 'Edit Item';
            addItems.querySelector('[name=item]').value = items[index].text;
            addItems.querySelector('[name=item]').focus();
            platesList.classList.add('edit-mode');
            // Fade out edit and delete buttons
            const buttons = platesList.querySelectorAll('.edit, .delete');
            buttons.forEach(button => {
                button.style.opacity = '0.5';
            });
        }

        if (e.target.matches('.delete')) {
            const index = e.target.dataset.index;
            items.splice(index, 1);
            populateList(items, platesList);
            localStorage.setItem('items', JSON.stringify(items)); // Update localStorage
        }

        if (e.target.matches('input[type="checkbox"]')) {
            const index = e.target.dataset.index;
            items[index].done = e.target.checked;
            localStorage.setItem('items', JSON.stringify(items)); // Update localStorage
        }
    }

    addItems.addEventListener('submit', addItem);
    platesList.addEventListener('click', handleButtons);

    const editInput = document.querySelector('[name=item]');
    editInput.addEventListener('focus', function () {
        platesList.classList.remove('edit-mode');
        populateList(items, platesList); // Reset the list
    });

    populateList(items, platesList); // Display stored items on page load
});
*/

document.addEventListener('DOMContentLoaded', function () {
    const addItems = document.querySelector('.add-items');
    const platesList = document.querySelector('.plates');
    let items = JSON.parse(localStorage.getItem('items')) || [];
    let editIndex = null;

    function addItem(e) {
        e.preventDefault();
        const text = (this.querySelector('[name=item]')).value;
        if (editIndex !== null) {
            // update item
            items[editIndex].text = text;
            // reset state
            editIndex = null;
            this.querySelector('input[type="submit"]').value = '+ Add Item';
        } else {
            // add new item
            const item = {
                text,
                done: false
            };
            items.push(item);
        }
        populateList(items, platesList);
        localStorage.setItem('items', JSON.stringify(items)); // Update localStorage
        this.reset();
    }

    function populateList(plates = [], platesList) {
        platesList.innerHTML = plates.map((plate, i) => {
            return `
          <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
            <label for="item${i}">${plate.text}</label>
            <button class="edit" data-index=${i}>Edit</button>
            <button class="delete" data-index=${i}>Delete</button>
          </li>
        `;
        }).join('');
    }

    function handleButtons(e) {
        if (e.target.matches('.edit')) {
            const index = e.target.dataset.index;
            editIndex = parseInt(index);
            addItems.querySelector('input[type="submit"]').value = 'Edit Item';
            addItems.querySelector('[name=item]').value = items[index].text;
            addItems.querySelector('[name=item]').focus();
        }

        if (e.target.matches('.delete')) {
            const index = e.target.dataset.index;
            items.splice(index, 1);
            populateList(items, platesList);
            localStorage.setItem('items', JSON.stringify(items)); // Update localStorage
        }

        if (e.target.matches('input[type="checkbox"]')) {
            const index = e.target.dataset.index;
            items[index].done = e.target.checked;
            localStorage.setItem('items', JSON.stringify(items)); // Update localStorage
        }
    }

    addItems.addEventListener('submit', addItem);
    platesList.addEventListener('click', handleButtons);

    const editInput = document.querySelector('[name=item]');
    editInput.addEventListener('focus', function () {
        populateList(items, platesList); // Reset the list
    });

    populateList(items, platesList); // Display stored items on page load
});