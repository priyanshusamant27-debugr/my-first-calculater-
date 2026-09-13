let str = "";
let btn = document.querySelectorAll(".btn");

Array.from(btn).forEach((button) => {
    button.addEventListener("click", (e) => {

        if (e.target.innerHTML == "=") {
            try {
                console.log(str);
                str = eval(str);
                document.querySelector("input").value = str;
            }
            catch (err) {
                console.log(err);
                document.querySelector("input").value = "Error";
                str = "";
            }
        }

        else if (e.target.innerHTML == "C") {
            str = "";
            document.querySelector("input").value = str;
        }

        else {
            console.log(e.target);

            if (e.target.innerHTML == "X") {
                str += "*";
            }
            else {
                str += e.target.innerHTML;
            }

            document.querySelector("input").value = str;
        }
    });
});