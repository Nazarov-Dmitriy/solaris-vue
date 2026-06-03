import { inject, ref, watch } from 'vue'
import { TeacherService } from '@/plugins/TeacherService'
import { useTeacherStore } from '@/stores/useTeacherStore'

export function useCaseSave<T extends Record<string, unknown>>(options: {
    createEmpty: () => T
    getCritery: (group: T) => string
    getPredmets?: (group: T) => string[]
}) {
    const teacherService = inject<TeacherService>('TeacherService')
    const teacherStore = useTeacherStore()

    const groups = ref<T[]>([options.createEmpty()])
    const isModalVisible = ref(false)
    const fileInputRefs = ref<(HTMLInputElement | null)[]>([])

    watch(isModalVisible, (value) => {
        document.body.classList.toggle('no-scroll', value)
    })

    function addGroup() {
        groups.value.push(options.createEmpty())
    }

    function toggleModal() {
        isModalVisible.value = !isModalVisible.value
    }

    function handleFileChange(event: Event, index: number) {
        const input = event.target as HTMLInputElement
        if (!input.files) return
        ;(groups.value[index] as Record<string, unknown>).files = Array.from(input.files)
    }

    async function saveGroup(index: number) {
        const group = groups.value[index] as T
        const { files, ...groupData } = group as Record<string, unknown>

        const formData = new FormData()
        const predmets = options.getPredmets ? options.getPredmets(group) : [options.getCritery(group)]
        const critery = options.getCritery(group).slice(0, 100)

        formData.append('teacher_id', String(teacherStore.user?.user_id ?? ''))
        formData.append('critery', critery)
        predmets.forEach(p => formData.append('predmets[]', p))
        formData.append('data', JSON.stringify(groupData))

        ;(files as File[] | undefined)?.forEach(file => formData.append('files[]', file))

        try {
            await teacherService?.postTeacherCase(formData)
            toggleModal()
        } catch (err) {
            console.error(err)
        }
    }

    return {
        groups,
        isModalVisible,
        fileInputRefs,
        addGroup,
        toggleModal,
        saveGroup,
        handleFileChange,
    }
}
