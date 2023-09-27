const jogada1 = "papel"
const jogada2 = "papel"

// pedra
// papel
// tesoura


// pedra   + tesoura = pedra   //jogada1 Vence
// papel   + pedra   = papel   //jogada1 Vence
// tesoura + papel   = tesoura //jogada1 Vence

// pedra   + papel   = papel   //jogada2 Vence
// papel   + tesoura = tesoura //jogada2 Vence
// tesoura + pedra   = pedra   //jogada2 Vence

if (jogada1 === jogada2) {
    console.log("Empate.");
} else if (
    (jogada1 == "pedra" && jogada2 == "tesoura") ||
    (jogada1 == "papel" && jogada2 == "pedra") ||
    (jogada1 == "tesoura" && jogada2 == "papel")
) {
    console.log(jogada1);
} else {
    console.log(jogada2);
}

