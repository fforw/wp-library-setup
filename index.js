
function print(s)
{

    document.getElementById("out").appendChild(document.createTextNode(s + "\n"));
}

window.onload = function ()
{
    print("From App");
};

module.exports = {
    print: print
};
