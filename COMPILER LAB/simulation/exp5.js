// button1 = document.getElementById("but");

// button1.addEventListener("click",display);

function display(){
    let val = document.getElementById("option").value;

    switch(val){
        case "1":
            document.getElementById('pro').innerHTML = ' GRAMMER IS\n S -> S + S\n S -> S - S\n S -> S / S\n S -> S * S\n S -> id';
            var ddl = document.getElementById("STR");
            var option = document.createElement("OPTION");
            option.innerHTML = "a+b-c*d/e";
            option.value = 1;
            ddl.options.add(option);
            var ddl = document.getElementById("STR");
            var option = document.createElement("OPTION");
            option.innerHTML = "a+b";
            option.value = 2;
            ddl.options.add(option);
            var ddl = document.getElementById("STR");
            var option = document.createElement("OPTION");
            option.innerHTML = "a-c";
            option.value = 3;
            ddl.options.add(option);
            break;
            case "2":
                    document.getElementById('pro').innerHTML = ' GRAMMER IS\n E -> 2E2 \n E -> 3E3 \n E -> 4';
                    // to set the value on drop down menu as the selection for that option
                    var ddl = document.getElementById("STR");
                    var option = document.createElement("OPTION");
                    option.innerHTML = "32423";
                    option.value = 1;
                    ddl.options.add(option);
                    var ddl = document.getElementById("STR");
                    var option = document.createElement("OPTION");
                    option.innerHTML = "343";
                    option.value = 2;
                    ddl.options.add(option);
                    break;
                case '3':    
                document.getElementById('pro').innerHTML = ' GRAMMER IS\n S ->  ( L ) | a\n L ->  L , S | S';
                var ddl = document.getElementById("STR");
                    var option = document.createElement("OPTION");
                    option.innerHTML = "(a,(a,a))";
                    option.value = 1;
                    ddl.options.add(option);
    } 
    
    document.getElementById('pro').disabled=true;
    document.getElementById('option').disabled=true;
}

let button = document.getElementById("sub");
button.addEventListener('click',shifting);

function shifting(){
    let val = document.getElementById('option').value;
    switch(val){
        case '1':
            shifting1();
            document.getElementById('sub').disabled=true;
            break;
        case '2':
            shifting2();
            document.getElementById('sub').disabled=true;
            break;
            case '3':
                shifting3();
                document.getElementById('sub').disabled=true;
    }
}

// function dis(){
// document.getElementById("hii").value="helo world";
// }
function shifting1(){
    var mylist = document.getElementById("STR");  
    let val =  mylist.options[mylist.selectedIndex].text; 
    // document.getElementById("hii").value="<img src='a+b-c.png' />";
    // document.getElementById("out").innerHTML = "hello how" + val;
    switch(val){
        case 'a+b-c*d/e':
            var img = document.createElement("img");
            img.src = "a+b-c.png";
        
            var div = document.getElementById("sub_part2");
            div.appendChild(img);    
        // document.getElementById("sub_part2").innerHTML+=<img src='a+b-c.png' />;
            break;
        case 'a+b':
            var img = document.createElement("img");
            img.src = "a+b.png";
        
            var div = document.getElementById("sub_part2");
            div.appendChild(img); 
            break;
        case 'a-c':
            var img = document.createElement("img");
            img.src = "a-c.png";
        
            var div = document.getElementById("sub_part2");
            div.appendChild(img); 
    }
}

function shifting2(){
    var mylist = document.getElementById("STR");  
    let val =  mylist.options[mylist.selectedIndex].text; 
    // document.getElementById("hii").value="<img src='a+b-c.png' />";
    // document.getElementById("out").innerHTML = "hello how" + val;
    switch(val){
        case '32423':
            var img = document.createElement("img");
            img.src = "32423.png";
        
            var div = document.getElementById("sub_part2");
            div.appendChild(img);    
        // document.getElementById("sub_part2").innerHTML+=<img src='a+b-c.png' />;
            break;
        case '343':
            var img = document.createElement("img");
            img.src = "343.png";
        
            var div = document.getElementById("sub_part2");
            div.appendChild(img); 
            break;
    }
}

function shifting3(){
            var img = document.createElement("img");
            img.src = "(a,(a,a)).png";
        
            var div = document.getElementById("sub_part2");
            div.appendChild(img);    
      
}

