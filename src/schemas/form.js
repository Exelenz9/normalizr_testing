import { schema } from 'normalizr';

const block = new schema.Entity("blocks");
const subsection = new schema.Entity("subsections", { blocks: [ block ] });
const section = new schema.Entity("sections", { subsections: [ subsection ] });
const full_schema = new schema.Object({ sections: [ section ] });

export default full_schema