
const studentFullname="Omkar Koli";
const studentNumber="1186168";
print=`${studentFullname} - ${studentNumber}`;
console.log(print);

const headerContent = document.querySelector(`h1`);
headerContent.innerHTML=print;
headerContent.classList.add(`headingPrimary`);




