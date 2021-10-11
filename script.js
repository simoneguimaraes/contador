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
            window.alert('Passo inválido. O valor mínimo é 1.')
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


/*

    if(txtstartp.value.length == 0 || txtendp.value.length == 0 || txtgapp.value.length == 0) {
        window.alert('Erro. Informe todos os dados para realizar a contagem.')
    } else {

    
    

*/