const SET_CODING_TYPE = 'SET_CODING_TYPE';
const SAVE = 'SAVE';
const SET_RANDOM_TYPE = 'SET_RANDOM_TYPE';
const SET_CURRENT = 'SET_CURRENT';
const SET_PREVIOUS = 'SET_PREVIOUS';

export let setCodingType = (codingType) => (
  {
    type: SET_CODING_TYPE,
    codingType,
  }
);

export let save = (savingType, saving) => (
  {
    type: SAVE,
    savingType,
    saving,
  }
);

export let setRandomType = (randomType) => (
  {
    type: SET_RANDOM_TYPE,
    randomType,
  }
);

export let setCurrent = (savingType, saving) => (
  {
    type: SET_CURRENT,
    savingType,
    saving,
  }
);

export let setPrevious = (savingType, saving) => (
  {
    type: SET_PREVIOUS,
    savingType,
    saving,
  }
);
