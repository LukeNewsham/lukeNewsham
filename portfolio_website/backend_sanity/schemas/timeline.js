export default {
    name: 'timeline',
    title: 'Timeline Elements',
    type: 'document',
    fields: [
        {
            name: 'id',
            title: 'ID',
            type: 'number'
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'qualifications',
            title: 'Qualifications',
            type: 'array',
            of: [
                {
                    name: 'qualification',
                    title: 'Qualification',
                    type: 'string'
                }
            ]
        },
        {
            name: 'date',
            title: 'Date',
            type: 'string'
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'string'
        }
    ]
}