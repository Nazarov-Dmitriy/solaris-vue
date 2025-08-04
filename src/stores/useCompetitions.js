import axios from 'axios';
import { defineStore } from 'pinia';
import { reactive } from 'vue';
import axiosR from '@/api/http';
import { parseDateString } from '@/utils/parseDateString';

export const useCompetitionsStore = defineStore('competitionsStore', {
    state: () => ({
        competitions: [],
        perPage: 4,
        currentPage: 1,
        totalPages: 1,
        competitionTags: ['Выберите роль'],
        sort: 'Новые вверху',
        tag: 'Выберите роль',
        currentCompetition: { id: null, competition: {}, tags: [] },
        currentCompetitionParticipants: null,
    }),
    actions: {
        addCompetitions(competitions) {
            console.log(...competitions);
            this.competitions.push(...competitions);
        },
        setTotalPages(pages) {
            this.totalPages = pages;
        },
        setCurrentPage(page) {
            this.currentPage = page;
        },
        addCompetitionsTags(tags) {
            this.competitionTags = [...this.competitionTags, ...tags];
        },
        setSort(sort) {
            this.sort = sort;
        },
        setTag(tag) {
            this.tag = tag;
        },
        setCurrentCompetitionId(id) {
            this.currentCompetition.id = id;
        },
        setCurrentCompetition(comp) {
            this.currentCompetition.competition = comp;
        },
        updateCurrentCompetitionTags(tags) {
            //console.log(this.competitions.find((el) => el.id === this.currentCompetition.id))
            console.log(tags)
            this.currentCompetition.tags = tags
        },
        setCurrentCompetitionParticipants(participants) {
            this.currentCompetitionParticipants = participants
        }
    },
    getters: {
        getCompetitionsSorted: (state) => {
            /* return (sort, tag) => */ return state.competitions
                .sort((a, b) => {
                    console.log(state.sort, state.tag);
                    return state.sort === 'Новые вверху'
                        ? new Date(parseDateString(b.begin_at)) -
                              new Date(parseDateString(a.begin_at))
                        : new Date(parseDateString(a.begin_at)) -
                              new Date(parseDateString(b.begin_at));
                })
                .filter((el) => {
                    return state.tag === 'Выберите роль'
                        ? el
                        : el.tags.some((e) => e === state.tag);
                });
        },
    },
});
