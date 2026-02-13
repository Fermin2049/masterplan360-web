const partials = [
	"/partials/base.html",
	"/partials/work.html",
	"/partials/prototypes.html",
	"/partials/press.html",
	"/partials/info.html",
	"/partials/contact.html",
	"/partials/work-detail.html",
	"/partials/press-detail.html",
	"/partials/prototypes-detail.html",
	"/partials/chrome.html"
];

const app = document.getElementById("app");

async function loadPartials() {
	for (const partial of partials) {
		const res = await fetch(partial);
		if (!res.ok) {
			throw new Error(`Failed to load ${partial}`);
		}
		const html = await res.text();
		app.insertAdjacentHTML("beforeend", html);
	}
}

loadPartials()
	.then(() => {
		window.APP?.init?.();
	})
	.catch((err) => {
		console.error(err);
	});
