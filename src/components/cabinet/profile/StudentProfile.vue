<template>
    <section class="cabinet-profile">
        <div class="cabinet-profile__container">
            <div class="cabinet-profile__avatar">
                <h2 v-if="pupilStore.user.avatar_url === null" class="cabinet-profile__avatar-initial h2">
                    {{ pupilInitials }}
                </h2>
                <img v-else class="cabinet-profile__avatar-img" :src="pupilStore.user.avatar_url" />
                <button class="cabinet-profile__avatar-button" @click="toggleModal()">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.3914 7.26343H7.21357C5.45171 7.26343 4.02344 8.6917 4.02344 10.4536V24.8097C4.02344 26.5716 5.45171 27.9999 7.21357 27.9999H23.1642C24.9261 27.9999 26.3544 26.5716 26.3544 24.8097V17.6314"
                            stroke="#DDA06B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M26.3549 5.61514C27.2401 6.52976 27.2281 7.98522 26.3282 8.88521L15.1895 20.0239L10.4043 21.6189L11.9994 16.8337L23.1448 5.5955C24.0186 4.71434 25.4414 4.70844 26.3225 5.58232C26.3334 5.59315 26.3443 5.60409 26.3549 5.61514Z"
                            stroke="#DDA06B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M23.1641 8.85864L24.6842 10.4537" stroke="#DDA06B" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
            <div class="cabinet-profile__wrap">
                <p class="cabinet-profile__name p1">
                    {{ pupilStore.user.surname }}<span>{{ pupilStore.user.name }} {{ pupilStore.user.fathername
                        }}</span>
                </p>
                <p class="cabinet-profile__class p2">
                    {{ pupilStore.user.class_name }} класс
                </p>
                <p class="cabinet-profile__text p2">
                    ID: {{ pupilStore.user.id }}<!-- ID используется для входа на сайт -->
                </p>
                <p class="cabinet-profile__id p1">
                    {{ pupilStore.user.username }}<!-- IvanovAI_7a -->
                </p>
            </div>
            <img class="cabinet-profile__img" src="@/assets/image/cabinet-profile/cabinet-profile-solaric.png" alt="#">
        </div>
        <Teleport to="body">
            <!-- smth to change here with user -->
            <ModalComponent additional-class="modal-additional" :visible="isModalVisible" @close="toggleModal()" @toggle-modal="toggleModal()">
                <template #title>
                    <p class="modal-title">Выберите файл</p>
                </template>
                <template #text>
                    <form id="avatarForm" v-on:submit="onSubmitAvatar">
                        <input type="file" v-on:change="(e) => { avatarImage = e.target.files[0] }"></input>
                    </form>
                </template>
                <template #btn>
                    <button type="submit" form="avatarForm" class="botton btn"
                        @click="">
                        Загрузить
                    </button>
                </template>
            </ModalComponent>
        </Teleport>
    </section>
</template>
<script setup lang="ts">
import ModalComponent from '@/components/modal/ModalComponent.vue';
import { UserService } from '@/plugins/UserService';
import { usePipulStore } from '@/stores/usePipulStore';
import { computed, inject, ref } from 'vue';

const userService: UserService = inject('UserService');

const isModalVisible = ref(false);
const avatarImage = ref('');

const onSubmitAvatar = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('avatar', avatarImage.value);
    userService.uploadAvatar(formData).then((res) => {
        if (res.status === 200) {
            console.log('avatar updated')
        }
        else console.error('smth went wrong')
    });
    toggleModal();
}

function toggleModal() {
    console.log(isModalVisible.value)
    isModalVisible.value = !isModalVisible.value;
    console.log(isModalVisible.value)
}

const pupilStore = usePipulStore();
const pupilInitials = computed(() => {
    return pupilStore.user?.name?.split('')[0] + pupilStore.user.surname?.split('')[0];
})
</script>
<style>
.cabinet-profile__avatar-img {
    border-radius: inherit;
}

.modal-additional {
    top: calc(50% - 144px);
    right: calc(50% - 107px);
    
}

@media (max-width: 576px) {
        .modal-additional {
            right: 16px;
        }
}

.modal-title {
    color: #1f2a3e;
    font-weight: 500;
    font-size: 20px;
}

.cabinet-profile {
    background-color: var(--dark);
}

.cabinet-profile__container {
    max-width: 1560px;
    margin: auto;
    box-sizing: border-box;
    padding: 80px 60px;
    position: relative;
    display: flex;
    gap: 16px;
    align-items: center;
}

.cabinet-profile__avatar {
    width: 148px;
    height: 148px;
    border-radius: 50%;
    border: 2px solid var(--roseBege);
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: center;
}

.cabinet-profile__avatar-initial {
    color: var(--roseBege);
    margin-top: 26px;
}

.cabinet-profile__avatar-button {
    position: absolute;
    bottom: 24px;
    left: 56px;
    width: 32px;
    height: 32px;
    background: transparent;
    border: none;
    cursor: pointer;
}

.cabinet-profile__wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
}

.cabinet-profile__name span {
    display: block;
}

.cabinet-profile__name,
.cabinet-profile__class,
.cabinet-profile__text,
.cabinet-profile__id {
    color: var(--white);
}

.cabinet-profile__img {
    position: absolute;
    bottom: 0px;
    right: 260px;
    width: 552px;
    height: 298px;
}

@media (max-width: 1440px) {
    .cabinet-profile__img {
        right: 140px;
    }
}

@media (max-width: 1200px) {
    .cabinet-profile__img {
        right: 56px;
    }
}

@media (max-width: 991px) {
    .cabinet-profile__container {
        padding: 80px 40px;
    }
}

@media (max-width: 860px) {
    .cabinet-profile__img {
        display: none;
    }
}

@media (max-width: 576px) {
    .cabinet-profile__container {
        padding: 16px;
        flex-direction: column;
    }

    .cabinet-profile__wrap {
        align-items: center;
        gap: 0px;
    }

    .cabinet-profile__wrap p {
        text-align: center;
    }
}
</style>