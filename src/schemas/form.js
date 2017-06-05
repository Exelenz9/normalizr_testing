import { schema } from 'normalizr';

const getPath = (entity) => (
    Object.prototype.toString.call(entity.path) === "[object Array]"
        ? entity.path.concat(entity.id)
        : [entity.path].concat(entity.id)
);

const block = new schema.Entity("blocks", {}, {
    processStrategy: (entity, parent, key) => ({
        ...entity,
        path: getPath(parent)
    })
});
const subsection = new schema.Entity("subsections", { blocks: [ block ] }, {
    processStrategy: (entity, parent, key) => ({
        ...entity,
        path: getPath(parent)

    })
});
const section = new schema.Entity("sections", { subsections: [ subsection ] }, {
    processStrategy: (entity, parent, key) => ({
        ...entity,
        path: parent.id
    })
});
const full_schema = new schema.Object({ sections: [ section ] });

export default full_schema