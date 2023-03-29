import {
  nonNullable,
  IserSidebarGallery,
  SidebarGalleryProps,
  TypeRenderer,
} from '@graphcommerce/next-ui'
import { ProductPageGalleryFragment } from './ProductPageGallery.gql'
import { Product } from '@vercel/commerce/types/product';

type ProductPageGallery_SimpleProduct_Fragment = {
  media_gallery: Product['images']
};

type ProductPageGalleryRenderers = TypeRenderer<
  NonNullable<NonNullable<ProductPageGalleryFragment['media_gallery']>[0]>
>

type ProductPageGalleryProps = ProductPageGallery_SimpleProduct_Fragment &
  Omit<SidebarGalleryProps, 'sidebar' | 'images'> & { children?: React.ReactNode }

export function IserProductPageGallery(props: ProductPageGalleryProps) {
  const {
    media_gallery,
    children,
    aspectRatio: [width, height] = [1532, 1678],
    ...sidebarProps
  } = props

  return (
    <IserSidebarGallery
      {...sidebarProps}
      sidebar={children}
      aspectRatio={[width, height]}
      images={media_gallery}
    />
  )
}
