const toggleButton = document.getElementById("toggle-button");
const navbarLinks = document.getElementById("links");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

document.getElementById("brand").addEventListener("change", function () {
  var brand = this.value;
  var modelSelect = document.getElementById("model");
  modelSelect.innerHTML = "";

  switch (brand) {
    case "samsung":
      modelSelect.innerHTML = `
          <option value="">Model</option>
          <option value="s">S series</option>
          <option value="note">Note series</option>
          <option value="a">A series</option>
          <option value="z">Z series</option>
          <option value="f">F series</option>
          <option value="j">J series</option>
        `;
      break;
    case "lg":
      modelSelect.innerHTML = `
          <option value="">Model</option>
          <option value="v">V series</option>
          <option value="g">G series</option>
          <option value="k">K series</option>
          <option value="q">Q series</option>
        `;
      break;
    case "huawei":
      modelSelect.innerHTML = `
          <option value="">Model</option>
          <option value="huawei-model-1">Huawei 1</option>
          <option value="huawei-model-2">Huawei 2</option>
          <option value="huawei-model-3">Huawei 3</option>
        `;
      break;
    case "oppo":
      modelSelect.innerHTML = `
          <option value="">Model</option>
          <option value="oppo-find">Find Series</option>
          <option value="oppo-reno">Reno Series</option>
          <option value="oppo-a">A Series</option>
          <option value="oppo-f">F Series</option>
          <option value="oppo-k">K Series</option>
          <option value="oppo-r">R Series</option>
        `;
      break;
    default:
      modelSelect.innerHTML = `
          <option value="">Model</option>
        `;
  }
});

const getStartedButton = document.getElementById("get-started");
const loginForm = document.getElementById("login-form");

getStartedButton.addEventListener("click", function () {
  loginForm.classList.toggle("show");
});

document.addEventListener("mouseleave", function () {
  if (loginForm.classList.contains("show")) {
    loginForm.classList.remove("show");
  }
});

document
  .getElementById("unlock-select")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var brand = document.getElementById("brand").value;
    var model = document.getElementById("model").value;
    var unlockType = document.getElementById("unlock-type").value;

    if (brand === "" || model === "" || unlockType === "") {
      alert("Please select an option from each dropdown list.");
    } else {
      var redirectUrl = "";
      switch (brand) {
        case "samsung":
          switch (model) {
            case "s":
              if (unlockType === "samsung-account-unlock") {
                redirectUrl = "s-series-sam.html";
              } else {
                redirectUrl = "s-series.html";
              }
              break;
            case "note":
              if (unlockType === "samsung-account-unlock") {
                redirectUrl = "note-series-sam.html";
              } else {
                redirectUrl = "note-series.html";
              }
              break;
            case "a":
              if (unlockType === "samsung-account-unlock") {
                redirectUrl = "a-series-sam.html";
              } else {
                redirectUrl = "a-series.html";
              }
              break;
            case "z":
              if (unlockType === "samsung-account-unlock") {
                redirectUrl = "z-series-sam.html";
              } else {
                redirectUrl = "z-series.html";
              }
              break;
            case "f":
              if (unlockType === "samsung-account-unlock") {
                redirectUrl = "f-series-sam.html";
              } else {
                redirectUrl = "f-series.html";
              }
              break;
            case "j":
              if (unlockType === "samsung-account-unlock") {
                redirectUrl = "j-series-sam.html";
              } else {
                redirectUrl = "j-series.html";
              }
              break;
          }
          break;
        case "lg":
          switch (model) {
            case "v":
              redirectUrl = "lg-series-v.html";
              break;
            case "g":
              redirectUrl = "lg-series-g.html";
              break;
            case "k":
              redirectUrl = "lg-series-k.html";
              break;
            case "q":
              redirectUrl = "lg-series-q.html";
              break;
          }
          break;
        case "huawei":
          switch (model) {
            case "huawei-model-1":
              redirectUrl = "huawei-model-1.html";
              break;
            case "huawei-model-2":
              redirectUrl = "huawei-model-2.html";
              break;
            case "huawei-model-3":
              redirectUrl = "huawei-model-3.html";
              break;
          }
          break;
        case "oppo":
          switch (model) {
            case "oppo-find":
              redirectUrl = "oppo-find.html";
              break;
            case "oppo-reno":
              redirectUrl = "oppo-reno.html";
              break;
            case "oppo-a":
              redirectUrl = "oppo-a.html";
              break;
            case "oppo-f":
              redirectUrl = "oppo-f.html";
              break;
            case "oppo-k":
              redirectUrl = "oppo-k.html";
              break;
            case "oppo-r":
              redirectUrl = "oppo-r.html";
              break;
          }
          break;
      }

      window.location.href = redirectUrl;
    }
  });

const brandSelect = document.getElementById("brand");
const unlockTypeSelect = document.getElementById("unlock-type");

brandSelect.addEventListener("change", () => {
  if (brandSelect.value === "samsung") {
    if (
      !unlockTypeSelect.querySelector('option[value="samsung-account-unlock"]')
    ) {
      const option = document.createElement("option");
      option.value = "samsung-account-unlock";
      option.text = "Samsung Account";
      unlockTypeSelect.add(option);
    }
  } else {
    const optionToRemove = unlockTypeSelect.querySelector(
      'option[value="samsung-account-unlock"]'
    );
    if (optionToRemove) {
      optionToRemove.remove();
    }
  }
});
