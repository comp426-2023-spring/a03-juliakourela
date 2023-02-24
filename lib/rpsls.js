export function rps(shot) {
    var result = {
        "rockpaper": "lose",
        "rockrock": "tie",
        "rockscissors": "win",
        "paperscissors": "lose",
        "paperpaper": "tie",
        "paperscissors": "win",
        "scissorsrock": "lose",
        "scissorsscissors": "tie",
        "scissorspaper": "win" 
      };
    const moves = ["rock", "paper", "scissors"]
    if (shot == null) {
        return {"player": moves[Math.floor(Math.random() * 3)]};
    } 
    else if (shot.toLowerCase() == "rock" || shot.toLowerCase() == "paper" || shot.toLowerCase() == "scissors") {
        var opponent = moves[Math.floor(Math.random() * 3)];
        return {"player": shot.toLowerCase(), "opponent": opponent, "result": result[shot.toLowerCase()+opponent]};
    }
    else {
        console.log(`error!`);
        console.error();
    }    
}