interface IFinalCta {
  title: string
  description_desktop: string
  description_mobile: string
  collections: {
    id: string
    collection_name: string
    link: string
    image: string
  }[]
}
