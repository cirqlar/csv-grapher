import { UPDATE_CONFIG } from "../actions/actions";

export function file(state = null, { type, payload: { file, changed } = {} }) {
  switch (type) {
    case UPDATE_CONFIG:
      debugger;
      if (changed) {
        return file ?? null;
      }   
    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }
}

const defaultConfig = {
  header: true,
  labels: true,
  type: 'line',
}

export function config(state = defaultConfig, { type, payload: { config } = {} }) {
  switch (type) {
    case UPDATE_CONFIG:
      return {
        ...state,
        ...config,
      }
    default:
      return state;
  }
}