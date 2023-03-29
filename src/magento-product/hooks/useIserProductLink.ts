import { ProductLinkFragment } from './ProductLink.gql'

export type ProductLinkProps = Omit<ProductLinkFragment, 'uid'>

export const productRoute = import.meta.graphCommerce.productRoute ?? '/p/'

export function iserProductLink(link: string | undefined) {
  return `${productRoute}${link}`
}

export function useIserProductLink(link: string | undefined) {
  return iserProductLink(link)
}
