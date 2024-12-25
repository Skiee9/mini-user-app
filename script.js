const BASE_URL ="https://vivacious-short-battery.glitch.me/users";


// get users and display the users
document.getElementById("fetch-users").addEventListener("click", async () => {
    try {
        const response = await fetch(BASE_URL);
        const users = await response.json();
        console.log(users);
        const userList = document.getElementById("user-list");
        userList.innerHTML = ""; 
        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = `${user.id}: ${user.name} - ${user.email}`;
            userList.appendChild(li);
        });
    } catch (error) {
        console.error("Error fetching users:", error);
    }
});

// updating user with id 1
document.getElementById("update-user").addEventListener("click", async () => {
    try {
        const response = await fetch(`${BASE_URL}/1`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: "Alice", email: "alice@example.com" }),
        });
        if (response.ok) {
            console.log("User updated successfully");
        } else {
            console.error("Failed to update user");
        }
    } catch (error) {
        console.error("Error updating user:", error);
    }
});

// deleting user with id1
document.getElementById("delete-user").addEventListener("click", async () => {
    try {
        const response = await fetch(`${BASE_URL}/1`, { method: "DELETE" });
        if (response.ok) {
            console.log("User deleted successfully");
        } else {
            console.error("Failed to delete user");
        }
    } catch (error) {
        console.error("Error deleting user:", error);
    }
});
