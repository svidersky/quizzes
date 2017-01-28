/*
Make a reverse of a string using recursion.
*/

export default (string) => {
  const dlina = string.length;
  const iter = (str, acc) => {
    if (acc === dlina) {
      return str;
    }
    str += string.substr(dlina - acc - 1, 1);
    return iter(str, acc + 1);
  };
  return iter('', 0);
};
