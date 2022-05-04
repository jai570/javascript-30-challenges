const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  //   console.log(this.value);
  const suffix = this.dataset.sizing || ""; // dataset contains all the attrubute properties "data- "
  //   console.log(suffix);
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
// const handleUpdate = () => { it is not working it is returning undefined
//   console.log(this.value);
// };

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
