<template>
	<div class="lm-content">
		<Header></Header>

		<!-- Page Content -->
		<div class="container">

			<div class="row">

				<!-- Post Content Column -->
				<div class="col-lg-8">

					<!-- Title -->
					<h1 class="mt-4">{{ post.blogTitle }}</h1>

					<!-- Author -->
					<p class="lead">
						by
						<a href="#">{{ post.userId }}</a>
					</p>

					<hr>

					<!-- Date/Time -->
					<p>Posted on {{ post.gmtCreate }}</p>
					<hr>

					<!-- Preview Image -->
					<img class="img-fluid rounded" src="http://placehold.it/900x300" v-if="post.blogImage!==null" alt="">
					<hr>

					<!-- Post Content -->
					<div class="lead markdown-body" v-html="post.blogContent">
					</div>
					<br>
					<hr>
					<blockquote class="blockquote">
						<footer class="blockquote-footer">
							<br>
							本文作者：lemoncc <br>
							本文地址： https://www.hangblog.com.cn/posts/{{post.blogId}}.html <br>
							版权声明：本博客所有文章除特别声明外，均采用 CC 4.0 BY-NC-SA 许可协议,转载请注明出处！
						</footer>
					</blockquote>
					<hr>
					<!--未开放评论区-->
					<!-- Comments Form ->
					<div class="card my-4">
						<h5 class="card-header">Leave a Comment:</h5>
						<div class="card-body">
							<form>
								<div class="form-group">
									<textarea class="form-control" rows="3"></textarea>
								</div>
								<button type="submit" class="btn btn-primary">Submit</button>
							</form>
						</div>
					</div>

					<-- Single Comment ->
					<div class="media mb-4">
						<img class="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50"
						     alt="">
						<div class="media-body">
							<h5 class="mt-0">Commenter Name</h5>
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
							ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
							viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
							Donec lacinia congue felis in faucibus.
						</div>
					</div>

					<-- Comment with nested comments ->
					<div class="media mb-4">
						<img class="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50"
						     alt="">
						<div class="media-body">
							<h5 class="mt-0">Commenter Name</h5>
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
							ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
							viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
							Donec lacinia congue felis in faucibus.

							<div class="media mt-4">
								<img class="d-flex mr-3 rounded-circle"
								     src="http://placehold.it/50x50" alt="">
								<div class="media-body">
									<h5 class="mt-0">Commenter Name</h5>
									Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
									scelerisque ante sollicitudin. Cras purus odio, vestibulum in
									vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
									nisi vulputate fringilla. Donec lacinia congue felis in
									faucibus.
								</div>
							</div>

							<div class="media mt-4">
								<img class="d-flex mr-3 rounded-circle"
								     src="http://placehold.it/50x50" alt="">
								<div class="media-body">
									<h5 class="mt-0">Commenter Name</h5>
									Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
									scelerisque ante sollicitudin. Cras purus odio, vestibulum in
									vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
									nisi vulputate fringilla. Donec lacinia congue felis in
									faucibus.
								</div>
							</div>

						</div>
					</div>
					-->
				</div>

				<!-- Sidebar Widgets Column -->
				<div class="col-md-4">

					<!-- Edit Delete Widget -->
					<div class="card my-4" v-if="ownBlog">
						<h5 class="card-header">Edit or Delete</h5>
						<div class="card-body">
							<b-button style="margin-right: 80px;margin-left: 40px" variant="success" @click="editBlog(post.blogId)">Edit</b-button>
							<b-button v-b-modal.modal-footer-lg id="btn2" variant="danger" @click="deleteBlog(post.blogId)">Delete</b-button>

							<b-modal id="modal-footer-lg" title="删除" button-size="lg">
								<p class="my-2">确定要删除吗?</p>
							</b-modal>
						</div>
					</div>

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
		<Footer></Footer>
	</div>
</template>

<script>
    import Footer from "../components/Footer";
    import Header from "../components/Header";
    import "github-markdown-css/github-markdown.css";

    export default {
        name: "BlogDetail",
        components: {Header, Footer},
        data() {
            return {
                post: {
                    blogId: "",
                    userId: "",
                    blogContent: "",
                    gmtCreate: "",
                    blogTitle: "",
                    blogImage: "",
                },
                ownBlog: false,
	            searchName: '',
                categories: ["Web", "Java", "Python", "Docker", "JavaScript", "C++"]
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
            },
		    editBlog(blogId) {
                this.$router.push("/blog/" + blogId + "/edit");
		    },
		    deleteBlog(blogId) {
                const _this = this;
                _this.$axios.get("/blog/delete/" + blogId).then(res => {
                    console.log(res);
                })
		    }
	    },
        created() {
            const blogId = this.$route.params.blogId;
            const _this = this;
            this.$axios.get("/blog/" + blogId).then(res => {
                const blog = res.data.data;
                _this.post.userId = blog.userId;
                _this.post.blogTitle = blog.blogTitle;
                _this.post.blogImage = blog.blogImage;
                _this.post.blogId = blog.blogId;
                // 因为是Markdown格式, 所以需要进行渲染
                var MarkdownIt = require("markdown-it");
                var md = new MarkdownIt();
                var result = md.render(blog.blogContent);
                _this.post.blogContent = result;
                _this.post.userId = blog.userId;

                _this.ownBlog = (blog.userId === _this.$store.getters.getUser.userId)
            })
        }
    }
</script>

<style scoped>
	.lm-content {
		padding-top: 56px;
	}

</style>