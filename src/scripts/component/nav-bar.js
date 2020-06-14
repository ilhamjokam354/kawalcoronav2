class NavBar extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = 
        `
            <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="">Covid-19</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item ">
                    <a class="nav-link" href="#home">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item ">
                    <a class="nav-link" href="#data">Live Data <span class="sr-only">(current)</span></a>
                    </li>
                    
                </ul>
                
            </div>
            </nav>
        `;
    }
}
customElements.define("nav-bar", NavBar);