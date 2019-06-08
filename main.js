//write a program to accept few numbers and find the minimum of the numbers

/*
var a = readNumber();

var i = 1;

var m = 10000;


while (i <= a){
  var b = readNumber();	
  			
  if (b < m){
    m = b;
  }  
  

  i += 1;
	
}

print(m);
*/


/*
//write a program to remove all 0s from the number eg. 12028120 -> 122812


var a = readNumber();

var r = 0;

while (a != 0){
		
	if(a % 10 != 0){
		r = r * 10 + (a%10);	
	}	
	
	a = (a - a % 10)/10;
	
}

var f = 0;

while (r != 0){
		
	f = f * 10 + (r%10);	
	
	
	r = (r - r % 10)/10;
	
}



print(f);
*/


//write a program to prime factorize a given number -> eg 18 -> 2, 3, 3



//write a program to convert from decimal to binary
//123 -> 1010101

//write a program to convert from binary to decimal

//write a program to convert from binary to octal

//write a program to convert from octal to decimal





//10958


//123456789



var characters = [];



function loadA(){


	var a = "    *****        ";
	var b = "  *          *      ";
	var c = " *            *     ";
	var d = "*********    ";
	var e = "*              *    ";
	var f = "*              *    ";
	var g = "*              *    ";
	var h = "*              *    ";
		
		
	characters.push([a, b, c, d, e, f, g, h]);
	

	
}

function loadB(){

	var a = "*******        ";
	var b = "*          *        ";
	var c = "*            *      ";
	var d = "******          ";
	var e = "*            *      ";
	var f = "*              *    ";
	var g = "*              *    ";
	var h = "********      ";
		
		
	characters.push([a, b, c, d, e, f, g, h]);
	
		

	
}

function loadC(){

	var a = "*********   ";
	var b = "*                   ";
	var c = "*                   ";
	var d = "*                   ";
	var e = "*                   ";
	var f = "*                   ";
	var g = "*                   ";
	var h = "*********   ";
	

	characters.push([a, b, c, d, e, f, g, h]);
	
		
	
}



function loadD(){

	var a = "******          ";
	var b = "*       *           ";
	var c = "*        *          ";
	var d = "*          *        ";       
	var e = "*           *       ";
	var f = "*          *        ";
	var g = "*       *           ";
	var h = "******          ";
		
		
			characters.push([a, b, c, d, e, f, g, h]);


	
}

function loadE(){



	var a = " *******      ";
	var b = "*                   ";
	var c = "*                   ";
	var d = "******         ";
	var e = "*                   ";
	var f = "*                   ";
	var g = "*                   ";
	var h = " *******      ";
		
			characters.push([a, b, c, d, e, f, g, h]);

		
}


function loadF(){

	var a = " *******      ";
	var b = "*                   ";
	var c = "*                   ";
	var d = "******         ";
	var e = "*                   ";
	var f = "*                   ";
	var g = "*                   ";
	var h = "*                   ";
		
		
			characters.push([a, b, c, d, e, f, g, h]);


}


function loadG(){


	var a = " *******      ";
	var b = "*          *       ";
	var c = "*                   ";
	var d = "*                   ";
	var e = "*                   ";
	var f = "*  * * *         ";
	var g = "* *     *         ";
	var h = "**      *         ";
		
			characters.push([a, b, c, d, e, f, g, h]);


}


function loadH(){


	var a = "*       *           ";
	var b = "*       *           ";
	var c = "*       *           ";
	var d = "******          ";
	var e = "*       *           ";
	var f = "*       *           ";
	var g = "*       *           ";
	var h = "*       *           ";
			characters.push([a, b, c, d, e, f, g, h]);

		

}


function loadI(){





	var a = "*********   ";
	var b = "       *            ";
	var c = "       *            ";
	var d = "       *            ";
	var e = "       *            ";
	var f = "       *            ";
	var g = "       *            ";
	var h = "*********   ";
		
			characters.push([a, b, c, d, e, f, g, h]);

}



function loadJ(){



	var a = "*********   ";
	var b = "        *           ";
	var c = "        *           ";
	var d = "        *           ";
	var e = "        *           ";
	var f = "        *           ";
	var g = "  *     *          ";
	var h = "   **              ";
		
			characters.push([a, b, c, d, e, f, g, h]);


}


function loadK(){



	var a = "*       *           ";
	var b = "*     *             ";
	var c = "*  *                ";
	var d = "* *                 ";
	var e = "*  *                ";
	var f = "*   *               ";
	var g = "*     *             ";
	var h = "*       *           ";
		
			characters.push([a, b, c, d, e, f, g, h]);


}

function loadL(){


	var a = "*                   ";
	var b = "*                   ";
	var c = "*                   ";
	var d = "*                   ";
	var e = "*                   ";
	var f = "*                   ";
	var g = "*                   ";
	var h = "*******       ";
		
			characters.push([a, b, c, d, e, f, g, h]);


}


function loadM(){



	var a = "* *      *  *     ";
	var b = "*   *   *   *     ";
	var c = "*    **     *     ";
	var d = "*             *     ";
	var e = "*             *     ";
	var f = "*             *     ";
	var g = "*             *     ";
	var h = "*             *     ";
			characters.push([a, b, c, d, e, f, g, h]);

		


}


function loadN(){



	var a = "* *          *      ";
	var b = "*   *        *      ";
	var c = "*    *       *      ";
	var d = "*      *     *      ";
	var e = "*       *    *      ";
	var f = "*        *   *      ";
	var g = "*         *  *      ";
	var h = "*          * *      ";
		
			characters.push([a, b, c, d, e, f, g, h]);


}



function loadO(){






	var a = "  ******        ";
	var b = "*             *     ";
	var c = "*             *     ";
	var d = "*             *     ";
	var e = "*             *     ";
	var f = "*             *     ";
	var g = "*             *     ";
	var h = "  ******        ";
			characters.push([a, b, c, d, e, f, g, h]);

		

}


function loadP(){




	var a = "  ******        ";
	var b = "*             *     ";
	var c = "*             *     ";
	var d = "******          ";
	var e = "*                    ";
	var f = "*                    ";
	var g = "*                    ";
	var h = "*                    ";
			characters.push([a, b, c, d, e, f, g, h]);

		

}

function loadR(){

	var a = "  ******            ";
	var b = "*             *     ";
	var c = "*             *     ";
	var d = "******              ";
	var e = "*     *             ";
	var f = "*      *            ";
	var g = "*       *           ";
	var h = "*        *          ";
			characters.push([a, b, c, d, e, f, g, h]);

		


}


function loadQ(){


	var a = "  *******      ";
	var b = "*             *     ";
	var c = "*             *     ";
	var d = "*            *      ";
	var e = "*             *     ";
	var f = "*        *     *   ";
	var g = "*           *       ";
	var h = "*******    *  ";
			characters.push([a, b, c, d, e, f, g, h]);

		


}


function loadR(){
	


	var a = "  *******      ";
	var b = "*             *     ";
	var c = "*             *     ";
	var d = "*        *          ";
	var e = "*           *       ";
	var f = "*            *      ";
	var g = "*                *  ";
	var h = "*                  *";
			characters.push([a, b, c, d, e, f, g, h]);

}



function loadS(){
	
	
	
	var a = "   ********  ";
	var b = "*                   ";
	var c = "*                   ";
	var d = "*********   ";
	var e = "              *     ";
	var f = "              *     ";
	var g = "               *    ";
	var h = "*******       ";
		
			characters.push([a, b, c, d, e, f, g, h]);


}



function loadT(){
	
	
	var a = "*********** ";
	var b = "         *            ";
	var c = "         *            ";
	var d = "         *            ";
	var e = "         *            ";
	var f = "         *            ";
	var g = "         *            ";
	var h = "         *            ";
		
			characters.push([a, b, c, d, e, f, g, h]);


}


function loadU(){
	
	
	
	var a = "*           *       ";
	var b = "*           *       ";
	var c = "*           *       ";
	var d = "*           *       ";
	var e = "*           *       ";
	var f = "*           *       ";
	var g = "*           *       ";
	var h = "  *****          ";
		
			characters.push([a, b, c, d, e, f, g, h]);


}

function loadV(){
	
	
	var a = "*             *     ";
	var b = " *            *     ";
	var c = " *           *      ";
	var d = "  *         *       ";
	var e = "  *        *        ";
	var f = "   *      *         ";
	var g = "    *   *           ";
	var h = "     **             ";
			characters.push([a, b, c, d, e, f, g, h]);

		

}


function loadW(){
	
	
	var a = "*                  *";
	var b = " *                 *";
	var c = " *                * ";
	var d = "  *              *  ";
	var e = " *             *    ";
	var f = "  *    *      *    ";
	var g = "  *   *  *  *     ";
	var h = "    **   *         ";
			characters.push([a, b, c, d, e, f, g, h]);


}


function loadX(){
	
	

	var a = "*          *        ";
	var b = "  *      *          ";
	var c = "   *   *            ";
	var d = "    * *             ";
	var e = "    * *             ";
	var f = "   *   *            ";
	var g = "  *      *          ";
	var h = " *        *         ";
			characters.push([a, b, c, d, e, f, g, h]);

		
}


function loadY(){
	
	
	var a = "*          *        ";
	var b = "  *      *          ";
	var c = "   *   *            ";
	var d = "    * *             ";
	var e = "     *               ";
	var f = "     *               ";
	var g = "     *               ";
	var h = "     *               ";
		
			characters.push([a, b, c, d, e, f, g, h]);


}

function loadZ(){
	
	

	var a = "*************   ";
	var b = "                   *        ";
	var c = "                 *          ";
	var d = "              *             ";
	var e = "           *                ";
	var f = "        *                   ";
	var g = "   *                        ";
	var h = "************     ";
		
		
			characters.push([a, b, c, d, e, f, g, h]);

}


function drawString(s, symbol){
	
	s = s.toLowerCase();
	
	//0 o * # $
	
	
	if(symbol != "0" && symbol != "o" && symbol != "*" && symbol != "#" && symbol != "$"){
		symbol = "*";
		
	}
	
	
	var a = "";
	var b = "";
	var c = "";
	var d = "";
	var e = "";
	var f = "";
	var g = "";
	var h = "";
	
	
	for(var j=0; j<s.length;j++){
		
		
		
		if(s[j] == " "){
				a += "             ";
				b += "             ";
				c += "             ";
				d += "             ";
				e += "             ";
				f += "             ";
				g += "             ";
				h += "             ";
				
				continue;
				
				
		}
		
		
		a += characters[s.charCodeAt(j) - 97][0];
		b += characters[s.charCodeAt(j) - 97][1];
		c += characters[s.charCodeAt(j) - 97][2];
		d += characters[s.charCodeAt(j) - 97][3];
		e += characters[s.charCodeAt(j) - 97][4];
		f += characters[s.charCodeAt(j) - 97][5];
		g += characters[s.charCodeAt(j) - 97][6];
		h += characters[s.charCodeAt(j) - 97][7];
		
		
		
	}	
	
	
	println(a.replace(/\*/g, symbol));
	println(b.replace(/\*/g, symbol));
	println(c.replace(/\*/g, symbol));
	println(d.replace(/\*/g, symbol));
	println(e.replace(/\*/g, symbol));
	println(f.replace(/\*/g, symbol));
	println(g.replace(/\*/g, symbol));
	println(h.replace(/\*/g, symbol));
	
	
	
	
	
}


loadA();
loadB();
loadC();
loadD();
loadE();
loadF();
loadG();
loadH();
loadI();
loadJ();
loadK();
loadL();
loadM();
loadN();
loadO();
loadP();
loadQ();
loadR();
loadS();
loadT();
loadU();
loadV();
loadW();
loadX();
loadY();
loadZ();



var a = readString();

var b = readString("Pick a symbol (0 o * # $)");

//0 o * # $
drawString(a, b);




























