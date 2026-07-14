document.addEventListener("DOMContentLoaded", function () {

    const assignments =
        JSON.parse(localStorage.getItem("assignments")) || [];

    const students = [

        "John Smith",
        "Alice Tan",
        "David Lee",
        "Sarah Lim",
        "Michael Chen",
        "Emily Wong",
        "Daniel Kim",
        "Sophia Nguyen"

    ];

    /* ==========================
       STATISTICS
    ========================== */

    const total =
        assignments.length;

    const pending =
        assignments.filter(item => item.status === "Pending").length;

    const completed =
        assignments.filter(item => item.status === "Completed").length;

    const overdue =
        assignments.filter(function (item) {

            return item.status !== "Completed" &&
                   new Date(item.dueDate) < new Date();

        }).length;

    const highPriority =
        assignments.filter(item => item.priority === "High").length;

    const cards =
        document.querySelectorAll(".stat-card h2");

    if (cards.length >= 5) {

        cards[0].textContent = total;
        cards[1].textContent = pending;
        cards[2].textContent = completed;
        cards[3].textContent = overdue;
        cards[4].textContent = highPriority;

    }

    /* ==========================
       ASSIGNMENT RECORDS
    ========================== */

    const tableBody =
        document.querySelector(".assignment-table tbody");

    if (tableBody) {

        tableBody.innerHTML = "";

        assignments.forEach(function (assignment, index) {

            const student =
                students[index % students.length];

            tableBody.innerHTML += `

            <tr data-id="${assignment.id}">

                <td>${assignment.course}</td>

                <td>${assignment.title}</td>

                <td>${student}</td>

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

                    <button class="view-btn" data-id="${assignment.id}">
                        <i class="fa-solid fa-eye"></i>
                    </button>

                    <button class="edit-btn" data-id="${assignment.id}">
                        <i class="fa-solid fa-arrows-rotate"></i>
                    </button>

                    <button class="delete-btn" data-id="${assignment.id}">
                        <i class="fa-solid fa-trash"></i>
                    </button>

                </td>

            </tr>

            `;

        });

    }

    /* ==========================
       COURSE ANALYTICS
    ========================== */

    const totalCourses =
        new Set(assignments.map(item => item.course)).size;

    document.getElementById("totalCourses").textContent =
        totalCourses;

    document.getElementById("highAssignments").textContent =
        highPriority;

    const completionRate =
        total === 0
            ? 0
            : Math.round((completed / total) * 100);

    document.getElementById("completionRate").textContent =
        completionRate + "%";

    /* ==========================
       STUDENT PROGRESS
    ========================== */

    const progress =
        document.getElementById("studentProgress");

    if (progress) {

        progress.innerHTML = "";

        students.forEach(function (student, index) {

            const percent =
                Math.min(55 + (index * 6), 100);

            progress.innerHTML += `

                <div class="analytics-item">

                    <span>${student}</span>

                    <strong>${percent}%</strong>

                </div>

            `;

        });

    }

});

/* ==========================
   VIEW ASSIGNMENT
========================== */

document.addEventListener("click", function (event) {

    const viewBtn = event.target.closest(".view-btn");

    if (!viewBtn) return;

    const id = viewBtn.dataset.id;

    window.location.href =
        "assignment-details.html?id=" + id;

});

/* ==========================
   UPDATE STATUS
========================== */

document.addEventListener("click", function (event) {

    const editBtn = event.target.closest(".edit-btn");

    if (!editBtn) return;

    const id = Number(editBtn.dataset.id);

    const assignments =
        JSON.parse(localStorage.getItem("assignments")) || [];

    const assignment =
        assignments.find(item => item.id === id);

    if (!assignment) return;

    if (assignment.status === "Pending") {

        assignment.status = "In Progress";

    } else if (assignment.status === "In Progress") {

        assignment.status = "Completed";

    } else {

        assignment.status = "Pending";

    }

    localStorage.setItem(
        "assignments",
        JSON.stringify(assignments)
    );

    alert("Assignment status updated!");

    location.reload();

});

/* ==========================
   DELETE ASSIGNMENT
========================== */

document.addEventListener("click", function (event) {

    const deleteBtn = event.target.closest(".delete-btn");

    if (!deleteBtn) return;

    if (!confirm("Are you sure you want to delete this assignment?")) {

        return;

    }

    const id = Number(deleteBtn.dataset.id);

    let assignments =
        JSON.parse(localStorage.getItem("assignments")) || [];

    assignments =
        assignments.filter(item => item.id !== id);

    localStorage.setItem(
        "assignments",
        JSON.stringify(assignments)
    );

    alert("Assignment deleted successfully.");

    location.reload();

});

/* ==========================
   SEARCH
========================== */

const lecturerSearch =
    document.getElementById("lecturerSearch");

if (lecturerSearch) {

    lecturerSearch.addEventListener("keyup", function () {

        const keyword =
            this.value.toLowerCase();

        document.querySelectorAll(".assignment-table tbody tr")
            .forEach(function (row) {

                row.style.display =
                    row.innerText.toLowerCase().includes(keyword)
                    ? ""
                    : "none";

            });

    });

}