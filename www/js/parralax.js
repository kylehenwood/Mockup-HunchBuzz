// ---
// Parralax hexagons
// ---
// $(document).ready(function(){
//   const hexagons = $('.js-parralax');
//
//   hexagons.each(function(){
//     const hex = $(this);
//     const modifier = hex.attr('data-modifier');
//     const translatePos = modifier*10+'px';
//
//     basicScroll.create({
//       elem: hex,
//       from: 0,
//       to: 519,
//       direct: true,
//       props: {
//         '--translateY': {
//           from: '0',
//           to: '200'
//         }
//       }
//     }).start();
//
//     console.log('working');
//   });
// });



document.querySelectorAll('.js-parralax').forEach((elem) => {

	const modifier = elem.getAttribute('data-modifier')

	basicScroll.create({
		elem: elem,
		from: 0,
		to: 519,
		direct: true,
		props: {
			'--translateY': {
				from: '0',
				to: `${ 10 * modifier }px`
			}
		}
	}).start()

})
