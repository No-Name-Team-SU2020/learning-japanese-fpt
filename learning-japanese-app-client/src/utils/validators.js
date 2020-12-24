export const containManySpaceCharacters = (value) => {
    const valueArrCharacters = value.split("");
    for (let i = 0; i < valueArrCharacters.length - 1; i++) {
      if (valueArrCharacters[i] === " " && valueArrCharacters[i + 1] === " ") {
        return true;
      }
    }
    return false;
  };
  
  export const containSpecialCharacters = (value) => {
    // eslint-disable-next-line no-useless-escape
    const regex = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    return value.match(regex);
  };