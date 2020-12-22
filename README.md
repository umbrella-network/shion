# Umbrella Validator Toolbox

![Umbrella network - logo](./umb.network-logo.png)

NPM package with tools for validators

[![npm version](https://badge.fury.io/js/%40umb-network%2Fvalidator.svg)](https://badge.fury.io/js/%40umb-network%2Fvalidator)

## Usage

```typescript
import {price} from `@umb-network/validator`;

const bars: BarPrice[] = [
    {close: 351.59, open: 355.15, high: 355.40, low: 351.09},
    {close: 352.08, open: 351.46, high: 353.20, low: 344.72},
    {close: 342.99, open: 333.25, high: 345.68, low: 332.58},
    {close: 338.80, open: 344.72, high: 347.80, low: 334.22},
    {close: 335.90, open: 349.31, high: 351.06, low: 335.48},
    {close: 352.84, open: 347.90, high: 354.77, low: 346.09},
    {close: 314.96, open: 313.17, high: 316.50, low: 310.32}];

const TWAPValue = price.timeWeightedAveragePrice(bars);
```
