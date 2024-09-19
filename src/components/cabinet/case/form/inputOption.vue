<template>
    <div class="input-wrapper">
        <div class="form-input">
            <slot name="text"></slot>
        </div>
        <slot name="button"></slot>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.input-wrapper {
    width: 100%;
    display: flex;
}
.form-input {
    overflow: hidden;
    width: 100%;
    background-color: #fff;
    padding: 14px 16px;
    border: 2px solid #dda06b;
    cursor: pointer;
    box-sizing: border-box;
    background-image: url('../../../../../public/cabinteTeacher/case/input-option-svg.svg');
    background-repeat: no-repeat;
    background-position: calc(100% - 23px);
}
</style>
