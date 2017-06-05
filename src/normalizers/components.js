import { normalize, denormalize } from "normalizr"
import full_schema from "../schemas/components.js"
import data from "../data/data_structure_orig.json"
// import data from "../data/data_structure.json"

const normalized = normalize(data, full_schema);
const denormalized = denormalize(normalized.result, full_schema, normalized.entities);

export { normalized, denormalized };