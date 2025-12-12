const prenoms=["ali","sara","mohamed","yassine"];

function capitalize(str){
    console.log( str[0].toUpperCase()+str.slice(1));
}
const map=function(prenoms){
    
    for(let i=0;i<prenoms.length;i++){
        capitalize(prenoms[i]);
    }

}
const display=()=>console.log(map(prenoms));
display();