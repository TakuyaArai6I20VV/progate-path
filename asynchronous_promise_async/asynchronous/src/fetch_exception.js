fetch("http://localhost:8000/users/6")
  .then((response) => {
    if (!response.ok) {
      throw new Error("User not found");
    }
    return response.json();
  })
  .then((user1) => {
    console.log(user1);
  })
  .catch((err) => {
    console.error(err.message);
  });
