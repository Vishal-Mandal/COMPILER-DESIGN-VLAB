document.write('<br><br><i><b>RESULT<b><i>');  
let But = document.querySelector('button');
But.addEventListener('click',sayHello);

function sayHello() {
    let STR = document.getElementById('input_user').value;    
    let j;
    if (!((STR[0] >= 'a' && STR[0] <= 'z')
    || (STR[0]>= 'A' && STR[0] <= 'Z')
    || STR[0] == '_')){
        document.getElementById('result').value="NOT IDENTIFIER";
        j=1;
    }


    // Traverse the STRing for the rest of the characters
    for (let i = 1; i < STR.length; i++)
    {
        if (!((STR[i] >= 'a' && STR[i] <= 'z')
            || (STR[i] >= 'A' && STR[i] <= 'Z')
            || (STR[i] >= '0' && STR[i] <= '9')
            || STR[i] == '_')){
                j=1;
            document.getElementById('result').value="NOT IDENTIFIER";
        }

    }
    if(j!=1)
    document.getElementById('result').value="IDENTIFIER";
}
   