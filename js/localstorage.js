var gamedata = {};
var gamename = "rekenen";

function loadLocalStorage(){
	if (typeof(localStorage.rekenen) !== "undefined") {
	    console.log('Save game found');
	    var tempgamedata = localStorage.getItem(gamename);
	    //console.log(tempgamedata);
	    gamedata = JSON.parse(tempgamedata);
	    //console.log(gamedata);
	} else {
	    console.log('Sorry! No save game');  

	    saveToLocalStorage();
	}
	//console.log(gamedata);
	if(gamedata['punten'] == undefined)
	{
		gamedata['punten'] = 0;
		gamedata['highscore'] = 0;
		saveToLocalStorage();
	}

	return gamedata;

};

function saveToLocalStorage(){
	localStorage.removeItem(gamename);
	localStorage.setItem(gamename, JSON.stringify(gamedata));
};

function clearLocalStorage(){
	localStorage.removeItem(gamename);
};
