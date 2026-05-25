const form = document.getElementById("contact-form");
const successMessage = document.getElementById("form-success");

form.addEventListener("submit", async function (e) {

  e.preventDefault();

  successMessage.style.display = "none";

  const formData = new FormData(form);

  try {

    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {

      form.reset();

      successMessage.style.display = "block";

    } else {

      alert("Something went wrong. Please try again.");

    }

  } catch (error) {

    alert("Something went wrong. Please try again.");

  }

});