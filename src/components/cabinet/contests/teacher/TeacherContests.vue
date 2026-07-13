<template>
    <section class="uc-contest-wrapper">
        <div class="uc-contest__container">
            <div
                class="uc-contest"
            >
                <div class="uc__item">
                    <p class="uc__decription h3">
                        {{ props.contests?.title }}
                    </p>
                    <div class="uc__directions">
                        <p
                            v-for="(tag, index) in competitionTags"
                            :key="index"
                            class="uc__direction p2"
                        >
                            {{ tag }}
                        </p>
                    </div>
                    <div class="uc__info">
                        <!-- <p class="uc__publication p2">
                            Дата публикации {{ props.contests?.publication_date }}
                        </p> -->
                        <p class="uc__publication p2">
                            Дата публикации {{ props.contests?.begin_at || '-' }}
                        </p>
                        <button
                            class="uc__info-btn btn"
                            @click="$router.push('/cabinet/teacher/contests')"
                        >
                            К списку конкурсов
                        </button>
                    </div>
                </div>
                <div class="uc-contest__content">
                    <div class="uc-contest__decription">
                    <button v-if="hasNoCurators" @click="teacherJoin" class="uc__info-btn btn" :disabled="teacherJoinLoading">
                        {{ teacherJoinLoading ? 'Отправка...' : 'У этого конкурса нет кураторов, если хотите им стать - нажмите' }}
                    </button>
                    <p v-if="teacherJoinError" class="uc-contest__application-text uc-contest__application-text--error">
                        {{ teacherJoinError }}
                    </p>
                    <p v-if="participantsError" class="uc-contest__application-text uc-contest__application-text--error">
                        {{ participantsError }}
                    </p>
                        <div class="uc-contest__target">
                            <p class="uc-contest__subtitle">
                                Цель Конкурса:
                            </p>
                            <p class="uc-contest__text">
                                {{ props.contests?.description }}
                            </p>
                        </div>
                        <div class="uc-contest__task">
                            <p class="uc-contest__subtitle">
                                Задачи конкурса:
                            </p>
                            <ul class="ul-contest__list">
                                <!-- <li
                                    v-for="(task, index) in props.contests?.description?.tasks"
                                    :key="index"
                                    class="uc-contest__list-item"
                                >
                                    {{ task }}
                                </li> -->
                                <li
                                    class="uc-contest__list-item"
                                >
                                    {{ props.contests?.task_competitions }}
                                </li>
                            </ul>
                        </div>
                        <div class="uc-contest__condition">
                            <p class="uc-contest__subtitle">
                                Условия участия
                            </p>
                            <p class="uc-contest__text">
                                К участию в Конкурсе принимаются только индивидуальные сочинения
                            </p>
                            <ul
                                v-for="(condition, index) in props.contests?.description?.conditions"
                                :key="index"
                                class="ul-contest__list"
                            >
                                <li class="uc-contest__list-item">
                                    {{ condition }}
                                </li>
                            </ul>
                        </div>
                        <div class="uc-contest__when-passes">
                            <p class="uc-contest__subtitle">
                                Когда проходит
                            </p>
                            <!-- <p
                                v-for="(date, index) in props.contests?.description?.date"
                                :key="index"
                                class="uc-contest__text"
                            >
                                {{ date }}
                            </p> -->
                            <p
                                class="uc-contest__text"
                            >
                                {{ `C ${props.contests?.begin_at || '-'} по ${props.contests?.end_at || '-'}` }}
                            </p>
                        </div>
                        <p class="uc-contest__subtitle">
                            {{ props.contests?.description?.end }}
                        </p>
                    </div>
                    <!-- <div
                        v-if="props.contests?.hasParticipant"
                        class="uc-contest__application"
                    > -->
                    <div
                        v-if="competitionParticipants?.length > 0"
                        class="uc-contest__application"
                    >
                        <h3 class="uc-contest__application-title h3">
                            Список учеников
                        </h3>
                        <p class="uc-contest__application-text">
                            Ученики, которые подали заявку.
                        </p>
                        <div class="uc-contest__list">
                            <div
                                v-for="el in competitionParticipants"
                                :key="el.id"
                                class="uc-contest__cards"
                            >
                                <div class="uc-contest__card">
                                    <img
                                        :src="el.avatar_url === null ? '/src/assets/image/user-cabinet/contest/avatar.png' : el.avatar_url"
                                        alt="avatar"
                                        class="uc-contest__avatar"
                                    >
                                    <p class="uc-contest__user-name p2">
                                        {{ el.name + ' ' + el.surname + ' ' + el.fathername }}
                                    </p>
                                    <div class="uc-contest__user-derections p2">
                                        <p class="uc-contest__user-derection">
                                            {{ el.class_name + 'класс' }}
                                        </p>
                                    </div>
                                    <button
                                        class="uc-contest__btn"
                                        :disabled="removingPupilId === el.id"
                                        @click="removeStudent(el.id)"
                                    >
                                        {{ removingPupilId === el.id ? '...' : 'Исключить' }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { CompetitionService } from '@/plugins/CompetitionService';
import { useCompetitionsStore } from '@/stores/useCompetitions'
import { computed, inject, onMounted, ref, watch } from 'vue'

const emit = defineEmits(['teacherJoin'])

const competitionsStore = useCompetitionsStore();
const competitionService: CompetitionService = inject('CompetitionService');

const competitionTags = computed(() => competitionsStore.currentCompetition.tags)
const competitionParticipants = computed(() => competitionsStore.currentCompetitionParticipants || [])
const hasNoCurators = computed(() => (props.contests?.teachers || []).length === 0)
const teacherJoinLoading = ref(false)
const teacherJoinError = ref('')
const participantsLoading = ref(false)
const participantsError = ref('')
const removingPupilId = ref<number | null>(null)

function teacherJoin() {
    if (teacherJoinLoading.value) return;

    teacherJoinLoading.value = true;
    teacherJoinError.value = '';
    competitionService.postTeacherJoinContest(props.contests?.id)
    .then((res) => {
        if(res.status === 201 || res.status === 200){
            emit('teacherJoin');
        }
    })
    .catch((err) => {
        teacherJoinError.value = err?.response?.data?.message || 'Не удалось отправить заявку куратора. Попробуйте еще раз.'
    })
    .finally(() => {
        teacherJoinLoading.value = false;
    })
}

onMounted(async () => {
    if (competitionsStore.competitions.length === 0) {
            const comps = await competitionService.getListCompetitions()
            console.log(comps.data.find((el) => el.id === +competitionsStore.currentCompetition.id))
            competitionsStore.addCompetitions(comps.data)
            // filterContestsByRole()
            competitionsStore.updateCurrentCompetitionTags(comps.data.find((el) => el.id === +competitionsStore.currentCompetition.id).tags);
        }
    loadParticipants()
})

watch(() => props.contests?.id, loadParticipants)

async function loadParticipants() {
    if (!props.contests?.id || participantsLoading.value) return

    participantsLoading.value = true
    participantsError.value = ''
    try {
        const res = await competitionService.getCompetitionParticipants(props.contests.id)
        competitionsStore.setCurrentCompetitionParticipants(res.data?.data || [])
    } catch (error) {
        competitionsStore.setCurrentCompetitionParticipants([])
        participantsError.value = 'Не удалось загрузить список учеников.'
    } finally {
        participantsLoading.value = false
    }
}

async function removeStudent(id: number) {
    if (!props.contests?.id || removingPupilId.value) return

    removingPupilId.value = id
    participantsError.value = ''
    try {
        await competitionService.removeStudentFromContest(props.contests.id, id)
        await loadParticipants()
    } catch (error) {
        participantsError.value = error?.response?.data?.pupil_id?.[0] || 'Не удалось исключить ученика из конкурса.'
    } finally {
        removingPupilId.value = null
    }
}

const props = defineProps({
    contests: {
        type: Object,
        default: () => {}
    }
})

</script>
<style lang="scss">
.uc-contest-wrapper {
    width: 100%;
    display: flex;
    flex-grow: 1;
    background: var(--white);
    flex-direction: column;
}

.uc-contest__container {
    max-width: 1560px;
    padding: 24px 60px;
    margin: 0 auto;
    position: relative;
    box-sizing: border-box;

    @media (max-width: 991px) {
        padding: 24px 40px;
    }

    @media (max-width: 576px) {
        padding: 24px 16px;
    }
}

.uc-contest {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.uc-contest__content {
    display: flex;
    gap: 16px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
}

.uc-contest__decription {
    max-width: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    color: var(--dark);

    @media (max-width: 768px) {
        max-width: 100%;
    }
}

.uc-contest__subtitle {
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    display: inline;
}

.uc-contest__text {
    display: inline;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
}

.ul-contest__list {
    padding-left: 24px;
}

.uc-contest__list-item {
    list-style-type: disc;
}

.uc-contest__condition {
    display: flex;
    flex-direction: column;
}

.uc-contest__when-passes {
    display: flex;
    flex-direction: column;
}

.uc-contest__application {
    max-width: 50%;
    width: 100%;
    padding: 24px;
    background: var(--dark);
    display: flex;
    flex-direction: column;
    gap: 24px;
    order: -1;
    align-items: center;
    min-height: 732px;
    height: fit-content;
    box-sizing: border-box;
    border: 2px solid var(--roseBege);

    &.success {
        height: fit-content;
        min-height: 200px;
    }

    @media (max-width: 768px) {
        max-width: 100%;
        min-height: 300px;
        gap: 16px;
    }

    @media (max-width: 576px) {
        width: calc(100% + 32px);
        left: -16px;
        position: relative;
        max-width: unset;
        padding: 24px 16px;
    }
}

.uc-contest__application-title {
    color: var(--white);
}

.uc-contest__application-text {
    color: var(--white);
    text-align: center;
}

.uc-contest__list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
}

.uc-contest__cards {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    border-bottom: 2px solid var(--roseBege);
    max-width: 100%;
    box-sizing: border-box;
}

.uc-contest__card {
    display: grid;
    grid-template-columns: 56px 1fr 52px;
    grid-template-rows: auto;
    grid-template-areas:
        'contest-avatar  contest-user-name  contest-btn'
        'contest-avatar  contest-user-derections  contest-btn';
    align-items: center;
    gap: 0 8px;
    padding: 8px 16px;

    @media (max-width: 991px) {
        grid-template-columns: 56px 1fr 52px;
        grid-template-areas:
            'contest-avatar  contest-user-name  contest-user-name'
            'contest-avatar  contest-user-derections  contest-btn';
    }

    @media (max-width: 576px) {
        gap: 0;
        padding: 8px 8px;
    }
}

.uc-contest__card.active {
    background: var(--roseBege);
    grid-template-columns: 56px 1fr;
    grid-template-rows: auto;
    grid-template-areas:
        'contest-avatar  contest-user-name '
        'contest-avatar  contest-user-derections  ';
    align-items: center;
    gap: 0 8px;

    .uc-contest__user-name {
        color: var(--dark);
    }

    .uc-contest__btn {
        display: none;
    }

    .uc-contest__user-derection {
        color: var(--white);
    }
}

.uc-contest__application-success {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    justify-content: center;
    align-items: center;

    .uc-contest__application-wraper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .uc-contest__user-derections {
        justify-content: center;
        flex-direction: row;
    }

    .uc-contest__user-derection {
        color: var(--white);
    }
}

.uc-contest__card-user {
    display: flex;
    gap: 8px;
}

.uc-contest__avatar {
    grid-area: contest-avatar;
    width: 56px;
    height: 56px;
    border-radius: 100%;
    border: 2px solid var(--roseBege);
    box-sizing: border-box;

    @media (max-width: 576px) {
        margin-right: 8px;
    }
}

.uc-contest__user-name {
    grid-area: contest-user-name;
    color: var(--white);
    padding-top: 4px;
}

.uc-contest__user-derections {
    grid-area: contest-user-derections;
    display: flex;
    gap: 16px;
    padding-bottom: 4px;

    @media (max-width: 991px) {
        flex-direction: column;
        gap: 8px;
    }
}

.uc-contest__user-derection {
    color: var(--roseBege);
}

.uc-contest__btn {
    grid-area: contest-btn;
    width: 52px;
    height: 52px;
    border: 2px solid var(--roseBege);
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.uc-contest-btn {
    margin-top: auto;
}

.uc__item {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 32px auto;
    grid-template-areas:
        "uc-deccription uc-directions"
        "uc-deccription  uc-info";
    padding: 16px;
    border-bottom: 2px solid var(--roseBege);
    gap: 56px 0;

    @media(max-width: 1200px) {
        grid-template-columns: 1fr;
        grid-template-rows: 32px auto;
        grid-template-areas:
            "uc-directions"
            "uc-deccription "
            "uc-info";
        gap: 20px 0;
    }

    @media(max-width: 576px) {
        grid-template-rows: auto;
    }
}

.uc__item:hover {
    background: var(--lightBege);

    @media(max-width: 576px) {
        background: unset;
    }
}

.uc__decription {
    grid-area: uc-deccription;
    max-width: 652px;
    color: var(--dark);

    @media(max-width: 1200px) {
        max-width: 100%;
    }
}

.uc__directions {
    justify-self: end;
    grid-area: uc-directions;
    display: flex;
    gap: 24px;

    @media(max-width: 991px) {
        gap: 16px;
    }

    @media(max-width: 576px) {
        flex-wrap: wrap;
        flex-grow: 1;
        justify-content: space-between;
        width: 100%;
    }
}

.uc__direction {
    padding: 4px 8px;
    background: var(--roseBege);
    color: var(--white);

    @media(max-width: 576px) {
        font-size: 12px;
    }
}

.uc__info {
    grid-area: uc-info;
    justify-self: end;
    display: flex;
    gap: 16px;
    justify-content: flex-end;
    align-items: flex-end;

    @media(max-width: 576px) {
        flex-wrap: wrap;
        width: 100%;
    }
}

.uc__info-btn {
    @media(max-width: 576px) {
        flex-grow: 1;
        justify-content: center;
    }
}
</style>
