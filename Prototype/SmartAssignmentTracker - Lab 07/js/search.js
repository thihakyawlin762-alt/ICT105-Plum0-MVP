document.addEventListener("DOMContentLoaded", function () {

    const tableBody = document.querySelector(".assignment-table tbody");

    const searchInput = document.getElementById("searchInput");
    const priorityFilter = document.getElementById("priorityFilter");
    const statusFilter = document.getElementById("statusFilter");

    const assignments =
        JSON.parse(localStorage.getItem("assignments")) || [];

    function displayAssignments(list) {

        tableBody.innerHTML = "";

        if (list.length === 0) {

            tableBody.innerHTML = `
                <tr>
                    <td colspan="6" style="text-align:center;">
                        No assignments found.
                    </td>
                </tr>
            `;

            return;
        }

        list.forEach(function (assignment) {

            tableBody.innerHTML += createAssignmentRow(assignment);

        });

    }

    function filterAssignments() {

        const keyword = searchInput.value.toLowerCase();
        const priority = priorityFilter.value;
        const status = statusFilter.value;

        const filtered = assignments.filter(function (assignment) {

            const matchKeyword =
                assignment.course.toLowerCase().includes(keyword) ||
                assignment.title.toLowerCase().includes(keyword);

            const matchPriority =
                priority === "" || assignment.priority === priority;

            const matchStatus =
                status === "" || assignment.status === status;

            return matchKeyword && matchPriority && matchStatus;

        });

        displayAssignments(filtered);

    }

    displayAssignments(assignments);

    searchInput.addEventListener("input", filterAssignments);

    priorityFilter.addEventListener("change", filterAssignments);

    statusFilter.addEventListener("change", filterAssignments);

});