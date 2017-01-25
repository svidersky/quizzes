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
    if (dnk[i] === "G") {
      rnk += "C";
    }
    else if (dnk[i]==="C") {
      rnk += "G";
    }
    else if (dnk[i]==="T") {
      rnk += "A";
    }
    else if (dnk[i]==="A") {
      rnk += "U";
    }
    else {
      rnk += dnk[i];
    }
  }
  return rnk;
};
