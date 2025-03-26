const requestOptions = {
  method: "GET",
  redirect: "follow"
};

for (let index = 0; index < 100; index++) {
    fetch("http://localhost:3210/api", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}
