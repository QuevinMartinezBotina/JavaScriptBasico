var piedra = "piedra";
var tijera = "tijera";
var papel = "papel";
var winplayer = "gana player";

function game(player, cpu) {

    var resultado =
        player == piedra && cpu == tijera ? winplayer : (
            player == tijera && cpu == papel ? winplayer : (
                player == papel && cpu == piedra ? winplayer : (
                    player == cpu || cpu == player ? "empate" : "gana cpu"
                )
            )
        );

    return resultado;
}
game(tijera, piedra);