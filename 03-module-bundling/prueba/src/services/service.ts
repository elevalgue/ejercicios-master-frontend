const baseURl = process.env.API_BASE_URL;
console.log(process.env.API_BASE_URL, 'prueba');


// export function getAvg(scores: number[]) {
//   return getTotalScore(scores) / scores.length;
// }

// export function getTotalScore(scores: number[]) {
//   return scores.reduce((score, count) => score + count);
// }


const getDataFromApi = (page) => {
  return fetch("http://www.myapp.com/api")
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    });
};