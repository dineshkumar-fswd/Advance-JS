let a = 5;
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) =>
    console.log(`Username: ${data["4"].name}Website:${data["3"].website}`)
  )
  .catch((err) => consolelog("Error", err));
