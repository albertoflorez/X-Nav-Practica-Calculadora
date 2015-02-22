jQuery(document).ready(function() {
    $("#0").click(function() {
        changer("0");
    });
    $("#1").click(function() {
        changer("1");
    });
    $("#2").click(function() {
        changer("2");
    });
    $("#3").click(function() {
        changer("3");
    });
    $("#4").click(function() {
        changer("4");
    });
    $("#5").click(function() {
        changer("5");
    });
    $("#6").click(function() {
        changer("6");
    });
    $("#7").click(function() {
        changer("7");
    });
    $("#8").click(function() {
        changer("8");
    });
    $("#9").click(function() {
        changer("9");
    });
    $("#coma").click(function() {
        changer(".");
    });
    $("#suma").mousedown(function() { 
	    desaparece();
    })
    .mouseup(function(){
	    aparece();  
        activarSuma();    
    });
    $("#resta").mousedown(function() { 
	    desaparece();
    })
    .mouseup(function(){
	    aparece();
        activarResta();      
    });
    $("#multiplica").mousedown(function() { 
	    desaparece();
    })
    .mouseup(function(){
	    aparece(); 
        activarMultiplicar();     
    });
    $("#divide").mousedown(function() { 
	    desaparece();
    })
    .mouseup(function(){
	    aparece();  
        activarDividir();    
    });
    $("#igual").click(function() {
        operar();
    });
    $("#signo").click(function(){
        invertir();
    });
    $("#c").click(function(){
        borrarTodo();
    });
    $("#raiz").click(function(){
        raiz($("#display").val());
    });
    $("#cuadrado").click(function(){
        cuadrado($("#display").val());
    });
});

var op = 0;
var activeOp="";
var numContinua = false;

function changer(num){
    if(!numContinua && ($("#display").val()=="0" || activeOp)){
        $("#display").val(num);
        numContinua = true;
    }else {
        $("#display").val($("#display").val() + num);
    }
}

function desaparece(){
	$("#display").addClass("desaparece");
}

function aparece(){
	$("#display").removeClass("desaparece");
}

function activarSuma(){
    if(activeOp){
        operar();
    }
    op = parseFloat($("#display").val());
    activeOp="+";
    numContinua = false;
}

function activarResta(){
    if(activeOp){
        operar();
    }
    op = parseFloat($("#display").val());
    activeOp="-";
    numContinua = false;
}

function activarDividir(){
    if(activeOp){
        operar();
    }
    op = parseFloat($("#display").val());
    activeOp="/";
    numContinua = false;
}

function activarMultiplicar(){
    if(activeOp){
        operar();
    }
    op = parseFloat($("#display").val());
    activeOp="*";
    numContinua = false;
}

function operar(){
    if(activeOp=="+"){
        op = parseFloat(op) + parseFloat($("#display").val());
    }else if(activeOp=="-"){
        op = parseFloat(op) - parseFloat($("#display").val());
    }else if(activeOp=="/"){
        op = parseFloat(op) / parseFloat($("#display").val());
    }else{
        op = parseFloat(op) * parseFloat($("#display").val());
    }
    $("#display").val(op);
    op=0;
    activeOp="";
    numContinua = false;
}

function invertir(){
    $("#display").val(parseFloat($("#display").val()*-1));
}

function borrarTodo(){
    $("#display").val(0);
    op=0;
    activeOp="";
}

function raiz(num){
   var raiz = Math.sqrt(parseFloat(num));
    $("#display").val(raiz);
}

function cuadrado(num){
   var cuadrado = Math.pow(parseFloat(num),2);
    $("#display").val(cuadrado);
}

