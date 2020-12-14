<template>
	<div class="lm-content">
		<b-form @submit="onSubmit" @reset="onReset" v-if="show">
			<b-form-group
					id="fieldset-1"
					label="用户名: "
					label-for="input-1"
					:invalid-feedback="invalidUsername"
					:valid-feedback="validField"
					:state="stateUsername">
				<b-form-input id="input-1" v-model="form.userName" :state="stateUsername" trim></b-form-input>
			</b-form-group>
			<b-form-group
					id="fieldset-2"
					label="密码: "
					label-for="input-2"
					:invalid-feedback="invalidPassword"
					:valid-feedback="validField"
					:state="statePassword">
				<b-form-input id="input-2" type="password" v-model="form.userPassword" :state="statePassword" trim></b-form-input>
			</b-form-group>

			<b-button type="submit" variant="primary">Login</b-button>
			<b-button type="reset" variant="danger">Reset</b-button>
		</b-form>
	</div>
</template>

<script>
    export default {
        name: "Login",
        computed: {
            stateUsername() {
                return this.form.userName.length >= 4;
            },
	        statePassword() {
                return this.form.userPassword.length >= 6 && this.form.userPassword.length < 16;
	        },
            invalidUsername() {
                if (this.form.userName.length > 4) {
                    return ''
                } else if (this.form.userName.length > 0) {
                    return 'Enter at least 4 characters'
                } else {
                    return 'Please enter username'
                }
            },
            invalidPassword() {
                if (this.form.userPassword.length > 6) {
                    return '';
                } else if (this.form.userPassword.length > 0) {
                    return 'Enter at least 6 characters';
                } else if (this.form.userPassword.length > 16) {
                    return 'Enter at most 16 characters';
                } else {
                    return 'Please enter password';
                }
            },
            validField() {
                return this.state === true ? 'Legal format' : ''
            }
        },
        data() {
            return {
                form: {
                    userName: "lemoncc",
	                userPassword: "111111"
                },
	            show: true
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                console.log(1);
                const _this = this;
                this.$axios.post('/login', this.form).then(res => {
                    console.log(res);
                    const jwt = res.headers['authorization'];
                    const userInfo = res.data.data;
                    // console.log(userInfo)
                    // 因为vue 是单一组件刷新, 所以要全局配置参数
                    // 把数据共享出去
                    _this.$store.commit("SET_TOKEN", jwt);
                    _this.$store.commit("SET_USERINFO", userInfo);

                    // 获取
                    // console.log(_this.$store.getters.getUser);

                    _this.$router.push("/home");
                });
            },
            onReset(evt) {
                evt.preventDefault()
                this.form.userName = '';
                this.form.userPassword = '';
                // Trick to reset/clear native browser form validation state
                this.show = false;
                this.$nextTick(() => {
                    this.show = true;
                })
            }
        }
    }
</script>

<style scoped>
	.lm-content {
		max-width: 960px;
		margin: 50px auto;
		text-align: center;
	}
</style>