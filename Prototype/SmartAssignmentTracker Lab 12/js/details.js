const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

const assignments =
    JSON.parse(localStorage.getItem("assignments")) || [];

const assignment =
    assignments.find(item => item.id === id);

if (assignment) {

    document.getElementById("detail-course").textContent =
        assignment.course;

    document.getElementById("detail-title").textContent =
        assignment.title;

    document.getElementById("detail-description").textContent =
        assignment.description;

    document.getElementById("detail-date").textContent =
        assignment.dueDate;

    document.getElementById("detail-priority").textContent =
        assignment.priority;

    document.getElementById("detail-status").textContent =
        assignment.status;

}