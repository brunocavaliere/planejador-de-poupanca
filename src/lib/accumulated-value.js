export const values = [
  {
    accumulated: 0,
    saved: 0,
    month: 0,
    fee: 0,
    initial: 0,
  },
];

export async function calculator({ initialValue, parcelValue, time, fee }) {
  values.pop();

  const monthFee = Math.pow(1 + fee / 100, 1 / 12) - 1;
  const accumulatedValue =
    initialValue * Math.pow(1 + monthFee, time) +
    (parcelValue * (Math.pow(1 + monthFee, time) - 1)) / monthFee;
  const savedValue = initialValue + parcelValue * time;
  const monthValueAccumulated = parcelValue * time;
  const feeAccumulated = accumulatedValue - savedValue;

  const value = {
    accumulated: +(Math.round(accumulatedValue + "e+2") + "e-2"),
    saved: +(Math.round(savedValue + "e+2") + "e-2"),
    month: +(Math.round(monthValueAccumulated + "e+2") + "e-2"),
    fee: +(Math.round(feeAccumulated + "e+2") + "e-2"),
    initial: +(Math.round(initialValue + "e+2") + "e-2"),
  };

  values.push(value);

  return value;
}
