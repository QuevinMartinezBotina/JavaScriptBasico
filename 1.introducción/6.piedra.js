var piedra = "piedra";
var tijera = "tijera";
var papel = "papel";

function game(player, cpu) {

    var resultado =
        player == piedra && cpu == tijera ? "gana player" : (
            player == tijera && cpu == papel ? "gana player" : (
                player == papel && cpu == piedra ? "gana player" : (
                    player == cpu || cpu == player ? "empate" : "gana cpu"
                )
            )
        );

    return resultado;
}
game(tijera, piedra);