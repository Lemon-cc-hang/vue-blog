<template>
	<div class="lm-content">
		<Header></Header>
		<b-form @submit="onSubmit" @reset="onReset" v-if="show">
			<b-form-group
					id="input-group-1"
					label="标题:"
					label-for="input-1">
				<b-form-input
						id="input-1"
						v-model="form.blogTitle"
						required
						placeholder="Enter title"
				></b-form-input>
			</b-form-group>

			<b-form-group id="input-group-2" label="子标题:" label-for="input-2">
				<b-form-input
						id="input-2"
						v-model="form.blogSubtitle"
						required
						placeholder="Enter subtitle"
				></b-form-input>
			</b-form-group>

			<b-form-group id="input-group-3" label="博文描述:" label-for="input-3">
				<b-form-input
						id="input-3"
						v-model="form.blogDescription"
						required
						placeholder="Enter description"
				></b-form-input>
			</b-form-group>

			<b-form-group id="input-group-4" label="博文内容:" label-for="textarea">
				<mavon-editor v-model="form.blogContent"></mavon-editor>
			</b-form-group>

			<b-button type="submit" variant="primary">Submit</b-button>
			<b-button type="reset" variant="danger">Reset</b-button>
		</b-form>
	</div>
</template>

<script>
    import Header from "../../components/Header";

    export default {
        name: "About",
        components: {Header},
        data() {
            return {
                form: {
                    blogId: '',
                    blogTitle: '',
	                blogSubtitle: '',
	                blogDescription: '',
	                blogContent: '',
                    userId: '',
	                blogImage: ''
                },
                show: true
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                const _this = this;
                _this.$axios.post("/blog/edit", this.form, {
                    headers: {
                        "Authorization": localStorage.getItem("token")
                    }
                }).then(res=>{
                    console.log(res);
                })
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.form.email = ''
                this.form.name = ''
                this.form.food = null
                this.form.checked = []
                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            }
        },
	    created() {
            const blogId = this.$route.params.blogId;
            const _this = this;
            if (blogId) {
                this.$axios.get('/blog/' + blogId).then(res=>{
                    console.log(res);
                    _this.form = res.data.data;
                })
            }
        }
    }
</script>

<style scoped>
	.lm-content {
		max-width: 1400px;
		margin: 0 auto;
		padding-top: 70px;
		text-align: center;
	}
</style>