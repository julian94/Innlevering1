class Product {
	var id;
	var title;
	var seller;
	var text;
	var image;
	constructor(id, title, seller, text, image) {
		this.id = id;
		this.title = title;
		this.seller = seller;
		this.text = text;
		this.image = image;
	}
}

class User {
	var name;
	var address;
	var phoneNumber;
	var email;
	var hashedPassword;
	constructor(name, address, phoneNumber, email, hashedPassword) {
		this.name = name;
		this.address = address;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.hashedPassword = hashedPassword;
	}
}

function createGrid(document, products){
	for (var p in products) {
		var newElement = document.createElement('a');
		newElement.className = "grid-item";
		newElement.innerHTML = p.title;
		document.body.appendChild(newElement);
	}
}
