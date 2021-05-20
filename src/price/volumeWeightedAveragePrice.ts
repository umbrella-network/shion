import type {BarPrice} from './types';

/**
 * Volume-Weighted Average Price
 * @param values price and volume values
 */
export const volumeWeightedAveragePrice = (values: [number, number][]): number => {
  let cumulativeVolume = 0, result = 0, mean = 0;
  values.forEach(([price, volume]) => {
    cumulativeVolume += volume;
    mean = mean + price * volume;
    result = mean / cumulativeVolume;
  }, 0);

  return result;
};

/**
 * Volume-Weighted Average Price
 * @param values bar and volume values
 */
export const volumeWeightedAveragePriceWithBars = (values: [BarPrice, number][]): number => {
  return volumeWeightedAveragePrice(values.map(([{low, close, high}, volume]) => [
    (close + low + high) / 3,
    volume,
  ]));
};
