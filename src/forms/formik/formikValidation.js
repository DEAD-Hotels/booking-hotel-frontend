import {validateRecursively} from "../formsCommon";

export const formikValidate = validations => (values) => {
  const errors = validateRecursively(validations, values);
  return errors || {};
};

