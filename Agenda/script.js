document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const tableBody = document.getElementById('appointments-table').getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();

    const nameCell = newRow.insertCell(0);
    const dateCell = newRow.insertCell(1);
    const timeCell = newRow.insertCell(2);

    nameCell.textContent = name;
    dateCell.textContent = date;
    timeCell.textContent = time;

    // Limpar o formulário
    document.getElementById('appointment-form').reset();
});