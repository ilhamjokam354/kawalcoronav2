const main = () => {
    const positifText = document.querySelector(".positifText");
    const sembuhText = document.querySelector(".sembuhText");
    const meninggalText = document.querySelector(".meninggalText");
    const lastUpdatePositif = document.querySelector(".lastUpdatePositif")
    const lastUpdateSembuh = document.querySelector(".lastUpdateSembuh")
    const lastUpdateMeninggal = document.querySelector(".lastUpdateMeninggal")
    const baseUrl = "https://covid19.mathdro.id";
    const indoPositif = document.querySelector(".indoPositif")
    const indoSembuh = document.querySelector(".indoSembuh")
    const indoMeninggal = document.querySelector(".indoMeninggal")
    const lastUpdateIndo = document.querySelector(".lastUpdateIndo")
    const table = document.getElementById("dataTabless");
    const tableGlobal = document.getElementById("dataTablesGlobal");
    const date = new Date();
    const data = () => {
        fetch(`${baseUrl}/api`, {
            method : "GET"
        })
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            // console.log(responseJson)
            positifText.innerHTML = new Intl.NumberFormat().format(responseJson.confirmed.value);
            sembuhText.innerHTML = new Intl.NumberFormat().format(responseJson.recovered.value);
            meninggalText.innerHTML = new Intl.NumberFormat().format(responseJson.deaths.value);
            lastUpdatePositif.innerHTML = date.toUTCString(responseJson.lastUpdate) 
            lastUpdateSembuh.innerHTML = date.toUTCString(responseJson.lastUpdate) 
            lastUpdateMeninggal.innerHTML = date.toUTCString(responseJson.lastUpdate) 
        })
        .catch(error => {
            console.log(error)
        })
        
    }

    const dataIndonesia = () => {
        fetch(`${baseUrl}/api/countries/indonesia`, {
            method : "GET"
        })
        .then(response => {
            return response.json()
        })
        .then(responseWithJson => {
            // console.log(responseWithJson)
            indoPositif.innerHTML = new Intl.NumberFormat().format(responseWithJson.confirmed.value)
            indoSembuh.innerHTML = new Intl.NumberFormat().format(responseWithJson.recovered.value)
            indoMeninggal.innerHTML = new Intl.NumberFormat().format(responseWithJson.deaths.value)
            lastUpdateIndo.innerHTML = date.toUTCString(responseWithJson.lastUpdate) 
        })
        .catch(error => {
            console.log(error)
        })
    }

    const dataIndo = ()=>{
        fetch("https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/indonesia/provinsi/", {
            method : 'GET'
            
        })
        .then(response => {
            return response.json()
        })
        .then(responseJson => {
            
            dataTable(responseJson)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const dataTable = (data) =>{
        for(let i = 0; i < data.length; i++){
            let row = 
            `
                <tr>
                    <td>${i + 1}</td>
                    <td>${data[i].attributes.Provinsi}</td>
                    <td>${new Intl.NumberFormat().format(data[i].attributes.Kasus_Posi)}</td>
                    <td>${new Intl.NumberFormat().format(data[i].attributes.Kasus_Semb)}</td>
                    <td>${new Intl.NumberFormat().format(data[i].attributes.Kasus_Meni)}</td>
                    
                </tr>
            `
            table.innerHTML += row;
        }
    }
    
    const dataGlobal = ()=>{
        fetch("https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/", {
            method: 'GET'
        })
        .then(response => {
            return response.json()
        })
        .then(responseJson => {
            // console.log(responseJson)
            for(let i = 0; i < responseJson.length; i++){
                let row = 
                `
                    <tr>
                        <td>${i + 1}</td>
                        <td>${responseJson[i].attributes.Country_Region}</td>
                        <td>${new Intl.NumberFormat().format(responseJson[i].attributes.Active)}</td>
                        <td>${new Intl.NumberFormat().format(responseJson[i].attributes.Recovered)}</td>
                        <td>${new Intl.NumberFormat().format(responseJson[i].attributes.Deaths)}</td>
                        <td>${date.toDateString(responseJson[i].attributes.Last_Update)}</td>
                        
                    </tr>
                `
                tableGlobal.innerHTML += row;
            }
        })
    }
    
    data()
    dataIndonesia()
    dataIndo()
    dataGlobal()
}
export default main;