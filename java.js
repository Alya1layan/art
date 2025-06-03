<script>
  // Wait until the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const artistCards = document.querySelectorAll(".artist-card");

    searchInput.addEventListener("input", function () {
      const query = searchInput.value.toLowerCase();

      artistCards.forEach(function (card) {
        const name = card.querySelector("h3")?.textContent.toLowerCase() || "";
        const info = card.querySelector("p")?.textContent.toLowerCase() || "";

        // Check if the name or info contains the search query
        if (name.includes(query) || info.includes(query)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
</script>
