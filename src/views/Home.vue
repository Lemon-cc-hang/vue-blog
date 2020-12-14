<template>
	<div class="lm-content">
		<Header></Header>
		<!-- Page Content -->
		<div class="container">
			<div class="row">
				<!-- Blog Entries Column -->
				<div class="col-md-8">
					<!--<h1 class="my-4">Page Heading-->
					<!--	<small>Secondary Text</small>-->
					<!--</h1>-->

					<!-- Blog Post -->
					<div class="card mb-4" v-for="blog in blogs">
						<img class="card-img-top" :src="blog.blogImage" v-if="blog.blogImage!==null" alt="Card image cap">
						<div class="card-body">
							<h2 class="card-title">{{ blog.blogTitle }}</h2>
							<p class="card-text">{{ blog.blogDescription }}</p>
							<a :href="'/blog/' + blog.blogId" class="btn btn-primary">Read More &rarr;</a>
						</div>
						<div class="card-footer text-muted">
							Posted on {{ blog.gmtCreate }} by
							<a href="#">{{ blog.userId }}</a>
						</div>
					</div>

					<!-- Pagination -->
					<!--<ul class="pagination justify-content-center mb-4">-->
					<!--	<li class="page-item">-->
					<!--		<button class="page-link" @click="page(currentPage - 1)" v-if="currentPage !== 1">&larr; Older</button>-->
					<!--	</li>-->
					<!--	<li class="page-item disabled">-->
					<!--		<button class="page-link" @click="page(currentPage + 1)" v-if="currentPage !== pages">Newer &rarr;</button>-->
					<!--	</li>-->
					<!--</ul>-->

					<div class="clearfix">
						<button class="btn btn-primary float-right" @click="page(currentPage + 1, searchName)" v-if="currentPage!==pages">Older Posts &rarr;</button>
						<button class="btn btn-primary float-left" @click="page(currentPage - 1, searchName)" v-if="currentPage!==1">&larr; Newer Posts</button>
					</div>

				</div>

				<!-- Sidebar Widgets Column -->
				<div class="col-md-4">

					<!-- Search Widget -->
					<div class="card my-4">
						<h5 class="card-header">Search</h5>
						<div class="card-body">
							<div class="input-group">
								<input type="text" class="form-control" placeholder="Search for..." v-model="searchName">
								<span class="input-group-append">
                                    <button class="btn btn-secondary" type="button" @click="page(1, searchName)">Go!</button>
                                </span>
							</div>
						</div>
					</div>

					<!-- Categories Widget -->
					<div class="card my-4">
						<h5 class="card-header">Categories
							<a href="/categories" style="float: right">more</a>
						</h5>
						<div class="card-body">
							<div class="row">
								<div class="col-lg-6">
									<ul class="list-unstyled mb-0">
										<li>
											<a href="#">{{categories[0]}}</a>
										</li>
										<li>
											<a href="#">{{categories[1]}}</a>
										</li>
										<li>
											<a href="#">{{categories[2]}}</a>
										</li>
									</ul>
								</div>
								<div class="col-lg-6">
									<ul class="list-unstyled mb-0">
										<li>
											<a href="#">{{categories[3]}}</a>
										</li>
										<li>
											<a href="#">{{categories[4]}}</a>
										</li>
										<li>
											<a href="#">{{categories[5]}}</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<!-- Side Widget -->
					<div class="card my-4">
						<h5 class="card-header">Side Widget</h5>
						<div class="card-body">
							You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
						</div>
					</div>
				</div>
			</div>
			<!-- /.row -->

		</div>
		<!-- /.container -->
		<Footer></Footer>
	</div>
</template>

<script>
	import Header from "../components/Header";
    import Footer from "../components/Footer";
    export default {
        name: 'Home',
        components: {Header, Footer},
	    data() {
            return {
                blogs: {},
                categories: ["Web", "Java", "Python", "Docker", "JavaScript", "C++"],
	            currentPage: '',
	            pages: "",
	            pageSize: "",
	            searchName: "",
            }
	    },
	    methods: {
            page(currentPage, searchName) {
                const _this = this;
                _this.$axios.get("/blogs?currentPage=" + currentPage + "&searchName=" + searchName).then(res => {
                    _this.$router.push("/home");
                    _this.blogs = res.data.data.records;
                    _this.currentPage = res.data.data.current;
                    _this.searchName = searchName;
                    _this.pages = res.data.data.pages;
                    _this.pageSize = res.data.data.size;
                })
            }
	    },
	    created() {
            this.page(1, "");
        }
    }
</script>

<style scoped>
	.lm-content {
		padding-top: 70px;
	}
</style>