function Calculator(){
    this.display = document.querySelector('#display')


    // Calculator ha its methods down here: start, clickCapture, sendToDisplay, erase, clear, calculate
    this.start = () => {
        this.clicksCapture()
        this.pressCapture()
    }

    this.clicksCapture = () => {                                                                    // watch out for clicks on screen
        document.addEventListener('click', e => {                                                   
            const el = e.target
            if(el.classList.contains('btn-num') || el.classList.contains('parenthesis') || el.classList.contains('btn-operators')) this.sendToDisplay(el)   // if clicked is a number or operator  
            if(el.classList.contains('btn-equal')) this.calculate()                               // if clicked is 'equal'
            if(el.id === 'clear') this.clear()                                                    // if clicked is 'reset'
            if(el.id === 'erase' || el.id ==='innerErase') this.erase()                           // if clicked is 'erase'
        })
    } 

    this.pressCapture = () => display.addEventListener('keypress', e => {
        const el = e.which
        if(el === 13) this.calculate()
    })

    this.sendToDisplay = el => {
        this.display.value += el.innerText
        this.display.focus()
    }

    this.erase = () => this.display.value = this.display.value.slice(0,-1)

    this.clear = () => this.display.value = ''  

    this.calculate = () => {
        try{
            const doingMath = eval(this.display.value)                                            // 'eval' is a JS method to do Math.
            if(doingMath){                                                                           // if Math is valid...
                this.display.value = doingMath 
            }else{
                alert('Invalid Math!')                                                            // if Math is invalid...
                return                                               
            }
        }
        catch(e){
            alert('Invalid Math!')
            return
        }
    }
}
   

const calc = new Calculator()
calc.start()