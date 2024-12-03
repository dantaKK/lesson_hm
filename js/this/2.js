var name="WW"
var a={
    name:"KK",
    func1:function(){
        console.log(this.name)
    },
    func2:function(){
       setTimeout(
        function(){
           this.func1(a)
        }.call(a),1000)
        }
       
    }
a.func2()