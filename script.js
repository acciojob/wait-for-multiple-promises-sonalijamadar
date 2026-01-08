//your JS code here. If required.
const output = document.getElementById("output");
output.innerHTML = `
  <tr id="loading">
    <td colspan="2">Loading...</td>
  </tr>
`;

function createPromise() {
  const time = Math.random() * 2 + 1; // random between 1 and 3 seconds

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time * 1000);
  });
}
const promise1 = createPromise();
const promise2 = createPromise();
const promise3 = createPromise();

Promise.all([promise1, promise2, promise3]).then((results) => {
  output.innerHTML = "";
  let maxTime = Math.max(...results);
	results.forEach((time, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>Promise ${index + 1}</td>
      <td>${time.toFixed(3)}</td>
    `;
    output.appendChild(row);
  });

	const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td>Total</td>
    <td>${maxTime.toFixed(3)}</td>
  `;
  output.appendChild(totalRow);
});
	