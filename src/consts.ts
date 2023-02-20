// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Debout pour les Enfants';
export const SITE_DESCRIPTION = 'We are an non-profit organization which goal is to make life a little better for the street children in Ziguinchor, a city in southern Senegal.';

export const getSiteTitle = ({ title, lang }) => {
	const localeTitle = getLocaleTitle(lang)
	if (title) {
		return `${title} | ${localeTitle}`
	}
	return localeTitle
}

export const getLocaleTitle = ({ lang }) => {
	switch (lang) {
		case 'sv':
			return 'Debout pour les Enfants — Stå upp för barnen';
		case 'en':
			return 'Debout pour les Enfants — Stand up for the Children';
		case 'fr':
			return 'Debout pour les Enfants';
		default:
			return SITE_TITLE
	}
}


export const getSiteDescription = (lang) => {
	switch (lang) {
		case 'sv':
			return 'Vi är en ideell organisation som genom att driva ett center vill göra livet lite bättre för gatubarnen i Ziguinchor, en stad i södra Senegal.';
		case 'en':
			return 'We are an non-profit organization which goal is to make life a little better for the street children in Ziguinchor, a city in southern Senegal.';
		case 'fr':
			return 'Nous sommes une organisation non lucrative qui dirige un centre pour rendre la vie un peu meilleure pour les enfants des rues de Ziguinchor, une ville du sud du Sénégal.';
		default:
			return SITE_DESCRIPTION
	}
}