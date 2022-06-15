<template>
  <div class="wrapper">
    <div class="auth__wrapper">
      <el-row>
        <h2 class="auth__heading">Вход в аккаунт</h2>
      </el-row>
      <el-row style="width: 100%">
        <el-form
          :model="authForm"
          @keydown.enter="onSubmit"
          class="auth__auth-form"
        >
          <el-form-item>
            <el-input
              v-model="authForm.username"
              class="auth__input"
              placeholder="Логин"
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
            <div class="auth__submit-button-wrapper">
              <el-button class="auth__submit-button" @click="onSubmit">
                Войти
              </el-button>
            </div>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row>
        <span class="auth__registration-span"
          >Еще нет аккаунта?
          <router-link
            class="auth__registration-link"
            :to="{ name: 'registration' }"
            >Регистрация</router-link
          >
        </span>
      </el-row>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "@/store/user";
import router from "@/router/router";
import { useTasksStore } from "@/store/tasks";
import { storeToRefs } from "pinia";
export default {
  name: "authirization-view",

  setup() {
    const userStore = useUserStore();
    const tasksStore = useTasksStore();
    const { accessToken } = storeToRefs(userStore);
    const { setTasks } = tasksStore;
    const { getToken } = userStore;

    return { getToken, setTasks, accessToken };
  },

  data() {
    return {
      authForm: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    async onSubmit() {
      await this.getToken(this.authForm.username, this.authForm.password)
        .then(() => {
          this.setTasks();
        })
        .then(() => {
          router.push({ name: "mainPage" });
        });
    },
  },
};
</script>

<style lang="sass">
.auth__wrapper
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

  @media (max-width: 768px)
    top: 40vh
    min-width: 90vw
    padding: 10px

.el-form-item + *
  margin-top: 20px

.auth__submit-button-wrapper
  display: flex
  justify-content: space-around

.auth__registration-span
  font-family: $nunito
  font-weight: $fw400
  font-size: $fz12
  line-height: 16px
  color: $black

.auth__registration-link
  color: $main-elements-color
</style>
