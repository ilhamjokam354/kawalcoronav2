class JumboTron extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = 
        `
        <div class="jumbotron jumbotron-fluid"  id="home">
            <div class="container p-4 ">
                <h1 class="display-4 text-center">Kawal Corona</h1>
                <p class="lead text-center">Live Data CoronaVirus Global & Indonesia</p>
            </div>
            <div class="container mt-5">
                <hr class="mt--5">
                <h3 class="text-left">Corona Virus (Covid-19)</h3>
                <p class="lead">Coronavirus atau virus corona merupakan keluarga besar virus yang menyebabkan infeksi saluran pernapasan atas ringan hingga sedang, seperti penyakit flu. Banyak orang terinfeksi virus ini, setidaknya satu kali dalam hidupnya.

                Namun, beberapa jenis virus corona juga bisa menimbulkan penyakit yang lebih serius, seperti:
                
                Middle East Respiratory Syndrome (MERS-CoV).
                Severe Acute Respiratory Syndrome (SARS-CoV).
                Pneumonia.
                SARS yang muncul pada November 2002 di Tiongkok, menyebar ke beberapa negara lain. Mulai dari Hongkong, Vietnam, Singapura, Indonesia, Malaysia, Inggris, Italia, Swedia, Swiss, Rusia, hingga Amerika Serikat. Epidemi SARS yang berakhir hingga pertengahan 2003 itu menjangkiti 8.098 orang di berbagai negara. Setidaknya 774 orang mesti kehilangan nyawa akibat penyakit infeksi saluran pernapasan berat tersebut.  </p>
                <p class="text-right">#StaySave</p>
            </div>    
        </div>
        `
    }
}
customElements.define("jumbo-tron", JumboTron);