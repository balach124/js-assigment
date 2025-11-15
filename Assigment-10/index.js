function Generate() {

    let str = "123345adhq12"
    let pass = ""

    for (let i = 0; i < 12; i++) {
        let randoom = Math.floor(Math.random() * str.length)
        pass = pass + str[randoom]
    }
    console.log("Password -->", pass);
}