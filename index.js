fetch("data.json")
.then(response => response.json())
.then(data => {

    data.forEach(item => {

        let div = document.createElement("div");

        div.innerHTML = `
            <h2>${item.name}</h2>
            <p>${item.price}</p>
            <p>${item.available}</p>
        `;

        document.body.appendChild(div);

    });
    
});
