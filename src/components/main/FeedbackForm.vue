<template>
    <section
        id="feedback"
        class="feedback"
    >
        <div class="feedback__container">
            <div class="feedback__wrap"> 
                <h2 
                    class="feedback__title h2" 
                >
                    Отзывы и предложения
                </h2>
                <img 
                    src="../../assets/image/feedbackform/solaric.png" 
                    alt="Солярик" 
                    class="feedback__img"
                >
            </div>
            <div class="feedback__form-container">
                <form class="form">
                    <label
                        class="form__label"
                        for="author-name"
                        :class="{ 'error': formField.nameError }"
                    >Как Вас зовут?</label>
                    <div class="form__input-wrap">
                        <input
                            id="author-name"
                            v-model="formField.name"
                            type="text"
                            class="form__input p2"
                            name="name"
                            placeholder="Марина Иванова"
                            :class="{ 'error': formField.nameError }"
                            @keypress.enter="validateField($event, 'event', 'name')"
                        >
                        <span class="form__input-icon">
                            <svg
                                width="22"
                                height="24"
                                viewBox="0 0 22 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.0018 12.4626C14.4304 12.4626 17.2331 9.6599 17.2331 6.2313C17.2331 2.80271 14.4304 0 11.0018 0C7.57316 0 4.77051 2.80271 4.77051 6.2313C4.77051 9.6599 7.57322 12.4626 11.0018 12.4626Z"
                                    fill="#CBA05E"
                                />
                                <path
                                    d="M21.6933 17.4423C21.5301 17.0341 21.3124 16.6532 21.0675 16.2994C19.8158 14.449 17.8839 13.2246 15.707 12.9252C15.4349 12.8981 15.1356 12.9524 14.9179 13.1157C13.775 13.9593 12.4145 14.3946 10.9995 14.3946C9.58449 14.3946 8.22397 13.9593 7.0811 13.1157C6.86339 12.9524 6.56407 12.8708 6.29199 12.9252C4.11511 13.2246 2.15595 14.449 0.931466 16.2994C0.68657 16.6532 0.468862 17.0613 0.305633 17.4423C0.224018 17.6056 0.251206 17.796 0.33282 17.9593C0.550529 18.3402 0.822612 18.7212 1.06751 19.0477C1.44845 19.5648 1.85662 20.0273 2.31923 20.4627C2.70016 20.8436 3.13553 21.1974 3.57095 21.5511C5.72058 23.1566 8.30563 24.0001 10.9723 24.0001C13.639 24.0001 16.224 23.1565 18.3737 21.5511C18.809 21.2246 19.2444 20.8436 19.6254 20.4627C20.0607 20.0273 20.4961 19.5647 20.8771 19.0477C21.1492 18.694 21.3941 18.3402 21.6118 17.9593C21.7478 17.796 21.775 17.6055 21.6933 17.4423Z"
                                    fill="#CBA05E"
                                />
                            </svg>                    
                        </span>
                    </div>
                    <div
                        v-if="formField.nameError"
                        class="form__error"
                    >
                        <span class="form__icon-error">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM12 2C6.47 2 2 6.5 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
                                    fill="#DE4700"
                                />
                            </svg>                    
                        </span>
                        <p class="form__text-error">
                            Поле заполнено некорректно
                        </p>
                    </div>

                    <div class="form__wrapper">
                        <div class="form__wrapper-half">
                            <label
                                class="form__label"
                                for="author-phone"
                                :class="{ 'error': formField.phoneError }"
                            >Телефон</label>
                            <div class="form__input-wrap">
                                <input
                                    id="author-phone"
                                    v-model="formField.phone"
                                    type="tel"
                                    class="form__input p2"
                                    name="phone"
                                    placeholder="+7 (912) 234-56-78"
                                    :class="{ 'error': formField.phoneError }"
                                    @input="changePhone($event)"
                                    @keypress.enter="validateField($event, 'event', 'phone')"
                                >
                                <span class="form__input-icon">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M23.3707 17.6136L20.0143 14.2643C18.8157 13.0681 16.7779 13.5466 16.2984 15.1016C15.9388 16.1782 14.7401 16.7763 13.6613 16.537C11.2639 15.9389 8.02748 12.8289 7.42814 10.3169C7.06853 9.24034 7.78775 8.04418 8.86656 7.68537C10.4249 7.20691 10.9043 5.17342 9.70564 3.97726L6.34932 0.627988C5.39038 -0.209329 3.95195 -0.209329 3.11287 0.627988L0.835372 2.90071C-1.44213 5.29304 1.07511 11.6327 6.70893 17.2547C12.3428 22.8767 18.6958 25.5083 21.0932 23.1159L23.3707 20.8432C24.2098 19.8863 24.2098 18.4509 23.3707 17.6136Z"
                                            fill="#CBA05E"
                                        />
                                    </svg>                      
                                </span>
                            </div>
                            <div
                                v-if="formField.phoneError"
                                class="form__error"
                            >
                                <span class="form__icon-error">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM12 2C6.47 2 2 6.5 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
                                            fill="#DE4700"
                                        />
                                    </svg>                    
                                </span>
                                <p class="form__text-error">
                                    Поле заполнено некорректно
                                </p>
                            </div>
                        </div>

                        <div class="form__wrapper-half">
                            <label
                                class="form__label"
                                for="author-email"
                                :class="{ 'error': formField.emailError }"
                            >E-mail</label>
                            <div class="form__input-wrap">
                                <input
                                    id="author-email"
                                    v-model="formField.email"
                                    type="email"
                                    class="form__input p2"
                                    name="email"
                                    placeholder="marina_ivanova@mail.ru"
                                    :class="{ 'error': formField.emailError }"
                                    @input="changeEmail($event)"
                                    @keypress.enter="validateField($event, 'event', 'email')"
                                >
                                <span class="form__input-icon">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M14.0057 14.6797C13.4086 15.0777 12.7151 15.2881 12 15.2881C11.285 15.2881 10.5914 15.0777 9.99431 14.6797L0.159797 8.12311C0.105234 8.08674 0.0520781 8.04881 0 8.00981V18.7534C0 19.9852 0.999609 20.9628 2.20936 20.9628H21.7906C23.0224 20.9628 24 19.9632 24 18.7534V8.00977C23.9478 8.04886 23.8945 8.08688 23.8398 8.1233L14.0057 14.6797Z"
                                            fill="#CBA05E"
                                        />
                                        <path
                                            d="M0.939844 6.95353L10.7744 13.5101C11.1466 13.7583 11.5733 13.8824 12 13.8824C12.4267 13.8824 12.8534 13.7583 13.2256 13.5101L23.0602 6.95353C23.6487 6.56142 24 5.90517 24 5.19689C24 3.97903 23.0092 2.98828 21.7914 2.98828H2.20861C0.990797 2.98833 0 3.97908 0 5.19806C0 5.90517 0.351375 6.56142 0.939844 6.95353Z"
                                            fill="#DDA06B"
                                        />
                                    </svg>                                                  
                                </span>
                            </div>
                            <div
                                v-if="formField.emailError"
                                class="form__error "
                            >
                                <span class="form__icon-error">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM12 2C6.47 2 2 6.5 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
                                            fill="#DE4700"
                                        />
                                    </svg>                    
                                </span>
                                <p class="form__text-error">
                                    Поле заполнено некорректно
                                </p>
                            </div>
                        </div>
                    </div>

                    <label
                        class="form__label"
                        for="author-text"
                        :class="{ 'error': formField.textareaError }"
                    >Текст сообщения</label>
                    <textarea 
                        id="author-text"
                        v-model="formField.textarea"
                        class="form__input form__textarea p2"
                        name="text" 
                        placeholder="Напишите ваше сообщение"
                        :class="{ 'error': formField.textareaError }"
                        @input="changeTextarea($event)"
                    />
                    <div
                        v-if="formField.textareaError"
                        class="form__error "
                    >
                        <span class="form__icon-error">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM12 2C6.47 2 2 6.5 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
                                    fill="#DE4700"
                                />
                            </svg>                    
                        </span>
                        <p class="form__text-error">
                            Поле заполнено некорректно
                        </p>
                    </div>

                    <div class="form__footer">
                        <button
                            class="form__button button btn"
                            @click.prevent="validateForm()"
                        >
                            Отправить вопрос
                        </button>
                        <p class="form__footer-text">
                            Нажимая кнопку «Отправить вопрос», я соглашаюсь с <a
                                href="#"
                                class="form__footer-link p2"
                            >Политикой обработки персональных данных</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
let feedback;
let feedbackContainer;
let feedbackTitle;
let feedbackImg;
const formField = reactive({
    name: '',
    phone: '',
    email: '',
    textarea: '',
    nameError: false,
    phoneError: false,
    emailError: false,
    textareaError: false,
    falidateForm: false,
})

onMounted(() => {
    window.addEventListener("scroll", setVisible);
    feedback = document.querySelector(".feedback");
    feedbackContainer = document.querySelector(".feedback__container");
    feedbackTitle = document.querySelector(".feedback__title");
    feedbackImg = document.querySelector(".feedback__img");

})

function setVisible () {
    const elementPosition = feedback.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (elementPosition.top < windowHeight * 0.3) {
        feedbackContainer.classList.add("feedback_background__animate");
        feedbackTitle.classList.add("feedback__animate");
        feedbackImg.classList.add("feedback__animate");

        window.removeEventListener("scroll", setVisible);
    }
}



function validateField (param, event, nameParam) {
    let target;
    if (event === 'event') {
        target = param.target.value.trim();
    } else {
        target = param.trim()
    }

    if (nameParam === 'name') {
        target.length < 3 ? formField.nameError = true : formField.nameError = false;
    }
    if (nameParam === 'phone') {
        target.length < 18 ? formField.phoneError = true : formField.phoneError = false;
    }
    if (nameParam === 'email') {
        let email_regexp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        !email_regexp.test(String(target).toLowerCase()) ? formField.emailError = true : formField.emailError = false;
    }
    if (nameParam === 'textarea') {
        target.length < 3 ? formField.textareaError = true : formField.textareaError = false;
    }
};

function changePhone (event) {
    let target = event.target;
    let x = target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    x[1] = '+7';
    target.value = !x[3] ? x[1] + '-(' + x[2] : x[1] + '-(' + x[2] + ')-' + x[3] + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
    formField.phone = target.value;
};

function changeEmail (event) {
    let target = event.target;
    let x = target.value.match(/([a-zA-Z]{1})([a-zA-Z0-9._-]{0,19})([@]{0,1})([a-zA-Z0-9._-]{0,10})([.]{0,1})([a-zA-Z0-9._-]{0,5})/);
    target.value = x ? (x[1] + x[2] + x[3] + x[4] + x[5] + x[6]) : '';
    formField.email = target.value;
};

function changeTextarea (event) {
    let target = event.target;
    event.target.scrollBy(target.scrollHeight, 100)

    if (formField.textareaError && target.value.length > 3) {
        formField.textareaError = false
    }
}

function validateForm () {
    let validateFeildArr = ['name', 'phone', 'email', 'textarea'];

    validateFeildArr.forEach(item => {
        validateField(formField[item], 'validate', item)
    })
}

</script>

<style lang="scss">
.feedback {
    background: var(--dark);
    scroll-margin: 88px;
}

.feedback__container {
    max-width: 1440px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 80px 60px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 991px) {
        padding: 64px 40px;
    }

    @media (max-width: 576px) {
        padding: 40px 16px;
        flex-direction: column;
    }
}

.feedback_background__animate {
    position: relative;
    z-index: 0;
}

.feedback_background__animate:before {
    background: radial-gradient(25% 50% at 28% 50%, var(--roseBege) 0%, var(--dark) 100%);
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: -1;
}

@media (max-width: 991px) {
    .feedback_background__animate:before {
        background: radial-gradient(40% 50% at 25% 50%, var(--roseBege) 0%, var(--dark) 100%);
    }
}

@media (max-width: 576px) {
    .feedback_background__animate:before {
        background: radial-gradient(50% 25% at 50% 25%, var(--roseBege) 0%, var(--dark) 100%);
    }
}

.feedback__wrap {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 576px) {
        width: 100%;
    }
}

.feedback__title {
    color: var(--white);
    transform: translateY(300%);
    text-align: center;

    @media (max-width: 991px) {
        margin-bottom: 100px;
    }

    @media (max-width: 576px) {
        margin-bottom: 12px;
    }
}

.feedback__title.h2{
    @media (max-width: 991px) {
        font-size: 24px;
        line-height: 36px;
    }
}

.feedback__img {
    width: 61%;
    opacity: 0;
    transform: translateY(100%);

    @media (max-width: 1158px) {
        width: 90%;
    }

    @media (max-width: 576px) {
        width: 71%;
    }
}

.feedback__animate {
    opacity: 1;
    transition: ease-out 1s;
    transform: translateY(0%);
}

.feedback__form-container {
    width: 49%;

    @media (max-width: 576px) {
        width: 100%;
    }
}

.form {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    padding-top: 15px;

    @media (max-width: 991px) {
        padding-top: 0px;
    }
}

.form__wrapper {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    width: 100%;

    @media (max-width: 1158px) {
        flex-direction: column;
        gap: 0px;
    }
}

.form__wrapper-half {
    width: 100%;
}

.form__label {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: var(--white);
}

.form__input-wrap {
    position: relative;
    width: 100%;
}

.form__input {
    box-sizing: border-box;
    border: 2px solid #CBA05E;
    padding: 14px 14px;
    width: 100%;
    outline: none;
    background-color: var(--white);
    color: #CBA05E;
    margin-bottom: 8px;
    margin-top: 8px;
}

.form-input:-webkit-autofill,
.form-input:-webkit-autofill:hover,
.form-input:-webkit-autofill:focus,
.form-input:-webkit-autofill:active {
  box-shadow: 0 0 0 30px #ffffff inset !important;
}

.form-input:-webkit-autofill {
  -webkit-text-fill-color: #CBA05E !important;
  font-size: 16px !important;
  line-height: 1.5;
  font-family: 'Inter';
}
.form-input:-webkit-autofill:focus {
  -webkit-text-fill-color: #CBA05E !important;
  font-size: 16px !important;
  line-height: 1.5;
  font-family: 'Inter';
}

.form__input:hover {
    background-color: var(--lightBege);
}

.form__input:focus {
    background-color: var(--white);
}

.form__input::placeholder,
.form__input:focus::placeholder {
    color: #CBA05E;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
}

.form__input:-webkit-autofill {
    -webkit-text-fill-color: #CBA05E !important;
    box-shadow: inset 0 0 0 1000px var(--white);
}

.form__input-icon {
    position: absolute;
    width: 24px;
    height: 24px;
    right: 16px;
    top: 24px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

.form__textarea {
    resize: none;
    height: 194px;
    font-family: "Inter", sans-serif;
}

.form__error {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    gap: 8px;
}

.form__icon-error {
    width: 24px;
    height: 24px;
}

.form__text-error {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: var(--orange);
}

.form__input.error {
    border: 2px solid var(--orange);
}

.form__input.error:focus {
    border: 2px solid #CBA05E;
}

.form__label.error {
    color: var(--orange);
}

.form__footer {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-top: 32px;

    @media (max-width: 1158px) {
        flex-direction: column-reverse;
        margin-top: 16px;
    }
}

.form__button {
    white-space: nowrap;
    padding: 16px 28px;

    @media (max-width: 1158px) {
        width: 100%;
        display: flex;
        justify-content: center;
    }
}

.form__footer-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: var(--white);
}

.form__footer-link {
    color: var(--white);
    text-decoration: underline;

    @media (max-width: 1158px) {
        font-size: 14px;
    }

    @media (max-width: 576px) {
        font-size: 12px;
    }
}

.form__footer-link:hover {
    color: var(--roseBege);
}

.form__footer-link:active {
    color: var(--orange);
}
</style>