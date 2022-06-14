<template>
  <div class="wrapper">
    <div class="registration__wrapper">
      <el-row>
        <h2 class="registration__heading">Регистрация</h2>
      </el-row>
      <el-form :model="registrationForm" style="width: 100%">
        <el-row>
          <el-form-item label="Ваше имя">
            <el-input
              v-model="registrationForm.username"
              class="registration__input"
              placeholder="Введите имя"
            />
          </el-form-item>
          <el-form-item label="Ваш E-mail">
            <el-input
              v-model="registrationForm.email"
              type="email"
              class="registration__input"
              placeholder="Введите почту"
            />
          </el-form-item>
          <el-form-item label="Ваш пароль">
            <el-input
              v-model="registrationForm.password"
              type="password"
              class="registration__input"
              placeholder="Введите пароль"
            />
          </el-form-item>
          <el-form-item label="Повторите пароль">
            <el-input
              v-model="registrationForm.repeatPass"
              type="password"
              class="registration__input"
              placeholder="Повторите пароль"
            />
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item>
            <el-button class="registration__submit" @click="onSubmit"
              >Зарегистрироваться</el-button
            >
          </el-form-item>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "@/store/user";
import router from "@/router/router";
// import MainPageVue from './MainPage.vue';
// import { storeToRefs } from "pinia";

export default {
  name: "registration-viev",

  setup() {
    const userStore = useUserStore();
    const { registration, getToken } = userStore;

    return { registration, getToken };
  },

  data() {
    return {
      registrationForm: {
        username: "",
        email: "",
        password: "",
        repeatPass: "",
      },
    };
  },

  // computed: {
  //   passIsMatch() {
  //     return this.password === this.repeatPass || this.password;
  //   },
  // },

  methods: {
    async onSubmit() {
      await this.registration(
        this.registrationForm.email,
        this.registrationForm.username,
        this.registrationForm.password
      )
        .then((resolve) => {
          this.getToken(resolve.username, resolve.password);
        })
        .then(() => {
          router.push({ name: "mainPage" });
        });
    },
  },
};
</script>

<style lang="sass">
.wrapper
  width: 100vw
  height: 100vh
  background-color: $gray-background

.registration__wrapper
  min-width: 700px
  padding: 20px
  display: flex
  flex-direction: column
  justify-content: space-between
  align-items: center
  row-gap: 20px
  background-color: $white

  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

  box-shadow: $wrapper-box-shadow
  border-radius: 10px

.registration__input .el-input__inner
  padding: 10px 15px
  width: 100%
  height: 35px

  border: $element-border
  border-radius: 8px

.registration__wrapper .el-form-item__label
  margin-left: 10px

  font-family: $nunito
  font-size: $fz16
  line-height: 18px
  font-weight: $fw600
  color: $main-elements-color

.registration__wrapper .el-form-item__content
  margin-top: 10px

.registration__submit
  margin: 20px 50% 0 50%
  transform: translateX(-50%)
</style>
