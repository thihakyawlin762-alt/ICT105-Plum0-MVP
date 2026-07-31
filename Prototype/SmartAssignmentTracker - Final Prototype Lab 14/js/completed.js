document.addEventListener("DOMContentLoaded", function () {

    const tableBody =
        document.querySelector(".assignment-table tbody");

    if (!tableBody) return;

    const assignments =
        JSON.parse(localStorage.getItem("assignments")) || [];

    const completedAssignments =
        assignments.filter(function (assignment) {

            return assignment.status === "Completed";

        });

    tableBody.innerHTML = "";

    if (completedAssignments.length === 0) {

        tableBody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align:center;">
                    No completed assignments found.
                </td>
            </tr>
        `;

        return;

    }

    completedAssignments.forEach(function (assignment) {

        tableBody.innerHTML += createAssignmentRow(assignment);

    });

});