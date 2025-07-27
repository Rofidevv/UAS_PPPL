const ctx = document.getElementById("myChart");
function getGradient(ctx, chartArea) {
  let gradient = ctx.createLinearGradient(
    0,
    chartArea.bottom,
    0,
    chartArea.top
  );
  gradient.addColorStop(0.9, "rgba(21, 123, 248, .2)");
  gradient.addColorStop(0, "transparent");
  return gradient;
}

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Mar", "April", "May", "Jun", "Jul", "Aug", "Sept", "Oct"],
    datasets: [
      {
        data: [3, 2, 5, 4, 19, 12, 20, 17, 15, 21],
        borderWidth: 2,
        borderColor: "#157bf8",
        lineTension: 0.8,
        fill: true,
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          // This case happens on initial chart load
          if (!chartArea) return;
          return getGradient(ctx, chartArea);
        },
      },
    ],
  },
  options: {
    responsive: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

/* ====  Transactions  ======== */
const transactions = [
  {
    status: 1,
    name: "Emmanuel Eze",
    image: "assets/flutterwave.jpg",
    email: "emmy@gmail.com",
    date: new Date().toLocaleDateString(),
    amount: "$230",
  },
  {
    status: 2,
    name: "James",
    image: "./assets/paystack.png",
    email: "james@gmail.com",
    date: new Date().toLocaleDateString(),
    amount: "$50",
  },
  {
    status: 1,
    name: "Oluoma Patience",
    image: "./assets/paypal.png",
    email: "oluoma.patience@gmail.com",
    date: new Date().toLocaleDateString(),
    amount: "$100",
  },
  {
    status: 0,
    name: "Daniel Kasi",
    image: "./assets/profile.jpg",
    email: "kasi@gmail.com",
    date: new Date().toLocaleDateString(),
    amount: "$5",
  },
];
function shortenTextFromStart(text, maxLength) {
  return text.length > maxLength ? "..." + text.slice(-maxLength) : text;
}
transactions.forEach((data) => {
  let status =
    data.status === 1 ? "Success" : data.status === 0 ? "Failed" : "Processing";

  document.querySelector(".transactions table tbody").insertAdjacentHTML(
    "beforeend",
    `
    <tr>
        <td class="minimize">
         <div class="profile">
           <img src="${data.image}"/>
         </div>
        </td>
        <td title="${data.name}" class="minimize">${data.name}</td>
        <td class="minimize">${data.date}</td>
        <td title="${data.email}">${shortenTextFromStart(data.email, 11)}</td>
        <td title="${data.amount}">${data.amount}</td>
        <td>
           <div class="${status}">${status}</div>
        </td>
    </tr>
    `
  );
});


/* Theme toggle */
const themeToggle = document.querySelector(".theme-toggle");
const html = document.firstElementChild;

themeToggle.onclick = () => {
    html.classList.toggle("dark");
}