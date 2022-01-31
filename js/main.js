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
  const index = load_index();
  const word = words[index].toUpperCase();
  // object selectors
  const today_word_obj = document.querySelector("#today .word");
  const tomorrow_obj = document.querySelector("#tomorrow");
  // set text on today's selectors
  today_word_obj.innerHTML = word;
  document.title = `Today's Wordle is: ${word}`;
  // listener for click on tomorrow
  tomorrow_obj.addEventListener("click", () => {
    // calculate tomorrow as today plus 1 day
    const tomorrow_date = new Date(new Date());
    tomorrow_date.setDate(tomorrow_date.getDate() + 1);
    tomorrow_date.setHours(0, 0, 0, 0);
    // load timestamp and word for tomorrow
    const timestamp = tomorrow_date.getTime();
    const index = load_index(timestamp);
    const word = words[index].toUpperCase();
    // set element
    tomorrow_obj.innerHTML = word;
    tomorrow_obj.style.animation = "FadeIn 1s";
  });
});
