const corsApi = (req, res, next) => {
    //menambahkan * pada header origin untuk memberikan semua akses kedalam rest api
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    console.log('pemanggilan cros untuk ip address yang berbeda ...!');
  next();
}


module.exports =  corsApi 