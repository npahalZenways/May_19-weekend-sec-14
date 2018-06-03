
function skill(param){
    return function(target){
        target.prototype.skill = param;
    }
}

@skill('bat')
class player{
    @param skill;
}

var player1 = new player();

console.log(player1.skill)