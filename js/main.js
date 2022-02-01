const load_index = (timestamp = null) => {
  if (timestamp == null) {
    // load today
    timestamp = new Date().setHours(0, 0, 0, 0);
  }
  // MAGIC!
  const magic_number = 1624053600000;
  // returns the index
  return Math.floor((timestamp - magic_number) / 864e5) % words.length;
};

const capitalize_first = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

document.addEventListener("DOMContentLoaded", () => {
  // links selectors
  document.querySelectorAll("#today, #tomorrow").forEach((s) => {
    s.addEventListener("click", (e) => {
      let timestamp;

      switch (e.target.id) {
        case "tomorrow":
          const tomorrow_date = new Date(new Date());
          tomorrow_date.setDate(tomorrow_date.getDate() + 1);
          tomorrow_date.setHours(0, 0, 0, 0);
          timestamp = tomorrow_date.getTime();
          break;
        case "today":
          timestamp = null;
          break;
      }

      const index = load_index(timestamp);
      const word = words[index].toUpperCase();
      e.target.innerHTML = word;
      e.target.style.animation = "FadeIn 1s";
      document.title = `${capitalize_first(e.target.id)}'s Wordle is ${word}`;
    });
  });
});
