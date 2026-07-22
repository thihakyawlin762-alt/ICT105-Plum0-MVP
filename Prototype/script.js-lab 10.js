document.addEventListener("DOMContentLoaded", function () {

    /* ==========================
       LOGIN
    ========================== */

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            if (
                email === "student@example.com" &&
                password === "123456"
            ) {

                window.location.href = "dashboard.html";

            } else {

                alert("Invalid email or password.");

            }

        });

    }

    /* ==========================
       ADD ASSIGNMENT
    ========================== */

    const assignmentForm =
        document.getElementById("assignmentForm");

    if (assignmentForm) {

        assignmentForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const assignment = {

    id: Date.now(),

    course:
        document.getElementById("course").value,

    title:
        document.getElementById("title").value,

    description:
        document.getElementById("description").value,

    dueDate:
        document.getElementById("dueDate").value,

    priority:
        document.getElementById("priority").value,

    status:
        document.getElementById("status").value

};

            saveAssignment(assignment);

            alert("Assignment saved successfully!");

window.location.href = "dashboard.html";

        });

    }

});