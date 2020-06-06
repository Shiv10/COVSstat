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

        if (fever.value == 'yes'){
             temp =  1
        }

        if (cough.value == 'yes'){
            co =  1
        }

       if (tired.value == 'yes'){
            f =  1
        }

       if (breathing.value == 'yes'){
            br =  1
        }

        if (chest.value == 'yes'){
            cp =  1
        }

        if (heart.value == 'yes'){
            hd =  1
        }

        if (lung.value == 'yes'){
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
                    result.innerHTML = "Keep Calm, you're safe";
                }
                if(data == '1'){
                    result.innerHTML = "Stay alert, you migh be in danger";
                }
                if(data == '2'){
                    result.innerHTML = "High risk, report to authorities as soon as possible.";
                }

                count = 0;
            }
        })
    });
})