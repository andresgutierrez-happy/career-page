let data ;

function resultados() {
    
    const fetchPromise = fetch(`https://apmex-knowledge-center.flywheelsites.com/wp-json/wp/v2/posts`)


    fetchPromise.then(response => {
       
        return response.json();
    }).then(result => {
      
      data = result ;
      saveData(result)
     return data;
    }).catch(err =>{
      
      });
    
    }

    resultados()
   
    
let newsTitle = document.querySelector(".card-1 h3")
let newsDesc = document.querySelector(".card-1 p")

let newsTitle2 = document.querySelector(".card-2 h3")
let newsDesc2 = document.querySelector(".card-2 p")

let newsTitle3 = document.querySelector(".card-3 h3")
let newsDesc3 = document.querySelector(".card-3 p")


    function saveData(result) {
       let title = result[0].title.rendered;
       let title2 = result[1].title.rendered;
       let title3 = result[2].title.rendered;

       let excerpt = result[0].excerpt.rendered;
       let excerpt2 = result[1].excerpt.rendered;
       let excerpt3 = result[2].excerpt.rendered;

let links = document.querySelectorAll(".news-link a")

for (let i = 0 ; i< links.length; i++) {
  links[i].href = result[i].link
}

      

       newsTitle.innerHTML = title
       newsDesc.innerHTML = excerpt
       newsTitle2.innerHTML = title2
       newsDesc2.innerHTML = excerpt2
       newsTitle3.innerHTML = title3
       newsDesc3.innerHTML = excerpt3

       const fetchPromise2 = fetch(result[0]._links["wp:featuredmedia"][0].href)




         basicPromiseAll(result[0]._links["wp:featuredmedia"][0].href,result[1]._links["wp:featuredmedia"][0].href,result[2]._links["wp:featuredmedia"][0].href)




    }



// ASYNC PROMISEALL FOR IMAGES 

async function basicPromiseAll(query1, query2, query3) {
    try {
      const [data1, data2, data3] = await Promise.all([
        fetch(query1).then(result => result.json()),
        fetch(query2).then(result => result.json()),
        fetch(query3).then(result => result.json()),
      ]);
    
      backgrounds(data1,data2,data3)
      return [data1, data2, data3];
    } catch (err) {
      console.log(err);
      return [];
    }
  }

function backgrounds(img1, img2, img3) {
  document.querySelector(".news-1").style.background = `linear-gradient(180deg, rgba(0, 37, 57, 0) 0%, rgba(0, 37, 57, 0.9) 78.19%), url(${img1.guid.rendered}) no-repeat center`
  document.querySelector(".card-2").style.background = `linear-gradient(180deg, rgba(0, 37, 57, 0) 0%, rgba(0, 37, 57, 0.9) 78.19%), url(${img2.guid.rendered}) no-repeat center`
  document.querySelector(".card-3").style.background =  `linear-gradient(180deg, rgba(0, 37, 57, 0) 0%, rgba(0, 37, 57, 1) 78.19%), url(${img3.guid.rendered}) no-repeat center`
}



    // const url = 'https://api.spacexdata.com/v4';
/*
const result = fetch(`${url}/launches/latest`, { method: 'get' })
.then(response => response.json()) // pass the data as promise to next then block
.then(data => {
  const rocketId = data.rocket;

  console.log(rocketId, '\n');

  return fetch(`${url}/rockets/${rocketId}`); // make a 2nd request and return a promise
})
.then(response => response.json())
.catch(err => {
  console.error('Request failed', err)
})

// I'm using the result const to show that you can continue to extend the chain from the returned promise
result.then(r => {
console.log(r.first_stage); // 2nd request result first_stage property
});

*/





