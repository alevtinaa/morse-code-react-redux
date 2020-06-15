const SET_CODING_TYPE = 'SET_CODING_TYPE';
const SAVE = 'SAVE';
const SET_RANDOM_TYPE = 'SET_RANDOM_TYPE';

export let setCodingType = (codingType) => (
  {
    type: SET_CODING_TYPE,
    codingType,
  }
);

export let save = (saving) => (
  {
    type: SAVE,
    saving,
  }
);

export let setRandomType = (randomType) => (
  {
    type: SET_RANDOM_TYPE,
    randomType,
  }
)
