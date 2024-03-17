

class CountText
{
    selectElements ()
    {
        const texteareCount = document.querySelector(".textarea-count");
        const exibirResultadoLetras = document.querySelector(".exibir-resultado-letras");
        const exibirResultadoPalavras = document.querySelector(".exibir-resultado-palavras");
        const exibirResultadoLinhas = document.querySelector(".exibir-resultado-linhas");


        return {texteareCount, exibirResultadoLetras, exibirResultadoPalavras, exibirResultadoLinhas}
    }   

    countElementos (text)
    {   

        if(!text)
        {
            return {letras: 0, palavras: 0, linhas: 0}
        }

        const letras = text.trim().length;

        const palavras = text.split(" ").length

        const linhas = (text.match(/\n/g) || []).length+1;

        return {letras, palavras, linhas}
    
    }

    eventsElements()
    {   
        
        const {
                texteareCount: el, 
                exibirResultadoLetras, 
                exibirResultadoPalavras, 
                exibirResultadoLinhas
            } = this.selectElements();

        el.addEventListener("keyup", (e)=>{
            
            const {letras, palavras, linhas} = this.countElementos(el.value);

            exibirResultadoLetras.innerHTML = letras;

            exibirResultadoPalavras.innerHTML = palavras;

            exibirResultadoLinhas.innerHTML = linhas;

        });
    }
}

const text = new CountText;

text.eventsElements();