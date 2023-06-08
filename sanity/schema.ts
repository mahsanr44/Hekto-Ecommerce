import { type SchemaTypeDefinition } from "sanity";
import { products } from "./products";
import { category } from "./category";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, category],
};
