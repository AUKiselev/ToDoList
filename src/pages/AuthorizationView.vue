<template>
  <div class="wrapper">
    <div class="auth__wrapper">
      <el-row>
        <h2 class="auth__heading">Вход в аккаунт</h2>
      </el-row>
      <el-row style="width: 100%">
        <el-form :model="authForm" class="auth__auth-form">
          <el-form-item>
            <el-input
              v-model="authForm.email"
              type="email"
              class="auth__input"
              placeholder="E-mail"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="authForm.password"
              type="password"
              class="auth__input"
              placeholder="Пароль"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="auth__submit-button" @click="onSubmit"
              >Войти</el-button
            >
          </el-form-item>
        </el-form>
      </el-row>
      <el-row>
        <span class="auth__registration-span"
          >Еще нет аккаунта?
          <a href="#" class="auth__registration-link">Регистрация</a></span
        >
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "authirization-view",

  data() {
    return {
      authForm: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    onSubmit() {},
  },
};
</script>

<style lang="sass">
.wrapper
  width: 100vw
  height: 100vh
  background-color: #E5E5E5

.auth__wrapper
  min-width: 700px
  padding: 20px
  display: flex
  flex-direction: column
  justify-content: space-between
  align-items: center
  row-gap: 20px
  background-color: #FFFFFF

  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

  box-shadow: 0px 10px 25px rgba(29, 52, 54, 0.08)
  border-radius: 10px

.el-form-item + *
  margin-top: 20px

.auth__input .el-input__inner
  padding: 10px 15px
  width: 100%
  height: 35px

  border: 1px solid rgba(40, 40, 70, 0.1)
  border-radius: 8px

.auth__submit-button
  margin: 0 50%
  transform: translateX(-50%)

.auth__registration-span
  font-family: "Nunito"
  font-weight: 400
  font-size: 12px
  line-height: 16px
  color: #000000

.auth__registration-link
  color: #29A19C
</style>
