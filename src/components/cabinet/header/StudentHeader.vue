<template>
    <div class="cabinet-header__container student">
        <div class="cabinet-header ">
            <div class="cabinet-header__info">
                <router-link to="/cabinet/student" class="cabinet-header__logo-wraper">
                    <img src="@/assets/icon/cabinet-header/logo_cabinet.svg" class="cabinet-header__logo" alt="
                        icon-logo">
                    <p class="cabinet-header__logo-text p2-phone">
                        Кабинет ученика
                    </p>
                </router-link>
                <div class="cabinet-header__student-info">
                    <div class="cabinet-header__notification">
                        <router-link to="/cabinet/student/notification">
                            <p class="cabinet-header__notification-count p2-phone">
                                1
                            </p>
                            <img src="@/assets/icon/cabinet-header/bell.svg" alt="icon-bellt">
                        </router-link>
                    </div>
                    <p class="cabinet-header__student-initials">
                        {{ pupilInitials }}
                    </p>
                    <div class="cabinet-header__profile-options">
                        <img ref="logoutBtn" src="@/assets/icon/cabinet-header/pointer_down.svg"
                            alt="icon-poiner-down" />
                        <BtnComponent v-show="logoutBtnVisible" BtnComponent
                            class="cabinet-header__btn cabinet-header__btn_type_logout" emit-name="action"
                            @action="logout">
                            Выйти
                        </BtnComponent>
                    </div>
                </div>
            </div>
            <div class="cabinet-header__nav">
                <ul class="cabinet-header__list">
                    <li class="botton">
                        <router-link to="/cabinet/student/contests" class="cabinet-header__link">
                            <img src="@/assets/icon/cabinet-header/contest.svg" alt="icon-shop">
                            Конкурсы
                        </router-link>
                    </li>
                    <li class="botton">
                        <router-link to="/cabinet/student/shop" class="cabinet-header__link">
                            <img src="@/assets/icon/cabinet-header/contest.svg" alt="icon-shop">
                            Магазин
                        </router-link>
                    </li>
                    <li class="botton">
                        <router-link to="/cabinet/student/sales" class="cabinet-header__link">
                            <img src="@/assets/icon/cabinet-header/сart.svg" alt="icon-shop">
                            Покупки
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import BtnComponent from '@/components/btns/BtnComponent.vue';
import { UserService } from '@/plugins/UserService';
import { useAuthStore } from '@/stores/useAuthStore';
import { usePipulStore } from '@/stores/usePipulStore';
import { computed, inject, onMounted, onUnmounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const authService: UserService = inject('UserService');
const authStore = useAuthStore();
const router = useRouter();

const pupilStore = usePipulStore();
const pupilInitials = computed(() => {
    return pupilStore.user?.name?.split('')[0] + pupilStore.user.surname?.split('')[0];
})
const logoutBtnVisible = ref(false)
const logoutBtn = ref(null)

function showLogoutBtn(e) {
    if(logoutBtnVisible.value === true || e.target !== logoutBtn.value) {
        logoutBtnVisible.value = false;
    } else {
    logoutBtnVisible.value = !logoutBtnVisible.value; 
}
}

function logout() {
    authService.logoutUser()
    .then((res) => { 
        if(res.data.result === true) {
            authStore.clearUser();
            pupilStore.clearUser();
            router.push('/');
        }
     })
     .catch(e => console.log(e))
}


onMounted(() => {
    document.addEventListener('click', showLogoutBtn)
})
onUnmounted(() => {
    document.removeEventListener('click', showLogoutBtn)
})
</script>
<style lang="scss" scoped>
.cabinet-header__profile-options {
    display: relative;
}

.cabinet-header__btn {
    height: 36px;
    padding: 6px 16px;

    @media (max-width: $lg) {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.cabinet-header__btn_type_logout {
    position: absolute;
    top: 45px;
    z-index: 2;
}

.cabinet-header__container {
    width: 100%;
    border-bottom: 2px solid var(--roseBege);
    background-color: var(--dark);
}

.cabinet-header {
    max-width: 1560px;
    padding: 8px 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    box-sizing: border-box;
}

.cabinet-header__info {
    display: flex;
    gap: 24px
}


.cabinet-header__logo {
    width: 101px;
    height: 30px;
}

.cabinet-header__logo-text {
    color: var(--roseBege)
}

.cabinet-header__student-info {
    display: flex;
    gap: 8px;
    align-items: center;
}

.cabinet-header__notification {
    position: relative;
}

.cabinet-header__notification-count {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 2px;
    left: -10px;
    color: var(--white);
    background: var(--orange);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}


.cabinet-header__student-initials {
    width: 32px;
    height: 32px;
    border: 1px solid var(--roseBege);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 16px;
    color: var(--roseBege);
}

.cabinet-header__list {
    list-style-type: none;
    display: flex;
    gap: 24px;
    align-items: center;
}

.cabinet-header__link {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--white);
    cursor: pointer;
    text-decoration: none;
}

@media (max-width: 768px) {
    .cabinet-header {
        padding: 8px 40px;
        flex-direction: column;
    }

    .cabinet-header__info {
        justify-content: space-between;
        width: 100%;
    }

    .cabinet-header__nav {
        width: 100%;
    }

    .cabinet-header__list {
        height: 48px;
        justify-content: space-between;
    }
}

@media (max-width: 576px) {
    .cabinet-header {
        padding: 8px 16px;
        gap: 12px;
    }

    .cabinet-header__link {
        flex-direction: column;
        gap: 0;
    }
}
</style>