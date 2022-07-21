<template>
	<div class="container mt-2">
		<h2>Books</h2>
		<div class="row">
			<div v-for="(book, index) in books" v-bind:key="index"
				class="card me-2" style="width: 18rem;">
				<div class="card-body">
					<h5 class="card-title">{{ book.title }}</h5>
					<h6 class="card-subtitle mb-2 text-muted">{{ book.isbn }}</h6>
					<p class="card-text">
						Ano de publicação: {{ book.yearPublication }}
					</p>
					<p class="card-text">
						Número de páginas: {{ book.numberPages }}
					</p>

					<button data-bs-toggle="modal" data-bs-target="#staticBackdrop"
					        type="button" class="btn btn-outline-danger me-2">Excluir</button>

					<button v-on:click.prevent="update(index)"
						type="button" class="btn btn-outline-warning">Update</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Modal -->
	<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					...
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
					<button v-on:click.prevent="excluir(index)" data-bs-dismiss="modal"
						type="button" class="btn btn-primary">Confirm</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import api from "@/servers/apiBooks";
export default {
	name: "booksView",
	data() {
		return {
			books: []
		}
	},
	created() {
		this.books = this.convertBooksToArray()
		// this.books = api.get("/books")
		// 	.then(response => {
		// 		this.books = response.data
		// 	})
	},
	methods: {
		excluir(index) {
			let books = this.convertBooksToArray()
			books.splice(index, 1)
			this.updateStorage(books)
			this.books = books
		},
		update(index) {
			this.$router.push({
				name: "books_register",
				params: { index }
			})
		},
		convertBooksToArray() {
			if (localStorage.getItem("books"))
				return JSON.parse(localStorage.getItem("books"))
			return []
		},
		updateStorage(books) {
			localStorage.setItem(
				"books",
				JSON.stringify(books)
			)
		}
	}
}
</script>

<style scoped>

</style>