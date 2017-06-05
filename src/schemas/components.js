import { schema } from 'normalizr';

const options = new schema.Entity(
    "options",
    {},
    {
        // idAttribute: (entity, parent, key) =>
        //     (parent.id + "_" + entity.id)
        idAttribute: (entity, parent, key) =>
            (entity.id + "_" + entity.isValid + "_" + entity.checked)
    }
);
const variants = new schema.Entity("variants", { options: [ options ] });
const component = new schema.Entity("components", { variants: [ variants ] });
const components = new schema.Array(component);
const full_schema = new schema.Object({ components });

export default full_schema