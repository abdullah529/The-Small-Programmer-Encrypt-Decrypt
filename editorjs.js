var controls = document.getElementById('controls');
var code_type = document.getElementById('code_type');
var text = document.getElementById('text');
var ediv = document.getElementById('ediv');
var etext = document.getElementById('etext');

text.addEventListener("input", ()=>{
    make_result();
});
code_type.addEventListener("change", ()=>{
    make_result();
});
function make_result(){
    if(code_type.value == "encrypt"){
        var entext = btoa(text.value);
        etext.innerText = entext;
    }else if(code_type.value == "decrypt"){
        var entext = atob(text.value);
        etext.innerText = entext;
    }else{
        
    }
}
function copy(){
    var copyText = document.getElementById("etext");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}