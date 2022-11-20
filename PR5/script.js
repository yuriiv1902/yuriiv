window.onload = () => {
	const form1 = document.querySelector("#addForm");

	let items = document.getElementById("items");
	let submit = document.getElementById("submit");

	let editItem = null;

	form1.addEventListener("submit", addItem);
	items.addEventListener("click", removeItem);
};

function addItem(e) {
	e.preventDefault();

	if (submit.value != "Додати") {
		editItem.target.parentNode.childNodes[0].data = document.getElementById("item").value;

		submit.value = "Додати";
		document.getElementById("item").value = "";

		document.getElementById("lblsuccess").innerHTML = "Запис змінено успішно!";

		document.getElementById("lblsuccess").style.display = "block";
	
		setTimeout(function() {
			document.getElementById("lblsuccess").style.display = "none";
		}, 3000);
		return false;
	}

	let newItem = document.getElementById("item").value;
	if (newItem.trim() == "" || newItem.trim() == null)
		return false;
	else
		document.getElementById("item").value = "";

	let li = document.createElement("li");
	li.className = "list-group-item";

	let deleteButton = document.createElement("button");

	deleteButton.className = "btn-danger btn btn-sm float-right delete";

	deleteButton.appendChild(document.createTextNode("Видалити"));

	let editButton = document.createElement("button");

	editButton.className = "btn-success btn btn-sm float-right edit";

	editButton.appendChild(document.createTextNode("Редагувати"));

	let dateLabel = document.createElement("span");

	dateLabel.className = "label-date";
	let date = new Date();
	li.appendChild(document.createTextNode(newItem));
	li.appendChild(deleteButton);
	li.appendChild(editButton);
	li.appendChild(dateLabel);

	items.appendChild(li);
}
function doneItem(e){
			document.getElementsByClassName('list-group').style.backgroundColor = "green";
	}
function removeItem(e) {
	e.preventDefault();
	if (e.target.classList.contains("delete")) {
		if (confirm("Ви дійсно хочете видалити?")) {
			let li = e.target.parentNode;
			items.removeChild(li);
			document.getElementById("lblsuccess").innerHTML = "Запис видалено успішно!";

			document.getElementById("lblsuccess").style.display = "block";

			setTimeout(function() {
				document.getElementById("lblsuccess").style.display = "none";
			}, 3000);
		}
	}
	if (e.target.classList.contains("edit")) {
		document.getElementById("item").value =
			e.target.parentNode.childNodes[0].data;
		submit.value = "EDIT";
		editItem = e;
	}
}

function toggleButton(ref, btnID) {
	document.getElementById(btnID).disabled = false;
}
