const loadButton = document.getElementById("loadUsers");
const usersDiv = document.getElementById("users");

loadButton.addEventListener("click", loadUsers);

async function loadUsers() {
    usersDiv.innerHTML = "Loading users...";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Failed to fetch user data");
        }

        const users = await response.json();

        usersDiv.innerHTML = "";

        users.forEach(user => {
            const userCard = document.createElement("div");
            userCard.className = "user-card";

            userCard.innerHTML = `
                <h2>${user.name}</h2>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>City:</strong> ${user.address.city}</p>
            `;

            usersDiv.appendChild(userCard);
        });

    } catch (error) {
        usersDiv.innerHTML =
            `<p class="error">Error: Unable to fetch user data.</p>`;
        console.error(error);
    }
}