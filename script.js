

    let rowToDelete = null;


    document.addEventListener("click", function (e) {
      const deleteBtn = e.target.closest(".js-delete");
      const acceptBtn = e.target.closest(".js-accept");
      const cancelBtn = e.target.closest(".js-cancel");
      const editBtn = e.target.closest(".js-edit");
      const messageBtn = e.target.closest(".js-message");

      // DELETE -> open modal already handled by data-bs-toggle
      if (deleteBtn) {
        rowToDelete = deleteBtn.closest("tr");
      }

      // ACCEPT
      if (acceptBtn) {
        const row = acceptBtn.closest("tr");
        const statusCell = row.querySelector(".js-status");
        statusCell.textContent = "Accepted";
        statusCell.classList.remove("text-danger");
        statusCell.classList.add("text-success");
      }

      // CANCEL
      if (cancelBtn) {
        const row = cancelBtn.closest("tr");
        const statusCell = row.querySelector(".js-status");
        statusCell.textContent = "Cancelled";
        statusCell.classList.remove("text-success");
        statusCell.classList.add("text-danger");
      }

      // EDIT 
      if (editBtn) {
        const row = editBtn.closest("tr");
        const name = row.children[1].textContent.trim();
        alert("Edit clicked for: " + name);
      }

      // MESSAGE 
      if (messageBtn) {
        const row = messageBtn.closest("tr");
        const phone = row.children[2].textContent.trim();
        alert("Message clicked. Customer phone: " + phone);
      }
    });

    // Confirm delete
    document.getElementById("confirmDeleteBtn").addEventListener("click", function () {
      if (rowToDelete) rowToDelete.remove();
      rowToDelete = null;

      // close modal 
      const modalEl = document.getElementById("exampleModal");
      const modal = bootstrap.Modal.getInstance(modalEl);
      modal.hide();
    });
 