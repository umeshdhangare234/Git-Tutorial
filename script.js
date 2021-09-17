func4 = ()=> {
    console.log("Hello again");
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

func4();

