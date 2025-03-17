const { default: axios } = require("axios");

let email="ssaran3091998@gmail.com";
let studentCode="fs41_458418";
function firstExtractandConcat(email,studentCode){
    email=email.trim();
    let str='';
    for(let i=0;i<email.length;i++){
        if(email[i]=='@') break;
        else str+=email[i];
    }
   
    studentCode=studentCode.trim();
    let newStr=studentCode+str;
    newStr=newStr.toLocaleLowerCase();
    extracter(newStr);
}
firstExtractandConcat(email,studentCode);
function extracter(str){
    let newStr='';
    for(let i=0;i<str.length;i++){
        if(i%2==0) newStr+=str[i];
    }
    numberer(newStr);
}
function numberer(str){
    let newStr=[];
    for(let i=0;i<str.length;i++){
        if(str[i]=='a'||str[i]=='b'||str[i]=='c'||str[i]=='d'||
            str[i]=='e'||str[i]=='f'||str[i]=='g'||str[i]=='h'||
            str[i]=='i'||str[i]=='j'||str[i]=='k'||str[i]=='l'||
            str[i]=='m'||str[i]=='n'||str[i]=='o'||str[i]=='p'||
            str[i]=='q'||str[i]=='r'||str[i]=='s'||str[i]=='t'||
            str[i]=='u'||str[i]=='v'||str[i]=='w'||str[i]=='x'||
            str[i]=='y'||str[i]=='z'){
               newStr.push((str.charCodeAt(i)-96)); 
            }else if(str[i]=='_') newStr.push(1);
            else newStr.push(Number(str[i]));
    }
    newStr=newStr.join("");
    finalisation(newStr);
}
function finalisation(str){
    let s=0,e=str.length-1;
    let newStr=[];
    while(s<=e){
        if(s==e){
             newStr.push(str[s]);
             break;            
        }
        else{
            newStr.push(str[s]);
           
            newStr.push(str[e]);
           
            s++;
            e--;
        }
    }
    newStr=newStr.join("");
    getLink(newStr);
    
}
function getLink(str){
    console.log(str);
    let link= axios.get(`https://questionmapping.onrender.com/api/problem/{694110544188119}`);
    console.log(link);
}
