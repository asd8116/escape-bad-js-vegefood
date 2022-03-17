/* global axios */
const url = 'https://hexschool.github.io/js-filter-data/data.json';
const table = document.querySelector('.table-content');
const filter = document.querySelector('.filter');
let data;

const renderData = array => {
  const str = array.reduce((acc, value) => {
    const content = `
      <tr>
        <td>${value.作物名稱}</td>
        <td>${value.市場名稱}</td>
        <td>${value.上價}</td>
        <td>${value.中價}</td>
        <td>${value.下價}</td>
        <td>${value.平均價}</td>
        <td>${value.平均價}</td>
      </tr>
    `;

    acc += content;
    return acc;
  }, '');

  table.innerHTML = str;
};

const filterCategory = e => {
  if (e.target.nodeName === 'BUTTON') {
    const showData = data.filter(
      item => item.種類代碼 === e.target.dataset.category
    );

    renderData(showData);
  }
};

const fetchData = async () => {
  const res = await axios.get(url);

  data = res.data.filter(item => item.作物名稱);
  renderData(data);
};

fetchData();
filter.addEventListener('click', filterCategory);
