function fun(){
    console.log("old function is implemention");
}
fun();
(function(){
    function fun(){
        console.log("New function is implemention");
    }
    console.log("calling intern code");
    fun();
})();
