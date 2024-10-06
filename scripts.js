// scripts.js
function toggleFolder(folderId) {
    const folder = document.getElementById(folderId);
    if (folder.style.display === "none" || folder.style.display === "") {
      folder.style.display = "block";
    } else {
      folder.style.display = "none";
    }
  }
  