// write code here
const array = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-01' },
  { name: 'watermelon', birth: '1985-12-01' }
];

const result = array.map(item => {
  const birthYear = new Date(item.birth).getFullYear();
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  return { ...item, age };
});

console.log(result);
