/*let valorN = 5; 
let contenOne = '*';
let espaco = '';
let newposition = valorN;

for(let i = 0; i<valorN; i+=1){
        for(let col = 0; col<=valorN; col+=1){
        if(col<newposition){
                espaco=espaco+' ';
        }else{
                espaco=espaco+contenOne;
        }     
}
console.log(espaco);
newposition-=1;  
espaco = '';
}
*/
/*
let n = 5;
let asterisco = '*';
let aspas = '';

for(let i=0; i<n; i+=1){
        aspas=aspas+asterisco;
};
for(let j=0; j<n; j+=1){
                console.log(aspas);
        }*/

/*
        let n = 5;
        let asterisco = '*';
        let aspas = '';
       
        for(let i=0; i<n; i+=1){
         aspas=aspas+asterisco;
        console.log(aspas)
                };

                */

                /*
let base = 5;
let estrelha = '*';
let espaco = '';
let medioBase = (base+1)/2;
let izquerda = medioBase;
let direita = medioBase;

for(let linha=0; linha<= medioBase; linha+=1){
        for(let coluna=0; coluna<=base; coluna+=1){
                if(coluna>izquerda && coluna<direita){
                        espaco=espaco+estrelha;
                }else{
                        espaco=espaco+' ';
                };
        }
console.log(espaco);
espaco='';
izquerda-=1;
direita+=1;
}*/
let base = 5;
let estrelha = '*';
let espaco ='';
        for(let i=1; i<base; i+=1){
                for(let j=1; j<base; j+=1){
                        console.log(espaco=espaco+' ')
                        console.log(estrelha);
                        base-=1;
}      

}