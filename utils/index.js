
exports.action = async(path)=> {
 return await fetch(`http://192.168.43.223:80/ten/${path}/`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json' 
    }
  });

}
