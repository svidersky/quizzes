/*
The goal: change four nucleotides in a DNA chain (A, C, G, T) with corresponding nucleotides of RNA chain:
G -> C
C -> G
T -> A
A -> U
*/

export const toRna = (dnk) => {
  let rnk = "";
  for (let i = 0; i < dnk.length; i++) {
    switch (dnk[i]) {
      case "G":
        rnk += "C";
        break;
      case "C":
        rnk += "G";
        break;
      case "T":
        rnk += "A";
        break;
      case "A":
        rnk += "U";
        break;
      default:
        rnk += dnk[i];
    }
  }
  return rnk;
};
