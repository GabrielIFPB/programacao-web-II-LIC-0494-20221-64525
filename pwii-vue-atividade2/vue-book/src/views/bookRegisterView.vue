<template>
	<div class="container mt-2">
		<form>
			<div class="mb-3">
				<label for="title" class="form-label">Título do livro</label>
				<input v-model="book.title" type="text" class="form-control" id="title">
			</div>
			<div class="mb-3">
				<label for="isbn" class="form-label">ISBN</label>
				<input v-model="book.isbn"  type="text" class="form-control" id="isbn">
			</div>
			<div class="mb-3">
				<label for="yearPublication" class="form-label">Ano da publicação</label>
				<input v-model="book.yearPublication" type="text" class="form-control" id="yearPublication">
			</div>
			<div class="mb-3">
				<label for="numberPages" class="form-label">Número de páginas</label>
				<input v-model="book.numberPages" type="number" class="form-control" id="numberPages">
			</div>
			<button v-on:click="save" type="submit" class="btn btn-primary">Submit</button>
		</form>
	</div>
</template>

<script>
export default {
	name: "bokRegisterView",
	data() {
		return {
			isUpdate: false,
			book: {
				title: "",
				isbn: "",
				yearPublication: "",
				numberPages: ""
			}
		}
	},
	created() {
		if (this.$route.params.index === 0
			|| this.$route.params.index !== undefined) {
			this.isUpdate = true
			let books = this.convertBooksToArray()
			this.book = books[this.$route.params.index]
		}
	},
	methods: {
		save() {
			if (this.book.title.trim() === ''
				|| this.book.isbn.trim() === '') return

			let books = this.convertBooksToArray()
			this.saveOrUpdate(books)
			this.updateStorage(books)
			this.$router.push({ name: "books" })
			this.clean()
		},
		clean() {
			this.book.title = ""
			this.book.isbn = ""
			this.book.yearPublication = ""
			this.book.numberPages = ""
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
		},
		saveOrUpdate(books) {
			if (this.isUpdate)
				books[this.$route.params.index] = this.book
			else
				books.push(this.book)
		}
	}
}
</script>

<style scoped>

</style>