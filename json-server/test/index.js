const BASE_URL = "http://www.omdbapi.com/?s=superman&apikey=e9fc0d26";
const input = document.getElementById("title").Value
console.log(input)
const ApiCall = async()=>{
    fetch(BASE_URL)
    .then((res)=> res.json())
    .then((res)=> console.log(res))
    .catch((err)=>console.log(err))
    ;
}
function updateAPI() {
      const input = document.getElementById("searchInput").value;
      const apiUrl = `http://www.omdbapi.com/?s=${encodeURIComponent(input)}`;
      
      document.getElementById("apiLink").innerText = apiUrl;
    }
ApiCall();