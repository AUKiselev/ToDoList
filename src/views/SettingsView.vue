<template>
  <div class="settings__wrapper">
    <el-from :model="settingsForm">
      <el-row>
        <el-form-item label="Новый логин:">
          <el-input
            v-model="settingsForm.username"
            class="settings__input"
          ></el-input>
        </el-form-item>
        <el-form-item label="Новая почта:">
          <el-input
            v-model="settingsForm.email"
            class="settings__input"
          ></el-input>
        </el-form-item>
        <el-form-item label="Сменить пароль:">
          <el-input
            v-model="settingsForm.password"
            class="settings__input"
          ></el-input>
        </el-form-item>
        <el-form-item label="Повторите новый пароль:">
          <el-input
            v-model="settingsForm.repeatPass"
            class="settings__input"
          ></el-input>
        </el-form-item>
        <el-row>
          <el-form-item>
            <div class="settings__submit-button-wrapper">
              <el-button class="settings__submit" @click="onSubmit">
                Сохранить изменения
              </el-button>
            </div>
          </el-form-item>
        </el-row>
      </el-row>
    </el-from>
  </div>
</template>

<script>
export default {
  name: "settings-view",

  data() {
    return {
      settingsForm: {
        username: "",
        email: "",
        password: "",
        repeatPass: "",
      },
    };
  },
};
</script>

<style lang="sass">
.settings__wrapper
  min-width: 700px
  margin: 0 auto
  padding: 20px
  display: flex
  flex-direction: column
  justify-content: space-between

  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

  background-color: $white
  box-shadow: $wrapper-box-shadow

  border-radius: 10px

.settings__input .el-input__inner
  padding: 10px 15px
  width: 100%
  height: 35px

  border: $element-border
  border-radius: 8px

.settings__wrapper .el-form-item__label
  margin-left: 10px

  font-family: $nunito
  font-size: $fz14
  line-height: 18px
  font-weight: $fw600
  color: $black

.el-form-item__label + *
  margin-top: 10px

.settings__submit-button-wrapper
  margin-top: 20px
  display: flex
  justify-content: space-around
</style>
