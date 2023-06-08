import { defineField } from "sanity";

export const products = {
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Product Title",
      type: "string",
    },
    {
      name: "price",
      title: "Product Price",
      type: "number",
    },
    {
      name: "discount",
      title: "After Discount",
      type: "number",
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
    },
    {
      name: "description",
      title: "Product Description",
      type: "string",
    },
    {
      name: "care",
      title: "Product Care",
      type: "string",
    },
    defineField({
      name: "category",
      title: "Product Category",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
    }),
  ],
};
