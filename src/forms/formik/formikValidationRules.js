
export const required = (message = 'Обязательное поле') => {
  return (value) => value ? null : message;
};

export const isInteger = (message= 'Некорректная сумма') => {
 return (value) => isNaN(value) ? value : message;
}

export const notPrecededBy = (startPeriodValueName, message = 'Конец периода не может предшествовать началу периода') =>
  (endPeriod, allValues) => (new Date(allValues[startPeriodValueName]) > new Date(endPeriod)) && message;
