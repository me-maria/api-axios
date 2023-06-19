const url = "http://localhost:5500/api"

function getUsers() {
  axios.get(url)
    .then(response => {
      const data = response.data

      renderApiResult.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}
//getUsers()

function getUser() {
  axios.get(`${url}/1`)
    .then(response => {
      const data = response.data

      userAvatar.src = data.avatar
      userNome.textContent = data.name
      userId.textContent = data.id
      userCity.textContent = data.city
    })
    .catch(error => console.log(error))
}
//getUser()
