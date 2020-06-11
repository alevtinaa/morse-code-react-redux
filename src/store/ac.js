const SET_CODING_TYPE = 'SET_CODING_TYPE';
const SAVE = 'SAVE';

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
