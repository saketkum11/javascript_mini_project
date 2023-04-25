const valueInput = document.querySelector("#input-changes");
const display = document.querySelector("#output");
valueInput.addEventListener("input", (event) => {
  const value = +event.target.value;
  const label = event.target.nextElementSibling;

  const range_width = getComputedStyle(event.target).getPropertyValue("width");
  const range_text = getComputedStyle(label).getPropertyValue("width");

  const num_width = +range_width.substring(0, range_width.length - 2);
  const num_width_label = +range_text.substring(0, range_text.length - 2);

  const max = +event.target.max;
  const min = +event.target.min;

  const left =
    value * (num_width / max) -
    num_width_label / 2 +
    scale(value, min, max, 10, -10);

  label.style.left = `${left}px`;

  label.innerHTML = value;
  console.log(
    "range-text",
    range_text,
    "range",
    range_width.length - 2,
    label.style.left,
    "value",
    value,
    "num_witdh",
    num_width,
    "num_width_label",
    num_width_label,
    max,
    min
  );
});
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
