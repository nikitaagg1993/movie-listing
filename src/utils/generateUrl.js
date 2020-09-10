const generateUrl = (options) => {
    let url = 'https://www.omdbapi.com/?apikey=4f5707cc';
    if(!options || !Object.keys(options).length) return;
  
    Object.keys(options).forEach((item) => {
        if(options[item] === 'all' || !options[item]) return;
        url += `&${item}=${options[item]}`
    })
    return url;
}


export default generateUrl