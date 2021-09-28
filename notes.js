window.onload = function(){
    var notes = new Array(
        {
            c: "Do",
            a: "C"
        },
        {
            c: "Ré",
            a: "D"
        },
        {
            c: "Mi",
            a: "E"
        },
        {
            c: "Fa",
            a: "F"
        },
        {
            c: "Sol",
            a: "G"
        },
        {
            c: "La",
            a: "A"
        },
        {
            c: "Si",
            a: "B"
        });
        var form = document.createElement('form');
        var select = document.createElement('select');
        var result = document.createElement('p');
        result.setAttribute('id','result');
        result.innerHTML = "Choissisez une note pour voir sa correspondance.";

        select.setAttribute("id","note");
        select.appendChild(document.createElement('option'));
        for (var i=0; i< notes.length; i++)
        {
            var option = document.createElement('option');
            option.value = i;
            option.innerHTML = notes[i].c;
            select.appendChild(option);
        }
        form.appendChild(select);
        document.body.appendChild(form);
        document.body.appendChild(result);

        select.onchange = function(){
            if(this.value == "")
            {
                result.innerHTML = "Choissisez une note pour voir sa correspondance.";
            } 
            else
            {
                result.innerHTML = "La notation américaine pour la note \"" + notes[this.value].c + "\" est \"" + notes[this.value].a +"\".";
            } 
        }
}
