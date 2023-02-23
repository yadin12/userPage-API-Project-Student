//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }

    _getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

    loadData() {
        $.ajax({
            method: "GET",
            url: "https://randomuser.me/api/?results=7",
            success: (info) => {
                this.data.users = []
                info.results.forEach(p => {
                    let name = ((p.name.first) + " " + (p.name.last))
                    let location = ((p.location.city) + " " + (p.location.state))
                    let picture = (p.picture.medium)
                    this.data.users.push({ name, location, picture })
                })
            },
            error: function(xhr,text,error){
                alert("Couldn't load user data.")
            }
        })
        $.ajax({
            method: "GET",
            url: "https://baconipsum.com/api/?type=meat-and-filler&paras=1&format=text",
            success: (info) => this.data.meat = info,
            error: function (xhr, text, error) {
                alert("Couldn't load random meat.")
            }
        })
        $.ajax({
            method: "GET",
            url: "https://pokeapi.co/api/v2/pokemon/"+this._getRandomInt(20),
            success: (info) => {
                let pokemonName = info.name
                let pokemonPicture = info.sprites.back_default
                this.data.pokemon = {name: pokemonName, picture:pokemonPicture}
            },
            error: function (xhr, text, error) {
                alert("Couldn't load random Pokemo,.")
            }
        })


        //you should make all your API requests here
        //each request should update the `data` object accordingly
    }
}

