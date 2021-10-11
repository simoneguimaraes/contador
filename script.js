function contar() {
    let txtstartp = document.querySelector('input#txtstart')
    let txtendp = document.querySelector('input#txtend')
    let txtgapp = document.querySelector('input#txtgap')
    let loadingp = document.querySelector('div#loading')

    loadingp.innerHTML = '<p>Contando...</p>'
    let start = Number(txtstartp.value)
    let end = Number(txtendp.value)
    let gap = Number(txtgapp.value)

    if (gap == 0) {
            window.alert('Intervalo inválido. O valor mínimo é 1.')
            gap = 1
        }

    if (start < end) {
            for(let contador = start; contador <= end; contador += gap) {
                loadingp.innerHTML += `${contador} \u{27A1} `
            } 
        } else {
            for(let contador = start; contador >= end; contador -= gap) {
                loadingp.innerHTML += `${contador} \u{27A1} `
            } 
        } 
        loadingp.innerHTML += `\u{23F9}`
}
