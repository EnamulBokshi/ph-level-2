//* Generating a simple caching flow

const cache = new Map();

const getExpensive = (id)=>{
    console.log("Calling expensive api--- ");

    return {
        id,
        name: "showarpola"

    }
}


const handleCall =(id) =>{

    if(cache.has(id)){
        console.log("Cache Hit happened for id: ",id);

        return cache.get(id);
    }

    console.log("Cache Miss for id: ", id);

    const data = getExpensive(id);

    cache.set(id, data);

    return data;

}



console.log(handleCall(123));
console.log(handleCall(123))



