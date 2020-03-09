var exp =' ', sign,Numbe,equa ,ope ,term='0',dde='1',tm='0', Allowsr=true;
var tv = document.getElementsByClassName("display");


function insertNum(Num){
    
    if(dde=='1'){
    tv[0].value= tv[0].value*10+Num ;
    Numbe = tv[0].value;
    
    }

    else{
    term = term*10+Num ;
    tv[0].value = equa+term;
    

    }
}


function insertOp(Op){
    if(Op=='=' ){
        if(sign=='1'){
        tv[0].value= parseFloat(Numbe) + parseFloat(term);
        }
        if(sign=='2'){
            tv[0].value= parseFloat(Numbe) - parseFloat(term);
            }
        if(sign=='3'){
                tv[0].value= parseFloat(Numbe) * parseFloat(term);
                }
         if(sign=='4'){
                    tv[0].value= parseFloat(Numbe) / parseFloat(term);
                    }
         dde='1'; 
         term='0';
         Numbe= tv[0].value;
         
         
        
         
    }


    else{
        
    if(Op=='+'){sign="1";}
    if(Op=='-'){sign="2";}
    if(Op=='*'){sign="3";}
    if(Op=='/'){sign="4";}
    tv[0].value=Numbe + Op ;
   equa =tv[0].value;
   dde='0';
   

    }
}  
function insertk(k){
    tv[0].value= '0' ;

}
