
var siteNameInput = document.getElementById("siteName")
var siteUrlInput = document.getElementById("siteUrl")


var siteList =[]
 
if(localStorage.getItem("website")){
    siteList = JSON.parse(localStorage.getItem("website"))
 displayData()
}

function main(){

    getData()
    displayData()
    clearData()
  
}

function getData(){

    var site = {
        name : siteNameInput.value,
        url : siteUrlInput.value
    }

    if(check(siteUrlInput.value)){
       document.getElementById('alert').style.display="none"
        siteList.push(site)
        localStorage.setItem("website",JSON.stringify(siteList))
    }else{
       document.getElementById('alert').style.display="block"
    }

    
}

function displayData(){

    var cartona =``

    for(var i = 0 ; i < siteList.length ; i++){

        cartona +=`
        
        <tr>
        <td>${i}</td>
        <td>${siteList[i].name}</td>
        <td><a href="${siteList[i].url}"><button class="btn btn-success">visit</button></a></td>
        <td><button onclick="deleteData(${i})" class="btn btn-danger">delete</button></td>
      </tr>
        
        `
    }

    document.getElementById("tBody").innerHTML = cartona
}

function clearData(){
    siteNameInput.value =""
    siteUrlInput.value =""
}

function deleteData(index){

    siteList.splice(index,1)
    localStorage.setItem("website",JSON.stringify(siteList))
    displayData()

}

function check(word){

    var regex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/

    return regex.test(word)

}