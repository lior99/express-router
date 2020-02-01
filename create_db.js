var db = new Mongo().getDB("players");
db.players.insert({ "id": "1", "name": "Christiano Ronaldo" });
db.players.insert({ "id": "2", "name": "Leo Messi" });
db.players.insert({ "id": "3", "name": "Kilian Mpabe" });
db.players.insert({ "id": "4", "name": "Eden Hazard" });