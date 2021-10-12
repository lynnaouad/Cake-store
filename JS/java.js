
showMenu=false;

function f(){
    

        if(!showMenu){

            icon.setAttribute("data-icon","bx:bx-x");
            const navBar = document.getElementById('nav');
            navBar.classList.add("show");
    
            showMenu = true; }
        else {

            icon.setAttribute("data-icon","feather:menu");
            const navBar = document.getElementById('nav');
            navBar.classList.remove("show");
    
            showMenu = false; } }

function h(){

    intro.animate( [ {transform:'rotate(30deg)'},
                     {transform:'rotate(-30deg)'},
                     {transform:'rotate(30deg)'},
                     {transform:'rotate(-30deg)'} ,
                     {transform:'rotate(30deg)'}, ],
                     {duration:3000,
                      iterations:Infinity})}

function g(){

    img1.animate( [ {transform:'translateY(-10px)'},
                     {transform:'translateY(10px)'},
                     {transform:'translateY(-10px)'},
                     {transform:'translateY(10px)'} ,
                     {transform:'translateY(-10px)'}, ],
                     {duration:3000,
                      iterations:Infinity})
     
    img2.animate( [ {transform:'translateY(10px)'},
                     {transform:'translateY(-10px)'},
                     {transform:'translateY(10px)'},
                     {transform:'translateY(-10px)'} ,
                     {transform:'translateY(10px)'}, ],
                     {duration:3000,
                      iterations:Infinity})    
                      
    img3.animate( [ {transform:'translateY(-10px)'},
                     {transform:'translateY(10px)'},
                     {transform:'translateY(-10px)'},
                     {transform:'translateY(10px)'} ,
                     {transform:'translateY(-10px)'}, ],
                     {duration:3000,
                      iterations:Infinity})   
                      
    img4.animate( [ {transform:'translateY(-10px)'},
                     {transform:'translateY(10px)'},
                     {transform:'translateY(-10px)'},
                     {transform:'translateY(10px)'} ,
                     {transform:'translateY(-10px)'}, ],
                     {duration:3000,
                      iterations:Infinity}) 

    img5.animate( [ {transform:'translateY(10px)'},
                     {transform:'translateY(-10px)'},
                     {transform:'translateY(10px)'},
                     {transform:'translateY(-10px)'} ,
                     {transform:'translateY(10px)'}, ],
                     {duration:3000,
                      iterations:Infinity})  

    img6.animate( [ {transform:'translateY(-10px)'},
                     {transform:'translateY(10px)'},
                     {transform:'translateY(-10px)'},
                     {transform:'translateY(10px)'} ,
                     {transform:'translateY(-10px)'}, ],
                     {duration:3000,
                      iterations:Infinity}) 


    img7.animate( [ {transform:'translateY(10px)'},
                     {transform:'translateY(-10px)'},
                     {transform:'translateY(10px)'},
                     {transform:'translateY(-10px)'} ,
                     {transform:'translateY(10px)'}, ],
                     {duration:3000,
                      iterations:Infinity})   
                    
                    }