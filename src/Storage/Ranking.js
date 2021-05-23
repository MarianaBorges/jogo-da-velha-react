
export function saveRanking (name, time){
  //pego o ranking no local storage
  var ranking = JSON.parse(localStorage.getItem("@react_jogo_velha_ranking"));
  //dados do vencedor da partida
  var winner = {
    name: name,
    time: time,
  }
  if (ranking === null) {
    ranking = [];
  }
  ranking.push(winner);
  ranking.sort((first, second)=> {return first.time - second.time});

  if (ranking.length > 10) {
    ranking.length = 10;
  }

  localStorage.setItem("@react_jogo_velha_ranking", JSON.stringify(ranking));
  console.log('ranking', ranking);
}

export function getRanking(){

  var ranking = JSON.parse(localStorage.getItem("@react_jogo_velha_ranking"));
  return ranking;

}
