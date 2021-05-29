

const url = "https://noroffcors.herokuapp.com/https://api.skole.tech/wp-json/wp/v2/posts";

const cardContainer = document.querySelector(".card")

async function getBlog() {
	try {
		const response = await fetch(url);
		const jsonResults = await response.json();
		const blogCard = jsonResults
		console.log(blogCard);

		blogCard.forEach(function (value,index) {
			document.querySelector('main').innerHTML += `
			<div class="card" style="display: ${index>=6 ? "none" : "flex"}">
			<a href="postDetail.html?id=${value.id}">
			<img class="cardImg" src="${value.better_featured_image.media_details.sizes.medium.source_url}" />
			<h4 id="cardTitle">${value.title.rendered}</h4>
			</a>
			</div>
        `;
		});
	} catch (error) {
		document.querySelector('.alert') += showAlertTouser(error, 'something is wrong');
	} finally {
		setTimeout(function () {
			document.querySelector('.alert').innerHTML = '';
		}, 3000);
	}
}

getBlog();