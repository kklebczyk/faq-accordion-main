
const pytania = document.querySelectorAll(".pytanie");
const odpowiedzi = document.querySelectorAll(".odp");
const plusik = document.querySelectorAll(".plusik");
const minusik = document.querySelectorAll(".minusik");

pytania.forEach((pytanie, index) => {
   pytanie.addEventListener("click", () => {
       const plus = plusik[index];
       const minus = minusik[index]; 
       const odpowiedz = odpowiedzi[index];
       if(!odpowiedz.classList.contains('widoczny')){
           odpowiedz.classList.add('widoczny');
           minus.style.display = 'block';
           plus.style.display = 'none';
       } else {
           odpowiedz.classList.remove('widoczny');
           plus.style.display = 'block';
           minus.style.display = 'none';
       }
   });
});