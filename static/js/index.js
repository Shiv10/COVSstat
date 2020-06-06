window.addEventListener("load", () =>{
    const fever = document.getElementById("fever");
    const cough = document.getElementById("cough");
    const tired = document.getElementById("tired");
    const breathing = document.getElementById("breathing");
    const chest = document.getElementById("chest-pain");
    const heart = document.getElementById("heart-disease");
    const lung = document.getElementById("lung-disease");
    const result =  document.getElementById("result")

    const button = document.getElementById("submit");

    let count = 0;

    button.addEventListener("click", () => {
        if(count == 1) return;
        let temp = 0;
        let co = 0;
        let f = 0;
        let br = 0;
        let cp =0;
        let hd = 0
        let ld = 0;

        if (fever.checked){
             temp =  1
        }

        if (cough.checked){
            co =  1
        }

       if (tired.checked){
            f =  1
        }

       if (breathing.checked){
            br =  1
        }

        if (chest.checked){
            cp =  1
        }

        if (heart.checked){
            hd =  1
        }

        if (lung.checked){
            ld =  1
        }


        const data = {
            temperature: temp,
            cough: co,
            fatigue: f,
            breathing: br,
            chestPain: cp,
            heartDisease: hd,
            lungDisease: ld,
        }
        console.log(data);

        count = 1;
        $.ajax({
            type: 'POST',
            url: '/predict',
            data: data,
            dataType: 'text',
            success: (data) =>{
                data = data.slice(1,2)
                console.log( data);
                if(data == '0'){
                    result.style.color = "#73CD71"
                    result.innerHTML = "Keep Calm, you're safe";
                }
                if(data == '1'){
                    result.style.color = "#F77F4C"
                    result.innerHTML = "Stay alert, you migh be in danger";
                }
                if(data == '2'){
                    result.style.color = "#B30C0B"
                    result.innerHTML = "High risk, report to authorities as soon as possible.";
                }

                count = 0;
            }
        })
    });
})