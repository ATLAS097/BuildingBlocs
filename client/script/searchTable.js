function searchTable() {
    const input = document.getElementById("searchInput").value.toUpperCase();
    const table = document.getElementById("leaderboard");
    const tbody = table.getElementsByTagName("tbody")[0];
    const rows = tbody.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
      const usernameCell = rows[i].getElementsByTagName("td")[0]; // First column: Username
      if (usernameCell) {
        const textValue = usernameCell.textContent || usernameCell.innerText;
        rows[i].style.display = textValue.toUpperCase().includes(input) ? "" : "none";
      }
    }
}
