import { ACTION_PRECENDENCE } from "../constants";

// Create a map to assign precedence values to action strings
const precedenceMap: { [key: string]: number } = {};
ACTION_PRECENDENCE.forEach((action, index) => {
  precedenceMap[action] = index;
});


// Comparator function to sort objects based on the precedence of the "action" property
export const actionComparator = (
  a: { action: string },
  b: { action: string }
) => {
  const precedenceA = precedenceMap[a.action] ?? Infinity; // Default to Infinity if action is not found
  const precedenceB = precedenceMap[b.action] ?? Infinity; // Default to Infinity if action is not found
  return precedenceA - precedenceB;
};
