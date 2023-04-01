// eslint-disable-next-line node/no-unsupported-features/es-syntax
import axios from "axios";

/* eslint-disable*/
console.log("================================");

const login = (email, password) => {
  alert(email);
};

/*const login = async (email, password) => {
  console.log(email, password);
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:3000/api/users/login",
      data: {
        email,
        password,
      },
    });
  } catch (err) {
    console.log(err);
  }
};*/

document.querySelector(".loginForm").addEventListener("submit", (e) => {
  const email = document.getElementById("emailAddress").value;

  const password = document.getElementById("password").value;
  login(email, password);
});
