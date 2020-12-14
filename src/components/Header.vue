<template>
	<div>
		<!-- Navigation -->
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
			<div class="container">
				<a class="navbar-brand" href="/index">Lemoncc's Blog</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarResponsive">
					<ul class="navbar-nav ml-auto">
						<li :class="nav-item" v-for="(item, index) in nav">
							<a class="nav-link" @click="active(index)" :href="item.path">{{item.title}}</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
    export default {
        name: "Header",
	    data() {
            return {
                nav: [
                    {title: 'Home', path: '/home'},
                    {title: 'about', path: '/about'},
                    {title: 'archive', path: '/archive'},
                    {title: 'contact', path: '/contact'}
                ],
	            navIndex: 0
            }
	    },
	    methods: {
            active(index) {
                this.navIndex = index;
            }
	    }
    }
</script>

<style scoped>

</style>