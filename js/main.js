function getElem(id){
   return document.getElementById(id);
}

function findGame(games,name){
    var found_game = null;
    games.forEach(function (game) {
        if(game.name===name){
            found_game=game;
        }
    });
    return found_game;
}

var createButton = getElem('create_btn');
var searchButton = getElem('search_btn');

if(createButton!==undefined && createButton!==null) {
    createButton.addEventListener('click', function (e) {
        var g = localStorage.getItem('games');
        if (g !== null && g !== "null") {
            var games = JSON.parse(g);
        } else {
            var games = [];
        }
        var game = {
            name: getElem('game').value,
            time: getElem('booking_time').value,
            gender: getElem('gender').options[getElem('gender').selectedIndex].value,
            equipment: getElem('equipment').options[getElem('equipment').selectedIndex].value,
            min_age: getElem('num_players').options[getElem('num_players').selectedIndex].value
        };
        games.push(game);
        localStorage.setItem('games', JSON.stringify(games));

        Swal.fire(
            'Game Added',
            'The game has been added.',
            'success'
        ).then(function (result) {
            if (result.value) {
                window.location = "./options.html";
            }
        });
    });
}

if(searchButton!==undefined && searchButton!==null){
    searchButton.addEventListener('click',function (e) {
        var g = localStorage.getItem('games');
        if (g !== null && g !== "null") {
            var games = JSON.parse(g);
        } else {
            var games = [];
        }
        console.log(games);
        console.log(getElem('search_box').value);
        var found = findGame(games,getElem('search_box').value);
        if(found===null){
            Swal.fire(
                'Game Not Found',
                'That game cannot be found.',
                'error'
            );
        }else{
            getElem('g_name').innerHTML='<a>Demo Soccer</a>';
            getElem('g_time').innerHTML='<a>Casuarina</a>';
            getElem('g_gender').innerHTML='<a>Male</a>';
            getElem('join_link').innerHTML = '<button class="btn btn-primary" id="register_button">Join</button>';


        }

    });

}
