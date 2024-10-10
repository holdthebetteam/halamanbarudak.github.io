document.addEventListener("DOMContentLoaded", async function() {
	await tampilanDataAnggota();
});
function tampilanDataAnggota() {
	const dataAnggota = [
		{
		nama: 'Acep ihsan',
		namaPanggilan: 'Kacep',
		urlFacebook: 'https://www.facebook.com/profile.php?id=61560317467756',
		urlInstagram: 'https://www.instagram.com/ihsann.ql?igsh=amhuZG1lNHBmNmRm',
		urlFoto: 'foto/fotoAcep.jpg'
		},
		{
		nama: 'Andi permana',
		namaPanggilan: 'Ba a',
		urlFacebook: 'https://www.facebook.com/profile.php?id=100084829725503',
		urlInstagram: 'https://www.instagram.com/_andiiprn?igsh=MWx5bnc0cnI4ZnNhNw==',
		urlFoto: 'foto/fotoAndi.jpg'
		},
		{
		nama: 'Chandra kirana',
		namaPanggilan: 'Xucann',
		urlFacebook: 'https://www.facebook.com/candra.krn.77',
		urlInstagram: 'https://www.instagram.com/xxkucann_?igsh=ejM1Ym1zc3E2ZnZj',
		urlFoto: 'foto/fotoChandra.jpg'
		},
		{
		nama: 'Fajri',
		namaPanggilan: 'Kacong',
		urlFacebook: '',
		urlInstagram: '',
		urlFoto: 'foto/IMG-20241010-0001.png'
		},
		{
		nama: 'Muhammad rapi',
		namaPanggilan: 'Apiii rappers kelas kakap',
		urlFacebook: 'https://www.facebook.com/profile.php?id=61559653050652',
		urlInstagram: 'https://www.instagram.com/_apiiiiiiiiiiii?igsh=MW1vdDJpeTIwd2t4Mw==',
		urlFoto: 'foto/fotoRapi.jpg'
		},
		{
		nama: 'Ridwan mustopa',
		namaPanggilan: 'Kendeh',
		urlFacebook: 'https://www.facebook.com/ridwan.blondhe',
		urlInstagram: 'https://www.instagram.com/itsmewan_555?igsh=c3pwbWZmejV1bWVs',
		urlFoto: 'foto/fotoRidwan.jpg'
		},
		{
		nama: 'Rohaedi',
		namaPanggilan: 'Hadi',
		urlFacebook: 'https://www.facebook.com/profile.php?id=100083663831513',
		urlInstagram: 'https://www.instagram.com/rohaedi_21?igsh=MWdrZDJpNW15b3Aycw==',
		urlFoto: 'foto/fotoRohaedi.jpg'
		},
		{
		nama: 'Saparudin',
		namaPanggilan: 'Udin fvnky remix',
		urlFacebook: 'https://www.facebook.com/profile.php?id=100076179528055',
		urlInstagram: 'https://www.instagram.com/sapar_fvnky?igsh=NmRvNXJxeHplcGtr',
		urlFoto: 'foto/fotoSaparudin.jpg'
		},
		{
		nama: 'Wawan wahyu',
		namaPanggilan: 'Awan',
		urlFacebook: 'https://www.facebook.com/akil.fajar.9',
		urlInstagram: 'https://www.instagram.com/wawan.wahyu_27?igsh=MTFueWE0bjF3c3RudA==',
		urlFoto: 'foto/fotoWawan.jpg'
		},
		{
		nama: 'Wildan ahmad jamaludin',
		namaPanggilan: 'Samdun',
		urlFacebook: 'https://www.facebook.com/profile.php?id=100067532936863',
		urlInstagram: 'https://www.instagram.com/wildan_ahmad_jamaludin?igsh=MTAzaDYxd24zbzdnag==',
		urlFoto: 'foto/fotoWildan.jpg'
		}
	];
	let list = '';
     for (let i = 0; i < dataAnggota.length; i++) {
        list += `
        <div class="latarListAnggota">
   	     <div class="listAnggota">
   	     	<div class="fotoProfil">
   	     		<div style="background-image: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .7)), url('${dataAnggota[i].urlFoto}');">
   	     			
   	     		</div>
   	     	</div>
   	     	<div class="LatarProfil">
   	     		<div class="latarNamaProfil">
   	     			<h4>${dataAnggota[i].nama}</h4>
   	     			<p>${dataAnggota[i].namaPanggilan}</p>
   	     		</div>
   	     		<div class="latarOpsiProfil">
   	     			<div>
   	     				<a href="${dataAnggota[i].urlFacebook}">facebook</a>
   	     			</div>
   	     			<div>
   	     				<a href="${dataAnggota[i].urlInstagram}">instagram</a>
   	     			</div>
   	     		</div>
   	     	</div>
    	    </div>
        </div>
        `;
        document.getElementById('tampilan-anggota').innerHTML = list;
     }
}