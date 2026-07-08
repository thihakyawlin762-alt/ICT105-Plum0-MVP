document.addEventListener("DOMContentLoaded", function () {

    document.addEventListener("click", function (event) {

        const deleteButton = event.target.closest(".delete-btn");

        if (!deleteButton) return;

        const id = Number(deleteButton.dataset.id);

        if (!confirm("Are you sure you want to delete this assignment?")) {
            return;
        }

        let assignments =
            JSON.parse(localStorage.getItem("assignments")) || [];

        assignments = assignments.filter(function (assignment) {

            return assignment.id !== id;

        });

        localStorage.setItem(
            "assignments",
            JSON.stringify(assignments)
        );

        location.reload();

    });

});