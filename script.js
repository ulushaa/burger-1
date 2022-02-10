let product = {
    plainBurger: {
        name: 'Гамбургер простой',
        price: 10000,
        amount: 0,
        kcall: 500,
        get Summ() {
            return this.price * this.amount
        },
        get Call() {
            return this.kcall * this.amount
        }
    },
    freshBurger: {
        name: 'Гамбургер FRESH',
        price: 20500,
        amount: 0,
        kcall: 900,
        get Summ() {
            return this.price * this.amount
        },
        get Call() {
            return this.kcall * this.amount
        }
    },
    freshCombo: {
        name: 'Fresh Combo',
        price: 31900,
        amount: 0,
        kcall: 1200,
        get Summ() {
            return this.price * this.amount
        },
        get Call() {
            return this.kcall * this.amount
        }
    }
}


let extraProduct = {
    doubleMayonnaise: {
        name: 'Двойной майонез',
        price: 2000,
        kcall: 50
    },
    lettuce: {
        name: 'Салатный лист',
        price: 3000,
        kcall: 10
    }, 
    cheese: {
        name: 'Сыр',
        price: 5000,
        kcall: 80
    }
}


let btnPlusOrMinus = document.querySelectorAll('.main__product-btn'),
    checkExtraProduct = document.querySelectorAll('.main__product-checkbox'),
    addCart = document.querySelector('.addCart');

btnPlusOrMinus.forEach(function(btn) {
    btn.addEventListener('click', function() {
        plusOrMinus(this)
    })
})

function plusOrMinus(el) {
    // closest() - делает подключение к ближайщему родительскому элементу
    // getAttribute() - берет значение у указаного атрибута
    let parentId = el.closest('.main__product').getAttribute('id'),
        out = el.closest('.main__product').querySelector('.main__product-num'),
        price = el.closest('.main__product').querySelector('.main__product-price span'),
        kcall = el.closest('.main__product').querySelector('.main__product-kcall span');

        if(el.getAttribute('data-symbol') == '+') {
            product[parentId].amount++
        }else if(el.getAttribute('data-symbol') == '-' && product[parentId].amount > 0) {
            product[parentId].amount--
        }

        out.innerHTML = product[parentId].amount;
        price.innerHTML = product[parentId].Summ;
        kcall.innerHTML = product[parentId].Call;
}




let title = document.querySelector('.header__timer'),
    timer = document.querySelector('.header__timer-extra');
    
function tim() {
    if(timer.innerHTML < 100 ) {
        timer.innerHTML++
        setTimeout(() => tim(), 70);
        if(timer.innerHTML == 100){
            title.style.fontSize = '80px';
            title.style.color = 'yellow';
        }
    }
}
tim(); 







