
let text = document.querySelector('#text')
let result = document.querySelector('#outcome')
let b64 = document.querySelector('#base64')
let select = document.querySelector('#select')
let but = document.querySelector('#butao')
let enC = document.querySelector('#cod')
let deC = document.querySelector('#dec')
let desloC = document.querySelector('#desloc')
let cifra = document.querySelector('#cifra')



enC.addEventListener ('click', function(){
    but.textContent = "Codificar mensagem!"
})
deC.addEventListener ('click', function(){
    but.textContent = "Decodificar mensagem!"
})


but.addEventListener('click', function(){
    
    if (select.value == 'base64' &&  but.textContent == "Codificar mensagem!"){
        result.value = btoa(text.value)
 
    }
    else if (select.value == 'base64' && but.textContent == "Decodificar mensagem!") {
        result.value = atob(text.value)
        
    } else if (select.value == 'cifra' && but.textContent == "Codificar mensagem!") { 
            result.value = codiCifra(text.value, desloc.value)
    } else if (select.value == 'cifra' && but.textContent == "Decodificar mensagem!") {
        result.value = deCifra(text.value, desloc.value)
        
}
})


/*CIFRA DE CESAR*/

function codiCifra (string1, desloc1) {
    

        string1.split('')
        var desloc = Number(desloc1)
        var resultado1 = []
        var retornando = []
    
            for (var i=0; i < string1.length; i++) {
            
                if (string1.charCodeAt(i) === 32) {
                resultado1.push((string1.charCodeAt(i)))
                        
                } else if (string1.charCodeAt(i)>= 65 && string1.charCodeAt(i)<= 90) {
                    resultado1.push((((string1.charCodeAt(i) - 65) + desloc) % 26) + 65);
                    
                } else if (string1.charCodeAt(i)>= 97 && string1.charCodeAt(i)<= 122){
                 resultado1.push((((string1.charCodeAt(i) - 97) + desloc) % 26) + 97);

                } else {
                resultado1.push((string1.charCodeAt(i)))
            }

        }
            for (var k=0; k < resultado1.length; k++) {
            
                retornando.push(String.fromCharCode(resultado1[k]))
            }
        
        return retornando.join('')
}


function deCifra (string2, desloc2) {
    string2.split('')
    var desloc = Number(desloc2)
    var resultado2 = []
    var retornando = []

        for (var j=0; j < string2.length; j++) {
        
            if (string2.charCodeAt(j) === 32) {
            resultado1.push((string2.charCodeAt(j)))
                    
            } else if (string2.charCodeAt(j)>= 65 && string2.charCodeAt(j)<= 90) {
                resultado2.push((((string2.charCodeAt(j) - 65) - desloc) % 26) + 65);
                
            } else if (string2.charCodeAt(j)>= 97 && string2.charCodeAt(j)<= 122){
             resultado2.push((((string2.charCodeAt(j) - 97) - desloc) % 26) + 97);

            } else {
            resultado2.push((string2.charCodeAt(j)))
        }

    }
        for (var l=0; l < resultado2.length; l++) {
        
            retornando.push(String.fromCharCode(resultado2[l]))
        }
    
    return retornando.join('')
}


select.addEventListener ('click', function() {
    
    if (select.value === 'cifra') {
        desloC.style.display = "block"
    } else {
        desloC.style.display = "none"
    }
})
