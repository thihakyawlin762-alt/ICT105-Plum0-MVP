document.addEventListener("DOMContentLoaded", function () {

    const tableBody =
        document.querySelector(".assignment-table tbody");

    const assignments =
        JSON.parse(localStorage.getItem("assignments")) || [];

    /* ==========================
       LOAD TABLE
    ========================== */

    if (tableBody) {

        tableBody.innerHTML = "";

        assignments.forEach(function (assignment) {

            tableBody.innerHTML += createAssignmentRow(assignment);

        });

    }

    /* ==========================
       DASHBOARD STATISTICS
    ========================== */

    const totalAssignments =
        assignments.length;

    const pendingAssignments =
        assignments.filter(item =>
            item.status === "Pending"
        ).length;

    const completedAssignments =
        assignments.filter(item =>
            item.status === "Completed"
        ).length;

    const today = new Date();

    const nextWeek = new Date();

    nextWeek.setDate(today.getDate() + 7);

    const dueThisWeek =
        assignments.filter(function (item) {

            const dueDate =
                new Date(item.dueDate);

            return dueDate >= today &&
                   dueDate <= nextWeek;

        }).length;

    const cards =
        document.querySelectorAll(".stat-card h2");

    if (cards.length >= 4) {

        cards[0].textContent = totalAssignments;

        cards[1].textContent = pendingAssignments;

        cards[2].textContent = completedAssignments;

        cards[3].textContent = dueThisWeek;

    }

    /* ==========================
   UPCOMING DEADLINES
========================== */

const deadlineList =
    document.getElementById("deadlineList");

if (deadlineList) {

    deadlineList.innerHTML = "";

    const upcoming = assignments

        .filter(function (item) {

            return item.status !== "Completed";

        })

        .sort(function (a, b) {

            return new Date(a.dueDate) -
                   new Date(b.dueDate);

        })

        .slice(0, 3);

    if (upcoming.length === 0) {

        deadlineList.innerHTML = `
            <p>No upcoming deadlines 🎉</p>
        `;

    } else {

        upcoming.forEach(function (assignment) {

            const today = new Date();

            const due = new Date(assignment.dueDate);

            const diff =
                Math.ceil(
                    (due - today) /
                    (1000 * 60 * 60 * 24)
                );

            let dueText = "";

            if (diff <= 0) {

                dueText = "Today";

            } else if (diff === 1) {

                dueText = "Tomorrow";

            } else {

                dueText = diff + " Days";

            }

            deadlineList.innerHTML += `

                <div class="deadline-item">

                    <i class="fa-solid fa-calendar-days"></i>

                    <div>

                        <h4>${assignment.title}</h4>

                        <p>${assignment.course}</p>

                    </div>

                    <span>${dueText}</span>

                </div>

            `;

        });

    }

}

/* ==========================
   BUILD NOTIFICATIONS
========================== */

const notificationList =
    document.getElementById("notificationList");

if (notificationList) {

    notificationList.innerHTML = "";

    const notifications = assignments

        .filter(function (item) {

            if (item.status === "Completed") {

                return false;

            }

            const today = new Date();

            const due = new Date(item.dueDate);

            const diff = Math.ceil(

                (due - today) /

                (1000 * 60 * 60 * 24)

            );

            return diff <= 7;

        })

        .sort(function (a, b) {

            return new Date(a.dueDate) -

                   new Date(b.dueDate);

        });

    if (notifications.length === 0) {

        notificationList.innerHTML = `

            <div class="notification-item">

                <div>

                    <h4>No Notifications 🎉</h4>

                    <p>You're all caught up!</p>

                </div>

            </div>

        `;

    } else {

        notifications.forEach(function (assignment) {

            const today = new Date();

            const due = new Date(assignment.dueDate);

            const diff = Math.ceil(

                (due - today) /

                (1000 * 60 * 60 * 24)

            );

            let message = "";

            if (diff < 0) {

                message = "Overdue";

            }

            else if (diff === 0) {

                message = "Due Today";

            }

            else if (diff === 1) {

                message = "Due Tomorrow";

            }

            else {

                message = "Due in " + diff + " days";

            }

            notificationList.innerHTML += `

                <div class="notification-item">

                    <i class="fa-solid fa-bell"></i>

                    <div>

                        <h4>${assignment.title}</h4>

                        <p>${message}</p>

                    </div>

                </div>

            `;

        });

    }

}

/* ==========================
   NOTIFICATION TOGGLE
========================== */

const bell =
    document.getElementById("notificationBell");

const dropdown =
    document.getElementById("notificationDropdown");

if (bell && dropdown) {

    bell.addEventListener("click", function () {

        dropdown.classList.toggle("show");

    });

    document.addEventListener("click", function (event) {

        if (!event.target.closest(".notification-wrapper")) {

            dropdown.classList.remove("show");

        }

    });

}

});

