const axios = require('axios');
// axios({
//   method: 'get',
//   baseURL:'/api'
// }).then(res=>{
//   console.log(res.data)
// }).catch(err=>{
//   console.log(err)
// })


axios.get('http://127.0.0.1:7777/user/student/login', {
  params: {
    studentId:2015011446,
    password:'1234567'
  }
})
  .then(function (response) {
    if (response.data.code==="A0000a"){
      console.log("成功");
    } else {
    console.log(response.data.code);

    }
  })
  .catch(function (error) {
    console.log(error);
  });

// axios({
//   method:'get',
//   url:'http://127.0.0.1:7777/user/student/login',
//   data:{
//     studentId:2015011446,
//     password:'123456'
//   }
// });
