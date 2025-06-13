export enum CoffeeRoast {
  Light = "Till Noon - Light (Ethiopia)",
  Medium = "Till Midnight - Medium (Brazil Santos)",
  Dark = "No Sleep - Dark (Thailand)",
  Custom = "Custom beans as the customer preference",
}

export enum Variations {
  Americano = "Americano",
  Latte = "Latte",
  Cuppucino = "Cuppucino",
  Tea = "Tea",
  Smoothies = "Smoothies",
  Frappe = "Frappe",
  Juice = "Juice",
  Other = "Other",
}

export enum Syrup {
  Syrup = "Syrup",
  Vanilla = "Vanilla Syrup",
  Halzelnut = "Halzelnut Syrup",
  Caramel = "Caramel Syrup",
  Mint = "Mint Syrup",
  Strawberry = "Strawberry Fraise",
}

export enum Milk {
  Condense = "Condense Milk",
  Jued = "Milk Jued",
  FreshMilk = "Fresh Milk",
}

// export const Syrup = "syrup(sweetnesse %)" as const;
// export const SpecialSyrup = string as const;

export interface CoffeeRecipe {
  title: string;
  ingredients: [CoffeeRoast, Syrup, ...string[]];
  steps: string[];
  variations: Variations;
}
