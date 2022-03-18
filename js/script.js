const boxImg = document.querySelectorAll('.box-Img')
const inputliters = document.querySelector('.input-liters')
const price1L = document.querySelector('.price')
// const petrolType = document.querySelectorAll('.petrolType')
// const priceOneLiter = document.querySelector('.priceOneLiter')
// const liters = document.querySelectorAll('.liters')
// const vat = document.querySelectorAll('.vat')
// const totalPrice = document.querySelectorAll('.totalPrice')



boxImg.forEach((item) =>{
    item.addEventListener('click', () => {
        if(Array.from(item.classList).includes('active')){
            item.classList.remove('active')
        } else {
            boxImg.forEach((item) => {
                item.classList.remove('active')
            })
            item.classList.add('active')
        }
    })
})

inputliters.addEventListener('click', () =>{
    if(price1L.value.length === ''){
        alert('Введите сумму за 1 литр!')
    }else if ()
})

