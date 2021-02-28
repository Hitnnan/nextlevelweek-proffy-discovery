// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField(){
    // Duplicar os campos, mas quais?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    // Antes de colocar na página, quero que leve apenas os campos, sem os valores
    const fields = newFieldContainer.querySelectorAll('input')
    // Para cada campo, quero campos sem valores
    fields.forEach(function (field){
        // Precisamos pegar o field do momento e o limpa
        field.value = ""
    })
    // Colocar na página, mas onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
