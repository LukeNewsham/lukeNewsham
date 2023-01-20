// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import works from './works'
import abouts from './abouts'
import experiences from './experiences'
import skills from './skills'
import workExperience from './workExperience'
import contact from './contact'
import references from './references'
import timeline from './timeline'


export default createSchema({
  name: 'default',
  
  types: schemaTypes.concat([
    works,
     references, 
     abouts, 
     skills, 
     workExperience, 
     experiences,
     contact,
     timeline
  ]),
})
