function test1(){
    @addCost(200)
    class Cellphone {
        constructor(){
            this.model = "sumsang"
            this.storage = 16
        }
    }

    function addCost(sum){
        return function decorator(theThingWereDecorating){
            theThingWereDecorating.prototype.cost = sum
        }
    }

    var phone = new Cellphone()
    console.log(phone.cost)   //prints 200
}

function test2(){
    class Cellphone{
        constructor(){
            this.model = 'sumsang'
            this.storage = 16
        }

        @hide
        get NSAbackdoor(){
            return true
        }
    }

    function hide(target, name, theThingWereDecorating){
        theThingWereDecorating.enumerable = false
        return theThingWereDecorating
    }

    let phone = new Cellphone
    for (let props in phone){
        console.log(props)  //prints model, storage ,but not NSAbackdoor
    }
}

function test3(){
    @makePhonecalls
    class Cellphone {
        constructor(){
            this.model = 'sumsang'
            this.storage = 16
        }
    }

    function makePhonecalls(target){
        let callNumber = function(number){
            return `call ${number}`
        }

        target.prototype.callNumber = callNumber
    }

    let phone = new Cellphone()

    console.log(phone.callNumber(12345)) //prints "calling 12345"
}

