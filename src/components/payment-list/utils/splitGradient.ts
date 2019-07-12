// I stole it here: https://jsfiddle.net/002v98LL/
// I kept the for loop to stay fast, but one could use map method instead;

const getValues = (rgb: string): Array<number> => {
  const values = rgb.match(/\d+/g);
  if (values !== null) return values.map(Number);
  return [0, 0, 0];
};

const formatColorToRGB = (arr: Array<Array<number>>): Array<Array<string>> => {
  let f = [];
  for (let i = 0; i < arr.length - 1; i++) {
    f[i] = [`rgb(${arr[i]})`, `rgb(${arr[i + 1]})`];
  }
  return f;
};

function getGradientColors(c1: Array<number>, c2: Array<number>, factor = 0.5) {
  let copy = [...c1];
  let result = [];

  for (let i = 0; i < 3; i++) {
    result[i] = Math.round(copy[i] + factor * (c2[i] - c1[i]));
  }
  return result;
}

function splitGradient(color1: string, color2: string, split: number) {
  const factor = 1 / (split - 1);

  let interpolate: Array<Array<number>> | [] = [];

  const colorValue1 = getValues(color1);
  const colorValue2 = getValues(color2);

  for (let i = 0; i < split; i++) {
    interpolate = [
      ...interpolate,
      getGradientColors(colorValue1, colorValue2, factor * i)
    ];
  }

  return formatColorToRGB(interpolate);
}

export default splitGradient;
