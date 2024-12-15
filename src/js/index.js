const logoG1=document.querySelector('.g1');
const logoO1=document.querySelector('.o1');
const logoO2=document.querySelector('.o2');
const logoG2=document.querySelector('.g2');
const logoL=document.querySelector('.l');
const logoE=document.querySelector('.e');
const btnOddity=document.querySelector('.oddity');


const handleClick=event=>{
    logoG1.textContent='O';
    logoO1.textContent='d';
    logoO2.textContent='d';
    logoG2.textContent='i';
    logoL.textContent='t';
    logoE.textContent='y'
}

btnOddity.addEventListener("click", handleClick);

