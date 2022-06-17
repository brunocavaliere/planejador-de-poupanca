import { calculator, values } from "../lib/accumulated-value";
import {
  valueInvestedChart,
  valueAccumulatedChart,
  calculatorChart,
} from "../lib/chart-value";

export const resolvers = {
  Query: {
    getValuesAccumulated: () => values,
    getValuesInvestedChart: () => valueInvestedChart,
    getValuesAccumulatedChart: () => valueAccumulatedChart,
  },
  Mutation: {
    async addValue(_parent, args, _context, _info) {
      await calculator(args.input);
      await calculatorChart(args.input);
      return args.input;
    },
  },
};
