const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

console.log("ID from URL:", id);

const assignments =
    JSON.parse(localStorage.getItem("assignments")) || [];

console.log("Assignments:", assignments);

const assignment =
    assignments.find(item => {

        console.log("Comparing:", item.id, "with", id);

        return item.id == id;

    });

console.log("Found assignment:", assignment);

if (!assignment) {

    alert("Assignment not found.");

    window.location.href = "dashboard.html";

}

document.getElementById("course").value = assignment.course;
document.getElementById("title").value = assignment.title;
document.getElementById("description").value = assignment.description;
document.getElementById("dueDate").value = assignment.dueDate;
document.getElementById("priority").value = assignment.priority;
document.getElementById("status").value = assignment.status;

document.getElementById("editForm").addEventListener("submit", function (event) {

    event.preventDefault();

    assignment.course = document.getElementById("course").value;
    assignment.title = document.getElementById("title").value;
    assignment.description = document.getElementById("description").value;
    assignment.dueDate = document.getElementById("dueDate").value;
    assignment.priority = document.getElementById("priority").value;
    assignment.status = document.getElementById("status").value;

    localStorage.setItem(
        "assignments",
        JSON.stringify(assignments)
    );

    alert("Assignment updated successfully!");

    window.location.href = "dashboard.html";

});