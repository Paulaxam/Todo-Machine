import React from "react";

//Custom Rect hook - siempre empezar con use

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(
    reducer,
    initialState({ initialValue })
  );

  const { error, loading, item, sincronizedItem } = state;

  // const [error, setError] = React.useState(false);
  // const [loading, setLoading] = React.useState(true);
  // const [item, setItem] = React.useState(initialValue);
  // const [sincronizedItem, setSincronizedItem] = React.useState(true);

  //ACTION CREATORS

  const onError = (error) =>
    dispatch({ type: actionTypes.ERROR, payload: error });

  const onSuccess = (item) =>
    dispatch({ type: actionTypes.SUCCESS, payload: item });

  const onSave = (item) => dispatch({ type: actionTypes.SAVE, payload: item });

  const onSincronize = () => dispatch({ type: actionTypes.SINCRONIZE });
  //---------------------

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        onSuccess(parsedItem);
        // setSincronizedItem(true);
        // setItem(parsedItem);
        // setLoading(false);
      } catch (error) {
        onError(error);
        // setError(error);
      }
    }, 1500);
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
      // setItem(newItem);
    } catch (error) {
      onError(error);
      // setError(error);
    }
  };

  const sincronize = () => {
    onSincronize();
    // setLoading(true);
    // setSincronizedItem(false);
  };

  return { item, saveItem, loading, error, sincronize, sincronizedItem };
}

const initialState = ({ initialValue }) => ({
  error: false,
  loading: true,
  sincronizedItem: true,
  item: initialValue,
});

const actionTypes = {
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
  SAVE: "SAVE",
  SINCRONIZE: "SINCRONIZE",
};

const reducerObject = (state, payload) => ({
  [actionTypes.ERROR]: {
    ...state,
    error: true,
  },
  [actionTypes.SUCCESS]: {
    error: false,
    sincronizedItem: true,
    loading: false,
    item: payload,
  },
  [actionTypes.SAVE]: {
    ...state,
    item: payload,
  },
  [actionTypes.SINCRONIZE]: {
    ...state,
    loading: true,
    sincronizedItem: false,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

export { useLocalStorage };
