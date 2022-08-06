document.querySelector('.allNew').addEventListener('click', getAllNew)
document.querySelector('.newSpace').addEventListener('click', getNewSpace)
document.querySelector('.newWords').addEventListener('click', getNewWords)


function getAllNew(){
  const space = 'https://api.unsplash.com/photos/random?query=space&client_id=Ta_iCzuAv7GvOpBUKTEf0H5dGvO_GT1LRNBiNbavywc'
  const poetryDB = 'https://poetrydb.org/author,random/Emily Dickinson;1'

    fetch(space)
      .then(response=>{return response.json()
      })
      .then (jsonData=>{
        console.log(jsonData)
        document.body.style.backgroundImage = 'url(' + jsonData.urls.regular + ')';
        document.querySelector('.description').innerText = `Alt Description: ${jsonData.alt_description}`
        document.querySelector('.photographer').innerText = `${jsonData.user.username} via Unsplash`
        document.querySelector('.photographer').href = `${jsonData.user.links.html}?utm_source=emily_dickinson_in_space&utm_medium=referral`
      })

    fetch(poetryDB)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data[0])
      document.querySelector('.poem').innerText = data[0].lines.join('\r\n')
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

  }

function getNewSpace(){
const space = 'https://api.unsplash.com/photos/random?query=space&client_id=Ta_iCzuAv7GvOpBUKTEf0H5dGvO_GT1LRNBiNbavywc'

fetch(space)
.then(response=>{return response.json()
})
.then (jsonData=>{
  console.log(jsonData)
  document.body.style.backgroundImage = 'url(' + jsonData.urls.regular + ')';
  document.querySelector('.description').innerText = `Alt Description: ${jsonData.alt_description}`
  document.querySelector('.photographer').innerText = `${jsonData.user.username} via Unsplash`
  document.querySelector('.photographer').href = `${jsonData.user.links.html}?utm_source=emily_dickinson_in_space&utm_medium=referral`

})


.catch(err => {
  console.log(`error ${err}`)
});


}
function getNewWords(){
  const poetryDB = 'https://poetrydb.org/author,random/Emily Dickinson;1'

fetch(poetryDB)
.then(res => res.json()) // parse response as JSON
.then(data => {
  console.log(data[0])
  document.querySelector('.poem').innerText = data[0].lines.join('\r\n')
})
.catch(err => {
    console.log(`error ${err}`)
});

  }
