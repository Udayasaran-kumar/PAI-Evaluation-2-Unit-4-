let arr=[
    "user1@gmail.com",
    "user2@yahoo.com",
    "user3@gmail.com",
    "user4@outlook.com",
    "user5@yahoo.com",
    "user6@gmail.com"
  ];
  function splitter(arr){
    let newArr=[];
    
    for(let i=0;i<arr.length;i++){
        
        newArr.push(arr[i].trim().split("@"));
    }
    seperator(newArr);
  }
  splitter(arr);
  function seperator(arr){
    let narr=[];
    // console.log(arr);
    for(let i=0;i<arr.length;i++){
      for(let j=0;j<arr[0].length;j++){
        if(j%2!=0) narr.push(arr[i][j]);
      }
    }
    console.log(narr);
  }