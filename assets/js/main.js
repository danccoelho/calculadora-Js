function Calculadora(){
    this.display = document.querySelector('.display');

    this.inicia = () => { 
        this.capturaClique();
    };

    this.capturaClique = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if(el.classList.contains('btn-num')) this.addNumDisplay(el);    
            if(el.classList.contains('btn-clear')) this.clear();    
            if(el.classList.contains('btn-del')) this.del();    
            if(el.classList.contains('btn-eq')) this.conta();     
        });
    };

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };
    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0,-1);
    this.conta = () =>{
        try {
            const calculo = eval(this.display.value);
           
            if(!calculo){
                alert('Conta inválida');
                return;
            }
            this.display.value = calculo;  
        } catch (e) {
            alert('Conta inválida')
            return;
        }
    };    
};

const calculadora  = new Calculadora();
calculadora.inicia();