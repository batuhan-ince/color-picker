document.getElementById("get-scheme-btn").addEventListener("click", function(){
    let scheme = document.getElementById("color-schemes").value
    let pickedColor = document.getElementById("color-picker").value.slice(1)
    fetch(`https://www.thecolorapi.com/scheme?hex=${pickedColor}&mode=${scheme}`)
        .then(res => res.json())
        .then(data => {
            let schemeColors = data.colors.map(function(color) {
                return color.hex.value
            })
        for (let i = 0; i < schemeColors.length; i++) {
            document.getElementById(`color-${i+1}`).style.backgroundColor = schemeColors[i]
            document.getElementById(`color-values-${i+1}`).textContent = schemeColors[i]
        }
    })
})
