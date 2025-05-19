export enum CoffeeRoast {
  Light = "Till Noon - Light (Ethiopia)",
  Medium = "Till Midnight - Medium (Brazil Santos)",
  Dark = "Till Something - Dark (Thailand)",
}

export const Syrup = "syrup(sweetnesse %)" as const;

export interface CoffeeRecipe {
  title: string;
  ingredients: [CoffeeRoast, typeof Syrup, ...string[]];
  steps: string[];
}
