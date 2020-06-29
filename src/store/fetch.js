export const fetchData = (randomType, setPrevious, setCurrent, current) => {
  let endpoint = (
    (type) => {
      switch (type) {
        case 'poems':
          return 'https://poetrydb.org/random';
        case 'lyrics':
          return;
        case 'jokes':
          return 'https://sv443.net/jokeapi/v2/joke/Miscellaneous,Dark?blacklistFlags=racist,sexist&type=single';
        default:
          return 'https://poetrydb.org/random';
        }
      }
    )(randomType);

  setPrevious(randomType, current);
  fetch(endpoint)
    .then(
      resp => resp.json()
    )
    .then(
      data => setCurrent(
        randomType,
        data
      )
    )
  };
