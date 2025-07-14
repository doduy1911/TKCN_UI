const convertDate = (isoDateString) => {
	const date = new Date(isoDateString)
	const day = date.getDate().toString().padStart(2, "0")
	const month = (date.getMonth() + 1).toString().padStart(2, "0")
	const year = date.getFullYear()

	return `${day}/${month}/${year}`
}

const getFileType = (file) => {
	const imageExtensions = ['.jpeg', '.jpg', '.jpe', '.png', '.gif', '.webp', '.svg']
	const pdfExtensions = ['.pdf']
	const documentExtensions = ['.doc', '.docx', '.xls', '.xlsx']

	if (file) {
		const fileExtension = file.substring(file.lastIndexOf('.'))

		if (imageExtensions.includes(fileExtension)) {
			return 'image'
		}
		else if (pdfExtensions.includes(fileExtension)) {
			return 'pdf'
		}
		else if (documentExtensions.includes(fileExtension)) {
			return 'document'
		}
	}
	else {
		return 'unknown'
	}
}

export { convertDate, getFileType }