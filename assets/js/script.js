const scriptURL =
  "https://script.google.com/macros/s/AKfycbyYtNjznzK5eJg6xw3TgLpX6dQ0uXU7T5mlxUgCL-5343pqC3qunl_Hp56WjUCRMbErGw/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! One of the Member From our Team Reached to You !")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => alert("Error!", error.message));
});
