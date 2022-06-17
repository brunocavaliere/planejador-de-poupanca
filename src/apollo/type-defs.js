import { gql } from "@apollo/client";

export const typeDefs = gql`
  type Value {
    initialValue: Float!
    parcelValue: Float!
    time: Float!
    fee: Float!
  }
  type AccumulatedValue {
    accumulated: Float!
    saved: Float!
    month: Float!
    fee: Float!
    initial: Float!
  }
  input ValueInput {
    initialValue: Float!
    parcelValue: Float!
    time: Float!
    fee: Float!
  }
  type Query {
    getValuesAccumulated: [AccumulatedValue]!
    getValuesAccumulatedChart: [Float]!
    getValuesInvestedChart: [Float]!
  }
  type Mutation {
    addValue(input: ValueInput!): Value!
  }
`;
