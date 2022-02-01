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

document.addEventListener("DOMContentLoaded", () => {
  // load index and word

  // object selectors

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
      e.target.innerHTML = words[index].toUpperCase();
      e.target.style.animation = "FadeIn 1s";
    });
  });

  // // listener for click on tomorrow
  // selectors.addEventListener("click", (e) => {
  //   console.log(word);
  // calculate tomorrow as today plus 1 day
  // const tomorrow_date = new Date(new Date());
  // tomorrow_date.setDate(tomorrow_date.getDate() + 1);
  // tomorrow_date.setHours(0, 0, 0, 0);
  // load timestamp and word for tomorrow
  // const timestamp = tomorrow_date.getTime();
  // const index = load_index(timestamp);
  // const word = words[index].toUpperCase();
  // set element
  // tomorrow_obj.innerHTML = word;
  // tomorrow_obj.style.animation = "FadeIn 1s";
  // });
});
