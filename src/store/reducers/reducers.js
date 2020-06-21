import { UPDATE_CONFIG } from "../actions/actions";
import { isEmpty } from '../../shared/csv';

export function file(state = null, { type, payload: { file, changed } = {} }) {
  switch (type) {
    case UPDATE_CONFIG:
      if (changed) {
        return file ?? null;
      }   
    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }
}

const defaultConfig = {
  parse: {

  },
  chart: {
    type: 'line',
  },
  shared: {
    header: true,
    labels: true,
  }
}

export function config(state = defaultConfig, { type, payload: { config } = {} }) {
  switch (type) {
    case UPDATE_CONFIG:
      if (!isEmpty(config)) {
        let { parse: sParse, chart: sChart, shared: sShared } = state;
        let { parse, chart, shared } = config;
        return {
          parse: (isEmpty(parse)) ? sParse : {
            ...sParse,
            ...parse,
          },
          chart: (isEmpty(chart)) ? sChart : {
            ...sChart,
            ...chart,
          },
          shared: (isEmpty(shared)) ? sShared : {
            ...sShared,
            ...shared,
          },
        }
      }
    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }
}