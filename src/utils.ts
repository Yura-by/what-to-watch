const getUniqItems = <T>(array: Array<T>): Array<T> => {
  if (!array.length) {
    return [];
  }
  return array.filter((item, index, arrayDefault) => {
    return arrayDefault.indexOf(item) === index;
  });
};

export {getUniqItems};
