function createAssignmentRow(assignment) {

    return `
        <tr data-id="${assignment.id}">

            <td>${assignment.course}</td>

            <td>${assignment.title}</td>

            <td>${assignment.dueDate}</td>

            <td>
                <span class="priority ${assignment.priority.toLowerCase()}">
                    ${assignment.priority}
                </span>
            </td>

            <td>
                <span class="status ${assignment.status.toLowerCase()}">
                    ${assignment.status}
                </span>
            </td>

            <td class="action-buttons">

                <a href="assignment-details.html?id=${assignment.id}"
                   class="view-btn">

                    <i class="fa-solid fa-eye"></i>

                </a>

                <a href="edit-assignment.html?id=${assignment.id}"
   class="edit-btn">

    <i class="fa-solid fa-pen"></i>

</a>

                <button class="complete-btn"
        data-id="${assignment.id}"
        title="Mark Completed">

    <i class="fa-solid fa-check"></i>

</button>

<button class="delete-btn"
        data-id="${assignment.id}">

    <i class="fa-solid fa-trash"></i>

</button>

            </td>

        </tr>
    `;

}

/* ==========================
   DELETE ASSIGNMENT
========================== */

document.addEventListener("click", function (event) {

    const deleteButton = event.target.closest(".delete-btn");

    if (!deleteButton) return;

    if (!confirm("Are you sure you want to delete this assignment?")) {

        return;

    }

    const id = Number(deleteButton.dataset.id);

    let assignments =
        JSON.parse(localStorage.getItem("assignments")) || [];

    assignments = assignments.filter(item => item.id !== id);

    localStorage.setItem(
        "assignments",
        JSON.stringify(assignments)
    );

    alert("Assignment deleted successfully!");

    location.reload();

});


/* ==========================
   MARK COMPLETED
========================== */

document.addEventListener("click", function (event) {

    const completeButton = event.target.closest(".complete-btn");

    if (!completeButton) return;

    const id = Number(completeButton.dataset.id);

    let assignments =
        JSON.parse(localStorage.getItem("assignments")) || [];

    const assignment =
        assignments.find(item => item.id === id);

    if (!assignment) return;

    assignment.status = "Completed";

    localStorage.setItem(
        "assignments",
        JSON.stringify(assignments)
    );

    alert("Assignment marked as completed!");

    location.reload();

});