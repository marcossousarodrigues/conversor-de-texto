

class Conversor{
    selecionaElementos(){
        const textareaConversor = document.querySelector('.textarea-conversor');
        const conversorMaiuscula = document.querySelector('.conversor-maiuscula');
        const conversorMinuscula = document.querySelector('.conversor-minuscula');
        const conversorPrimeiraLetra = document.querySelector('.conversor-primeira-letra');
        const valorConvertido = document.querySelector('.valor-convertido');
        
        return {
                textareaConversor, 
                btnMaiuscula: conversorMaiuscula, 
                btnMinuscula: conversorMinuscula, 
                btnPrimeiraLetra: conversorPrimeiraLetra,
                valorConvertido
            };
    }

    eventos () {
        const el = this.selecionaElementos();
        el.btnMaiuscula.addEventListener('click', (e)=>{
            e.preventDefault();
            el.valorConvertido.innerText = el.textareaConversor.value.toUpperCase();
        });
        el.btnMinuscula.addEventListener('click', (e)=>{
            e.preventDefault();
            el.valorConvertido.innerText = el.textareaConversor.value.toLowerCase();
        });
        el.btnPrimeiraLetra.addEventListener('click', (e)=>{
            e.preventDefault();
            const listaPalavras = el.textareaConversor.value.split(" ");
            let palavraConvertida = "";
            listaPalavras.map((item)=>{
                palavraConvertida += item[0].toUpperCase() + item.substring(1).toLowerCase()+" ";
            })
            console.log(palavraConvertida)
            el.valorConvertido.innerText = palavraConvertida;
        });
    }
}

const con = new Conversor();
con.eventos();