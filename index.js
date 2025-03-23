var a =document.getElementById("inputnumber").value;
    var b = Math.floor(Math.random()*10)+ 1;
    //var c = document.getElementById("inputnumber2").value;
    var score = 10;

    function btn(){
        if(b==a){
            final.innerHTML="<span style='color':Green;>Right</span>";
            alert="you won";
        }else{
            if(score > 1){
                score=score-1;
                scoreboard.textContent="you have : "+score+" chances";
                final.innerHTML = "<span style='color: red;'>you lost : </span> try again you have "+score +" chances";
            }else{
                alert("Game over 'Try again with 10 chances' ");
                location.reload();
            }
        }
    }