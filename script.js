//webcode-task to Implement the Nationalize API using async/await with fetch.

let div=document.createElement("div")
div.style="margin-top:50px"
div.style.textAlign="center"

// creating the heading tag "Search Your Nationality"

let h5=document.createElement("h5");
h5.innerHTML="Search Your Nationality"

//creating the input box "Enter your name"

let input=document.createElement("input");
input.setAttribute("Placeholder","Enter your name")
input.setAttribute("type","text")
input.setAttribute("id","name")

//creating the button "search"

let button=document.createElement("button")
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML=("Search")
button.addEventListener("click",api);

//creating the element for the response data

let country=document.createElement("div");
country.setAttribute("id","country")

let country1=document.createElement("div");
country1.setAttribute("id","country1")

div.append(h5,input,button,country,country1);
document.body.append(div);

// using async/await with fetch.

async function api(){

  let name1=document.getElementById("name").value;
  console.log(name1);
  let url = `https://api.nationalize.io/?name=${name1}`;
  let data=   await fetch(url);
  let data1 = await data.json();
    
    let str=data1.country;
    country.innerHTML=`1.Country_id=${(str[0].country_id)} Probability=${(str[0].probability)}`;
    country1.innerHTML=`2.Country_id=${(str[1].country_id)} Probability=${(str[1].probability)}`;
  }
// using try-catch

  async function bar(){
    try {
      let data1=await api()
      console.log(data1)
    } catch (error) {
      console.log(Error)
    }
  }bar();



