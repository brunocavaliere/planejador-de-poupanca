export const valueInvestedChart = [];
export const valueAccumulatedChart = [];

export async function calculatorChart({
  initialValue,
  parcelValue,
  time,
  fee,
}) {
  for (var i = 0; i <= time; i++) {
    let x = initialValue;
    x += parcelValue * i;
    valueInvestedChart.push(+(Math.round(x + "e+2") + "e-2"));
  }

  const monthFee = Math.pow(1 + fee / 100, 1 / 12) - 1;
  for (var i = 0; i <= time; i++) {
    const accumulatedValue =
      initialValue * Math.pow(1 + monthFee, i) +
      (parcelValue * (Math.pow(1 + monthFee, i) - 1)) / monthFee;
    valueAccumulatedChart.push(+(Math.round(accumulatedValue + "e+2") + "e-2"));
  }
}
