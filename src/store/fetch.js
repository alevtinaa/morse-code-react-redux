export const fetchData = (randomType, setPrevious, setCurrent, current, setIsFetching) => {
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

  setIsFetching(true);
  setPrevious(randomType, current);
  fetch(endpoint)
    .then(
      resp => resp.json()
    )
    .then(
      data => {
        data.lines && data.lines.length > 18 ?
        fetchData(randomType, setPrevious, setCurrent, current, setIsFetching)
        :
        setCurrent(
          randomType,
          {
            ...data,
            id: Date.now(),
          }
        );
        setIsFetching(false);
      }
    )
  };
