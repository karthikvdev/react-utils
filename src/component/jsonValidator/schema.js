const dataSchema = { id: { type: "number", required: true } }
const variantSchema = {
  id: { type: "string", required: true },
  unit: { type: "number", required: false },
  variantName: { type: "string", required: true },
  isNeeded: { type: "boolean", required: true }
}

export const schema = {
  name: { type: "string", required: true },
  age: { type: "number", required: true },
  hobbies: { type: "array", required: false },
  isActive: { type: "boolean", required: true },
  data: { type: "object", schema: dataSchema, required: true },
  variant: { type: "array", element: { type: "object", schema: variantSchema }, required: true }
}