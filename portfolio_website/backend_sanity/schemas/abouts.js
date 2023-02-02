export default{
    name:'abouts',
    title:'Abouts',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string',
            
        },
        {
            name:'description',
            title:'Description',
            type:'string'
        },
        {
            name:'qualifications',
            title:'Qualifications',
            type:'array',
            of: [
                {
                    name: 'qualification',
                    title: 'Qualification',
                    type: 'string'
                }
            ]
        },
        {
            name:'disclaimer',
            title:'Disclaimer',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}