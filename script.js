func1 = ()=>{
    console.log("Hello");
    window.alert("Be Aware of Dogs");
}

func1();

var message = "food";
func2 = (message)=>{
    console.log("Got the "+ this.message);
}

func2();


func3 = ()=>{
    window.alert("You are welcome");
}

func3();