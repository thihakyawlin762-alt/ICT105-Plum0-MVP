// Save assignment to Local Storage

function saveAssignment(assignment) {

    let assignments =
        JSON.parse(localStorage.getItem("assignments")) || [];

    assignments.push(assignment);

    localStorage.setItem(
        "assignments",
        JSON.stringify(assignments)
    );

}
