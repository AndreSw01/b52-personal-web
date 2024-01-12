//project
const projects = []

function displayProjects() {
	const outputContent = document.getElementById('outputContent')
	outputContent.innerHTML = '' // Kosongkan konten sebelum menampilkan data baru

	// Add h4 element outside the loop
	const h4Element = document.createElement('h4')
	h4Element.className = 'text-center' // Menambahkan kelas text-center
	h4Element.textContent = 'My Projects'
	outputContent.appendChild(h4Element)

	// Create a card container div
	let cardContainer = document.createElement('div')
	cardContainer.className = 'row row-cols-1 row-cols-md-3 mb-4'

	// Create a card for each project
	projects.forEach((project, index) => {
		//edit
		// Menghitung waktu
		const duration = Math.abs(project.endDate - project.startDate)

		// Mengonversi selisih waktu ke dalam bentuk durasi (hari, jam, menit, detik)
		const durasiHari = Math.floor(duration / (1000 * 60 * 60 * 24))
		const durasiTahun = Math.floor(durasiHari / 365)
		const durasiBulan = Math.floor((durasiHari % 365) / 30)
		const durasiHariFinal = durasiHari % 30

		// Convert selected technologies to icons
		const checkboxes = document.querySelectorAll('input[name="technology"]:checked')
		const technologyIcons = Array.from(checkboxes)
			.map((tech) => {
				switch (tech.value) {
					case 'Node.Js':
						return '<i class="bx bxl-nodejs"></i>'
					case 'Python':
						return '<i class="bx bxl-python"></i>'
					case 'React.Js':
						return '<i class="bx bxl-react"></i>'
					case 'Typescript':
						return '<i class="bx bxl-typescript"></i>'
					// Add more cases for other technologies as needed
					default:
						return '' // Handle unknown technologies or add a default icon
				}
			})
			.join('')

		const card = document.createElement('div')
		card.className = 'col-md-4'
		card.innerHTML = `
            <div class="card h-100 shadow">
                <div card>
                    <img src="${project.imageLink}" alt="Project Image" class="card-img-top " style="object-fit: cover;">
                </div>
                <div class="card-body">
                    <h5 class="card-title mb-2">${project.projectName}</h5>
                    <small class="text-muted">Duration: ${durasiTahun} years, ${durasiBulan} months, ${durasiHariFinal} days</small>
                    <p class="card-text">${project.description}</p>
                </div>
                <div class="card-footer bg-transparent border-top">
                    <div class=" row mt-2">
                        <div class="d-flex">
                            <a href="#" style="font-size: 2em; color: black; margin-right: 10px; text-decoration: none;">
                                ${technologyIcons}
                            </a>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center mt-3">
                        <a href="#" class="btn btn-dark btn-sm mr-2"><b>Edit</b></a>
                        <a href="#" class="btn btn-danger btn-sm"><b>Delete</b></a>
                    </div>
                </div>
            </div>
        `

		// Add the card to the card container
		cardContainer.appendChild(card)
	})

	// Append the card container to the output content
	outputContent.appendChild(cardContainer)
}

function Submit(e) {
	e.preventDefault()

	// Ambil nilai dari elemen-elemen form
	const projectName = document.getElementById('projectname').value
	const description = document.getElementById('description').value
	const image = document.getElementById('upload').files[0]

	const imageLink = URL.createObjectURL(image)

	// Mendapatkan dua input tanggal
	const startDateString = document.getElementById('datestart').value
	const endDateString = document.getElementById('dateend').value

	// Mengonversi string tanggal menjadi objek Date
	const startDate = new Date(startDateString)
	const endDate = new Date(endDateString)

	// Menghitung selisih waktu antara dua tanggal
	const duration = Math.abs(endDate - startDate)

	// Mengonversi selisih waktu ke dalam bentuk durasi (hari, jam, menit, detik)
	const durasiHari = Math.floor(duration / (1000 * 60 * 60 * 24))
	const durasiTahun = Math.floor(durasiHari / 365)
	const durasiBulan = Math.floor((durasiHari % 365) / 30)
	const durasiHariFinal = durasiHari % 30
	const durasiJam = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
	const durasiMenit = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60))
	const durasiDetik = Math.floor((duration % (1000 * 60)) / 1000)
	console.log('Durasi: ' + durasiTahun + ' tahun, ' + durasiBulan + ' bulan, ' + durasiHariFinal + ' hari, ' + durasiJam + ' jam, ' + durasiMenit + ' menit, ' + durasiDetik + ' detik.')

	// Ambil nilai dari checkbox technology
	const technologies = Array.from(document.querySelectorAll('input[name="technology"]:checked')).map((tech) => tech.value)
	const checkboxes = document.querySelectorAll('input[name="technology"]:checked')

	// Convert selected technologies to icons
	const technologyIcons = Array.from(checkboxes)
		.map((tech) => {
			switch (tech.value) {
				case 'Node.Js':
					return '<i class="bx bxl-nodejs"></i>'
				case 'Python':
					return '<i class="bx bxl-python"></i>'
				case 'React.Js':
					return '<i class="bx bxl-react"></i>'
				case 'Typescript':
					return '<i class="bx bxl-typescript"></i>'
				// Add more cases for other technologies as needed
				default:
					return '' // Handle unknown technologies or add a default icon
			}
		})
		.join('')

	// Simpan data ke dalam objek project
	const newProject = {
		projectName,
		startDate,
		endDate,
		description,
		technologyIcons: technologies,
		imageLink,
	}

	// Tambahkan objek project ke dalam array projects
	projects.unshift(newProject)

	// Panggil fungsi untuk menampilkan data
	displayProjects()

	// Reset nilai form setelah submit
	document.getElementById('projectname').value = ''
	document.getElementById('datestart').value = ''
	document.getElementById('dateend').value = ''
	document.getElementById('description').value = ''
	document.getElementById('upload').value = ''
	checkboxes.forEach((checkbox) => (checkbox.checked = false))
}
