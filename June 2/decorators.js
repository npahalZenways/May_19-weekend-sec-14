var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function skill(param) {
    return function (target) {
        target.prototype.skill = param;
    };
}
var player = (function () {
    function player() {
    }
    __decorate([
        param
    ], player.prototype, "skill", void 0);
    player = __decorate([
        skill('bat')
    ], player);
    return player;
}());
var player1 = new player();
console.log(player1.skill);
//# sourceMappingURL=decorators.js.map