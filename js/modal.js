const styles  = {
    overlay: {
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: '0px',
        left: '0px',
        animation: 'fadeIn 0.5s ease',
        background: 'rgba(253,253,253,0.95)',
        'z-index': '1001'

    },


}

const { overlay } = styles;

function applyStyle (tag, styleProperty) {
    let element = document.createElement(tag);
    element.style.cssText = Object.entries(styleProperty)
        .map(([key, value]) => `${key}:${value};`).join('')

    return element;

}


const overlayBg = applyStyle('div', overlay)
console.log(overlayBg)


//
// const overlayBg = document.createElement('div');
// overlayBg.style.width = overlay.width;
// overlayBg.style.height = overlay.height;
// overlayBg.style.position = overlay.position;
// overlayBg.style.top = overlay.top;
// overlayBg.style.left = overlay.left;
// overlayBg.style.background = overlay.background;
// overlayBg.style.zIndex = '10000'
//





let wrapper = document.querySelector('.wrapper');

const btnRepair = document.querySelector('.service__repair');
btnRepair.addEventListener('click', () => {

    wrapper.append(overlayBg)
    overlayBg.innerHTML = `
       <div class="modal-window">
       <div class="modal-window__container">
              <div class="modal-window__header">
                   <button class="icons menu__cross">
                       <span></span>
                   </button>
              </div>
         <div class="menu-body__container">
           <div class="feed-back__menu"><span>Обратная связь</span></div>
              <div class="user-data">
                  <div class="user-data__input name">
                      <label for="cheese"></label>
                      <input type="text" name="name" id="cheese"  placeholder="Имя">
                  </div>
                  <div class="user-data__input telephone">
                      <label for="cheese1"></label>
                      <input type="text" name="telephone" id="cheese1" placeholder="Телефон">
                  </div>
                  <div class="user-data__input mail">
                      <label for="cheese2"></label>
                      <input type="text" name="mail" id="cheese2" placeholder="Электронная почта">
                  </div>
                  <div class="user-data__input message">
                      <label for="cheese3"></label>
                      <input type="text" name="message" id="cheese3" class="input-message" placeholder="Сообщение">
                  </div>
              </div>
           <div class="modal-footer">
               <div class="modal-footer__text">Нажимая “отправить”, вы даете согласие на <span>обработку персональных данных</span> и соглашаетесь с нашей <span>политикой конфиденциальности</span></div>
               <div class="button-order__container">
                  <div class="button-order"><span>Отправить</span>
                      <img src="img/dropdownWhite.png" alt="" >
                  </div>
               </div>
           </div>
         </div>
       </div>
    </div>
    
    
    `

    const btnCross = document.querySelector('.menu__cross');
    const modalWindow = document.querySelector('.modal-window');
    console.log(modalWindow)

    if (btnCross) {
        btnCross.addEventListener('click', (event) => {
            modalWindow.classList.add('flip-out-ver-right')
            setTimeout(() => {

                overlayBg.remove();
            }, 100)

        })
    }

})

const btnCall = document.querySelector('.button__hidden-telephone');


let modalCall = `
<div class="overLay">
  <div class="modal-window2">
      <div class="modal-window__container">
        <div class="modal-window__header">
            <button class="icons menu__cross">
                <span></span>
            </button>
        </div>
        <div class="menu-body__container">
            <div class="feed-back__menu"><span>Заказать звонок</span></div>
            <div class="user-data">
                <div class="user-data__input telephone">
                    <label for="cheese1"></label>
                    <input type="text" name="telephone" id="cheese1" placeholder="Телефон">
                </div>
            </div>
            <div class="modal-footer">
                <div class="modal-footer__text">Нажимая “отправить”, вы даете согласие на <span>обработку персональных данных</span> и соглашаетесь с нашей <span>политикой конфиденциальности</span></div>
                <div class="button-order__container">
                    <div class="button-order"><span>Отправить</span>
                        <img src="img/dropdownWhite.png" alt="" >
                    </div>
                </div>
            </div>
        </div>
      </div>
  </div>
</div>

`


btnCall.onclick = function () {
    wrapper.insertAdjacentHTML('beforebegin', modalCall);
    const btnCallClose = document.querySelector('.menu__cross');
    const overLayClose = document.querySelector('.overLay')

    if (btnCallClose) {
        btnCallClose.onclick = function () {
            overLayClose.remove()
        }
    }
}






