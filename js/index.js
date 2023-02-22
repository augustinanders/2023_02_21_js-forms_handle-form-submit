console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  /*   const formElements = event.target.elements;
  console.log(formElements);

  console.log(formElements.firstName.value);
  console.log(formElements.LasrName.value) */

  const formData = new FormData(form);
  console.log(formData);
  const data = Object.fromEntries(formData);
  console.log(data);

  const ageBadnessSum = parseInt(data.age, 10) + parseInt(data.badness, 10);
  console.log(`The age-badness-sum of ${data.firstName} is ${ageBadnessSum}.`);
});
