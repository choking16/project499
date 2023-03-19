const data = [
    {id:1 , title: 'No Milk',desc:'No Life'},
    {id:2 , title: 'No Milk', desc:'No Life'},
];

function getall(){
    return Promise.resolve(data);
}

module.exports = getall;