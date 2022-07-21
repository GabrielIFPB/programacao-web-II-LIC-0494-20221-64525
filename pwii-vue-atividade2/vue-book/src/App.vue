<template>
	<nav class="navbar navbar-dark bg-dark navbar-expand-lg">
		<div class="container-fluid">
			<a class="navbar-brand" to="/">Vue Book</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div class="navbar-nav">
					<router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
					<router-link class="nav-link" to="/books">Books</router-link>
					<router-link class="nav-link" to="/books/register">Form book</router-link>
					<a class="nav-link disabled">Disabled</a>
				</div>
			</div>
		</div>
<!--        <router-link to="/about">About</router-link>-->
  </nav>
  <router-view/>
</template>

<style>

</style>
