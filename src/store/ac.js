const SET_CODING_TYPE = 'SET_CODING_TYPE';
const SAVE = 'SAVE';
const REMOVE = 'REMOVE';
const SET_RANDOM_TYPE = 'SET_RANDOM_TYPE';
const SET_SHOULD_SWITCH = 'SET_SHOULD_SWITCH';
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

export let remove = (removingId) => (
  {
    type: REMOVE,
    removingId,
  }
);

export let setRandomType = (randomType) => (
  {
    type: SET_RANDOM_TYPE,
    randomType,
  }
);

export let setShouldSwitch = (shouldSwitch) => (
  {
    type: SET_SHOULD_SWITCH,
    shouldSwitch: !!shouldSwitch,
  }
);

export let setCurrent = (currentType, current) => (
  {
    type: SET_CURRENT,
    currentType,
    current,
  }
);

export let setPrevious = (previousType, previous) => (
  {
    type: SET_PREVIOUS,
    previousType,
    previous,
  }
);
