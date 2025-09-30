

const idtouserdata = new Map();

const setinfo = (id , data)=>{
    idtouserdata.set(id,data);
}

const getinfo = (id)=>{
    return idtouserdata.get(id);
}

module.exports = {setinfo , getinfo};