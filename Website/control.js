const getall = require('./model');
const render = require('./view');

async function listAction(request,response){
    const data = await getall();
    const body = render(data);
    response.send(body);
}

module.exports = listAction;