import { v4 as uuidv4 } from 'uuid';

function generatorId(){
    const id = uuidv4();
    return id;
}

export default generatorId;