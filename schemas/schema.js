// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schema
import property from "./documents/property";
import propertyImage from "./types/propertyImage";
import review from "./types/review";
import host from "./types/host";
import person from "./documents/person";
import traveller from "./types/traveller";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* documents */
    property,
    person,
    
    /* types */
    propertyImage,
    review,
    traveller,
    host,

  ]),
});
