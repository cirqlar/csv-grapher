import { parse } from "../../shared/csv";

export const UPDATE_CONFIG = "UPDATE_CONFIG";

export function updateConfig(payload) {
  return (dispatch) => {
    let { config, file, changed } = payload;
    let action = {
      type: UPDATE_CONFIG,
      payload: {
        config,
        changed,
      }
    }
    if (changed) {
      if (file) {
        return parse(file, config)
          .then(result => {
            action.payload.data = result;
            return dispatch(action);
          });
      }
      action.payload.data = null;
      return dispatch(action);
    }
    return dispatch(action);
  }
}