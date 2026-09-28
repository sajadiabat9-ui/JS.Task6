


let menu = document.getElementById("menu");

fetch("menu.json")
    .then(response => response.json())
    .then(data => {

        for (let i = 0; i < data.length; i++) {

            menu.innerHTML += `
                <p>
                    Meal: ${data[i].mealName}
                    <br>
                    Price: ${data[i].price}
                    <br>
                    Available: ${data[i].availability}
                </p>
                <hr>
            `;
        }

    })
    