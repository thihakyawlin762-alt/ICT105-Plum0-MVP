document.addEventListener("DOMContentLoaded", function () {

    const assignments =
        JSON.parse(localStorage.getItem("assignments")) || [];

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

});