// thanks to Quicktype
export interface Recipe {
    id: number;
    title: string;
    image: string;
    summary: string;
    instructions: string;
    extendedIngredients: { original: string }[];
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
    vegetarian: boolean;
    calories?: number;
    protein?: number;
}
export interface Recipe {
    recipes: RecipeElement[];
}

export interface RecipeElement {
    vegetarian:               boolean;
    vegan:                    boolean;
    glutenFree:               boolean;
    dairyFree:                boolean;
    veryHealthy:              boolean;
    cheap:                    boolean;
    veryPopular:              boolean;
    sustainable:              boolean;
    lowFodmap:                boolean;
    weightWatcherSmartPoints: number;
    gaps:                     Gaps;
    preparationMinutes:       null;
    cookingMinutes:           null;
    aggregateLikes:           number;
    healthScore:              number;
    creditsText:              CreditsText;
    license?:                 string;
    sourceName:               SourceName;
    pricePerServing:          number;
    extendedIngredients:      ExtendedIngredient[];
    id:                       number;
    title:                    string;
    readyInMinutes:           number;
    servings:                 number;
    sourceUrl:                string;
    image?:                   string;
    imageType?:               string;
    summary:                  string;
    cuisines:                 string[];
    dishTypes:                string[];
    diets:                    string[];
    occasions:                string[];
    instructions:             string;
    analyzedInstructions:     AnalyzedInstruction[];
    originalId:               null;
    spoonacularScore:         number;
    spoonacularSourceUrl:     string;
}

export interface AnalyzedInstruction {
    name:  string;
    steps: Step[];
}

export interface Step {
    number:      number;
    step:        string;
    ingredients: Ent[];
    equipment:   Ent[];
    length?:     Length;
}

export interface Ent {
    id:            number;
    name:          string;
    localizedName: string;
    image:         string;
    temperature?:  Length;
}

export interface Length {
    number: number;
    unit:   Unit;
}

export enum Unit {
    Fahrenheit = "Fahrenheit",
    Minutes = "minutes",
}

export enum CreditsText {
    AfrolemsCOM = "afrolems.com",
    FoodistaCOM = "foodista.com",
    FoodistaCOMTheCookingEncyclopediaEveryoneCanEdit = "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
}

export interface ExtendedIngredient {
    id:           number;
    aisle:        null | string;
    image:        null | string;
    consistency:  Consistency;
    name:         string;
    nameClean:    null | string;
    original:     string;
    originalName: string;
    amount:       number;
    unit:         string;
    meta:         string[];
    measures:     Measures;
}

export enum Consistency {
    Liquid = "LIQUID",
    Solid = "SOLID",
}

export interface Measures {
    us:     Metric;
    metric: Metric;
}

export interface Metric {
    amount:    number;
    unitShort: string;
    unitLong:  string;
}

export enum Gaps {
    No = "no",
}

export enum SourceName {
    AfrolemsCOM = "afrolems.com",
    Foodista = "Foodista",
    FoodistaCOM = "foodista.com",
}