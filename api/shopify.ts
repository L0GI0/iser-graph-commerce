const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
const API_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN

export type FetchOptions<Body = any> = {
    method?: string
    body?: Body
    headers?: HeadersInit
  }

async function ShopifyData(query: string) {
  console.log(`Domain = ${domain}`)
  console.log(`API TOKEN = ${API_TOKEN}`)

  const URL = `https://${domain}/api/2022-07/graphql.json`

  const options: FetchOptions = {
    method: "POST",
    headers: {
        'X-Shopify-Storefront-Access-Token': API_TOKEN!,
        'Content-Type': 'application/json',
        "Accept": "application/json",
      },
    body: JSON.stringify({ query })
  }

  try {
    const data = await fetch(URL, options).then(response => {
      return response.json()
    })
    console.log(`Response status = ${data.status}`)
    console.log(`Response = ${JSON.stringify(data.data.products)}`)

    return data
  } catch (error) {
    console.log(`Error = ${error}`)
    throw new Error("Products not fetched")
  }
}

export async function getAllProducts() {
  const query = `
  {
  products(first: 25) {
    edges {
      node {
        id
        title
        handle
        priceRange {
          minVariantPrice {
            amount
          }
        }
        images(first: 5) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
      }
    }
  }
}
`

  const response = await ShopifyData(query)

  const allProducts = response.data.products.edges ? response.data.products.edges : []

  return allProducts
}