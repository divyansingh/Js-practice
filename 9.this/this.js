console.log(this)//pointing to global object
//-----------------------------------------
function sample(){
    console.log(this)
}
sample()
//------------------------------------------
var b =function(){
    console.log(this)
}
b()
//-------------------------------------------
function test (){
    console.log(this)
    this.newVariable="hello"
}
test()
console.log(newVariable)
var obj = {
    name:"div",
    log:function(){
        console.log(this)
    }
}

obj.log()

// soluton 1.
var STUDENTSoBJ={
    name:"Div",
    log:function(){
        var self=this;
        self.name="Singh"
        console.log(this)
        var setname =function(){
            self.name="SS"
            console.log(self)
        }
        setname()
        console.log(this)
    }
}
STUDENTSoBJ.log()

