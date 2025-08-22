let tbody = document.getElementById("tbody")

function chiqar(data) {
    tbody.innerHTML = null;

    data.forEach((item) => {
        let tr = document.createElement("tr")

        tr.innerHTML = `
            <td>${item.id}</td>
            <td>${item.ism}</td>
            <td>${item.familiya}</td>
            <td><img src=${item.rasm} alt="" width="80px"></td>
            <td>${item.mahallasi}</td>
            <td>
                <div class="amallar">
                    <img onclick="showDeleteModal(${item.id})" src="https://icons.veryicon.com/png/o/commerce-shopping/soft-designer-online-tools-icon/delete-77.png" alt="delete-icon" width="50px">
                    <img src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png" alt="edit" width="40px">
                </div>
            </td>
        `

        tbody.appendChild(tr)
    })
}

chiqar(data)

const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let imageInput = document.getElementById("file")
    console.log();

    let newPerson = {
        id: data.length==0 ? 1 : data[data.length - 1].id + 1,
        ism: document.getElementById("ism").value,
        familiya: document.getElementById("familiya").value,
        rasm: URL.createObjectURL(imageInput.files[0]),
        mahallasi: document.getElementById("mahalla").value
    }

    data.push(newPerson)

    chiqar(data)

    form.reset();
    removeAddModal()
})

// add modal
let formBox = document.getElementById("form_box")

const showAddModal = () => {
    formBox.style.display = "inline-block"
}

const removeAddModal = () => {
    formBox.style.display = "none"
}

// delete modal
let deleteModal = document.getElementById("delete_modal")

let deleteId

const showDeleteModal = (id) => {
    deleteModal.style.display = "inline-block"

    deleteId = id

    console.log(id);
}

const removeDeleteModal = () => {
    deleteModal.style.display = "none"
}

const deleteItem = () => {
    let newData = data.filter((item) => item.id != deleteId)
    data = newData
    chiqar(data)
    removeDeleteModal()
}