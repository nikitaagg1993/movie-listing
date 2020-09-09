const generateUrl = (options) => {
    let url = 'http://www.omdbapi.com/?i=tt3896198&apikey=4f5707cc';
    if(!options || !Object.keys(options).length) return url;
  
    Object.keys(options).forEach((item) => {
        if(options[item] === 'all') return;
        url += `&${item}=${options[item]}`
    })
    return url;
}


export default generateUrl