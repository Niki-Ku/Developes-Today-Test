export interface IResponse {
  id: string;
  title: string;
  image: string;
  imageType: string;
}

export interface IInfoResponse {
  title: string;
  extendedIngredients: IIngredients[]
}

export interface IIngredients {
  id: number;
  name: string;
}