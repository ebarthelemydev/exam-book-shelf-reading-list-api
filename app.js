let extension = document.querySelector(".extensions");

document.addEventListener("DOMContentLoaded", async (e) => {
	e.preventDefault();

	const response = await fetch("http://10.69.4.8:3000/v1/extensions?page=1", {
		method: "GET",
		headers: {
			Authorization: "Bearer 123",
		},
	});
	const data = await response.json();
	console.log(data);

	for (let i = 0; i < data.length; i++) {
		console.log(data[i]);

		const type = data[i].type;

		let divcard = document.createElement("div");
		divcard.classList.add("extension");
		extension.appendChild(divcard);

		let divcardheader = document.createElement("div");
		divcardheader.classList.add("extension-header");
		divcard.appendChild(divcardheader);

		let img = document.createElement("img");
		img.setAttribute("src", data[i].logo);
		img.classList.add("img-search");
		divcardheader.appendChild(img);

		let divcardheader2 = document.createElement("div");
		divcardheader2.classList.add("extension-header-content");
		divcardheader.appendChild(divcardheader2);

		let h2 = document.createElement("h2");
		h2.textContent = data[i].name;
		divcardheader2.appendChild(h2);

		let p = document.createElement("p");
		p.textContent = data[i].description;
		p.classList.add("text-neutral-600");
		divcardheader2.appendChild(p);

		let divappend = document.createElement("div");
		divappend.classList.add("extension-append");
		divcardheader2.appendChild(divappend);

		let btn = document.createElement("button");
		btn.textContent = "Remove";
		divappend.appendChild(btn);

		let input = document.createElement("input");
		input.type = "checkbox";
		divappend.appendChild(input);

        if (data[i].isActive == true) {
            input.checked = true;
        }
	}
});
