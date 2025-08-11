<template>
    <template v-if="user === 'teacher'">
        <TeacherHeader />
        <TeacherContests :contests="contests" />
    </template>
    <template v-else>
        <StudentHeader />
        <StudentContest :contests="contests" />
    </template>
</template>

<script setup lang="ts">
import StudentHeader from '@/components/cabinet/header/StudentHeader.vue';
import TeacherHeader from '@/components/cabinet/header/TeacherHeader.vue';
import StudentContest from '@/components/cabinet/contests/student/StudentContest.vue';
import TeacherContests from '@/components/cabinet/contests/teacher/TeacherContests.vue';
import { getById } from '@/db/db'
import { computed, inject, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useCompetitionsStore } from '@/stores/useCompetitions';
import { CompetitionService } from '@/plugins/CompetitionService';

const useCompetitions = useCompetitionsStore();
const competitionService: CompetitionService = inject('CompetitionService');
const user = ref('')
const route = useRoute();
const id = ref();
const contests = computed(() => useCompetitions.currentCompetition.competition)

onMounted(() => {
    if (route.path.includes("teacher")) {
        user.value = "teacher"
    } else {
        user.value = "student"
    }

    id.value = route.params.id
    console.log(id.value);
    if (useCompetitions.currentCompetition.id !== id.value) {
        useCompetitions.setCurrentCompetitionId(id.value);
        competitionService.getCompetitionById(id.value)
            .then((res) => useCompetitions.setCurrentCompetition(res.data.data))
    }
    //contests.value = getById(+id.value)[0];

})
</script>
