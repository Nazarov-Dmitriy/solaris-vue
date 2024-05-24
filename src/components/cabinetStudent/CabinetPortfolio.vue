<template>
    <section class="uc-portfolio">
        <div class="uc-portfolio__container">
            <div class="dropdown uc-dropdown__portfolio">
                <input class="dropdown-input " type="text" placeholder="сортировать по роли" value="" readonly />
                <img class="dropdown-icon" src="../../assets/icon/appearance.svg" alt="icon-appearance">
                <ul class="dropdown-options">
                    <li class="dropdown-option">UI Design</li>
                    <li class="dropdown-option">HTML</li>
                    <li class="dropdown-option">CSS</li>
                    <li class="dropdown-option">JS</li>
                </ul>
            </div>
            <table class="uc-portfolio__table">
                <thead>
                    <tr>
                        <th>Название конкурса </th>
                        <th>Название роли</th>
                        <th>Наставник </th>
                        <th>Солярики</th>
                        <th>Баллы</th>
                        <th>Статус</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Городской конкурс сочинений
                            «Деды наших дедов – герои Отечества», посвященного 79-ой годовщине Победы советского народа
                            в
                            Великой Отечественной войне</td>
                        <td>
                            <p>журналист</p>
                            <p>историк</p>
                            <p>патриот</p>
                            <p>юнармеец</p>
                        </td>
                        <td>Иванова М.И</td>
                        <td>300</td>
                        <td>260 </td>
                        <td>1 место 1 этап</td>
                    </tr>
                    <tr>
                        <td>Городской конкурс сочинений
                            «Деды наших дедов – герои Отечества», посвященного 79-ой годовщине Победы советского народа
                            в
                            Великой Отечественной войне</td>
                        <td>
                            <p>журналист</p>
                            <p>историк</p>
                            <p>патриот</p>
                            <p>юнармеец</p>
                        </td>
                        <td>Иванова М.И</td>
                        <td>300</td>
                        <td>260 </td>
                        <td>1 место 1 этап</td>
                    </tr>
                </tbody>
            </table>
            <div class="uc-portfolio__btns">
                <button class="uc-portfolio__btn"><svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 10L12 16L18 22" stroke="#DDA06B" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <circle cx="16" cy="16" r="14" stroke="#DDA06B" stroke-width="2" />
                    </svg>
                </button>
                <button class="uc-portfolio__btn">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 10L20 16L14 22" stroke="#DDA06B" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <circle cx="15" cy="15" r="14" transform="matrix(-1 0 0 1 31 1)" stroke="#DDA06B"
                            stroke-width="2" />
                    </svg>
                </button>
            </div>


        </div>
    </section>
</template>
<script setup>
document.addEventListener("DOMContentLoaded", function () {

    const dropdown = document.querySelectorAll('.dropdown');
    console.log(dropdown);
    const body = document.body;

    const toggleDropdown = (event, el) => {
        event.stopPropagation();
        el.classList.toggle('opened');
    };

    const selectOption = (event, input) => {
        input.value = event.currentTarget.textContent;
    };

    const closeDropdownFromOutside = () => {
        dropdown.forEach(el => {
            if (el.classList.contains('opened')) {
                el.classList.remove('opened');
            }
        })
    };

    dropdown.forEach(el => {
        el.addEventListener('click', (evetn) => toggleDropdown(evetn, el));
        el.querySelectorAll('.dropdown-option').forEach(opt => {
            opt.addEventListener('click', (evt) => selectOption(evt, el.childNodes[0]))
        })
    })

    body.addEventListener('click', closeDropdownFromOutside);
})
</script>
<style>
.uc-portfolio {
    background-color: var(--white);
    display: flex;
    flex-grow: 1;
}

.uc-portfolio__container {
    max-width: 1560px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 24px 60px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;

    @media(max-width: 991px) {
        padding: 24px 40px;
    }

    @media(max-width:576px) {
        padding: 24px 16px;
    }
}

.uc-dropdown__portfolio {
    width: 243px;
}

.uc-portfolio__table {
    height: fit-content;
    width: auto;
    display: grid;
    border-collapse: collapse;
    grid-template-columns:
        minmax(242px, 722px) 158px 180px 112px minmax(100px, 112px) minmax(80px, 156px);
    grid-template-rows: 56px auto;
    gap: 16px 0;
    align-content: center;

    @media(max-width: 991px) {
        grid-template-columns:
            minmax(338px, 722px) 158px 180px 112px minmax(100px, 112px) minmax(80px, 156px);
    }

    ;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.uc-portfolio__table::-webkit-scrollbar {
    display: none;
}

.uc-portfolio__table thead,
.uc-portfolio__table tbody,
.uc-portfolio__table tr {
    display: contents;
}

.uc-portfolio__table th,
.uc-portfolio__table td {
    text-align: center;
    font-size: 16px;
    color: var(--dark);
    line-height: 1.5;
    font-weight: 400;
}

.uc-portfolio__table th {
    padding: 16px;
}

.uc-portfolio__table th:first-child {
    text-align: start;
}

.uc-portfolio__table td:first-child {
    text-align: start;
}

.uc-portfolio__table td {
    padding: 8px;
}

.uc-portfolio__table tbody td {
    background: var(--lightBege)
}

.uc-portfolio__table td p {
    text-align: center;
}

.uc-portfolio__btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;
    margin-top: auto;
}

.uc-portfolio__btn {
    width: 32px;
    height: 32px;
    border: none;
    background: none;
    cursor: pointer;
}
</style>