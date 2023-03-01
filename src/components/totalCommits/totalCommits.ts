import Chart from "chart.js/auto";

export function totalCommits() {
	const cxs = document.querySelector("#commitsChart") as HTMLCanvasElement;
	const dataObj = {
		labels: ["Red", "Blue", "Yellow"],
		datasets: [
			{
				label: "My First Dataset",
				data: [300, 50, 100],
				backgroundColor: [
					"rgb(255, 99, 132)",
					"rgb(54, 162, 235)",
					"rgb(255, 205, 86)",
				],
				hoverOffset: 10,
			},
		],
	};

	new Chart(cxs, {
		type: "doughnut",
		data: dataObj,
	});
}
