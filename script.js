
let data = [];

// Function to read and display all entries
function readAll() {
    const tableBody = document.querySelector(".table_data");
    tableBody.innerHTML = '';

    data.forEach((item) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.telephone}</td>
            <td>
                <button onclick="editEntry(${item.id})">Edit</button>
                <button class="delete-btn" onclick="deleteEntry(${item.id})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}


function showCreateForm() {
    document.querySelector(".create_form").style.display = "block";
    document.querySelector(".addbtn").style.display = "none";
}


function addEntry() {
    const name = document.querySelector(".name").value.trim();
    const telephone = document.querySelector(".telephone").value.trim();

    if (name && telephone) {
        const newId = data.length ? data[data.length - 1].id + 1 : 1;
        data.push({ id: newId, name, telephone });

        document.querySelector(".create_form").reset();
        document.querySelector(".create_form").style.display = "none";
        document.querySelector(".addbtn").style.display = "block";
        readAll();
    } else {
        alert("Please fill in both name and telephone.");
    }
}


function editEntry(id) {
    const entry = data.find(item => item.id === id);
    if (entry) {
        document.querySelector(".update-id").value = entry.id;
        document.querySelector(".update-name").value = entry.name;
        document.querySelector(".update-telephone").value = entry.telephone;

        document.querySelector(".update_form").style.display = "block";
        document.querySelector(".addbtn").style.display = "none";
    }
}


function updateEntry() {
    const id = parseInt(document.querySelector(".update-id").value);
    const name = document.querySelector(".update-name").value.trim();
    const telephone = document.querySelector(".update-telephone").value.trim();

    if (name && telephone) {
        const index = data.findIndex(item => item.id === id);
        data[index] = { id, name, telephone };

        document.querySelector(".update_form").reset();
        document.querySelector(".update_form").style.display = "none";
        document.querySelector(".addbtn").style.display = "block";
        readAll();
    } else {
        alert("Please fill in both name and telephone.");
    }
}


function deleteEntry(id) {
    data = data.filter(item => item.id !== id);
    readAll();
}
