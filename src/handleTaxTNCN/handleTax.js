let data = {
  name: '',
  day: 1,
  month: 1,
  year: 2021,
  phone: '',
  email: '',
  address: '',
  taxYear: 2021,
  bhxh: false,
  dependent: 0,
  valueMonth1: 0,
  valueMonth2: 0,
  valueMonth3: 0,
  valueMonth4: 0,
  valueMonth5: 0,
  valueMonth6: 0,
  valueMonth7: 0,
  valueMonth8: 0,
  valueMonth9: 0,
  valueMonth10: 0,
  valueMonth11: 0,
  valueMonth12: 0,
};
export  const realTax = (data) => {
    if (data.taxYear >= 2021) {
      let result =
        data.valueMonth1 +
        data.valueMonth2 +
        data.valueMonth3 +
        data.valueMonth4 +
        data.valueMonth5 +
        data.valueMonth6 +
        data.valueMonth7 +
        data.valueMonth8 +
        data.valueMonth9 +
        data.valueMonth10 +
        data.valueMonth11 +
        data.valueMonth12;

      result =
        result -
        (data.bhxh === 'true' ? result * 0.08 : 0) -
        data.dependent * 4.4 * 12 -
        132;
      if (result <= 0) return 0;
      else if (result <= 60) return result * 0.05;
      else if (result <= 120) return result * 0.1 - 3;
      else if (result <= 216) return result * 0.15 - 9;
      else if (result <= 384) return result * 0.2 - 23.4;
      else if (result <= 624) return result * 0.25 - 57;
      else if (result <= 960) return result * 0.3 - 117;
      else return result * 0.35 - 217.8;
    } else {
      let result =
        parseInt(data.valueMonth1) +
        data.valueMonth2 +
        data.valueMonth3 +
        data.valueMonth4 +
        data.valueMonth5 +
        data.valueMonth6 +
        data.valueMonth7 +
        data.valueMonth8 +
        data.valueMonth9 +
        data.valueMonth10 +
        data.valueMonth11 +
        data.valueMonth12;

      result =
        result -
        (data.bhxh === 'true' ? result * 0.08 : 0) -
        data.dependent * 4.4 * 12 -
        108;

      if (result <= 0) return 0;
      else if (result <= 60) return result * 0.05;
      else if (result <= 120) return result * 0.1 - 3;
      else if (result <= 216) return result * 0.15 - 9;
      else if (result <= 384) return result * 0.2 - 23.4;
      else if (result <= 624) return result * 0.25 - 57;
      else if (result <= 960) return result * 0.3 - 117;
      else return result * 0.35 - 217.8;
    }
}