const PREFIX = "@DOCTOR-AI";

export const getActionName = name => `${PREFIX}/${name}`;

export const getDataAction = name => {
  return {
    init: getActionName(`${name}_INIT`),
    reset: getActionName(`${name}_RESET`),
    success: getActionName(`${name}_SUCCESS`),
    failed: getActionName(`${name}_FAILED`)
  };
};

export const handleError = err => {
  console.log(err);
};
