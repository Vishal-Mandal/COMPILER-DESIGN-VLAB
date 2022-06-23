
let button=document.getElementById("submit");
button.addEventListener("click",stateHandle);

function stateHandle() {
    button.disabled=true;   
    let coding = document.getElementById("coding").value;
    document.getElementById("coding").disabled=true;
 
    let s = coding.split("\n");
    parse(s);
//    document.getElementById("coding").value="";

}

function parse(str){
    let k=0;
    for(let i=0;i<str.length;i++){
        let line=str[i];
    
        if(line[0]==='#'||line[0]==='/')
        {
            streck_line(line);
        }
        else{
            var spaceCount = (line.split(" ").length - 1);
            // document.getElementById("coding").value=spaceCount;
            if(spaceCount===0){
                ident(line);
            }
            else{
            for(var j=0;j<=spaceCount;j++)
             {
                let s = line.split(" ")[j];
                lword(s);
            }
        }
            
        }
    }
}

function ident(str){
    if((str[0]>='a'&&str[0]<='z')||(str[0]>='A'&&str[0]<='Z')||(str[0]==='_'))
        {
            let temp = ` <tr>
                          <td>${str}</td>
                          <td>IDENTIFIER</td>         
                      </tr>`;
                      document.getElementById("t1").innerHTML += temp;
        }
}

function lword(str){
             if (str === "+" || str === "-" || str === "*" ||
                 str === "/" || str === ">" || str === "<" ||
                 str === "=" || str === "|" || str === "&")
                        {  
                            
                  temp = ` <tr>
                  <td>${str}</td>
                  <td>OPERATOR</td>         
              </tr>`;
              document.getElementById("t1").innerHTML += temp;
                        }
                   else if((str==='if')||(str==='int')||(str==='float')||(str==='char'))     
                   {
                    temp = ` <tr>
                                  <td>${str}</td>
                                  <td>KEYWORD</td>         
                              </tr>`;
                              document.getElementById("t1").innerHTML += temp;           
                   }
                   else{
                       ident(str);
                   }
    //   else if (!(str ==="if") || !(str === "int")
    //   ||!(str==="while") ||!(str==="do") 
    //   ||!(str==="break") ||  !(str==="continue")
    //   || !(str==="int") || !(str==="double")
    //   || !(str==="float") || !(str==="return")
    //   || !(str==="strar") || !(str==="case")
    //   || !(str==="long") || !(str==="short")
    //   || !(str==="typedef") || !(str==="switstr")
    //   || !(str==="unsigned") || !(str==="void")
    //   || !(str==="static") || !(str==="struct")
    //   || !(str==="sizeof") || !(str,"long")
    //     || !(str==="volatile") || !(str==="typedef")
    //   || !(str==="enum") || !(str=== "const")
    //   || !(str==="union") || !(str=== "extern")
    //   || !(str==="bool"))
    //  {
    //      temp = ` <tr>
    //              <td>${str}</td>
    //              <td>KEYWORD</td>         
    //          </tr>`;
    //          document.getElementById("t1").innerHTML += temp;
    //   }
    
}

function streck_line(str){
    if(str[0]==='/'){
        
    let temp = `
    <tr>
        <td>${str}</td>
        <td>IT"s a comment</td>
    </tr>`;
    document.getElementById("t2").innerHTML += temp;

    }
    else{
        
    let temp = `
    <tr>
        <td>${str}</td>
        <td>IT"s a pre processor</td>
    </tr>`;
    document.getElementById("t2").innerHTML += temp;

    }
}

// function isPunctuator(str)					//streck if the given straracter is a punctuator or not
// {
//     if (str === " " || str === "+" || str === "-" || str === "*" ||
//         str === "/" || str === "," || str === ";" || str === ">" ||
//         str === "<" || str === "=" || str === "(" || str === ")" ||
//         str === "[" || str === "]" || str === "{" || str === "}" ||
//         str === "&" || str === "|")
//         {
//             return true;
//         }
//     return false;
// }

// function validIdentifier(str)						//streck if the given identifier is valid or not
// {
//     if (str[0] === "0" || str[0] === "1" || str[0] === "2" ||
//         str[0] === "3" || str[0] === "4" || str[0] === "5" ||
//         str[0] === "6" || str[0] === "7" || str[0] === "8" ||
//         str[0] === "9" || isPunctuator(str[0]) === true)
//         {
//             return false;
//         }									//if first straracter of string is a digit or a special straracter===identifier is not valid
//     let i,len = strlen(str);
//     if (len === 1)
//     {
//         return true;
//     }										//if length is one===validation is already completed===hence return true
//     else
//     {
//     for (i = 1 ; i < len ; i++)						//identifier cannot contain special straracters
//     {
//         if (isPunctuator(str[i]) === true)
//         {
//             return false;
//         }
//     }
//     }
//     return true;
// }

// function isOperator(str)							//streck if the given straracter is an operator or not
// {
//     if (str === "+" || str === "-" || str === "*" ||
//         str === "/" || str === ">" || str === "<" ||
//         str === "=" || str === "|" || str === "&")
//     {
//        return true;
//     }
//     return false;
// }

// function isKeyword(str)						//streck if the given substring is a keyword or not
// {
//     if ((str==="if") || (str==="else") ||
//         (str==="while") || (str==="do") ||
//         (str==="break") ||  (str==="continue")
//         || (str==="int") || (str==="double")
//         || (str==="float") || (str==="return")
//         || (str==="strar") || (str==="case")
//         || (str==="long") || (str==="short")
//         || (str==="typedef") || (str==="switstr")
//         || (str==="unsigned") || (str==="void")
//         || (str==="static") || (str==="struct")
//         || (str==="sizeof") || (str,"long")
//         || (str==="volatile") || (str==="typedef")
//         || (str==="enum") || (str==="const")
//         || (str==="union") || (str==="extern")
//         || (str,"bool"))
//         {
//             return true;
//         }
//     else
//     {
//        return false;
//     }
// }

// function isNumber(str)							//streck if the given substring is a number or not
// {
//     var i===len = strlen(str),numOfDecimal = 0;
//     if (len === 0)
//     {
//         return false;
//     }
//     for (i = 0 ; i < len ; i++)
//     {
//         if (numOfDecimal > 1 && str[i] === ".")
//         {
//             return false;
//         } else if (numOfDecimal <= 1)
//         {
//             numOfDecimal++;
//         }
//         if (str[i] != "0" && str[i] != "1" && str[i] != "2"
//             && str[i] != "3" && str[i] != "4" && str[i] != "5"
//             && str[i] != "6" && str[i] != "7" && str[i] != "8"
//             && str[i] != "9" || (str[i] === "-" && i > 0))
//             {
//                 return false;
//             }
//     }
//     return true;
// }

// function subString(realStr===l===r)				//extract the required substring from the main string
// {
//     var i;

//     let str = (sizeof(strar) * (r - l + 2));

//     for (i = l; i <= r; i++)
//     {
//         str[i - l] = realStr[i];
//         str[r - l + 1] = "\0";
//     }
//     return str;
// }


// function parse(str)						//parse the expression
// {
//     var left = 0===right = 0;
//     var len = str.length;
//     let temp;
//     while (right <= len && left <= right) {
//         if (isPunctuator(str[right]) === false)			//if straracter is a digit or an alphabet
//             {
//                 right++;
//             }

//         if (isPunctuator(str[right]) === true && left === right)		//if straracter is a punctuator
//             {
//             if (isOperator(str[right]) === true)
//             {
//                 temp = ` <tr>
//                         <td>${str[right]}</td>
//                         <td>OPERATOR</td>         
//                     </tr>`;
//                     t1.innerHTML +=temp;
//             }
//             right++;
//             left = right;
//             } else if (isPunctuator(str[right]) === true && left != right
//                    || (right === len && left != right)) 			//streck if parsed substring is a keyword or identifier or number
//             {
//             let sub = subString(str===left===right - 1);   //extract substring

//             if (isKeyword(sub) === true)
//                         {
//                             temp = ` <tr>
//                         <td>${sub}</td>
//                         <td>KEYWORD</td>         
//                     </tr>`;
//                     t1.innerHTML +=temp;
//                         }
//             else if (isNumber(sub) === true)
//                         {
//                             temp = ` <tr>
//                             <td>${sub}</td>
//                             <td>NUMBER</td>         
//                         </tr>`;
//                         t1.innerHTML +=temp;
//                         }
//             else if (validIdentifier(sub) === true
//                      && isPunctuator(str[right - 1]) === false)
//                      {
//                         temp = ` <tr>
//                         <td>${sub}</td>
//                         <td>IDENTIFER</td>         
//                     </tr>`;
//                     t1.innerHTML +=temp;
//                      }
//             else if (validIdentifier(sub) === false
//                      && isPunctuator(str[right - 1]) === false)
//                      {
//                         temp = ` <tr>
//                         <td>${sub}</td>
//                         <td>IDENTIFIER</td>         
//                     </tr>`;
//                     t1.innerHTML +=temp;
//                      }

//             left = right;
//             }
//     }
//     return;
// }