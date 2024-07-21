let res = document.getElementById("input_first");
let fcheck = document.getElementById("fcheck");
let scheck = document.getElementById("scheck");
let tcheck = document.getElementById("tcheck");
let pl = document.getElementById("input_length");

function gp() {
    if (pl.value === "") {
        alert("Please enter password length");
        return; // Exit the function if length is not provided
    }

    const length = parseInt(pl.value); // Convert length to an integer

    class GeneratePassword {
        basicPassword(length) {
            let characters = 'abcdefghijklmnopqrstuvwxyz';
            let result = '';
            let charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            res.value = result;
        }

        strongPassword(length) {
            let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-+/?{}[]=:'';.``~";
            let result = '';
            let charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            res.value = result;
        }

        upperPassword(length) {
            let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            let result = '';
            let charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            res.value = result;
        }

        numberPassword(length) {
            let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';
            let charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            res.value = result;
        }

        symbolPassword(length) {
            let characters = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+/?{}[]=:'';.``~";
            let result = '';
            let charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            res.value = result;
        }

        onetwo(length) {
            let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';
            let charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            res.value = result;
        }

        twothree(length) {
            let characters = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-+/?{}[]=:'';.``~";
            let result = '';
            let charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            res.value = result;
        }

        onethree(length) {
            let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-+/?{}[]=:'';.``~";
            let result = '';
            let charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            res.value = result;
        }
    }

    let gp = new GeneratePassword();

    if (fcheck.checked && scheck.checked && tcheck.checked) {
        gp.strongPassword(length);
    } else if (fcheck.checked && scheck.checked) {
        gp.onetwo(length);
    } else if (fcheck.checked && tcheck.checked) {
        gp.onethree(length);
    } else if (scheck.checked && tcheck.checked) {
        gp.twothree(length);
    } else if (fcheck.checked) {
        gp.upperPassword(length);
    } else if (scheck.checked) {
        gp.numberPassword(length);
    } else if (tcheck.checked) {
        gp.symbolPassword(length);
    } else {
        gp.basicPassword(length);
    }
}

function copy(){
    let password=res.value;
    if(password===''){
        alert("No password to copy!");
    }
    else{
        navigator.clipboard.writeText(password)
        .then(()=>{
            alert("Password cpoied to clipboard!");
        })
        .catch(err=>{
            console.error("Failed to copy password: ",err);
        })
    }
}

window.onload = () => {
    res.value = '';
    pl.value = '';
    fcheck.checked = false;
    scheck.checked = false;
    tcheck.checked = false;
};
