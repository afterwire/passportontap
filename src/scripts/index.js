import '../styles/index.scss';
import '../../public/beer-1.jpg';

console.log('webpack starterkit');

document.querySelector('.locations__btn').addEventListener('click', function(){
  document.querySelector('.is-hidden').classList.remove('is-hidden');
  document.querySelector('.locations__btn').classList.add('is-hidden');
});