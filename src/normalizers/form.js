import { normalize, denormalize } from "normalizr"
import full_schema from "../schemas/form.js"
import data from "../data/form.json"

const normalized = normalize(data, full_schema);
const denormalized = denormalize(normalized.result, full_schema, normalized.entities);

export { normalized, denormalized };