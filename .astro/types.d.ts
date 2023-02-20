declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"actualite": {
"2018-07-04-ett-inlägg-på-franska.md": {
  id: "2018-07-04-ett-inlägg-på-franska.md",
  slug: "2018-07-04-ett-inlägg-på-franska",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2018-08-19-les-premiers-visiteurs.md": {
  id: "2018-08-19-les-premiers-visiteurs.md",
  slug: "2018-08-19-les-premiers-visiteurs",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2018-08-19-les-préparations.md": {
  id: "2018-08-19-les-préparations.md",
  slug: "2018-08-19-les-préparations",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2018-08-19-l´enseignement.md": {
  id: "2018-08-19-l´enseignement.md",
  slug: "2018-08-19-lenseignement",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2018-08-24-jouer-au-foot.md": {
  id: "2018-08-24-jouer-au-foot.md",
  slug: "2018-08-24-jouer-au-foot",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2018-09-20-de-retour-à-ziguinchor.md": {
  id: "2018-09-20-de-retour-à-ziguinchor.md",
  slug: "2018-09-20-de-retour-à-ziguinchor",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2018-10-01-football-3-2.md": {
  id: "2018-10-01-football-3-2.md",
  slug: "2018-10-01-football-3-2",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2018-10-11-cours-d´anglais.md": {
  id: "2018-10-11-cours-d´anglais.md",
  slug: "2018-10-11-cours-danglais",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2018-11-07-dans-les-daaras.md": {
  id: "2018-11-07-dans-les-daaras.md",
  slug: "2018-11-07-dans-les-daaras",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2018-12-18-contribution-de-sackaios.md": {
  id: "2018-12-18-contribution-de-sackaios.md",
  slug: "2018-12-18-contribution-de-sackaios",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2019-01-11-dan-le-journal.md": {
  id: "2019-01-11-dan-le-journal.md",
  slug: "2019-01-11-dan-le-journal",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2019-02-02-une-contribution.md": {
  id: "2019-02-02-une-contribution.md",
  slug: "2019-02-02-une-contribution",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2019-02-13-des-visiteuses-de-la-suède.md": {
  id: "2019-02-13-des-visiteuses-de-la-suède.md",
  slug: "2019-02-13-des-visiteuses-de-la-suède",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2019-02-17-une-expostion.md": {
  id: "2019-02-17-une-expostion.md",
  slug: "2019-02-17-une-expostion",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2019-03-03-contribution-de-colgate.md": {
  id: "2019-03-03-contribution-de-colgate.md",
  slug: "2019-03-03-contribution-de-colgate",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2019-03-28-une-visit-belge.md": {
  id: "2019-03-28-une-visit-belge.md",
  slug: "2019-03-28-une-visit-belge",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2019-03-28-une-visite-américaine.md": {
  id: "2019-03-28-une-visite-américaine.md",
  slug: "2019-03-28-une-visite-américaine",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2019-03-28-une-visite-norwégienne.md": {
  id: "2019-03-28-une-visite-norwégienne.md",
  slug: "2019-03-28-une-visite-norwégienne",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2019-05-30-un-ordinateur-neuf.md": {
  id: "2019-05-30-un-ordinateur-neuf.md",
  slug: "2019-05-30-un-ordinateur-neuf",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2019-07-13-les-magiciens.md": {
  id: "2019-07-13-les-magiciens.md",
  slug: "2019-07-13-les-magiciens",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2019-10-02-une-esposition.md": {
  id: "2019-10-02-une-esposition.md",
  slug: "2019-10-02-une-esposition",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2019-11-03-dans-la-journal.md": {
  id: "2019-11-03-dans-la-journal.md",
  slug: "2019-11-03-dans-la-journal",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2019-11-03-du-nouveau-dans-la-clinique.md": {
  id: "2019-11-03-du-nouveau-dans-la-clinique.md",
  slug: "2019-11-03-du-nouveau-dans-la-clinique",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2019-11-24-notre-premier-volontaire.md": {
  id: "2019-11-24-notre-premier-volontaire.md",
  slug: "2019-11-24-notre-premier-volontaire",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2019-12-04-encore-une-volontaire.md": {
  id: "2019-12-04-encore-une-volontaire.md",
  slug: "2019-12-04-encore-une-volontaire",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2019-12-19-joyeux-noël-et-bonne-année.md": {
  id: "2019-12-19-joyeux-noël-et-bonne-année.md",
  slug: "2019-12-19-joyeux-noël-et-bonne-année",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2020-01-24-une-visit.md": {
  id: "2020-01-24-une-visit.md",
  slug: "2020-01-24-une-visit",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2020-01-30-une-interview.md": {
  id: "2020-01-30-une-interview.md",
  slug: "2020-01-30-une-interview",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2020-05-27-la-re-ouverture.md": {
  id: "2020-05-27-la-re-ouverture.md",
  slug: "2020-05-27-la-re-ouverture",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2020-07-29-une-contribution.md": {
  id: "2020-07-29-une-contribution.md",
  slug: "2020-07-29-une-contribution",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2020-11-16-le-centre-est-fraichement-peint.md": {
  id: "2020-11-16-le-centre-est-fraichement-peint.md",
  slug: "2020-11-16-le-centre-est-fraichement-peint",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2020-12-18-joyeux-noël.md": {
  id: "2020-12-18-joyeux-noël.md",
  slug: "2020-12-18-joyeux-noël",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2021-01-29-une-visit.md": {
  id: "2021-01-29-une-visit.md",
  slug: "2021-01-29-une-visit",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2021-03-03-une-contribution.md": {
  id: "2021-03-03-une-contribution.md",
  slug: "2021-03-03-une-contribution",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2021-03-14-une-contibution-de-la-fondation-tabita.md": {
  id: "2021-03-14-une-contibution-de-la-fondation-tabita.md",
  slug: "2021-03-14-une-contibution-de-la-fondation-tabita",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2021-05-07-des-chaussures.md": {
  id: "2021-05-07-des-chaussures.md",
  slug: "2021-05-07-des-chaussures",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2021-05-17-troisième-anniversaire.md": {
  id: "2021-05-17-troisième-anniversaire.md",
  slug: "2021-05-17-troisième-anniversaire",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2021-06-30-excursion.md": {
  id: "2021-06-30-excursion.md",
  slug: "2021-06-30-excursion",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2021-08-25-nouvelle-contribution.md": {
  id: "2021-08-25-nouvelle-contribution.md",
  slug: "2021-08-25-nouvelle-contribution",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2021-10-10-nous-sommes-maintenant-sur-la-carte-google.md": {
  id: "2021-10-10-nous-sommes-maintenant-sur-la-carte-google.md",
  slug: "2021-10-10-nous-sommes-maintenant-sur-la-carte-google",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2021-11-12-des-volontaires.md": {
  id: "2021-11-12-des-volontaires.md",
  slug: "2021-11-12-des-volontaires",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2021-12-23-joyeux-noël-et-bonne-année.md": {
  id: "2021-12-23-joyeux-noël-et-bonne-année.md",
  slug: "2021-12-23-joyeux-noël-et-bonne-année",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2022-01-08-une-visite.md": {
  id: "2022-01-08-une-visite.md",
  slug: "2022-01-08-une-visite",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2022-02-27-uné-visite.md": {
  id: "2022-02-27-uné-visite.md",
  slug: "2022-02-27-uné-visite",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2022-03-16-des-volontaires.md": {
  id: "2022-03-16-des-volontaires.md",
  slug: "2022-03-16-des-volontaires",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2022-04-19-conférence-au-rotary.md": {
  id: "2022-04-19-conférence-au-rotary.md",
  slug: "2022-04-19-conférence-au-rotary",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2022-05-11-un-cadeau.md": {
  id: "2022-05-11-un-cadeau.md",
  slug: "2022-05-11-un-cadeau",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2022-08-11-un-bénévole.md": {
  id: "2022-08-11-un-bénévole.md",
  slug: "2022-08-11-un-bénévole",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2022-10-13-de-retour-à-ziguinchor.md": {
  id: "2022-10-13-de-retour-à-ziguinchor.md",
  slug: "2022-10-13-de-retour-à-ziguinchor",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
"2022-12-13-une-autre-contribution.md": {
  id: "2022-12-13-une-autre-contribution.md",
  slug: "2022-12-13-une-autre-contribution",
  body: string,
  collection: "actualite",
  data: InferEntrySchema<"actualite">
},
},
"aktuellt": {
"2018-06-19-cras-efficitur-justo-eu-tempus-volutpat.md": {
  id: "2018-06-19-cras-efficitur-justo-eu-tempus-volutpat.md",
  slug: "2018-06-19-cras-efficitur-justo-eu-tempus-volutpat",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2018-06-19-finalique-voriste-quantum.md": {
  id: "2018-06-19-finalique-voriste-quantum.md",
  slug: "2018-06-19-finalique-voriste-quantum",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2018-06-19-lorem-ipsum-ad-est-dolores.md": {
  id: "2018-06-19-lorem-ipsum-ad-est-dolores.md",
  slug: "2018-06-19-lorem-ipsum-ad-est-dolores",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2018-06-19-vestibulum-eu-risus-sit-amet-urna-tempus-luctus-ultrices-vitae.md": {
  id: "2018-06-19-vestibulum-eu-risus-sit-amet-urna-tempus-luctus-ultrices-vitae.md",
  slug: "2018-06-19-vestibulum-eu-risus-sit-amet-urna-tempus-luctus-ultrices-vitae",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2018-08-22-fotboll.md": {
  id: "2018-08-22-fotboll.md",
  slug: "2018-08-22-fotboll",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2018-09-20-åter-i-ziguinchor.md": {
  id: "2018-09-20-åter-i-ziguinchor.md",
  slug: "2018-09-20-åter-i-ziguinchor",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2018-10-01-fotboll-3-2.md": {
  id: "2018-10-01-fotboll-3-2.md",
  slug: "2018-10-01-fotboll-3-2",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2018-10-11-kurs-i-engelska.md": {
  id: "2018-10-11-kurs-i-engelska.md",
  slug: "2018-10-11-kurs-i-engelska",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2018-11-07-på-daaras.md": {
  id: "2018-11-07-på-daaras.md",
  slug: "2018-11-07-på-daaras",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2018-12-18-bidrag-från-sackaios.md": {
  id: "2018-12-18-bidrag-från-sackaios.md",
  slug: "2018-12-18-bidrag-från-sackaios",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2019-01-11-i-tidningen-8-januari.md": {
  id: "2019-01-11-i-tidningen-8-januari.md",
  slug: "2019-01-11-i-tidningen-8-januari",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2019-02-02-nytt-bidrag.md": {
  id: "2019-02-02-nytt-bidrag.md",
  slug: "2019-02-02-nytt-bidrag",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2019-02-13-besök-från-sverige.md": {
  id: "2019-02-13-besök-från-sverige.md",
  slug: "2019-02-13-besök-från-sverige",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2019-02-17-en-utställning.md": {
  id: "2019-02-17-en-utställning.md",
  slug: "2019-02-17-en-utställning",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2019-03-03-bidrag-från-colgate.md": {
  id: "2019-03-03-bidrag-från-colgate.md",
  slug: "2019-03-03-bidrag-från-colgate",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2019-03-28-besök-av-belgiskor.md": {
  id: "2019-03-28-besök-av-belgiskor.md",
  slug: "2019-03-28-besök-av-belgiskor",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2019-03-28-ett-besök-av-amerikanare.md": {
  id: "2019-03-28-ett-besök-av-amerikanare.md",
  slug: "2019-03-28-ett-besök-av-amerikanare",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2019-03-28-ett-norskt-besök.md": {
  id: "2019-03-28-ett-norskt-besök.md",
  slug: "2019-03-28-ett-norskt-besök",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2019-05-30-en-ny-dator.md": {
  id: "2019-05-30-en-ny-dator.md",
  slug: "2019-05-30-en-ny-dator",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2019-07-13-trollkonstnärer.md": {
  id: "2019-07-13-trollkonstnärer.md",
  slug: "2019-07-13-trollkonstnärer",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2019-10-02-ny-utställning.md": {
  id: "2019-10-02-ny-utställning.md",
  slug: "2019-10-02-ny-utställning",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2019-11-03-i-tidningen-29-oktober.md": {
  id: "2019-11-03-i-tidningen-29-oktober.md",
  slug: "2019-11-03-i-tidningen-29-oktober",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2019-11-03-nytt-i-kliniken.md": {
  id: "2019-11-03-nytt-i-kliniken.md",
  slug: "2019-11-03-nytt-i-kliniken",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2019-11-24-vår-första-volontär.md": {
  id: "2019-11-24-vår-första-volontär.md",
  slug: "2019-11-24-vår-första-volontär",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2019-12-04-ny-volontär.md": {
  id: "2019-12-04-ny-volontär.md",
  slug: "2019-12-04-ny-volontär",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2019-12-19-god-jul-och-gott-nytt-år.md": {
  id: "2019-12-19-god-jul-och-gott-nytt-år.md",
  slug: "2019-12-19-god-jul-och-gott-nytt-år",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2020-01-24-besök-på-centret.md": {
  id: "2020-01-24-besök-på-centret.md",
  slug: "2020-01-24-besök-på-centret",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2020-01-30-en-intervju.md": {
  id: "2020-01-30-en-intervju.md",
  slug: "2020-01-30-en-intervju",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2020-05-27-öppet-igen.md": {
  id: "2020-05-27-öppet-igen.md",
  slug: "2020-05-27-öppet-igen",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2020-07-29-nytt-bidrag.md": {
  id: "2020-07-29-nytt-bidrag.md",
  slug: "2020-07-29-nytt-bidrag",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2020-11-16-centret-är-nymålat.md": {
  id: "2020-11-16-centret-är-nymålat.md",
  slug: "2020-11-16-centret-är-nymålat",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2020-12-18-god-jul.md": {
  id: "2020-12-18-god-jul.md",
  slug: "2020-12-18-god-jul",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2021-01-29-ett-besök.md": {
  id: "2021-01-29-ett-besök.md",
  slug: "2021-01-29-ett-besök",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2021-03-03-bidrag-från-odd-fellow-barnfond.md": {
  id: "2021-03-03-bidrag-från-odd-fellow-barnfond.md",
  slug: "2021-03-03-bidrag-från-odd-fellow-barnfond",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2021-03-14-bidrag-från-stiftelsen-tabita.md": {
  id: "2021-03-14-bidrag-från-stiftelsen-tabita.md",
  slug: "2021-03-14-bidrag-från-stiftelsen-tabita",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2021-05-07-skor.md": {
  id: "2021-05-07-skor.md",
  slug: "2021-05-07-skor",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2021-05-17-3-års-jubileum.md": {
  id: "2021-05-17-3-års-jubileum.md",
  slug: "2021-05-17-3-års-jubileum",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2021-06-30-utflykt.md": {
  id: "2021-06-30-utflykt.md",
  slug: "2021-06-30-utflykt",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2021-08-25-nytt-bidrag.md": {
  id: "2021-08-25-nytt-bidrag.md",
  slug: "2021-08-25-nytt-bidrag",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2021-10-10-nu-finns-vi-på-google-map.md": {
  id: "2021-10-10-nu-finns-vi-på-google-map.md",
  slug: "2021-10-10-nu-finns-vi-på-google-map",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2021-11-12-volontärer.md": {
  id: "2021-11-12-volontärer.md",
  slug: "2021-11-12-volontärer",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2021-12-23-god-jul-gott-nytt-år.md": {
  id: "2021-12-23-god-jul-gott-nytt-år.md",
  slug: "2021-12-23-god-jul-gott-nytt-år",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2022-01-08-ett-besök.md": {
  id: "2022-01-08-ett-besök.md",
  slug: "2022-01-08-ett-besök",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2022-02-27-ännu-ett-besök.md": {
  id: "2022-02-27-ännu-ett-besök.md",
  slug: "2022-02-27-ännu-ett-besök",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2022-03-16-volontärer.md": {
  id: "2022-03-16-volontärer.md",
  slug: "2022-03-16-volontärer",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2022-04-19-föredrag-hos-rotary.md": {
  id: "2022-04-19-föredrag-hos-rotary.md",
  slug: "2022-04-19-föredrag-hos-rotary",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2022-05-11-en-gåva.md": {
  id: "2022-05-11-en-gåva.md",
  slug: "2022-05-11-en-gåva",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2022-08-11-volontär.md": {
  id: "2022-08-11-volontär.md",
  slug: "2022-08-11-volontär",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2022-10-13-åter-i-ziguinchor.md": {
  id: "2022-10-13-åter-i-ziguinchor.md",
  slug: "2022-10-13-åter-i-ziguinchor",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
"2022-12-13-ytterligare-ett-bidrag.md": {
  id: "2022-12-13-ytterligare-ett-bidrag.md",
  slug: "2022-12-13-ytterligare-ett-bidrag",
  body: string,
  collection: "aktuellt",
  data: InferEntrySchema<"aktuellt">
},
},
"en": {
"about-senegal.md": {
  id: "about-senegal.md",
  slug: "about-senegal",
  body: string,
  collection: "en",
  data: any
},
"about-us.md": {
  id: "about-us.md",
  slug: "about-us",
  body: string,
  collection: "en",
  data: any
},
"contact.md": {
  id: "contact.md",
  slug: "contact",
  body: string,
  collection: "en",
  data: any
},
"contribution.md": {
  id: "contribution.md",
  slug: "contribution",
  body: string,
  collection: "en",
  data: any
},
"index.md": {
  id: "index.md",
  slug: "index",
  body: string,
  collection: "en",
  data: any
},
"volunteer.md": {
  id: "volunteer.md",
  slug: "volunteer",
  body: string,
  collection: "en",
  data: any
},
},
"fr": {
"a-propos-de-nous.md": {
  id: "a-propos-de-nous.md",
  slug: "a-propos-de-nous",
  body: string,
  collection: "fr",
  data: any
},
"contact.md": {
  id: "contact.md",
  slug: "contact",
  body: string,
  collection: "fr",
  data: any
},
"contribution.md": {
  id: "contribution.md",
  slug: "contribution",
  body: string,
  collection: "fr",
  data: any
},
"de-senegal.md": {
  id: "de-senegal.md",
  slug: "de-senegal",
  body: string,
  collection: "fr",
  data: any
},
"index.md": {
  id: "index.md",
  slug: "index",
  body: string,
  collection: "fr",
  data: any
},
"volontaire.md": {
  id: "volontaire.md",
  slug: "volontaire",
  body: string,
  collection: "fr",
  data: any
},
},
"news": {
"2018-07-04-test-post.md": {
  id: "2018-07-04-test-post.md",
  slug: "2018-07-04-test-post",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2018-08-19-preparations.md": {
  id: "2018-08-19-preparations.md",
  slug: "2018-08-19-preparations",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2018-08-19-teaching.md": {
  id: "2018-08-19-teaching.md",
  slug: "2018-08-19-teaching",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2018-08-19-the-first-visitors.md": {
  id: "2018-08-19-the-first-visitors.md",
  slug: "2018-08-19-the-first-visitors",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2018-08-22-playing-soccer.md": {
  id: "2018-08-22-playing-soccer.md",
  slug: "2018-08-22-playing-soccer",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2018-09-20-back-in-ziguinchor.md": {
  id: "2018-09-20-back-in-ziguinchor.md",
  slug: "2018-09-20-back-in-ziguinchor",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2018-10-01-football-3-2.md": {
  id: "2018-10-01-football-3-2.md",
  slug: "2018-10-01-football-3-2",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2018-10-11-english-lessons.md": {
  id: "2018-10-11-english-lessons.md",
  slug: "2018-10-11-english-lessons",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2018-11-07-in-the-daaras.md": {
  id: "2018-11-07-in-the-daaras.md",
  slug: "2018-11-07-in-the-daaras",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2018-12-18-contribution-from-sackaios.md": {
  id: "2018-12-18-contribution-from-sackaios.md",
  slug: "2018-12-18-contribution-from-sackaios",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2019-01-11-in-the-paper.md": {
  id: "2019-01-11-in-the-paper.md",
  slug: "2019-01-11-in-the-paper",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2019-02-02-a-contribution.md": {
  id: "2019-02-02-a-contribution.md",
  slug: "2019-02-02-a-contribution",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2019-02-13-visitors-from-sweden.md": {
  id: "2019-02-13-visitors-from-sweden.md",
  slug: "2019-02-13-visitors-from-sweden",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2019-02-17-an-exhibition.md": {
  id: "2019-02-17-an-exhibition.md",
  slug: "2019-02-17-an-exhibition",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2019-03-03-contribution-from-colgate.md": {
  id: "2019-03-03-contribution-from-colgate.md",
  slug: "2019-03-03-contribution-from-colgate",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2019-03-28-a-norwegian-visit.md": {
  id: "2019-03-28-a-norwegian-visit.md",
  slug: "2019-03-28-a-norwegian-visit",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2019-03-28-americans-paying-a-visit.md": {
  id: "2019-03-28-americans-paying-a-visit.md",
  slug: "2019-03-28-americans-paying-a-visit",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2019-03-28-belgiens-came-to-see-us.md": {
  id: "2019-03-28-belgiens-came-to-see-us.md",
  slug: "2019-03-28-belgiens-came-to-see-us",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2019-05-30-a-new-computer.md": {
  id: "2019-05-30-a-new-computer.md",
  slug: "2019-05-30-a-new-computer",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2019-07-13-the-magicians.md": {
  id: "2019-07-13-the-magicians.md",
  slug: "2019-07-13-the-magicians",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2019-10-02-new-exhibition.md": {
  id: "2019-10-02-new-exhibition.md",
  slug: "2019-10-02-new-exhibition",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2019-11-03-in-the-paper.md": {
  id: "2019-11-03-in-the-paper.md",
  slug: "2019-11-03-in-the-paper",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2019-11-03-news-in-the-clinic.md": {
  id: "2019-11-03-news-in-the-clinic.md",
  slug: "2019-11-03-news-in-the-clinic",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2019-11-24-our-first-volunteer.md": {
  id: "2019-11-24-our-first-volunteer.md",
  slug: "2019-11-24-our-first-volunteer",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2019-12-04-new-volonteer.md": {
  id: "2019-12-04-new-volonteer.md",
  slug: "2019-12-04-new-volonteer",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2019-12-19-merry-christmas-and-a-happy-new-year.md": {
  id: "2019-12-19-merry-christmas-and-a-happy-new-year.md",
  slug: "2019-12-19-merry-christmas-and-a-happy-new-year",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2020-01-24-a-visit.md": {
  id: "2020-01-24-a-visit.md",
  slug: "2020-01-24-a-visit",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2020-01-30-an-interview.md": {
  id: "2020-01-30-an-interview.md",
  slug: "2020-01-30-an-interview",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2020-05-27-reopening.md": {
  id: "2020-05-27-reopening.md",
  slug: "2020-05-27-reopening",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2020-07-29-a-contribution.md": {
  id: "2020-07-29-a-contribution.md",
  slug: "2020-07-29-a-contribution",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2020-11-16-the-center-is-freshly-painted.md": {
  id: "2020-11-16-the-center-is-freshly-painted.md",
  slug: "2020-11-16-the-center-is-freshly-painted",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2020-12-18-merry-christmas.md": {
  id: "2020-12-18-merry-christmas.md",
  slug: "2020-12-18-merry-christmas",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2021-01-29-a-visit.md": {
  id: "2021-01-29-a-visit.md",
  slug: "2021-01-29-a-visit",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2021-03-03-a-contribution.md": {
  id: "2021-03-03-a-contribution.md",
  slug: "2021-03-03-a-contribution",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2021-03-14-a-contribution-from-the-tabita-foundation.md": {
  id: "2021-03-14-a-contribution-from-the-tabita-foundation.md",
  slug: "2021-03-14-a-contribution-from-the-tabita-foundation",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2021-05-07-shoes.md": {
  id: "2021-05-07-shoes.md",
  slug: "2021-05-07-shoes",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2021-05-17-three-years-anniversary.md": {
  id: "2021-05-17-three-years-anniversary.md",
  slug: "2021-05-17-three-years-anniversary",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2021-06-30-excursion.md": {
  id: "2021-06-30-excursion.md",
  slug: "2021-06-30-excursion",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2021-08-25-new-contribution.md": {
  id: "2021-08-25-new-contribution.md",
  slug: "2021-08-25-new-contribution",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2021-10-10-now-we-are-on-google-map.md": {
  id: "2021-10-10-now-we-are-on-google-map.md",
  slug: "2021-10-10-now-we-are-on-google-map",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2021-11-12-volunteer.md": {
  id: "2021-11-12-volunteer.md",
  slug: "2021-11-12-volunteer",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2021-12-23-merry-christmas-a-happy-new-year.md": {
  id: "2021-12-23-merry-christmas-a-happy-new-year.md",
  slug: "2021-12-23-merry-christmas-a-happy-new-year",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2022-01-08-a-visit.md": {
  id: "2022-01-08-a-visit.md",
  slug: "2022-01-08-a-visit",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2022-02-27-another-visit.md": {
  id: "2022-02-27-another-visit.md",
  slug: "2022-02-27-another-visit",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2022-03-16-volunteers.md": {
  id: "2022-03-16-volunteers.md",
  slug: "2022-03-16-volunteers",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2022-04-19-lecture-at-rotary.md": {
  id: "2022-04-19-lecture-at-rotary.md",
  slug: "2022-04-19-lecture-at-rotary",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2022-05-11-a-gift.md": {
  id: "2022-05-11-a-gift.md",
  slug: "2022-05-11-a-gift",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2022-08-11-a-volunteer.md": {
  id: "2022-08-11-a-volunteer.md",
  slug: "2022-08-11-a-volunteer",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2022-10-13-back-in-ziguinchor.md": {
  id: "2022-10-13-back-in-ziguinchor.md",
  slug: "2022-10-13-back-in-ziguinchor",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2022-12-13-another-contribution.md": {
  id: "2022-12-13-another-contribution.md",
  slug: "2022-12-13-another-contribution",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
},
"sv": {
"bidrag.md": {
  id: "bidrag.md",
  slug: "bidrag",
  body: string,
  collection: "sv",
  data: any
},
"index.md": {
  id: "index.md",
  slug: "index",
  body: string,
  collection: "sv",
  data: any
},
"kontakt.md": {
  id: "kontakt.md",
  slug: "kontakt",
  body: string,
  collection: "sv",
  data: any
},
"om-oss.md": {
  id: "om-oss.md",
  slug: "om-oss",
  body: string,
  collection: "sv",
  data: any
},
"om-senegal.md": {
  id: "om-senegal.md",
  slug: "om-senegal",
  body: string,
  collection: "sv",
  data: any
},
"volontar.md": {
  id: "volontar.md",
  slug: "volontar",
  body: string,
  collection: "sv",
  data: any
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
