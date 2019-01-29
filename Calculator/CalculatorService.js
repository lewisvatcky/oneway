import * as AusPost from "../services/AusPost";

export const calculate = (postcode, width, height, length, weight) => {
  return AusPost.GetEstimate(3078, postcode, width, height, length, weight);
};
