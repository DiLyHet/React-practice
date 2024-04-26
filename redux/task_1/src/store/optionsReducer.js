const initialState = {
  optionsList: [
    {
      id: 'id-0',
      name: '19-inch wheels',
    },
    {
      id: 'id-1',
      name: 'Leather-trimmed Sport Seats',
    },
    {
      id: 'id-2',
      name: 'B&O Sound System',
    },
    {
      id: 'id-3',
      name: 'Adaptive Cruise Control',
    },
    {
      id: 'id-4',
      name: 'Daytime running lights',
    },
    {
      id: 'id-5',
      name: 'Auto High-Beam Headlamps',
    },
    {
      id: 'id-6',
      name: 'Carbon Sport Interior',
    },
  ],
  selected: [],
};

const optionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVE_OPTION_TO_SELECTED':
      const { payload: optionToSelect } = action;
      return {
        ...state,
        optionsList: state.optionsList.filter(option => option.id !== optionToSelect.id),
        selected: [optionToSelect, ...state.selected].sort((a, b) => a.id.localeCompare(b.id)),
      };
    case 'MOVE_OPTION_TO_AVAILABLE':
      const { payload: optionToDeselect } = action;
      const existsInAvailableOptions = state.optionsList.some(option => option.id === optionToDeselect.id);
      return {
        ...state,
        selected: state.selected.filter(option => option.id !== optionToDeselect.id),
        optionsList: existsInAvailableOptions
          ? state.optionsList.sort((a, b) => a.id.localeCompare(b.id))
          : [...state.optionsList, optionToDeselect].sort((a, b) => a.id.localeCompare(b.id)),

      };
    default:
      return state;
  }
};



export default optionsReducer;