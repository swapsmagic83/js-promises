
  favoriteNumberPromise = axios.get("http://numbersapi.com/23?json")

  favoriteNumberPromise.then(response => {
    $(".1").append(`<p>${response.data.text}</p>`)
    console.log(response.data.text)
    
  }).catch(error => {
    console.log("Error")
    console.log(error)
  })

  multipleNumberFactPromise = axios.get("http://numbersapi.com/23..25,32,34?json")

  multipleNumberFactPromise.then(response => {
    
    for( let res in response.data){
      $(".2").append(`<p>${response.data[res]}</p>`)
    }
    
  }).catch(error => {
    console.log("Error")
    console.log(error)
  })

  numberFactPromise = axios.get("http://numbersapi.com/35?json")

  numberFactPromise.then(response =>{
    $(".3").append(`<p>${response.data.text}</p>`)
    return axios.get("http://numbersapi.com/35?json")
  }).then(res =>{
    $(".4").append(`<p>${res.data.text}</p>`)
    return axios.get("http://numbersapi.com/35?json")
  }).then(res =>{
    $(".5").append(`<p>${res.data.text}</p>`)
    return axios.get("http://numbersapi.com/35?json")
  }).then(res =>{
    $(".6").append(`<p>${res.data.text}</p>`)
    return axios.get("http://numbersapi.com/35?json")
  })
  .catch(err =>{
    console.log("Error")
    console.log(err)
  })