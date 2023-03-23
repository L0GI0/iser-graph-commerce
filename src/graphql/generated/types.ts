/* eslint-disable */
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AddBundleProductsToCartOutputKeySpecifier = ('cart' | AddBundleProductsToCartOutputKeySpecifier)[];
export type AddBundleProductsToCartOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddConfigurableProductsToCartOutputKeySpecifier = ('cart' | AddConfigurableProductsToCartOutputKeySpecifier)[];
export type AddConfigurableProductsToCartOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddDownloadableProductsToCartOutputKeySpecifier = ('cart' | AddDownloadableProductsToCartOutputKeySpecifier)[];
export type AddDownloadableProductsToCartOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddProductsToCartOutputKeySpecifier = ('cart' | 'user_errors' | AddProductsToCartOutputKeySpecifier)[];
export type AddProductsToCartOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>,
	user_errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddProductsToWishlistOutputKeySpecifier = ('user_errors' | 'wishlist' | AddProductsToWishlistOutputKeySpecifier)[];
export type AddProductsToWishlistOutputFieldPolicy = {
	user_errors?: FieldPolicy<any> | FieldReadFunction<any>,
	wishlist?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddSimpleProductsToCartOutputKeySpecifier = ('cart' | AddSimpleProductsToCartOutputKeySpecifier)[];
export type AddSimpleProductsToCartOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddVirtualProductsToCartOutputKeySpecifier = ('cart' | AddVirtualProductsToCartOutputKeySpecifier)[];
export type AddVirtualProductsToCartOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddWishlistItemsToCartOutputKeySpecifier = ('add_wishlist_items_to_cart_user_errors' | 'status' | 'wishlist' | AddWishlistItemsToCartOutputKeySpecifier)[];
export type AddWishlistItemsToCartOutputFieldPolicy = {
	add_wishlist_items_to_cart_user_errors?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	wishlist?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateKeySpecifier = ('count' | AggregateKeySpecifier)[];
export type AggregateFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregationKeySpecifier = ('attribute_code' | 'count' | 'label' | 'options' | 'position' | AggregationKeySpecifier)[];
export type AggregationFieldPolicy = {
	attribute_code?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	options?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregationOptionKeySpecifier = ('count' | 'label' | 'value' | AggregationOptionKeySpecifier)[];
export type AggregationOptionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregationOptionInterfaceKeySpecifier = ('count' | 'label' | 'value' | AggregationOptionInterfaceKeySpecifier)[];
export type AggregationOptionInterfaceFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppliedCouponKeySpecifier = ('code' | AppliedCouponKeySpecifier)[];
export type AppliedCouponFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplyCouponToCartOutputKeySpecifier = ('cart' | ApplyCouponToCartOutputKeySpecifier)[];
export type ApplyCouponToCartOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssetKeySpecifier = ('alt' | 'assetPage' | 'assetPageLink' | 'assetRowHeroBanner' | 'assetRowProduct' | 'fileName' | 'handle' | 'height' | 'id' | 'locale' | 'mimeType' | 'rowSpecialBannerAsset' | 'size' | 'stage' | 'url' | 'width' | AssetKeySpecifier)[];
export type AssetFieldPolicy = {
	alt?: FieldPolicy<any> | FieldReadFunction<any>,
	assetPage?: FieldPolicy<any> | FieldReadFunction<any>,
	assetPageLink?: FieldPolicy<any> | FieldReadFunction<any>,
	assetRowHeroBanner?: FieldPolicy<any> | FieldReadFunction<any>,
	assetRowProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	fileName?: FieldPolicy<any> | FieldReadFunction<any>,
	handle?: FieldPolicy<any> | FieldReadFunction<any>,
	height?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	mimeType?: FieldPolicy<any> | FieldReadFunction<any>,
	rowSpecialBannerAsset?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	width?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssetsKeySpecifier = ('descriptive' | 'standard' | AssetsKeySpecifier)[];
export type AssetsFieldPolicy = {
	descriptive?: FieldPolicy<any> | FieldReadFunction<any>,
	standard?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssignCompareListToCustomerOutputKeySpecifier = ('compare_list' | 'result' | AssignCompareListToCustomerOutputKeySpecifier)[];
export type AssignCompareListToCustomerOutputFieldPolicy = {
	compare_list?: FieldPolicy<any> | FieldReadFunction<any>,
	result?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeKeySpecifier = ('attribute_code' | 'attribute_options' | 'attribute_type' | 'entity_type' | 'input_type' | 'storefront_properties' | AttributeKeySpecifier)[];
export type AttributeFieldPolicy = {
	attribute_code?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute_options?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute_type?: FieldPolicy<any> | FieldReadFunction<any>,
	entity_type?: FieldPolicy<any> | FieldReadFunction<any>,
	input_type?: FieldPolicy<any> | FieldReadFunction<any>,
	storefront_properties?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeOptionKeySpecifier = ('label' | 'value' | AttributeOptionKeySpecifier)[];
export type AttributeOptionFieldPolicy = {
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AvailablePaymentMethodKeySpecifier = ('code' | 'mollie_available_issuers' | 'mollie_meta' | 'title' | AvailablePaymentMethodKeySpecifier)[];
export type AvailablePaymentMethodFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	mollie_available_issuers?: FieldPolicy<any> | FieldReadFunction<any>,
	mollie_meta?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AvailableShippingMethodKeySpecifier = ('amount' | 'available' | 'base_amount' | 'carrier_code' | 'carrier_title' | 'error_message' | 'method_code' | 'method_title' | 'price_excl_tax' | 'price_incl_tax' | AvailableShippingMethodKeySpecifier)[];
export type AvailableShippingMethodFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	available?: FieldPolicy<any> | FieldReadFunction<any>,
	base_amount?: FieldPolicy<any> | FieldReadFunction<any>,
	carrier_code?: FieldPolicy<any> | FieldReadFunction<any>,
	carrier_title?: FieldPolicy<any> | FieldReadFunction<any>,
	error_message?: FieldPolicy<any> | FieldReadFunction<any>,
	method_code?: FieldPolicy<any> | FieldReadFunction<any>,
	method_title?: FieldPolicy<any> | FieldReadFunction<any>,
	price_excl_tax?: FieldPolicy<any> | FieldReadFunction<any>,
	price_incl_tax?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BillingCartAddressKeySpecifier = ('city' | 'company' | 'country' | 'customer_notes' | 'firstname' | 'lastname' | 'postcode' | 'region' | 'street' | 'telephone' | BillingCartAddressKeySpecifier)[];
export type BillingCartAddressFieldPolicy = {
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	customer_notes?: FieldPolicy<any> | FieldReadFunction<any>,
	firstname?: FieldPolicy<any> | FieldReadFunction<any>,
	lastname?: FieldPolicy<any> | FieldReadFunction<any>,
	postcode?: FieldPolicy<any> | FieldReadFunction<any>,
	region?: FieldPolicy<any> | FieldReadFunction<any>,
	street?: FieldPolicy<any> | FieldReadFunction<any>,
	telephone?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BreadcrumbKeySpecifier = ('category_id' | 'category_level' | 'category_name' | 'category_uid' | 'category_url_key' | 'category_url_path' | BreadcrumbKeySpecifier)[];
export type BreadcrumbFieldPolicy = {
	category_id?: FieldPolicy<any> | FieldReadFunction<any>,
	category_level?: FieldPolicy<any> | FieldReadFunction<any>,
	category_name?: FieldPolicy<any> | FieldReadFunction<any>,
	category_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	category_url_key?: FieldPolicy<any> | FieldReadFunction<any>,
	category_url_path?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BundleCartItemKeySpecifier = ('bundle_options' | 'customizable_options' | 'errors' | 'gift_message' | 'id' | 'prices' | 'product' | 'quantity' | 'uid' | BundleCartItemKeySpecifier)[];
export type BundleCartItemFieldPolicy = {
	bundle_options?: FieldPolicy<any> | FieldReadFunction<any>,
	customizable_options?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	gift_message?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	prices?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BundleCreditMemoItemKeySpecifier = ('bundle_options' | 'discounts' | 'id' | 'order_item' | 'product_name' | 'product_sale_price' | 'product_sku' | 'quantity_refunded' | BundleCreditMemoItemKeySpecifier)[];
export type BundleCreditMemoItemFieldPolicy = {
	bundle_options?: FieldPolicy<any> | FieldReadFunction<any>,
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	order_item?: FieldPolicy<any> | FieldReadFunction<any>,
	product_name?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sale_price?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_refunded?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BundleInvoiceItemKeySpecifier = ('bundle_options' | 'discounts' | 'id' | 'order_item' | 'product_name' | 'product_sale_price' | 'product_sku' | 'quantity_invoiced' | BundleInvoiceItemKeySpecifier)[];
export type BundleInvoiceItemFieldPolicy = {
	bundle_options?: FieldPolicy<any> | FieldReadFunction<any>,
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	order_item?: FieldPolicy<any> | FieldReadFunction<any>,
	product_name?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sale_price?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_invoiced?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BundleItemKeySpecifier = ('option_id' | 'options' | 'position' | 'required' | 'sku' | 'title' | 'type' | 'uid' | BundleItemKeySpecifier)[];
export type BundleItemFieldPolicy = {
	option_id?: FieldPolicy<any> | FieldReadFunction<any>,
	options?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	required?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BundleItemOptionKeySpecifier = ('can_change_quantity' | 'id' | 'is_default' | 'label' | 'position' | 'price' | 'price_type' | 'product' | 'qty' | 'quantity' | 'uid' | BundleItemOptionKeySpecifier)[];
export type BundleItemOptionFieldPolicy = {
	can_change_quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_default?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	price_type?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	qty?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BundleOrderItemKeySpecifier = ('bundle_options' | 'discounts' | 'entered_options' | 'id' | 'product_name' | 'product_sale_price' | 'product_sku' | 'product_type' | 'product_url_key' | 'quantity_canceled' | 'quantity_invoiced' | 'quantity_ordered' | 'quantity_refunded' | 'quantity_returned' | 'quantity_shipped' | 'selected_options' | 'status' | BundleOrderItemKeySpecifier)[];
export type BundleOrderItemFieldPolicy = {
	bundle_options?: FieldPolicy<any> | FieldReadFunction<any>,
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	entered_options?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	product_name?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sale_price?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	product_type?: FieldPolicy<any> | FieldReadFunction<any>,
	product_url_key?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_canceled?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_invoiced?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_ordered?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_refunded?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_returned?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_shipped?: FieldPolicy<any> | FieldReadFunction<any>,
	selected_options?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BundleProductKeySpecifier = ('activity' | 'attribute_set_id' | 'backorder_delivery_date' | 'backorder_delivery_period' | 'canonical_url' | 'categories' | 'category_gear' | 'climate' | 'collar' | 'color' | 'colors' | 'compatible_phones' | 'country_of_manufacture' | 'created_at' | 'crosssell_products' | 'description' | 'dominant_color' | 'dynamic_price' | 'dynamic_sku' | 'dynamic_weight' | 'eco_collection' | 'erin_recommends' | 'features_bags' | 'format' | 'gender' | 'gift_message_available' | 'id' | 'image' | 'in_stock_delivery_period' | 'items' | 'manufacturer' | 'material' | 'media_gallery' | 'media_gallery_entries' | 'meta_description' | 'meta_keyword' | 'meta_title' | 'name' | 'new' | 'new_from_date' | 'new_to_date' | 'only_x_left_in_stock' | 'options' | 'options_container' | 'pattern' | 'performance_fabric' | 'price' | 'price_range' | 'price_tiers' | 'price_view' | 'print_art' | 'print_holiday' | 'print_labels' | 'print_landmarks' | 'print_landscape' | 'print_mood' | 'print_pattern_swatch' | 'print_type' | 'product_links' | 'rating_summary' | 'redirect_code' | 'related_products' | 'relative_url' | 'review_count' | 'reviews' | 'sale' | 'ship_bundle_items' | 'short_description' | 'size' | 'sku' | 'sleeve' | 'small_image' | 'special_from_date' | 'special_price' | 'special_to_date' | 'stock_status' | 'strap_bags' | 'style_bags' | 'style_bottom' | 'style_general' | 'swatch_image' | 'th_test_attribute' | 'thumbnail' | 'tier_price' | 'tier_prices' | 'type' | 'type_id' | 'uid' | 'updated_at' | 'upsell_products' | 'url_key' | 'url_path' | 'url_rewrites' | 'url_suffix' | 'websites' | 'weight' | BundleProductKeySpecifier)[];
export type BundleProductFieldPolicy = {
	activity?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute_set_id?: FieldPolicy<any> | FieldReadFunction<any>,
	backorder_delivery_date?: FieldPolicy<any> | FieldReadFunction<any>,
	backorder_delivery_period?: FieldPolicy<any> | FieldReadFunction<any>,
	canonical_url?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	category_gear?: FieldPolicy<any> | FieldReadFunction<any>,
	climate?: FieldPolicy<any> | FieldReadFunction<any>,
	collar?: FieldPolicy<any> | FieldReadFunction<any>,
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	colors?: FieldPolicy<any> | FieldReadFunction<any>,
	compatible_phones?: FieldPolicy<any> | FieldReadFunction<any>,
	country_of_manufacture?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	crosssell_products?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	dominant_color?: FieldPolicy<any> | FieldReadFunction<any>,
	dynamic_price?: FieldPolicy<any> | FieldReadFunction<any>,
	dynamic_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	dynamic_weight?: FieldPolicy<any> | FieldReadFunction<any>,
	eco_collection?: FieldPolicy<any> | FieldReadFunction<any>,
	erin_recommends?: FieldPolicy<any> | FieldReadFunction<any>,
	features_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	format?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	gift_message_available?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	in_stock_delivery_period?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	manufacturer?: FieldPolicy<any> | FieldReadFunction<any>,
	material?: FieldPolicy<any> | FieldReadFunction<any>,
	media_gallery?: FieldPolicy<any> | FieldReadFunction<any>,
	media_gallery_entries?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_description?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_keyword?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_title?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	new?: FieldPolicy<any> | FieldReadFunction<any>,
	new_from_date?: FieldPolicy<any> | FieldReadFunction<any>,
	new_to_date?: FieldPolicy<any> | FieldReadFunction<any>,
	only_x_left_in_stock?: FieldPolicy<any> | FieldReadFunction<any>,
	options?: FieldPolicy<any> | FieldReadFunction<any>,
	options_container?: FieldPolicy<any> | FieldReadFunction<any>,
	pattern?: FieldPolicy<any> | FieldReadFunction<any>,
	performance_fabric?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	price_range?: FieldPolicy<any> | FieldReadFunction<any>,
	price_tiers?: FieldPolicy<any> | FieldReadFunction<any>,
	price_view?: FieldPolicy<any> | FieldReadFunction<any>,
	print_art?: FieldPolicy<any> | FieldReadFunction<any>,
	print_holiday?: FieldPolicy<any> | FieldReadFunction<any>,
	print_labels?: FieldPolicy<any> | FieldReadFunction<any>,
	print_landmarks?: FieldPolicy<any> | FieldReadFunction<any>,
	print_landscape?: FieldPolicy<any> | FieldReadFunction<any>,
	print_mood?: FieldPolicy<any> | FieldReadFunction<any>,
	print_pattern_swatch?: FieldPolicy<any> | FieldReadFunction<any>,
	print_type?: FieldPolicy<any> | FieldReadFunction<any>,
	product_links?: FieldPolicy<any> | FieldReadFunction<any>,
	rating_summary?: FieldPolicy<any> | FieldReadFunction<any>,
	redirect_code?: FieldPolicy<any> | FieldReadFunction<any>,
	related_products?: FieldPolicy<any> | FieldReadFunction<any>,
	relative_url?: FieldPolicy<any> | FieldReadFunction<any>,
	review_count?: FieldPolicy<any> | FieldReadFunction<any>,
	reviews?: FieldPolicy<any> | FieldReadFunction<any>,
	sale?: FieldPolicy<any> | FieldReadFunction<any>,
	ship_bundle_items?: FieldPolicy<any> | FieldReadFunction<any>,
	short_description?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	sleeve?: FieldPolicy<any> | FieldReadFunction<any>,
	small_image?: FieldPolicy<any> | FieldReadFunction<any>,
	special_from_date?: FieldPolicy<any> | FieldReadFunction<any>,
	special_price?: FieldPolicy<any> | FieldReadFunction<any>,
	special_to_date?: FieldPolicy<any> | FieldReadFunction<any>,
	stock_status?: FieldPolicy<any> | FieldReadFunction<any>,
	strap_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	style_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	style_bottom?: FieldPolicy<any> | FieldReadFunction<any>,
	style_general?: FieldPolicy<any> | FieldReadFunction<any>,
	swatch_image?: FieldPolicy<any> | FieldReadFunction<any>,
	th_test_attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnail?: FieldPolicy<any> | FieldReadFunction<any>,
	tier_price?: FieldPolicy<any> | FieldReadFunction<any>,
	tier_prices?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	upsell_products?: FieldPolicy<any> | FieldReadFunction<any>,
	url_key?: FieldPolicy<any> | FieldReadFunction<any>,
	url_path?: FieldPolicy<any> | FieldReadFunction<any>,
	url_rewrites?: FieldPolicy<any> | FieldReadFunction<any>,
	url_suffix?: FieldPolicy<any> | FieldReadFunction<any>,
	websites?: FieldPolicy<any> | FieldReadFunction<any>,
	weight?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BundleShipmentItemKeySpecifier = ('bundle_options' | 'id' | 'order_item' | 'product_name' | 'product_sale_price' | 'product_sku' | 'quantity_shipped' | BundleShipmentItemKeySpecifier)[];
export type BundleShipmentItemFieldPolicy = {
	bundle_options?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	order_item?: FieldPolicy<any> | FieldReadFunction<any>,
	product_name?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sale_price?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_shipped?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BundleWishlistItemKeySpecifier = ('added_at' | 'bundle_options' | 'customizable_options' | 'description' | 'id' | 'product' | 'quantity' | BundleWishlistItemKeySpecifier)[];
export type BundleWishlistItemFieldPolicy = {
	added_at?: FieldPolicy<any> | FieldReadFunction<any>,
	bundle_options?: FieldPolicy<any> | FieldReadFunction<any>,
	customizable_options?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartKeySpecifier = ('applied_coupon' | 'applied_coupons' | 'available_payment_methods' | 'billing_address' | 'email' | 'gift_message' | 'id' | 'is_virtual' | 'items' | 'mollie_available_issuers' | 'prices' | 'selected_payment_method' | 'shipping_addresses' | 'total_quantity' | CartKeySpecifier)[];
export type CartFieldPolicy = {
	applied_coupon?: FieldPolicy<any> | FieldReadFunction<any>,
	applied_coupons?: FieldPolicy<any> | FieldReadFunction<any>,
	available_payment_methods?: FieldPolicy<any> | FieldReadFunction<any>,
	billing_address?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	gift_message?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_virtual?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	mollie_available_issuers?: FieldPolicy<any> | FieldReadFunction<any>,
	prices?: FieldPolicy<any> | FieldReadFunction<any>,
	selected_payment_method?: FieldPolicy<any> | FieldReadFunction<any>,
	shipping_addresses?: FieldPolicy<any> | FieldReadFunction<any>,
	total_quantity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartAddressCountryKeySpecifier = ('code' | 'label' | CartAddressCountryKeySpecifier)[];
export type CartAddressCountryFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartAddressInterfaceKeySpecifier = ('city' | 'company' | 'country' | 'firstname' | 'lastname' | 'postcode' | 'region' | 'street' | 'telephone' | CartAddressInterfaceKeySpecifier)[];
export type CartAddressInterfaceFieldPolicy = {
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	firstname?: FieldPolicy<any> | FieldReadFunction<any>,
	lastname?: FieldPolicy<any> | FieldReadFunction<any>,
	postcode?: FieldPolicy<any> | FieldReadFunction<any>,
	region?: FieldPolicy<any> | FieldReadFunction<any>,
	street?: FieldPolicy<any> | FieldReadFunction<any>,
	telephone?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartAddressRegionKeySpecifier = ('code' | 'label' | 'region_id' | CartAddressRegionKeySpecifier)[];
export type CartAddressRegionFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	region_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartDiscountKeySpecifier = ('amount' | 'label' | CartDiscountKeySpecifier)[];
export type CartDiscountFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartItemErrorKeySpecifier = ('code' | 'message' | CartItemErrorKeySpecifier)[];
export type CartItemErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartItemInterfaceKeySpecifier = ('errors' | 'id' | 'prices' | 'product' | 'quantity' | 'uid' | CartItemInterfaceKeySpecifier)[];
export type CartItemInterfaceFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	prices?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartItemPricesKeySpecifier = ('discounts' | 'fixed_product_taxes' | 'price' | 'row_total' | 'row_total_including_tax' | 'total_item_discount' | CartItemPricesKeySpecifier)[];
export type CartItemPricesFieldPolicy = {
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	fixed_product_taxes?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	row_total?: FieldPolicy<any> | FieldReadFunction<any>,
	row_total_including_tax?: FieldPolicy<any> | FieldReadFunction<any>,
	total_item_discount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartItemQuantityKeySpecifier = ('cart_item_id' | 'quantity' | CartItemQuantityKeySpecifier)[];
export type CartItemQuantityFieldPolicy = {
	cart_item_id?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartItemSelectedOptionValuePriceKeySpecifier = ('type' | 'units' | 'value' | CartItemSelectedOptionValuePriceKeySpecifier)[];
export type CartItemSelectedOptionValuePriceFieldPolicy = {
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	units?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartPricesKeySpecifier = ('applied_taxes' | 'discount' | 'discounts' | 'grand_total' | 'subtotal_excluding_tax' | 'subtotal_including_tax' | 'subtotal_with_discount_excluding_tax' | CartPricesKeySpecifier)[];
export type CartPricesFieldPolicy = {
	applied_taxes?: FieldPolicy<any> | FieldReadFunction<any>,
	discount?: FieldPolicy<any> | FieldReadFunction<any>,
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	grand_total?: FieldPolicy<any> | FieldReadFunction<any>,
	subtotal_excluding_tax?: FieldPolicy<any> | FieldReadFunction<any>,
	subtotal_including_tax?: FieldPolicy<any> | FieldReadFunction<any>,
	subtotal_with_discount_excluding_tax?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartTaxItemKeySpecifier = ('amount' | 'label' | CartTaxItemKeySpecifier)[];
export type CartTaxItemFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartUserInputErrorKeySpecifier = ('code' | 'message' | CartUserInputErrorKeySpecifier)[];
export type CartUserInputErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoriesKeySpecifier = ('asset_urls' | 'identifier' | 'name' | CategoriesKeySpecifier)[];
export type CategoriesFieldPolicy = {
	asset_urls?: FieldPolicy<any> | FieldReadFunction<any>,
	identifier?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryInterfaceKeySpecifier = ('available_sort_by' | 'breadcrumbs' | 'canonical_url' | 'children_count' | 'cms_block' | 'created_at' | 'custom_layout_update_file' | 'default_sort_by' | 'description' | 'display_mode' | 'filter_price_range' | 'id' | 'image' | 'include_in_menu' | 'is_anchor' | 'landing_page' | 'level' | 'meta_description' | 'meta_keywords' | 'meta_title' | 'name' | 'path' | 'path_in_store' | 'position' | 'product_count' | 'products' | 'uid' | 'updated_at' | 'url_key' | 'url_path' | 'url_suffix' | CategoryInterfaceKeySpecifier)[];
export type CategoryInterfaceFieldPolicy = {
	available_sort_by?: FieldPolicy<any> | FieldReadFunction<any>,
	breadcrumbs?: FieldPolicy<any> | FieldReadFunction<any>,
	canonical_url?: FieldPolicy<any> | FieldReadFunction<any>,
	children_count?: FieldPolicy<any> | FieldReadFunction<any>,
	cms_block?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	custom_layout_update_file?: FieldPolicy<any> | FieldReadFunction<any>,
	default_sort_by?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	display_mode?: FieldPolicy<any> | FieldReadFunction<any>,
	filter_price_range?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	include_in_menu?: FieldPolicy<any> | FieldReadFunction<any>,
	is_anchor?: FieldPolicy<any> | FieldReadFunction<any>,
	landing_page?: FieldPolicy<any> | FieldReadFunction<any>,
	level?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_description?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_keywords?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_title?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	path_in_store?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	product_count?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	url_key?: FieldPolicy<any> | FieldReadFunction<any>,
	url_path?: FieldPolicy<any> | FieldReadFunction<any>,
	url_suffix?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryProductsKeySpecifier = ('items' | 'page_info' | 'total_count' | CategoryProductsKeySpecifier)[];
export type CategoryProductsFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	page_info?: FieldPolicy<any> | FieldReadFunction<any>,
	total_count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryResultKeySpecifier = ('items' | 'page_info' | 'total_count' | CategoryResultKeySpecifier)[];
export type CategoryResultFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	page_info?: FieldPolicy<any> | FieldReadFunction<any>,
	total_count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryTreeKeySpecifier = ('available_sort_by' | 'breadcrumbs' | 'canonical_url' | 'children' | 'children_count' | 'cms_block' | 'created_at' | 'custom_layout_update_file' | 'default_sort_by' | 'description' | 'display_mode' | 'filter_price_range' | 'id' | 'image' | 'include_in_menu' | 'is_anchor' | 'landing_page' | 'level' | 'meta_description' | 'meta_keywords' | 'meta_title' | 'name' | 'path' | 'path_in_store' | 'position' | 'product_count' | 'products' | 'redirect_code' | 'relative_url' | 'type' | 'uid' | 'updated_at' | 'url_key' | 'url_path' | 'url_suffix' | CategoryTreeKeySpecifier)[];
export type CategoryTreeFieldPolicy = {
	available_sort_by?: FieldPolicy<any> | FieldReadFunction<any>,
	breadcrumbs?: FieldPolicy<any> | FieldReadFunction<any>,
	canonical_url?: FieldPolicy<any> | FieldReadFunction<any>,
	children?: FieldPolicy<any> | FieldReadFunction<any>,
	children_count?: FieldPolicy<any> | FieldReadFunction<any>,
	cms_block?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	custom_layout_update_file?: FieldPolicy<any> | FieldReadFunction<any>,
	default_sort_by?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	display_mode?: FieldPolicy<any> | FieldReadFunction<any>,
	filter_price_range?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	include_in_menu?: FieldPolicy<any> | FieldReadFunction<any>,
	is_anchor?: FieldPolicy<any> | FieldReadFunction<any>,
	landing_page?: FieldPolicy<any> | FieldReadFunction<any>,
	level?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_description?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_keywords?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_title?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	path_in_store?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	product_count?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	redirect_code?: FieldPolicy<any> | FieldReadFunction<any>,
	relative_url?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	url_key?: FieldPolicy<any> | FieldReadFunction<any>,
	url_path?: FieldPolicy<any> | FieldReadFunction<any>,
	url_suffix?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatDataKeySpecifier = ('api_space_id' | 'cookie_name' | 'is_enabled' | ChatDataKeySpecifier)[];
export type ChatDataFieldPolicy = {
	api_space_id?: FieldPolicy<any> | FieldReadFunction<any>,
	cookie_name?: FieldPolicy<any> | FieldReadFunction<any>,
	is_enabled?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutAgreementKeySpecifier = ('agreement_id' | 'checkbox_text' | 'content' | 'content_height' | 'is_html' | 'mode' | 'name' | CheckoutAgreementKeySpecifier)[];
export type CheckoutAgreementFieldPolicy = {
	agreement_id?: FieldPolicy<any> | FieldReadFunction<any>,
	checkbox_text?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	content_height?: FieldPolicy<any> | FieldReadFunction<any>,
	is_html?: FieldPolicy<any> | FieldReadFunction<any>,
	mode?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutUserInputErrorKeySpecifier = ('code' | 'message' | 'path' | CheckoutUserInputErrorKeySpecifier)[];
export type CheckoutUserInputErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CmsBlockKeySpecifier = ('content' | 'identifier' | 'title' | CmsBlockKeySpecifier)[];
export type CmsBlockFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	identifier?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CmsBlocksKeySpecifier = ('items' | CmsBlocksKeySpecifier)[];
export type CmsBlocksFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CmsPageKeySpecifier = ('content' | 'content_heading' | 'identifier' | 'meta_description' | 'meta_keywords' | 'meta_title' | 'page_layout' | 'redirect_code' | 'relative_url' | 'title' | 'type' | 'url_key' | CmsPageKeySpecifier)[];
export type CmsPageFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	content_heading?: FieldPolicy<any> | FieldReadFunction<any>,
	identifier?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_description?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_keywords?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_title?: FieldPolicy<any> | FieldReadFunction<any>,
	page_layout?: FieldPolicy<any> | FieldReadFunction<any>,
	redirect_code?: FieldPolicy<any> | FieldReadFunction<any>,
	relative_url?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	url_key?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ColorSwatchDataKeySpecifier = ('value' | ColorSwatchDataKeySpecifier)[];
export type ColorSwatchDataFieldPolicy = {
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComparableAttributeKeySpecifier = ('code' | 'label' | ComparableAttributeKeySpecifier)[];
export type ComparableAttributeFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComparableItemKeySpecifier = ('attributes' | 'product' | 'uid' | ComparableItemKeySpecifier)[];
export type ComparableItemFieldPolicy = {
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompareListKeySpecifier = ('attributes' | 'item_count' | 'items' | 'uid' | CompareListKeySpecifier)[];
export type CompareListFieldPolicy = {
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	item_count?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComplexTextValueKeySpecifier = ('html' | ComplexTextValueKeySpecifier)[];
export type ComplexTextValueFieldPolicy = {
	html?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConfigurableAttributeOptionKeySpecifier = ('code' | 'label' | 'uid' | 'value_index' | ConfigurableAttributeOptionKeySpecifier)[];
export type ConfigurableAttributeOptionFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	value_index?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConfigurableCartItemKeySpecifier = ('configurable_options' | 'configured_variant' | 'customizable_options' | 'errors' | 'gift_message' | 'id' | 'prices' | 'product' | 'quantity' | 'uid' | ConfigurableCartItemKeySpecifier)[];
export type ConfigurableCartItemFieldPolicy = {
	configurable_options?: FieldPolicy<any> | FieldReadFunction<any>,
	configured_variant?: FieldPolicy<any> | FieldReadFunction<any>,
	customizable_options?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	gift_message?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	prices?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConfigurableOptionAvailableForSelectionKeySpecifier = ('attribute_code' | 'option_value_uids' | ConfigurableOptionAvailableForSelectionKeySpecifier)[];
export type ConfigurableOptionAvailableForSelectionFieldPolicy = {
	attribute_code?: FieldPolicy<any> | FieldReadFunction<any>,
	option_value_uids?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConfigurableProductKeySpecifier = ('activity' | 'attribute_set_id' | 'backorder_delivery_date' | 'backorder_delivery_period' | 'canonical_url' | 'categories' | 'category_gear' | 'climate' | 'collar' | 'color' | 'colors' | 'compatible_phones' | 'configurable_options' | 'configurable_product_options_selection' | 'country_of_manufacture' | 'created_at' | 'crosssell_products' | 'description' | 'dominant_color' | 'eco_collection' | 'erin_recommends' | 'features_bags' | 'format' | 'gender' | 'gift_message_available' | 'id' | 'image' | 'in_stock_delivery_period' | 'manufacturer' | 'material' | 'media_gallery' | 'media_gallery_entries' | 'meta_description' | 'meta_keyword' | 'meta_title' | 'name' | 'new' | 'new_from_date' | 'new_to_date' | 'only_x_left_in_stock' | 'options' | 'options_container' | 'pattern' | 'performance_fabric' | 'price' | 'price_range' | 'price_tiers' | 'print_art' | 'print_holiday' | 'print_labels' | 'print_landmarks' | 'print_landscape' | 'print_mood' | 'print_pattern_swatch' | 'print_type' | 'product_links' | 'rating_summary' | 'redirect_code' | 'related_products' | 'relative_url' | 'review_count' | 'reviews' | 'sale' | 'short_description' | 'size' | 'sku' | 'sleeve' | 'small_image' | 'special_from_date' | 'special_price' | 'special_to_date' | 'stock_status' | 'strap_bags' | 'style_bags' | 'style_bottom' | 'style_general' | 'swatch_image' | 'th_test_attribute' | 'thumbnail' | 'tier_price' | 'tier_prices' | 'type' | 'type_id' | 'uid' | 'updated_at' | 'upsell_products' | 'url_key' | 'url_path' | 'url_rewrites' | 'url_suffix' | 'variants' | 'websites' | 'weight' | ConfigurableProductKeySpecifier)[];
export type ConfigurableProductFieldPolicy = {
	activity?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute_set_id?: FieldPolicy<any> | FieldReadFunction<any>,
	backorder_delivery_date?: FieldPolicy<any> | FieldReadFunction<any>,
	backorder_delivery_period?: FieldPolicy<any> | FieldReadFunction<any>,
	canonical_url?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	category_gear?: FieldPolicy<any> | FieldReadFunction<any>,
	climate?: FieldPolicy<any> | FieldReadFunction<any>,
	collar?: FieldPolicy<any> | FieldReadFunction<any>,
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	colors?: FieldPolicy<any> | FieldReadFunction<any>,
	compatible_phones?: FieldPolicy<any> | FieldReadFunction<any>,
	configurable_options?: FieldPolicy<any> | FieldReadFunction<any>,
	configurable_product_options_selection?: FieldPolicy<any> | FieldReadFunction<any>,
	country_of_manufacture?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	crosssell_products?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	dominant_color?: FieldPolicy<any> | FieldReadFunction<any>,
	eco_collection?: FieldPolicy<any> | FieldReadFunction<any>,
	erin_recommends?: FieldPolicy<any> | FieldReadFunction<any>,
	features_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	format?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	gift_message_available?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	in_stock_delivery_period?: FieldPolicy<any> | FieldReadFunction<any>,
	manufacturer?: FieldPolicy<any> | FieldReadFunction<any>,
	material?: FieldPolicy<any> | FieldReadFunction<any>,
	media_gallery?: FieldPolicy<any> | FieldReadFunction<any>,
	media_gallery_entries?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_description?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_keyword?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_title?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	new?: FieldPolicy<any> | FieldReadFunction<any>,
	new_from_date?: FieldPolicy<any> | FieldReadFunction<any>,
	new_to_date?: FieldPolicy<any> | FieldReadFunction<any>,
	only_x_left_in_stock?: FieldPolicy<any> | FieldReadFunction<any>,
	options?: FieldPolicy<any> | FieldReadFunction<any>,
	options_container?: FieldPolicy<any> | FieldReadFunction<any>,
	pattern?: FieldPolicy<any> | FieldReadFunction<any>,
	performance_fabric?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	price_range?: FieldPolicy<any> | FieldReadFunction<any>,
	price_tiers?: FieldPolicy<any> | FieldReadFunction<any>,
	print_art?: FieldPolicy<any> | FieldReadFunction<any>,
	print_holiday?: FieldPolicy<any> | FieldReadFunction<any>,
	print_labels?: FieldPolicy<any> | FieldReadFunction<any>,
	print_landmarks?: FieldPolicy<any> | FieldReadFunction<any>,
	print_landscape?: FieldPolicy<any> | FieldReadFunction<any>,
	print_mood?: FieldPolicy<any> | FieldReadFunction<any>,
	print_pattern_swatch?: FieldPolicy<any> | FieldReadFunction<any>,
	print_type?: FieldPolicy<any> | FieldReadFunction<any>,
	product_links?: FieldPolicy<any> | FieldReadFunction<any>,
	rating_summary?: FieldPolicy<any> | FieldReadFunction<any>,
	redirect_code?: FieldPolicy<any> | FieldReadFunction<any>,
	related_products?: FieldPolicy<any> | FieldReadFunction<any>,
	relative_url?: FieldPolicy<any> | FieldReadFunction<any>,
	review_count?: FieldPolicy<any> | FieldReadFunction<any>,
	reviews?: FieldPolicy<any> | FieldReadFunction<any>,
	sale?: FieldPolicy<any> | FieldReadFunction<any>,
	short_description?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	sleeve?: FieldPolicy<any> | FieldReadFunction<any>,
	small_image?: FieldPolicy<any> | FieldReadFunction<any>,
	special_from_date?: FieldPolicy<any> | FieldReadFunction<any>,
	special_price?: FieldPolicy<any> | FieldReadFunction<any>,
	special_to_date?: FieldPolicy<any> | FieldReadFunction<any>,
	stock_status?: FieldPolicy<any> | FieldReadFunction<any>,
	strap_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	style_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	style_bottom?: FieldPolicy<any> | FieldReadFunction<any>,
	style_general?: FieldPolicy<any> | FieldReadFunction<any>,
	swatch_image?: FieldPolicy<any> | FieldReadFunction<any>,
	th_test_attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnail?: FieldPolicy<any> | FieldReadFunction<any>,
	tier_price?: FieldPolicy<any> | FieldReadFunction<any>,
	tier_prices?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	upsell_products?: FieldPolicy<any> | FieldReadFunction<any>,
	url_key?: FieldPolicy<any> | FieldReadFunction<any>,
	url_path?: FieldPolicy<any> | FieldReadFunction<any>,
	url_rewrites?: FieldPolicy<any> | FieldReadFunction<any>,
	url_suffix?: FieldPolicy<any> | FieldReadFunction<any>,
	variants?: FieldPolicy<any> | FieldReadFunction<any>,
	websites?: FieldPolicy<any> | FieldReadFunction<any>,
	weight?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConfigurableProductOptionKeySpecifier = ('attribute_code' | 'label' | 'uid' | 'values' | ConfigurableProductOptionKeySpecifier)[];
export type ConfigurableProductOptionFieldPolicy = {
	attribute_code?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	values?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConfigurableProductOptionValueKeySpecifier = ('is_available' | 'is_use_default' | 'label' | 'swatch' | 'uid' | ConfigurableProductOptionValueKeySpecifier)[];
export type ConfigurableProductOptionValueFieldPolicy = {
	is_available?: FieldPolicy<any> | FieldReadFunction<any>,
	is_use_default?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	swatch?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConfigurableProductOptionsKeySpecifier = ('attribute_code' | 'attribute_id' | 'attribute_id_v2' | 'attribute_uid' | 'id' | 'label' | 'position' | 'product_id' | 'uid' | 'use_default' | 'values' | ConfigurableProductOptionsKeySpecifier)[];
export type ConfigurableProductOptionsFieldPolicy = {
	attribute_code?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute_id?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute_id_v2?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	product_id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	use_default?: FieldPolicy<any> | FieldReadFunction<any>,
	values?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConfigurableProductOptionsSelectionKeySpecifier = ('configurable_options' | 'media_gallery' | 'options_available_for_selection' | 'variant' | ConfigurableProductOptionsSelectionKeySpecifier)[];
export type ConfigurableProductOptionsSelectionFieldPolicy = {
	configurable_options?: FieldPolicy<any> | FieldReadFunction<any>,
	media_gallery?: FieldPolicy<any> | FieldReadFunction<any>,
	options_available_for_selection?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConfigurableProductOptionsValuesKeySpecifier = ('default_label' | 'label' | 'store_label' | 'swatch_data' | 'uid' | 'use_default_value' | 'value_index' | ConfigurableProductOptionsValuesKeySpecifier)[];
export type ConfigurableProductOptionsValuesFieldPolicy = {
	default_label?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	store_label?: FieldPolicy<any> | FieldReadFunction<any>,
	swatch_data?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	use_default_value?: FieldPolicy<any> | FieldReadFunction<any>,
	value_index?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConfigurableVariantKeySpecifier = ('attributes' | 'product' | ConfigurableVariantKeySpecifier)[];
export type ConfigurableVariantFieldPolicy = {
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConfigurableWishlistItemKeySpecifier = ('added_at' | 'child_sku' | 'configurable_options' | 'customizable_options' | 'description' | 'id' | 'product' | 'quantity' | ConfigurableWishlistItemKeySpecifier)[];
export type ConfigurableWishlistItemFieldPolicy = {
	added_at?: FieldPolicy<any> | FieldReadFunction<any>,
	child_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	configurable_options?: FieldPolicy<any> | FieldReadFunction<any>,
	customizable_options?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CountryKeySpecifier = ('available_regions' | 'full_name_english' | 'full_name_locale' | 'id' | 'three_letter_abbreviation' | 'two_letter_abbreviation' | CountryKeySpecifier)[];
export type CountryFieldPolicy = {
	available_regions?: FieldPolicy<any> | FieldReadFunction<any>,
	full_name_english?: FieldPolicy<any> | FieldReadFunction<any>,
	full_name_locale?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	three_letter_abbreviation?: FieldPolicy<any> | FieldReadFunction<any>,
	two_letter_abbreviation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreatePayflowProTokenOutputKeySpecifier = ('response_message' | 'result' | 'result_code' | 'secure_token' | 'secure_token_id' | CreatePayflowProTokenOutputKeySpecifier)[];
export type CreatePayflowProTokenOutputFieldPolicy = {
	response_message?: FieldPolicy<any> | FieldReadFunction<any>,
	result?: FieldPolicy<any> | FieldReadFunction<any>,
	result_code?: FieldPolicy<any> | FieldReadFunction<any>,
	secure_token?: FieldPolicy<any> | FieldReadFunction<any>,
	secure_token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateProductReviewOutputKeySpecifier = ('review' | CreateProductReviewOutputKeySpecifier)[];
export type CreateProductReviewOutputFieldPolicy = {
	review?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreditMemoKeySpecifier = ('comments' | 'id' | 'items' | 'number' | 'total' | CreditMemoKeySpecifier)[];
export type CreditMemoFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreditMemoItemKeySpecifier = ('discounts' | 'id' | 'order_item' | 'product_name' | 'product_sale_price' | 'product_sku' | 'quantity_refunded' | CreditMemoItemKeySpecifier)[];
export type CreditMemoItemFieldPolicy = {
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	order_item?: FieldPolicy<any> | FieldReadFunction<any>,
	product_name?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sale_price?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_refunded?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreditMemoItemInterfaceKeySpecifier = ('discounts' | 'id' | 'order_item' | 'product_name' | 'product_sale_price' | 'product_sku' | 'quantity_refunded' | CreditMemoItemInterfaceKeySpecifier)[];
export type CreditMemoItemInterfaceFieldPolicy = {
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	order_item?: FieldPolicy<any> | FieldReadFunction<any>,
	product_name?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sale_price?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_refunded?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreditMemoTotalKeySpecifier = ('adjustment' | 'base_grand_total' | 'discounts' | 'grand_total' | 'shipping_handling' | 'subtotal' | 'taxes' | 'total_shipping' | 'total_tax' | CreditMemoTotalKeySpecifier)[];
export type CreditMemoTotalFieldPolicy = {
	adjustment?: FieldPolicy<any> | FieldReadFunction<any>,
	base_grand_total?: FieldPolicy<any> | FieldReadFunction<any>,
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	grand_total?: FieldPolicy<any> | FieldReadFunction<any>,
	shipping_handling?: FieldPolicy<any> | FieldReadFunction<any>,
	subtotal?: FieldPolicy<any> | FieldReadFunction<any>,
	taxes?: FieldPolicy<any> | FieldReadFunction<any>,
	total_shipping?: FieldPolicy<any> | FieldReadFunction<any>,
	total_tax?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CurrencyKeySpecifier = ('available_currency_codes' | 'base_currency_code' | 'base_currency_symbol' | 'default_display_currecy_code' | 'default_display_currecy_symbol' | 'default_display_currency_code' | 'default_display_currency_symbol' | 'exchange_rates' | CurrencyKeySpecifier)[];
export type CurrencyFieldPolicy = {
	available_currency_codes?: FieldPolicy<any> | FieldReadFunction<any>,
	base_currency_code?: FieldPolicy<any> | FieldReadFunction<any>,
	base_currency_symbol?: FieldPolicy<any> | FieldReadFunction<any>,
	default_display_currecy_code?: FieldPolicy<any> | FieldReadFunction<any>,
	default_display_currecy_symbol?: FieldPolicy<any> | FieldReadFunction<any>,
	default_display_currency_code?: FieldPolicy<any> | FieldReadFunction<any>,
	default_display_currency_symbol?: FieldPolicy<any> | FieldReadFunction<any>,
	exchange_rates?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CurrentCartIdKeySpecifier = ('id' | CurrentCartIdKeySpecifier)[];
export type CurrentCartIdFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomAttributeMetadataKeySpecifier = ('items' | CustomAttributeMetadataKeySpecifier)[];
export type CustomAttributeMetadataFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerKeySpecifier = ('addresses' | 'allow_remote_shopping_assistance' | 'compare_list' | 'created_at' | 'date_of_birth' | 'default_billing' | 'default_shipping' | 'dob' | 'email' | 'firstname' | 'gender' | 'group_id' | 'id' | 'is_subscribed' | 'lastname' | 'middlename' | 'orders' | 'prefix' | 'reviews' | 'suffix' | 'taxvat' | 'wishlist' | 'wishlist_v2' | 'wishlists' | CustomerKeySpecifier)[];
export type CustomerFieldPolicy = {
	addresses?: FieldPolicy<any> | FieldReadFunction<any>,
	allow_remote_shopping_assistance?: FieldPolicy<any> | FieldReadFunction<any>,
	compare_list?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	date_of_birth?: FieldPolicy<any> | FieldReadFunction<any>,
	default_billing?: FieldPolicy<any> | FieldReadFunction<any>,
	default_shipping?: FieldPolicy<any> | FieldReadFunction<any>,
	dob?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	firstname?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	group_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_subscribed?: FieldPolicy<any> | FieldReadFunction<any>,
	lastname?: FieldPolicy<any> | FieldReadFunction<any>,
	middlename?: FieldPolicy<any> | FieldReadFunction<any>,
	orders?: FieldPolicy<any> | FieldReadFunction<any>,
	prefix?: FieldPolicy<any> | FieldReadFunction<any>,
	reviews?: FieldPolicy<any> | FieldReadFunction<any>,
	suffix?: FieldPolicy<any> | FieldReadFunction<any>,
	taxvat?: FieldPolicy<any> | FieldReadFunction<any>,
	wishlist?: FieldPolicy<any> | FieldReadFunction<any>,
	wishlist_v2?: FieldPolicy<any> | FieldReadFunction<any>,
	wishlists?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerAddressKeySpecifier = ('city' | 'company' | 'country_code' | 'country_id' | 'custom_attributes' | 'customer_id' | 'default_billing' | 'default_shipping' | 'extension_attributes' | 'fax' | 'firstname' | 'id' | 'lastname' | 'middlename' | 'postcode' | 'prefix' | 'region' | 'region_id' | 'street' | 'suffix' | 'telephone' | 'vat_id' | CustomerAddressKeySpecifier)[];
export type CustomerAddressFieldPolicy = {
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	country_code?: FieldPolicy<any> | FieldReadFunction<any>,
	country_id?: FieldPolicy<any> | FieldReadFunction<any>,
	custom_attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	customer_id?: FieldPolicy<any> | FieldReadFunction<any>,
	default_billing?: FieldPolicy<any> | FieldReadFunction<any>,
	default_shipping?: FieldPolicy<any> | FieldReadFunction<any>,
	extension_attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	fax?: FieldPolicy<any> | FieldReadFunction<any>,
	firstname?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastname?: FieldPolicy<any> | FieldReadFunction<any>,
	middlename?: FieldPolicy<any> | FieldReadFunction<any>,
	postcode?: FieldPolicy<any> | FieldReadFunction<any>,
	prefix?: FieldPolicy<any> | FieldReadFunction<any>,
	region?: FieldPolicy<any> | FieldReadFunction<any>,
	region_id?: FieldPolicy<any> | FieldReadFunction<any>,
	street?: FieldPolicy<any> | FieldReadFunction<any>,
	suffix?: FieldPolicy<any> | FieldReadFunction<any>,
	telephone?: FieldPolicy<any> | FieldReadFunction<any>,
	vat_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerAddressAttributeKeySpecifier = ('attribute_code' | 'value' | CustomerAddressAttributeKeySpecifier)[];
export type CustomerAddressAttributeFieldPolicy = {
	attribute_code?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerAddressRegionKeySpecifier = ('region' | 'region_code' | 'region_id' | CustomerAddressRegionKeySpecifier)[];
export type CustomerAddressRegionFieldPolicy = {
	region?: FieldPolicy<any> | FieldReadFunction<any>,
	region_code?: FieldPolicy<any> | FieldReadFunction<any>,
	region_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerDownloadableProductKeySpecifier = ('date' | 'download_url' | 'order_increment_id' | 'remaining_downloads' | 'status' | CustomerDownloadableProductKeySpecifier)[];
export type CustomerDownloadableProductFieldPolicy = {
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	download_url?: FieldPolicy<any> | FieldReadFunction<any>,
	order_increment_id?: FieldPolicy<any> | FieldReadFunction<any>,
	remaining_downloads?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerDownloadableProductsKeySpecifier = ('items' | CustomerDownloadableProductsKeySpecifier)[];
export type CustomerDownloadableProductsFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerOrderKeySpecifier = ('billing_address' | 'carrier' | 'comments' | 'created_at' | 'credit_memos' | 'gift_message' | 'grand_total' | 'id' | 'increment_id' | 'invoices' | 'items' | 'number' | 'order_date' | 'order_number' | 'payment_methods' | 'shipments' | 'shipping_address' | 'shipping_method' | 'status' | 'total' | CustomerOrderKeySpecifier)[];
export type CustomerOrderFieldPolicy = {
	billing_address?: FieldPolicy<any> | FieldReadFunction<any>,
	carrier?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	credit_memos?: FieldPolicy<any> | FieldReadFunction<any>,
	gift_message?: FieldPolicy<any> | FieldReadFunction<any>,
	grand_total?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	increment_id?: FieldPolicy<any> | FieldReadFunction<any>,
	invoices?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	order_date?: FieldPolicy<any> | FieldReadFunction<any>,
	order_number?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_methods?: FieldPolicy<any> | FieldReadFunction<any>,
	shipments?: FieldPolicy<any> | FieldReadFunction<any>,
	shipping_address?: FieldPolicy<any> | FieldReadFunction<any>,
	shipping_method?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerOrdersKeySpecifier = ('items' | 'page_info' | 'total_count' | CustomerOrdersKeySpecifier)[];
export type CustomerOrdersFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	page_info?: FieldPolicy<any> | FieldReadFunction<any>,
	total_count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerOutputKeySpecifier = ('customer' | CustomerOutputKeySpecifier)[];
export type CustomerOutputFieldPolicy = {
	customer?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerPaymentTokensKeySpecifier = ('items' | CustomerPaymentTokensKeySpecifier)[];
export type CustomerPaymentTokensFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerTokenKeySpecifier = ('createdAt' | 'token' | 'valid' | CustomerTokenKeySpecifier)[];
export type CustomerTokenFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	valid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomizableAreaOptionKeySpecifier = ('option_id' | 'product_sku' | 'required' | 'sort_order' | 'title' | 'uid' | 'value' | CustomizableAreaOptionKeySpecifier)[];
export type CustomizableAreaOptionFieldPolicy = {
	option_id?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	required?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomizableAreaValueKeySpecifier = ('max_characters' | 'price' | 'price_type' | 'sku' | 'uid' | CustomizableAreaValueKeySpecifier)[];
export type CustomizableAreaValueFieldPolicy = {
	max_characters?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	price_type?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomizableCheckboxOptionKeySpecifier = ('option_id' | 'required' | 'sort_order' | 'title' | 'uid' | 'value' | CustomizableCheckboxOptionKeySpecifier)[];
export type CustomizableCheckboxOptionFieldPolicy = {
	option_id?: FieldPolicy<any> | FieldReadFunction<any>,
	required?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomizableCheckboxValueKeySpecifier = ('option_type_id' | 'price' | 'price_type' | 'sku' | 'sort_order' | 'title' | 'uid' | CustomizableCheckboxValueKeySpecifier)[];
export type CustomizableCheckboxValueFieldPolicy = {
	option_type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	price_type?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomizableDateOptionKeySpecifier = ('option_id' | 'product_sku' | 'required' | 'sort_order' | 'title' | 'uid' | 'value' | CustomizableDateOptionKeySpecifier)[];
export type CustomizableDateOptionFieldPolicy = {
	option_id?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	required?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomizableDateValueKeySpecifier = ('price' | 'price_type' | 'sku' | 'type' | 'uid' | CustomizableDateValueKeySpecifier)[];
export type CustomizableDateValueFieldPolicy = {
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	price_type?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomizableDropDownOptionKeySpecifier = ('option_id' | 'required' | 'sort_order' | 'title' | 'uid' | 'value' | CustomizableDropDownOptionKeySpecifier)[];
export type CustomizableDropDownOptionFieldPolicy = {
	option_id?: FieldPolicy<any> | FieldReadFunction<any>,
	required?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomizableDropDownValueKeySpecifier = ('option_type_id' | 'price' | 'price_type' | 'sku' | 'sort_order' | 'title' | 'uid' | CustomizableDropDownValueKeySpecifier)[];
export type CustomizableDropDownValueFieldPolicy = {
	option_type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	price_type?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomizableFieldOptionKeySpecifier = ('option_id' | 'product_sku' | 'required' | 'sort_order' | 'title' | 'uid' | 'value' | CustomizableFieldOptionKeySpecifier)[];
export type CustomizableFieldOptionFieldPolicy = {
	option_id?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	required?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomizableFieldValueKeySpecifier = ('max_characters' | 'price' | 'price_type' | 'sku' | 'uid' | CustomizableFieldValueKeySpecifier)[];
export type CustomizableFieldValueFieldPolicy = {
	max_characters?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	price_type?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomizableFileOptionKeySpecifier = ('option_id' | 'product_sku' | 'required' | 'sort_order' | 'title' | 'uid' | 'value' | CustomizableFileOptionKeySpecifier)[];
export type CustomizableFileOptionFieldPolicy = {
	option_id?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	required?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomizableFileValueKeySpecifier = ('file_extension' | 'image_size_x' | 'image_size_y' | 'price' | 'price_type' | 'sku' | 'uid' | CustomizableFileValueKeySpecifier)[];
export type CustomizableFileValueFieldPolicy = {
	file_extension?: FieldPolicy<any> | FieldReadFunction<any>,
	image_size_x?: FieldPolicy<any> | FieldReadFunction<any>,
	image_size_y?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	price_type?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomizableMultipleOptionKeySpecifier = ('option_id' | 'required' | 'sort_order' | 'title' | 'uid' | 'value' | CustomizableMultipleOptionKeySpecifier)[];
export type CustomizableMultipleOptionFieldPolicy = {
	option_id?: FieldPolicy<any> | FieldReadFunction<any>,
	required?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomizableMultipleValueKeySpecifier = ('option_type_id' | 'price' | 'price_type' | 'sku' | 'sort_order' | 'title' | 'uid' | CustomizableMultipleValueKeySpecifier)[];
export type CustomizableMultipleValueFieldPolicy = {
	option_type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	price_type?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomizableOptionInterfaceKeySpecifier = ('option_id' | 'required' | 'sort_order' | 'title' | 'uid' | CustomizableOptionInterfaceKeySpecifier)[];
export type CustomizableOptionInterfaceFieldPolicy = {
	option_id?: FieldPolicy<any> | FieldReadFunction<any>,
	required?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomizableProductInterfaceKeySpecifier = ('options' | CustomizableProductInterfaceKeySpecifier)[];
export type CustomizableProductInterfaceFieldPolicy = {
	options?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomizableRadioOptionKeySpecifier = ('option_id' | 'required' | 'sort_order' | 'title' | 'uid' | 'value' | CustomizableRadioOptionKeySpecifier)[];
export type CustomizableRadioOptionFieldPolicy = {
	option_id?: FieldPolicy<any> | FieldReadFunction<any>,
	required?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomizableRadioValueKeySpecifier = ('option_type_id' | 'price' | 'price_type' | 'sku' | 'sort_order' | 'title' | 'uid' | CustomizableRadioValueKeySpecifier)[];
export type CustomizableRadioValueFieldPolicy = {
	option_type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	price_type?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteCompareListOutputKeySpecifier = ('result' | DeleteCompareListOutputKeySpecifier)[];
export type DeleteCompareListOutputFieldPolicy = {
	result?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeletePaymentTokenOutputKeySpecifier = ('customerPaymentTokens' | 'result' | DeletePaymentTokenOutputKeySpecifier)[];
export type DeletePaymentTokenOutputFieldPolicy = {
	customerPaymentTokens?: FieldPolicy<any> | FieldReadFunction<any>,
	result?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiscountKeySpecifier = ('amount' | 'label' | DiscountKeySpecifier)[];
export type DiscountFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DownloadableCartItemKeySpecifier = ('customizable_options' | 'errors' | 'id' | 'links' | 'prices' | 'product' | 'quantity' | 'samples' | 'uid' | DownloadableCartItemKeySpecifier)[];
export type DownloadableCartItemFieldPolicy = {
	customizable_options?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	links?: FieldPolicy<any> | FieldReadFunction<any>,
	prices?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	samples?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DownloadableCreditMemoItemKeySpecifier = ('discounts' | 'downloadable_links' | 'id' | 'order_item' | 'product_name' | 'product_sale_price' | 'product_sku' | 'quantity_refunded' | DownloadableCreditMemoItemKeySpecifier)[];
export type DownloadableCreditMemoItemFieldPolicy = {
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	downloadable_links?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	order_item?: FieldPolicy<any> | FieldReadFunction<any>,
	product_name?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sale_price?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_refunded?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DownloadableInvoiceItemKeySpecifier = ('discounts' | 'downloadable_links' | 'id' | 'order_item' | 'product_name' | 'product_sale_price' | 'product_sku' | 'quantity_invoiced' | DownloadableInvoiceItemKeySpecifier)[];
export type DownloadableInvoiceItemFieldPolicy = {
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	downloadable_links?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	order_item?: FieldPolicy<any> | FieldReadFunction<any>,
	product_name?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sale_price?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_invoiced?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DownloadableItemsLinksKeySpecifier = ('sort_order' | 'title' | 'uid' | DownloadableItemsLinksKeySpecifier)[];
export type DownloadableItemsLinksFieldPolicy = {
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DownloadableOrderItemKeySpecifier = ('discounts' | 'downloadable_links' | 'entered_options' | 'id' | 'product_name' | 'product_sale_price' | 'product_sku' | 'product_type' | 'product_url_key' | 'quantity_canceled' | 'quantity_invoiced' | 'quantity_ordered' | 'quantity_refunded' | 'quantity_returned' | 'quantity_shipped' | 'selected_options' | 'status' | DownloadableOrderItemKeySpecifier)[];
export type DownloadableOrderItemFieldPolicy = {
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	downloadable_links?: FieldPolicy<any> | FieldReadFunction<any>,
	entered_options?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	product_name?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sale_price?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	product_type?: FieldPolicy<any> | FieldReadFunction<any>,
	product_url_key?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_canceled?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_invoiced?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_ordered?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_refunded?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_returned?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_shipped?: FieldPolicy<any> | FieldReadFunction<any>,
	selected_options?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DownloadableProductKeySpecifier = ('activity' | 'attribute_set_id' | 'backorder_delivery_date' | 'backorder_delivery_period' | 'canonical_url' | 'categories' | 'category_gear' | 'climate' | 'collar' | 'color' | 'colors' | 'compatible_phones' | 'country_of_manufacture' | 'created_at' | 'crosssell_products' | 'description' | 'dominant_color' | 'downloadable_product_links' | 'downloadable_product_samples' | 'eco_collection' | 'erin_recommends' | 'features_bags' | 'format' | 'gender' | 'gift_message_available' | 'id' | 'image' | 'in_stock_delivery_period' | 'links_purchased_separately' | 'links_title' | 'manufacturer' | 'material' | 'media_gallery' | 'media_gallery_entries' | 'meta_description' | 'meta_keyword' | 'meta_title' | 'name' | 'new' | 'new_from_date' | 'new_to_date' | 'only_x_left_in_stock' | 'options' | 'options_container' | 'pattern' | 'performance_fabric' | 'price' | 'price_range' | 'price_tiers' | 'print_art' | 'print_holiday' | 'print_labels' | 'print_landmarks' | 'print_landscape' | 'print_mood' | 'print_pattern_swatch' | 'print_type' | 'product_links' | 'rating_summary' | 'redirect_code' | 'related_products' | 'relative_url' | 'review_count' | 'reviews' | 'sale' | 'short_description' | 'size' | 'sku' | 'sleeve' | 'small_image' | 'special_from_date' | 'special_price' | 'special_to_date' | 'stock_status' | 'strap_bags' | 'style_bags' | 'style_bottom' | 'style_general' | 'swatch_image' | 'th_test_attribute' | 'thumbnail' | 'tier_price' | 'tier_prices' | 'type' | 'type_id' | 'uid' | 'updated_at' | 'upsell_products' | 'url_key' | 'url_path' | 'url_rewrites' | 'url_suffix' | 'websites' | DownloadableProductKeySpecifier)[];
export type DownloadableProductFieldPolicy = {
	activity?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute_set_id?: FieldPolicy<any> | FieldReadFunction<any>,
	backorder_delivery_date?: FieldPolicy<any> | FieldReadFunction<any>,
	backorder_delivery_period?: FieldPolicy<any> | FieldReadFunction<any>,
	canonical_url?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	category_gear?: FieldPolicy<any> | FieldReadFunction<any>,
	climate?: FieldPolicy<any> | FieldReadFunction<any>,
	collar?: FieldPolicy<any> | FieldReadFunction<any>,
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	colors?: FieldPolicy<any> | FieldReadFunction<any>,
	compatible_phones?: FieldPolicy<any> | FieldReadFunction<any>,
	country_of_manufacture?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	crosssell_products?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	dominant_color?: FieldPolicy<any> | FieldReadFunction<any>,
	downloadable_product_links?: FieldPolicy<any> | FieldReadFunction<any>,
	downloadable_product_samples?: FieldPolicy<any> | FieldReadFunction<any>,
	eco_collection?: FieldPolicy<any> | FieldReadFunction<any>,
	erin_recommends?: FieldPolicy<any> | FieldReadFunction<any>,
	features_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	format?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	gift_message_available?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	in_stock_delivery_period?: FieldPolicy<any> | FieldReadFunction<any>,
	links_purchased_separately?: FieldPolicy<any> | FieldReadFunction<any>,
	links_title?: FieldPolicy<any> | FieldReadFunction<any>,
	manufacturer?: FieldPolicy<any> | FieldReadFunction<any>,
	material?: FieldPolicy<any> | FieldReadFunction<any>,
	media_gallery?: FieldPolicy<any> | FieldReadFunction<any>,
	media_gallery_entries?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_description?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_keyword?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_title?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	new?: FieldPolicy<any> | FieldReadFunction<any>,
	new_from_date?: FieldPolicy<any> | FieldReadFunction<any>,
	new_to_date?: FieldPolicy<any> | FieldReadFunction<any>,
	only_x_left_in_stock?: FieldPolicy<any> | FieldReadFunction<any>,
	options?: FieldPolicy<any> | FieldReadFunction<any>,
	options_container?: FieldPolicy<any> | FieldReadFunction<any>,
	pattern?: FieldPolicy<any> | FieldReadFunction<any>,
	performance_fabric?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	price_range?: FieldPolicy<any> | FieldReadFunction<any>,
	price_tiers?: FieldPolicy<any> | FieldReadFunction<any>,
	print_art?: FieldPolicy<any> | FieldReadFunction<any>,
	print_holiday?: FieldPolicy<any> | FieldReadFunction<any>,
	print_labels?: FieldPolicy<any> | FieldReadFunction<any>,
	print_landmarks?: FieldPolicy<any> | FieldReadFunction<any>,
	print_landscape?: FieldPolicy<any> | FieldReadFunction<any>,
	print_mood?: FieldPolicy<any> | FieldReadFunction<any>,
	print_pattern_swatch?: FieldPolicy<any> | FieldReadFunction<any>,
	print_type?: FieldPolicy<any> | FieldReadFunction<any>,
	product_links?: FieldPolicy<any> | FieldReadFunction<any>,
	rating_summary?: FieldPolicy<any> | FieldReadFunction<any>,
	redirect_code?: FieldPolicy<any> | FieldReadFunction<any>,
	related_products?: FieldPolicy<any> | FieldReadFunction<any>,
	relative_url?: FieldPolicy<any> | FieldReadFunction<any>,
	review_count?: FieldPolicy<any> | FieldReadFunction<any>,
	reviews?: FieldPolicy<any> | FieldReadFunction<any>,
	sale?: FieldPolicy<any> | FieldReadFunction<any>,
	short_description?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	sleeve?: FieldPolicy<any> | FieldReadFunction<any>,
	small_image?: FieldPolicy<any> | FieldReadFunction<any>,
	special_from_date?: FieldPolicy<any> | FieldReadFunction<any>,
	special_price?: FieldPolicy<any> | FieldReadFunction<any>,
	special_to_date?: FieldPolicy<any> | FieldReadFunction<any>,
	stock_status?: FieldPolicy<any> | FieldReadFunction<any>,
	strap_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	style_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	style_bottom?: FieldPolicy<any> | FieldReadFunction<any>,
	style_general?: FieldPolicy<any> | FieldReadFunction<any>,
	swatch_image?: FieldPolicy<any> | FieldReadFunction<any>,
	th_test_attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnail?: FieldPolicy<any> | FieldReadFunction<any>,
	tier_price?: FieldPolicy<any> | FieldReadFunction<any>,
	tier_prices?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	upsell_products?: FieldPolicy<any> | FieldReadFunction<any>,
	url_key?: FieldPolicy<any> | FieldReadFunction<any>,
	url_path?: FieldPolicy<any> | FieldReadFunction<any>,
	url_rewrites?: FieldPolicy<any> | FieldReadFunction<any>,
	url_suffix?: FieldPolicy<any> | FieldReadFunction<any>,
	websites?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DownloadableProductLinksKeySpecifier = ('id' | 'is_shareable' | 'link_type' | 'number_of_downloads' | 'price' | 'sample_file' | 'sample_type' | 'sample_url' | 'sort_order' | 'title' | 'uid' | DownloadableProductLinksKeySpecifier)[];
export type DownloadableProductLinksFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_shareable?: FieldPolicy<any> | FieldReadFunction<any>,
	link_type?: FieldPolicy<any> | FieldReadFunction<any>,
	number_of_downloads?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	sample_file?: FieldPolicy<any> | FieldReadFunction<any>,
	sample_type?: FieldPolicy<any> | FieldReadFunction<any>,
	sample_url?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DownloadableProductSamplesKeySpecifier = ('id' | 'sample_file' | 'sample_type' | 'sample_url' | 'sort_order' | 'title' | DownloadableProductSamplesKeySpecifier)[];
export type DownloadableProductSamplesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	sample_file?: FieldPolicy<any> | FieldReadFunction<any>,
	sample_type?: FieldPolicy<any> | FieldReadFunction<any>,
	sample_url?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DownloadableWishlistItemKeySpecifier = ('added_at' | 'customizable_options' | 'description' | 'id' | 'links_v2' | 'product' | 'quantity' | 'samples' | DownloadableWishlistItemKeySpecifier)[];
export type DownloadableWishlistItemFieldPolicy = {
	added_at?: FieldPolicy<any> | FieldReadFunction<any>,
	customizable_options?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	links_v2?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	samples?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EntityUrlKeySpecifier = ('canonical_url' | 'entity_uid' | 'id' | 'redirectCode' | 'relative_url' | 'type' | EntityUrlKeySpecifier)[];
export type EntityUrlFieldPolicy = {
	canonical_url?: FieldPolicy<any> | FieldReadFunction<any>,
	entity_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	redirectCode?: FieldPolicy<any> | FieldReadFunction<any>,
	relative_url?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExchangeRateKeySpecifier = ('currency_to' | 'rate' | ExchangeRateKeySpecifier)[];
export type ExchangeRateFieldPolicy = {
	currency_to?: FieldPolicy<any> | FieldReadFunction<any>,
	rate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FixedProductTaxKeySpecifier = ('amount' | 'label' | FixedProductTaxKeySpecifier)[];
export type FixedProductTaxFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FooterKeySpecifier = ('copyright' | 'id' | 'identity' | 'legalLinks' | 'socialLinks' | 'stage' | FooterKeySpecifier)[];
export type FooterFieldPolicy = {
	copyright?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identity?: FieldPolicy<any> | FieldReadFunction<any>,
	legalLinks?: FieldPolicy<any> | FieldReadFunction<any>,
	socialLinks?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FooterConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | FooterConnectionKeySpecifier)[];
export type FooterConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FooterEdgeKeySpecifier = ('cursor' | 'node' | FooterEdgeKeySpecifier)[];
export type FooterEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GenerateCustomerTokenAsAdminOutputKeySpecifier = ('customer_token' | GenerateCustomerTokenAsAdminOutputKeySpecifier)[];
export type GenerateCustomerTokenAsAdminOutputFieldPolicy = {
	customer_token?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftMessageKeySpecifier = ('from' | 'message' | 'to' | GiftMessageKeySpecifier)[];
export type GiftMessageFieldPolicy = {
	from?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	to?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GroupedProductKeySpecifier = ('activity' | 'attribute_set_id' | 'backorder_delivery_date' | 'backorder_delivery_period' | 'canonical_url' | 'categories' | 'category_gear' | 'climate' | 'collar' | 'color' | 'colors' | 'compatible_phones' | 'country_of_manufacture' | 'created_at' | 'crosssell_products' | 'description' | 'dominant_color' | 'eco_collection' | 'erin_recommends' | 'features_bags' | 'format' | 'gender' | 'gift_message_available' | 'id' | 'image' | 'in_stock_delivery_period' | 'items' | 'manufacturer' | 'material' | 'media_gallery' | 'media_gallery_entries' | 'meta_description' | 'meta_keyword' | 'meta_title' | 'name' | 'new' | 'new_from_date' | 'new_to_date' | 'only_x_left_in_stock' | 'options_container' | 'pattern' | 'performance_fabric' | 'price' | 'price_range' | 'price_tiers' | 'print_art' | 'print_holiday' | 'print_labels' | 'print_landmarks' | 'print_landscape' | 'print_mood' | 'print_pattern_swatch' | 'print_type' | 'product_links' | 'rating_summary' | 'redirect_code' | 'related_products' | 'relative_url' | 'review_count' | 'reviews' | 'sale' | 'short_description' | 'size' | 'sku' | 'sleeve' | 'small_image' | 'special_from_date' | 'special_price' | 'special_to_date' | 'stock_status' | 'strap_bags' | 'style_bags' | 'style_bottom' | 'style_general' | 'swatch_image' | 'th_test_attribute' | 'thumbnail' | 'tier_price' | 'tier_prices' | 'type' | 'type_id' | 'uid' | 'updated_at' | 'upsell_products' | 'url_key' | 'url_path' | 'url_rewrites' | 'url_suffix' | 'websites' | 'weight' | GroupedProductKeySpecifier)[];
export type GroupedProductFieldPolicy = {
	activity?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute_set_id?: FieldPolicy<any> | FieldReadFunction<any>,
	backorder_delivery_date?: FieldPolicy<any> | FieldReadFunction<any>,
	backorder_delivery_period?: FieldPolicy<any> | FieldReadFunction<any>,
	canonical_url?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	category_gear?: FieldPolicy<any> | FieldReadFunction<any>,
	climate?: FieldPolicy<any> | FieldReadFunction<any>,
	collar?: FieldPolicy<any> | FieldReadFunction<any>,
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	colors?: FieldPolicy<any> | FieldReadFunction<any>,
	compatible_phones?: FieldPolicy<any> | FieldReadFunction<any>,
	country_of_manufacture?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	crosssell_products?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	dominant_color?: FieldPolicy<any> | FieldReadFunction<any>,
	eco_collection?: FieldPolicy<any> | FieldReadFunction<any>,
	erin_recommends?: FieldPolicy<any> | FieldReadFunction<any>,
	features_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	format?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	gift_message_available?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	in_stock_delivery_period?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	manufacturer?: FieldPolicy<any> | FieldReadFunction<any>,
	material?: FieldPolicy<any> | FieldReadFunction<any>,
	media_gallery?: FieldPolicy<any> | FieldReadFunction<any>,
	media_gallery_entries?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_description?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_keyword?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_title?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	new?: FieldPolicy<any> | FieldReadFunction<any>,
	new_from_date?: FieldPolicy<any> | FieldReadFunction<any>,
	new_to_date?: FieldPolicy<any> | FieldReadFunction<any>,
	only_x_left_in_stock?: FieldPolicy<any> | FieldReadFunction<any>,
	options_container?: FieldPolicy<any> | FieldReadFunction<any>,
	pattern?: FieldPolicy<any> | FieldReadFunction<any>,
	performance_fabric?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	price_range?: FieldPolicy<any> | FieldReadFunction<any>,
	price_tiers?: FieldPolicy<any> | FieldReadFunction<any>,
	print_art?: FieldPolicy<any> | FieldReadFunction<any>,
	print_holiday?: FieldPolicy<any> | FieldReadFunction<any>,
	print_labels?: FieldPolicy<any> | FieldReadFunction<any>,
	print_landmarks?: FieldPolicy<any> | FieldReadFunction<any>,
	print_landscape?: FieldPolicy<any> | FieldReadFunction<any>,
	print_mood?: FieldPolicy<any> | FieldReadFunction<any>,
	print_pattern_swatch?: FieldPolicy<any> | FieldReadFunction<any>,
	print_type?: FieldPolicy<any> | FieldReadFunction<any>,
	product_links?: FieldPolicy<any> | FieldReadFunction<any>,
	rating_summary?: FieldPolicy<any> | FieldReadFunction<any>,
	redirect_code?: FieldPolicy<any> | FieldReadFunction<any>,
	related_products?: FieldPolicy<any> | FieldReadFunction<any>,
	relative_url?: FieldPolicy<any> | FieldReadFunction<any>,
	review_count?: FieldPolicy<any> | FieldReadFunction<any>,
	reviews?: FieldPolicy<any> | FieldReadFunction<any>,
	sale?: FieldPolicy<any> | FieldReadFunction<any>,
	short_description?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	sleeve?: FieldPolicy<any> | FieldReadFunction<any>,
	small_image?: FieldPolicy<any> | FieldReadFunction<any>,
	special_from_date?: FieldPolicy<any> | FieldReadFunction<any>,
	special_price?: FieldPolicy<any> | FieldReadFunction<any>,
	special_to_date?: FieldPolicy<any> | FieldReadFunction<any>,
	stock_status?: FieldPolicy<any> | FieldReadFunction<any>,
	strap_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	style_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	style_bottom?: FieldPolicy<any> | FieldReadFunction<any>,
	style_general?: FieldPolicy<any> | FieldReadFunction<any>,
	swatch_image?: FieldPolicy<any> | FieldReadFunction<any>,
	th_test_attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnail?: FieldPolicy<any> | FieldReadFunction<any>,
	tier_price?: FieldPolicy<any> | FieldReadFunction<any>,
	tier_prices?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	upsell_products?: FieldPolicy<any> | FieldReadFunction<any>,
	url_key?: FieldPolicy<any> | FieldReadFunction<any>,
	url_path?: FieldPolicy<any> | FieldReadFunction<any>,
	url_rewrites?: FieldPolicy<any> | FieldReadFunction<any>,
	url_suffix?: FieldPolicy<any> | FieldReadFunction<any>,
	websites?: FieldPolicy<any> | FieldReadFunction<any>,
	weight?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GroupedProductItemKeySpecifier = ('position' | 'product' | 'qty' | GroupedProductItemKeySpecifier)[];
export type GroupedProductItemFieldPolicy = {
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	qty?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GroupedProductWishlistItemKeySpecifier = ('added_at' | 'customizable_options' | 'description' | 'id' | 'product' | 'quantity' | GroupedProductWishlistItemKeySpecifier)[];
export type GroupedProductWishlistItemFieldPolicy = {
	added_at?: FieldPolicy<any> | FieldReadFunction<any>,
	customizable_options?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GuestWishlistKeySpecifier = ('items' | GuestWishlistKeySpecifier)[];
export type GuestWishlistFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GuestWishlistItemKeySpecifier = ('quantity' | 'selected_options' | 'sku' | 'url_key' | GuestWishlistItemKeySpecifier)[];
export type GuestWishlistItemFieldPolicy = {
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	selected_options?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	url_key?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HostedProUrlKeySpecifier = ('secure_form_url' | HostedProUrlKeySpecifier)[];
export type HostedProUrlFieldPolicy = {
	secure_form_url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HttpQueryParameterKeySpecifier = ('name' | 'value' | HttpQueryParameterKeySpecifier)[];
export type HttpQueryParameterFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ImageSwatchDataKeySpecifier = ('thumbnail' | 'value' | ImageSwatchDataKeySpecifier)[];
export type ImageSwatchDataFieldPolicy = {
	thumbnail?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvoiceKeySpecifier = ('comments' | 'id' | 'items' | 'number' | 'total' | InvoiceKeySpecifier)[];
export type InvoiceFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvoiceItemKeySpecifier = ('discounts' | 'id' | 'order_item' | 'product_name' | 'product_sale_price' | 'product_sku' | 'quantity_invoiced' | InvoiceItemKeySpecifier)[];
export type InvoiceItemFieldPolicy = {
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	order_item?: FieldPolicy<any> | FieldReadFunction<any>,
	product_name?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sale_price?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_invoiced?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvoiceItemInterfaceKeySpecifier = ('discounts' | 'id' | 'order_item' | 'product_name' | 'product_sale_price' | 'product_sku' | 'quantity_invoiced' | InvoiceItemInterfaceKeySpecifier)[];
export type InvoiceItemInterfaceFieldPolicy = {
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	order_item?: FieldPolicy<any> | FieldReadFunction<any>,
	product_name?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sale_price?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_invoiced?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvoiceTotalKeySpecifier = ('base_grand_total' | 'discounts' | 'grand_total' | 'shipping_handling' | 'subtotal' | 'taxes' | 'total_shipping' | 'total_tax' | InvoiceTotalKeySpecifier)[];
export type InvoiceTotalFieldPolicy = {
	base_grand_total?: FieldPolicy<any> | FieldReadFunction<any>,
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	grand_total?: FieldPolicy<any> | FieldReadFunction<any>,
	shipping_handling?: FieldPolicy<any> | FieldReadFunction<any>,
	subtotal?: FieldPolicy<any> | FieldReadFunction<any>,
	taxes?: FieldPolicy<any> | FieldReadFunction<any>,
	total_shipping?: FieldPolicy<any> | FieldReadFunction<any>,
	total_tax?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IsConfigSettingEnabledOutputKeySpecifier = ('is_enabled' | IsConfigSettingEnabledOutputKeySpecifier)[];
export type IsConfigSettingEnabledOutputFieldPolicy = {
	is_enabled?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IsEmailAvailableOutputKeySpecifier = ('is_email_available' | IsEmailAvailableOutputKeySpecifier)[];
export type IsEmailAvailableOutputFieldPolicy = {
	is_email_available?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItemSelectedBundleOptionKeySpecifier = ('id' | 'label' | 'uid' | 'values' | ItemSelectedBundleOptionKeySpecifier)[];
export type ItemSelectedBundleOptionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	values?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItemSelectedBundleOptionValueKeySpecifier = ('id' | 'price' | 'product_name' | 'product_sku' | 'quantity' | 'uid' | ItemSelectedBundleOptionValueKeySpecifier)[];
export type ItemSelectedBundleOptionValueFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	product_name?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeyValueKeySpecifier = ('name' | 'value' | KeyValueKeySpecifier)[];
export type KeyValueFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LayerFilterKeySpecifier = ('filter_items' | 'filter_items_count' | 'name' | 'request_var' | LayerFilterKeySpecifier)[];
export type LayerFilterFieldPolicy = {
	filter_items?: FieldPolicy<any> | FieldReadFunction<any>,
	filter_items_count?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	request_var?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LayerFilterItemKeySpecifier = ('items_count' | 'label' | 'value_string' | LayerFilterItemKeySpecifier)[];
export type LayerFilterItemFieldPolicy = {
	items_count?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	value_string?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LayerFilterItemInterfaceKeySpecifier = ('items_count' | 'label' | 'value_string' | LayerFilterItemInterfaceKeySpecifier)[];
export type LayerFilterItemInterfaceFieldPolicy = {
	items_count?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	value_string?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaGalleryEntryKeySpecifier = ('content' | 'disabled' | 'file' | 'id' | 'label' | 'media_type' | 'position' | 'types' | 'uid' | 'video_content' | MediaGalleryEntryKeySpecifier)[];
export type MediaGalleryEntryFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	disabled?: FieldPolicy<any> | FieldReadFunction<any>,
	file?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	media_type?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	types?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	video_content?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaGalleryInterfaceKeySpecifier = ('disabled' | 'label' | 'position' | 'url' | MediaGalleryInterfaceKeySpecifier)[];
export type MediaGalleryInterfaceFieldPolicy = {
	disabled?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MollieIssuerKeySpecifier = ('code' | 'image' | 'name' | 'svg' | MollieIssuerKeySpecifier)[];
export type MollieIssuerFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	svg?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MolliePaymentMethodKeySpecifier = ('code' | 'image' | 'name' | MolliePaymentMethodKeySpecifier)[];
export type MolliePaymentMethodFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MolliePaymentMethodMetaKeySpecifier = ('image' | MolliePaymentMethodMetaKeySpecifier)[];
export type MolliePaymentMethodMetaFieldPolicy = {
	image?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MolliePaymentMethodsOutputKeySpecifier = ('methods' | MolliePaymentMethodsOutputKeySpecifier)[];
export type MolliePaymentMethodsOutputFieldPolicy = {
	methods?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MollieProcessTransactionOutputKeySpecifier = ('cart' | 'paymentStatus' | MollieProcessTransactionOutputKeySpecifier)[];
export type MollieProcessTransactionOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentStatus?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MollieResetCartOutputKeySpecifier = ('cart' | MollieResetCartOutputKeySpecifier)[];
export type MollieResetCartOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MollieTransactionOutputKeySpecifier = ('checkout_url' | MollieTransactionOutputKeySpecifier)[];
export type MollieTransactionOutputFieldPolicy = {
	checkout_url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MoneyKeySpecifier = ('currency' | 'value' | MoneyKeySpecifier)[];
export type MoneyFieldPolicy = {
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('addBundleProductsToCart' | 'addConfigurableProductsToCart' | 'addDownloadableProductsToCart' | 'addProductsToCart' | 'addProductsToCompareList' | 'addProductsToWishlist' | 'addSimpleProductsToCart' | 'addVirtualProductsToCart' | 'addWishlistItemsToCart' | 'applyCouponToCart' | 'assignCompareListToCustomer' | 'changeCustomerPassword' | 'createBraintreeClientToken' | 'createCompareList' | 'createCustomer' | 'createCustomerAddress' | 'createCustomerV2' | 'createEmptyCart' | 'createKlarnaPaymentsSession' | 'createMollieTransaction' | 'createPayflowProToken' | 'createPaypalExpressToken' | 'createProductReview' | 'deleteCompareList' | 'deleteCustomerAddress' | 'deletePaymentToken' | 'generateCustomerToken' | 'generateCustomerTokenAsAdmin' | 'handlePayflowProResponse' | 'mergeCarts' | 'mollieProcessTransaction' | 'mollieRestoreCart' | 'placeOrder' | 'removeCouponFromCart' | 'removeItemFromCart' | 'removeProductsFromCompareList' | 'removeProductsFromWishlist' | 'reorderItems' | 'requestPasswordResetEmail' | 'resetPassword' | 'revokeCustomerToken' | 'sendEmailToFriend' | 'setBillingAddressOnCart' | 'setGuestEmailOnCart' | 'setPaymentMethodAndPlaceOrder' | 'setPaymentMethodOnCart' | 'setShippingAddressesOnCart' | 'setShippingMethodsOnCart' | 'subscribeEmailToNewsletter' | 'updateCartItems' | 'updateChatProfile' | 'updateCustomer' | 'updateCustomerAddress' | 'updateCustomerEmail' | 'updateCustomerV2' | 'updateProductsInWishlist' | 'updateQuoteEmail' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	addBundleProductsToCart?: FieldPolicy<any> | FieldReadFunction<any>,
	addConfigurableProductsToCart?: FieldPolicy<any> | FieldReadFunction<any>,
	addDownloadableProductsToCart?: FieldPolicy<any> | FieldReadFunction<any>,
	addProductsToCart?: FieldPolicy<any> | FieldReadFunction<any>,
	addProductsToCompareList?: FieldPolicy<any> | FieldReadFunction<any>,
	addProductsToWishlist?: FieldPolicy<any> | FieldReadFunction<any>,
	addSimpleProductsToCart?: FieldPolicy<any> | FieldReadFunction<any>,
	addVirtualProductsToCart?: FieldPolicy<any> | FieldReadFunction<any>,
	addWishlistItemsToCart?: FieldPolicy<any> | FieldReadFunction<any>,
	applyCouponToCart?: FieldPolicy<any> | FieldReadFunction<any>,
	assignCompareListToCustomer?: FieldPolicy<any> | FieldReadFunction<any>,
	changeCustomerPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	createBraintreeClientToken?: FieldPolicy<any> | FieldReadFunction<any>,
	createCompareList?: FieldPolicy<any> | FieldReadFunction<any>,
	createCustomer?: FieldPolicy<any> | FieldReadFunction<any>,
	createCustomerAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	createCustomerV2?: FieldPolicy<any> | FieldReadFunction<any>,
	createEmptyCart?: FieldPolicy<any> | FieldReadFunction<any>,
	createKlarnaPaymentsSession?: FieldPolicy<any> | FieldReadFunction<any>,
	createMollieTransaction?: FieldPolicy<any> | FieldReadFunction<any>,
	createPayflowProToken?: FieldPolicy<any> | FieldReadFunction<any>,
	createPaypalExpressToken?: FieldPolicy<any> | FieldReadFunction<any>,
	createProductReview?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCompareList?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCustomerAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePaymentToken?: FieldPolicy<any> | FieldReadFunction<any>,
	generateCustomerToken?: FieldPolicy<any> | FieldReadFunction<any>,
	generateCustomerTokenAsAdmin?: FieldPolicy<any> | FieldReadFunction<any>,
	handlePayflowProResponse?: FieldPolicy<any> | FieldReadFunction<any>,
	mergeCarts?: FieldPolicy<any> | FieldReadFunction<any>,
	mollieProcessTransaction?: FieldPolicy<any> | FieldReadFunction<any>,
	mollieRestoreCart?: FieldPolicy<any> | FieldReadFunction<any>,
	placeOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	removeCouponFromCart?: FieldPolicy<any> | FieldReadFunction<any>,
	removeItemFromCart?: FieldPolicy<any> | FieldReadFunction<any>,
	removeProductsFromCompareList?: FieldPolicy<any> | FieldReadFunction<any>,
	removeProductsFromWishlist?: FieldPolicy<any> | FieldReadFunction<any>,
	reorderItems?: FieldPolicy<any> | FieldReadFunction<any>,
	requestPasswordResetEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	resetPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	revokeCustomerToken?: FieldPolicy<any> | FieldReadFunction<any>,
	sendEmailToFriend?: FieldPolicy<any> | FieldReadFunction<any>,
	setBillingAddressOnCart?: FieldPolicy<any> | FieldReadFunction<any>,
	setGuestEmailOnCart?: FieldPolicy<any> | FieldReadFunction<any>,
	setPaymentMethodAndPlaceOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	setPaymentMethodOnCart?: FieldPolicy<any> | FieldReadFunction<any>,
	setShippingAddressesOnCart?: FieldPolicy<any> | FieldReadFunction<any>,
	setShippingMethodsOnCart?: FieldPolicy<any> | FieldReadFunction<any>,
	subscribeEmailToNewsletter?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCartItems?: FieldPolicy<any> | FieldReadFunction<any>,
	updateChatProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCustomer?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCustomerAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCustomerEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCustomerV2?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProductsInWishlist?: FieldPolicy<any> | FieldReadFunction<any>,
	updateQuoteEmail?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeKeySpecifier = ('id' | 'stage' | NodeKeySpecifier)[];
export type NodeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderKeySpecifier = ('items' | 'mollie_payment_token' | 'mollie_redirect_url' | 'order_id' | 'order_number' | 'total' | OrderKeySpecifier)[];
export type OrderFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	mollie_payment_token?: FieldPolicy<any> | FieldReadFunction<any>,
	mollie_redirect_url?: FieldPolicy<any> | FieldReadFunction<any>,
	order_id?: FieldPolicy<any> | FieldReadFunction<any>,
	order_number?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderAddressKeySpecifier = ('city' | 'company' | 'country_code' | 'fax' | 'firstname' | 'lastname' | 'middlename' | 'postcode' | 'prefix' | 'region' | 'region_id' | 'street' | 'suffix' | 'telephone' | 'vat_id' | OrderAddressKeySpecifier)[];
export type OrderAddressFieldPolicy = {
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	country_code?: FieldPolicy<any> | FieldReadFunction<any>,
	fax?: FieldPolicy<any> | FieldReadFunction<any>,
	firstname?: FieldPolicy<any> | FieldReadFunction<any>,
	lastname?: FieldPolicy<any> | FieldReadFunction<any>,
	middlename?: FieldPolicy<any> | FieldReadFunction<any>,
	postcode?: FieldPolicy<any> | FieldReadFunction<any>,
	prefix?: FieldPolicy<any> | FieldReadFunction<any>,
	region?: FieldPolicy<any> | FieldReadFunction<any>,
	region_id?: FieldPolicy<any> | FieldReadFunction<any>,
	street?: FieldPolicy<any> | FieldReadFunction<any>,
	suffix?: FieldPolicy<any> | FieldReadFunction<any>,
	telephone?: FieldPolicy<any> | FieldReadFunction<any>,
	vat_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderItemKeySpecifier = ('discounts' | 'entered_options' | 'id' | 'product_name' | 'product_sale_price' | 'product_sku' | 'product_type' | 'product_url_key' | 'quantity_canceled' | 'quantity_invoiced' | 'quantity_ordered' | 'quantity_refunded' | 'quantity_returned' | 'quantity_shipped' | 'selected_options' | 'status' | OrderItemKeySpecifier)[];
export type OrderItemFieldPolicy = {
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	entered_options?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	product_name?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sale_price?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	product_type?: FieldPolicy<any> | FieldReadFunction<any>,
	product_url_key?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_canceled?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_invoiced?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_ordered?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_refunded?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_returned?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_shipped?: FieldPolicy<any> | FieldReadFunction<any>,
	selected_options?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderItemInterfaceKeySpecifier = ('discounts' | 'entered_options' | 'id' | 'product_name' | 'product_sale_price' | 'product_sku' | 'product_type' | 'product_url_key' | 'quantity_canceled' | 'quantity_invoiced' | 'quantity_ordered' | 'quantity_refunded' | 'quantity_returned' | 'quantity_shipped' | 'selected_options' | 'status' | OrderItemInterfaceKeySpecifier)[];
export type OrderItemInterfaceFieldPolicy = {
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	entered_options?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	product_name?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sale_price?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	product_type?: FieldPolicy<any> | FieldReadFunction<any>,
	product_url_key?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_canceled?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_invoiced?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_ordered?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_refunded?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_returned?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_shipped?: FieldPolicy<any> | FieldReadFunction<any>,
	selected_options?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderItemOptionKeySpecifier = ('label' | 'value' | OrderItemOptionKeySpecifier)[];
export type OrderItemOptionFieldPolicy = {
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderPaymentMethodKeySpecifier = ('additional_data' | 'name' | 'type' | OrderPaymentMethodKeySpecifier)[];
export type OrderPaymentMethodFieldPolicy = {
	additional_data?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderShipmentKeySpecifier = ('comments' | 'id' | 'items' | 'number' | 'tracking' | OrderShipmentKeySpecifier)[];
export type OrderShipmentFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	tracking?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderTotalKeySpecifier = ('base_grand_total' | 'discounts' | 'grand_total' | 'shipping_handling' | 'subtotal' | 'taxes' | 'total_shipping' | 'total_tax' | OrderTotalKeySpecifier)[];
export type OrderTotalFieldPolicy = {
	base_grand_total?: FieldPolicy<any> | FieldReadFunction<any>,
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	grand_total?: FieldPolicy<any> | FieldReadFunction<any>,
	shipping_handling?: FieldPolicy<any> | FieldReadFunction<any>,
	subtotal?: FieldPolicy<any> | FieldReadFunction<any>,
	taxes?: FieldPolicy<any> | FieldReadFunction<any>,
	total_shipping?: FieldPolicy<any> | FieldReadFunction<any>,
	total_tax?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageKeySpecifier = ('asset' | 'author' | 'childPages' | 'content' | 'date' | 'id' | 'locale' | 'metaDescription' | 'metaRobots' | 'metaTitle' | 'relatedPages' | 'rowButtonLinkLists' | 'stage' | 'title' | 'url' | PageKeySpecifier)[];
export type PageFieldPolicy = {
	asset?: FieldPolicy<any> | FieldReadFunction<any>,
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	childPages?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	metaDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	metaRobots?: FieldPolicy<any> | FieldReadFunction<any>,
	metaTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	relatedPages?: FieldPolicy<any> | FieldReadFunction<any>,
	rowButtonLinkLists?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | PageConnectionKeySpecifier)[];
export type PageConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageEdgeKeySpecifier = ('cursor' | 'node' | PageEdgeKeySpecifier)[];
export type PageEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'pageSize' | 'startCursor' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	pageSize?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageLinkKeySpecifier = ('asset' | 'description' | 'footerLegalLinks' | 'footerSocialLinks' | 'id' | 'locale' | 'rowContentLinks' | 'rowHeroBanners' | 'rowLinks' | 'rowProductMultiple' | 'rowServiceOptionsMultiple' | 'rowSpecialBanners' | 'stage' | 'title' | 'url' | 'uspsMultiple' | PageLinkKeySpecifier)[];
export type PageLinkFieldPolicy = {
	asset?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	footerLegalLinks?: FieldPolicy<any> | FieldReadFunction<any>,
	footerSocialLinks?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	rowContentLinks?: FieldPolicy<any> | FieldReadFunction<any>,
	rowHeroBanners?: FieldPolicy<any> | FieldReadFunction<any>,
	rowLinks?: FieldPolicy<any> | FieldReadFunction<any>,
	rowProductMultiple?: FieldPolicy<any> | FieldReadFunction<any>,
	rowServiceOptionsMultiple?: FieldPolicy<any> | FieldReadFunction<any>,
	rowSpecialBanners?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	uspsMultiple?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageLinkConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | PageLinkConnectionKeySpecifier)[];
export type PageLinkConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageLinkEdgeKeySpecifier = ('cursor' | 'node' | PageLinkEdgeKeySpecifier)[];
export type PageLinkEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PayflowLinkTokenKeySpecifier = ('mode' | 'paypal_url' | 'secure_token' | 'secure_token_id' | PayflowLinkTokenKeySpecifier)[];
export type PayflowLinkTokenFieldPolicy = {
	mode?: FieldPolicy<any> | FieldReadFunction<any>,
	paypal_url?: FieldPolicy<any> | FieldReadFunction<any>,
	secure_token?: FieldPolicy<any> | FieldReadFunction<any>,
	secure_token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PayflowProResponseOutputKeySpecifier = ('cart' | PayflowProResponseOutputKeySpecifier)[];
export type PayflowProResponseOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PayflowProTokenKeySpecifier = ('response_message' | 'result' | 'result_code' | 'secure_token' | 'secure_token_id' | PayflowProTokenKeySpecifier)[];
export type PayflowProTokenFieldPolicy = {
	response_message?: FieldPolicy<any> | FieldReadFunction<any>,
	result?: FieldPolicy<any> | FieldReadFunction<any>,
	result_code?: FieldPolicy<any> | FieldReadFunction<any>,
	secure_token?: FieldPolicy<any> | FieldReadFunction<any>,
	secure_token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentTokenKeySpecifier = ('details' | 'payment_method_code' | 'public_hash' | 'type' | PaymentTokenKeySpecifier)[];
export type PaymentTokenFieldPolicy = {
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_method_code?: FieldPolicy<any> | FieldReadFunction<any>,
	public_hash?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaypalExpressTokenKeySpecifier = ('paypal_urls' | 'token' | PaypalExpressTokenKeySpecifier)[];
export type PaypalExpressTokenFieldPolicy = {
	paypal_urls?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaypalExpressTokenOutputKeySpecifier = ('paypal_urls' | 'token' | PaypalExpressTokenOutputKeySpecifier)[];
export type PaypalExpressTokenOutputFieldPolicy = {
	paypal_urls?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaypalExpressUrlListKeySpecifier = ('edit' | 'start' | PaypalExpressUrlListKeySpecifier)[];
export type PaypalExpressUrlListFieldPolicy = {
	edit?: FieldPolicy<any> | FieldReadFunction<any>,
	start?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PhysicalProductInterfaceKeySpecifier = ('weight' | PhysicalProductInterfaceKeySpecifier)[];
export type PhysicalProductInterfaceFieldPolicy = {
	weight?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PickupLocationKeySpecifier = ('city' | 'contact_name' | 'country_id' | 'description' | 'email' | 'fax' | 'latitude' | 'longitude' | 'name' | 'phone' | 'pickup_location_code' | 'postcode' | 'region' | 'region_id' | 'street' | PickupLocationKeySpecifier)[];
export type PickupLocationFieldPolicy = {
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	contact_name?: FieldPolicy<any> | FieldReadFunction<any>,
	country_id?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	fax?: FieldPolicy<any> | FieldReadFunction<any>,
	latitude?: FieldPolicy<any> | FieldReadFunction<any>,
	longitude?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	pickup_location_code?: FieldPolicy<any> | FieldReadFunction<any>,
	postcode?: FieldPolicy<any> | FieldReadFunction<any>,
	region?: FieldPolicy<any> | FieldReadFunction<any>,
	region_id?: FieldPolicy<any> | FieldReadFunction<any>,
	street?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PickupLocationsKeySpecifier = ('items' | 'page_info' | 'total_count' | PickupLocationsKeySpecifier)[];
export type PickupLocationsFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	page_info?: FieldPolicy<any> | FieldReadFunction<any>,
	total_count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceOrderOutputKeySpecifier = ('order' | PlaceOrderOutputKeySpecifier)[];
export type PlaceOrderOutputFieldPolicy = {
	order?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PriceKeySpecifier = ('adjustments' | 'amount' | PriceKeySpecifier)[];
export type PriceFieldPolicy = {
	adjustments?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PriceAdjustmentKeySpecifier = ('amount' | 'code' | 'description' | PriceAdjustmentKeySpecifier)[];
export type PriceAdjustmentFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PriceRangeKeySpecifier = ('maximum_price' | 'minimum_price' | PriceRangeKeySpecifier)[];
export type PriceRangeFieldPolicy = {
	maximum_price?: FieldPolicy<any> | FieldReadFunction<any>,
	minimum_price?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductAttributeKeySpecifier = ('code' | 'value' | ProductAttributeKeySpecifier)[];
export type ProductAttributeFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductDiscountKeySpecifier = ('amount_off' | 'percent_off' | ProductDiscountKeySpecifier)[];
export type ProductDiscountFieldPolicy = {
	amount_off?: FieldPolicy<any> | FieldReadFunction<any>,
	percent_off?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductImageKeySpecifier = ('disabled' | 'label' | 'position' | 'url' | ProductImageKeySpecifier)[];
export type ProductImageFieldPolicy = {
	disabled?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductInterfaceKeySpecifier = ('activity' | 'attribute_set_id' | 'backorder_delivery_date' | 'backorder_delivery_period' | 'canonical_url' | 'categories' | 'category_gear' | 'climate' | 'collar' | 'color' | 'colors' | 'compatible_phones' | 'country_of_manufacture' | 'created_at' | 'crosssell_products' | 'description' | 'dominant_color' | 'eco_collection' | 'erin_recommends' | 'features_bags' | 'format' | 'gender' | 'gift_message_available' | 'id' | 'image' | 'in_stock_delivery_period' | 'manufacturer' | 'material' | 'media_gallery' | 'media_gallery_entries' | 'meta_description' | 'meta_keyword' | 'meta_title' | 'name' | 'new' | 'new_from_date' | 'new_to_date' | 'only_x_left_in_stock' | 'options_container' | 'pattern' | 'performance_fabric' | 'price' | 'price_range' | 'price_tiers' | 'print_art' | 'print_holiday' | 'print_labels' | 'print_landmarks' | 'print_landscape' | 'print_mood' | 'print_pattern_swatch' | 'print_type' | 'product_links' | 'rating_summary' | 'related_products' | 'review_count' | 'reviews' | 'sale' | 'short_description' | 'size' | 'sku' | 'sleeve' | 'small_image' | 'special_from_date' | 'special_price' | 'special_to_date' | 'stock_status' | 'strap_bags' | 'style_bags' | 'style_bottom' | 'style_general' | 'swatch_image' | 'th_test_attribute' | 'thumbnail' | 'tier_price' | 'tier_prices' | 'type_id' | 'uid' | 'updated_at' | 'upsell_products' | 'url_key' | 'url_path' | 'url_rewrites' | 'url_suffix' | 'websites' | ProductInterfaceKeySpecifier)[];
export type ProductInterfaceFieldPolicy = {
	activity?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute_set_id?: FieldPolicy<any> | FieldReadFunction<any>,
	backorder_delivery_date?: FieldPolicy<any> | FieldReadFunction<any>,
	backorder_delivery_period?: FieldPolicy<any> | FieldReadFunction<any>,
	canonical_url?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	category_gear?: FieldPolicy<any> | FieldReadFunction<any>,
	climate?: FieldPolicy<any> | FieldReadFunction<any>,
	collar?: FieldPolicy<any> | FieldReadFunction<any>,
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	colors?: FieldPolicy<any> | FieldReadFunction<any>,
	compatible_phones?: FieldPolicy<any> | FieldReadFunction<any>,
	country_of_manufacture?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	crosssell_products?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	dominant_color?: FieldPolicy<any> | FieldReadFunction<any>,
	eco_collection?: FieldPolicy<any> | FieldReadFunction<any>,
	erin_recommends?: FieldPolicy<any> | FieldReadFunction<any>,
	features_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	format?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	gift_message_available?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	in_stock_delivery_period?: FieldPolicy<any> | FieldReadFunction<any>,
	manufacturer?: FieldPolicy<any> | FieldReadFunction<any>,
	material?: FieldPolicy<any> | FieldReadFunction<any>,
	media_gallery?: FieldPolicy<any> | FieldReadFunction<any>,
	media_gallery_entries?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_description?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_keyword?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_title?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	new?: FieldPolicy<any> | FieldReadFunction<any>,
	new_from_date?: FieldPolicy<any> | FieldReadFunction<any>,
	new_to_date?: FieldPolicy<any> | FieldReadFunction<any>,
	only_x_left_in_stock?: FieldPolicy<any> | FieldReadFunction<any>,
	options_container?: FieldPolicy<any> | FieldReadFunction<any>,
	pattern?: FieldPolicy<any> | FieldReadFunction<any>,
	performance_fabric?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	price_range?: FieldPolicy<any> | FieldReadFunction<any>,
	price_tiers?: FieldPolicy<any> | FieldReadFunction<any>,
	print_art?: FieldPolicy<any> | FieldReadFunction<any>,
	print_holiday?: FieldPolicy<any> | FieldReadFunction<any>,
	print_labels?: FieldPolicy<any> | FieldReadFunction<any>,
	print_landmarks?: FieldPolicy<any> | FieldReadFunction<any>,
	print_landscape?: FieldPolicy<any> | FieldReadFunction<any>,
	print_mood?: FieldPolicy<any> | FieldReadFunction<any>,
	print_pattern_swatch?: FieldPolicy<any> | FieldReadFunction<any>,
	print_type?: FieldPolicy<any> | FieldReadFunction<any>,
	product_links?: FieldPolicy<any> | FieldReadFunction<any>,
	rating_summary?: FieldPolicy<any> | FieldReadFunction<any>,
	related_products?: FieldPolicy<any> | FieldReadFunction<any>,
	review_count?: FieldPolicy<any> | FieldReadFunction<any>,
	reviews?: FieldPolicy<any> | FieldReadFunction<any>,
	sale?: FieldPolicy<any> | FieldReadFunction<any>,
	short_description?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	sleeve?: FieldPolicy<any> | FieldReadFunction<any>,
	small_image?: FieldPolicy<any> | FieldReadFunction<any>,
	special_from_date?: FieldPolicy<any> | FieldReadFunction<any>,
	special_price?: FieldPolicy<any> | FieldReadFunction<any>,
	special_to_date?: FieldPolicy<any> | FieldReadFunction<any>,
	stock_status?: FieldPolicy<any> | FieldReadFunction<any>,
	strap_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	style_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	style_bottom?: FieldPolicy<any> | FieldReadFunction<any>,
	style_general?: FieldPolicy<any> | FieldReadFunction<any>,
	swatch_image?: FieldPolicy<any> | FieldReadFunction<any>,
	th_test_attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnail?: FieldPolicy<any> | FieldReadFunction<any>,
	tier_price?: FieldPolicy<any> | FieldReadFunction<any>,
	tier_prices?: FieldPolicy<any> | FieldReadFunction<any>,
	type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	upsell_products?: FieldPolicy<any> | FieldReadFunction<any>,
	url_key?: FieldPolicy<any> | FieldReadFunction<any>,
	url_path?: FieldPolicy<any> | FieldReadFunction<any>,
	url_rewrites?: FieldPolicy<any> | FieldReadFunction<any>,
	url_suffix?: FieldPolicy<any> | FieldReadFunction<any>,
	websites?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductLinksKeySpecifier = ('link_type' | 'linked_product_sku' | 'linked_product_type' | 'position' | 'sku' | ProductLinksKeySpecifier)[];
export type ProductLinksFieldPolicy = {
	link_type?: FieldPolicy<any> | FieldReadFunction<any>,
	linked_product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	linked_product_type?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductLinksInterfaceKeySpecifier = ('link_type' | 'linked_product_sku' | 'linked_product_type' | 'position' | 'sku' | ProductLinksInterfaceKeySpecifier)[];
export type ProductLinksInterfaceFieldPolicy = {
	link_type?: FieldPolicy<any> | FieldReadFunction<any>,
	linked_product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	linked_product_type?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductMediaGalleryEntriesContentKeySpecifier = ('base64_encoded_data' | 'name' | 'type' | ProductMediaGalleryEntriesContentKeySpecifier)[];
export type ProductMediaGalleryEntriesContentFieldPolicy = {
	base64_encoded_data?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductMediaGalleryEntriesVideoContentKeySpecifier = ('media_type' | 'video_description' | 'video_metadata' | 'video_provider' | 'video_title' | 'video_url' | ProductMediaGalleryEntriesVideoContentKeySpecifier)[];
export type ProductMediaGalleryEntriesVideoContentFieldPolicy = {
	media_type?: FieldPolicy<any> | FieldReadFunction<any>,
	video_description?: FieldPolicy<any> | FieldReadFunction<any>,
	video_metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	video_provider?: FieldPolicy<any> | FieldReadFunction<any>,
	video_title?: FieldPolicy<any> | FieldReadFunction<any>,
	video_url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductPriceKeySpecifier = ('discount' | 'final_price' | 'fixed_product_taxes' | 'regular_price' | ProductPriceKeySpecifier)[];
export type ProductPriceFieldPolicy = {
	discount?: FieldPolicy<any> | FieldReadFunction<any>,
	final_price?: FieldPolicy<any> | FieldReadFunction<any>,
	fixed_product_taxes?: FieldPolicy<any> | FieldReadFunction<any>,
	regular_price?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductPricesKeySpecifier = ('maximalPrice' | 'minimalPrice' | 'regularPrice' | ProductPricesKeySpecifier)[];
export type ProductPricesFieldPolicy = {
	maximalPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	minimalPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	regularPrice?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductReviewKeySpecifier = ('average_rating' | 'created_at' | 'nickname' | 'product' | 'ratings_breakdown' | 'summary' | 'text' | ProductReviewKeySpecifier)[];
export type ProductReviewFieldPolicy = {
	average_rating?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	nickname?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	ratings_breakdown?: FieldPolicy<any> | FieldReadFunction<any>,
	summary?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductReviewRatingKeySpecifier = ('name' | 'value' | ProductReviewRatingKeySpecifier)[];
export type ProductReviewRatingFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductReviewRatingMetadataKeySpecifier = ('id' | 'name' | 'values' | ProductReviewRatingMetadataKeySpecifier)[];
export type ProductReviewRatingMetadataFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	values?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductReviewRatingValueMetadataKeySpecifier = ('value' | 'value_id' | ProductReviewRatingValueMetadataKeySpecifier)[];
export type ProductReviewRatingValueMetadataFieldPolicy = {
	value?: FieldPolicy<any> | FieldReadFunction<any>,
	value_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductReviewRatingsMetadataKeySpecifier = ('items' | ProductReviewRatingsMetadataKeySpecifier)[];
export type ProductReviewRatingsMetadataFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductReviewsKeySpecifier = ('items' | 'page_info' | ProductReviewsKeySpecifier)[];
export type ProductReviewsFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	page_info?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductTierPricesKeySpecifier = ('customer_group_id' | 'percentage_value' | 'qty' | 'value' | 'website_id' | ProductTierPricesKeySpecifier)[];
export type ProductTierPricesFieldPolicy = {
	customer_group_id?: FieldPolicy<any> | FieldReadFunction<any>,
	percentage_value?: FieldPolicy<any> | FieldReadFunction<any>,
	qty?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>,
	website_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVideoKeySpecifier = ('disabled' | 'label' | 'position' | 'url' | 'video_content' | ProductVideoKeySpecifier)[];
export type ProductVideoFieldPolicy = {
	disabled?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	video_content?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductsKeySpecifier = ('aggregations' | 'filters' | 'items' | 'page_info' | 'sort_fields' | 'total_count' | ProductsKeySpecifier)[];
export type ProductsFieldPolicy = {
	aggregations?: FieldPolicy<any> | FieldReadFunction<any>,
	filters?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	page_info?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_fields?: FieldPolicy<any> | FieldReadFunction<any>,
	total_count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('availableStores' | 'cart' | 'categories' | 'category' | 'categoryList' | 'chatData' | 'checkoutAgreements' | 'cmsBlocks' | 'cmsPage' | 'compareList' | 'countries' | 'country' | 'currency' | 'currentCartId' | 'customAttributeMetadata' | 'customer' | 'customerCart' | 'customerDownloadableProducts' | 'customerOrders' | 'customerPaymentTokens' | 'customerToken' | 'emailCaptureCheckout' | 'emailCaptureNewsletter' | 'footer' | 'footers' | 'footersConnection' | 'getHostedProUrl' | 'getPayflowLinkToken' | 'guestWishlist' | 'isEmailAvailable' | 'mollieCustomerOrder' | 'molliePaymentMethods' | 'orderData' | 'page' | 'pageLink' | 'pageLinks' | 'pageLinksConnection' | 'pages' | 'pagesConnection' | 'pickupLocations' | 'productReviewRatingsMetadata' | 'products' | 'route' | 'rowBlogContent' | 'rowBlogContents' | 'rowBlogContentsConnection' | 'rowButtonLinkList' | 'rowButtonLinkLists' | 'rowButtonLinkListsConnection' | 'rowColumnOne' | 'rowColumnOnes' | 'rowColumnOnesConnection' | 'rowColumnThree' | 'rowColumnThrees' | 'rowColumnThreesConnection' | 'rowColumnTwo' | 'rowColumnTwos' | 'rowColumnTwosConnection' | 'rowContentLinks' | 'rowContentLinksMultiple' | 'rowContentLinksMultipleConnection' | 'rowHeroBanner' | 'rowHeroBanners' | 'rowHeroBannersConnection' | 'rowLinks' | 'rowLinksMultiple' | 'rowLinksMultipleConnection' | 'rowProduct' | 'rowProductMultiple' | 'rowProductMultipleConnection' | 'rowQuote' | 'rowQuotes' | 'rowQuotesConnection' | 'rowServiceOptions' | 'rowServiceOptionsMultiple' | 'rowServiceOptionsMultipleConnection' | 'rowSpecialBanner' | 'rowSpecialBanners' | 'rowSpecialBannersConnection' | 'storeConfig' | 'trackingData' | 'urlResolver' | 'usps' | 'uspsMultiple' | 'uspsMultipleConnection' | 'wishlist' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	availableStores?: FieldPolicy<any> | FieldReadFunction<any>,
	cart?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	categoryList?: FieldPolicy<any> | FieldReadFunction<any>,
	chatData?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutAgreements?: FieldPolicy<any> | FieldReadFunction<any>,
	cmsBlocks?: FieldPolicy<any> | FieldReadFunction<any>,
	cmsPage?: FieldPolicy<any> | FieldReadFunction<any>,
	compareList?: FieldPolicy<any> | FieldReadFunction<any>,
	countries?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	currentCartId?: FieldPolicy<any> | FieldReadFunction<any>,
	customAttributeMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	customer?: FieldPolicy<any> | FieldReadFunction<any>,
	customerCart?: FieldPolicy<any> | FieldReadFunction<any>,
	customerDownloadableProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	customerOrders?: FieldPolicy<any> | FieldReadFunction<any>,
	customerPaymentTokens?: FieldPolicy<any> | FieldReadFunction<any>,
	customerToken?: FieldPolicy<any> | FieldReadFunction<any>,
	emailCaptureCheckout?: FieldPolicy<any> | FieldReadFunction<any>,
	emailCaptureNewsletter?: FieldPolicy<any> | FieldReadFunction<any>,
	footer?: FieldPolicy<any> | FieldReadFunction<any>,
	footers?: FieldPolicy<any> | FieldReadFunction<any>,
	footersConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	getHostedProUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	getPayflowLinkToken?: FieldPolicy<any> | FieldReadFunction<any>,
	guestWishlist?: FieldPolicy<any> | FieldReadFunction<any>,
	isEmailAvailable?: FieldPolicy<any> | FieldReadFunction<any>,
	mollieCustomerOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	molliePaymentMethods?: FieldPolicy<any> | FieldReadFunction<any>,
	orderData?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	pageLink?: FieldPolicy<any> | FieldReadFunction<any>,
	pageLinks?: FieldPolicy<any> | FieldReadFunction<any>,
	pageLinksConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	pagesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	pickupLocations?: FieldPolicy<any> | FieldReadFunction<any>,
	productReviewRatingsMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	route?: FieldPolicy<any> | FieldReadFunction<any>,
	rowBlogContent?: FieldPolicy<any> | FieldReadFunction<any>,
	rowBlogContents?: FieldPolicy<any> | FieldReadFunction<any>,
	rowBlogContentsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	rowButtonLinkList?: FieldPolicy<any> | FieldReadFunction<any>,
	rowButtonLinkLists?: FieldPolicy<any> | FieldReadFunction<any>,
	rowButtonLinkListsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	rowColumnOne?: FieldPolicy<any> | FieldReadFunction<any>,
	rowColumnOnes?: FieldPolicy<any> | FieldReadFunction<any>,
	rowColumnOnesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	rowColumnThree?: FieldPolicy<any> | FieldReadFunction<any>,
	rowColumnThrees?: FieldPolicy<any> | FieldReadFunction<any>,
	rowColumnThreesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	rowColumnTwo?: FieldPolicy<any> | FieldReadFunction<any>,
	rowColumnTwos?: FieldPolicy<any> | FieldReadFunction<any>,
	rowColumnTwosConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	rowContentLinks?: FieldPolicy<any> | FieldReadFunction<any>,
	rowContentLinksMultiple?: FieldPolicy<any> | FieldReadFunction<any>,
	rowContentLinksMultipleConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	rowHeroBanner?: FieldPolicy<any> | FieldReadFunction<any>,
	rowHeroBanners?: FieldPolicy<any> | FieldReadFunction<any>,
	rowHeroBannersConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	rowLinks?: FieldPolicy<any> | FieldReadFunction<any>,
	rowLinksMultiple?: FieldPolicy<any> | FieldReadFunction<any>,
	rowLinksMultipleConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	rowProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	rowProductMultiple?: FieldPolicy<any> | FieldReadFunction<any>,
	rowProductMultipleConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	rowQuote?: FieldPolicy<any> | FieldReadFunction<any>,
	rowQuotes?: FieldPolicy<any> | FieldReadFunction<any>,
	rowQuotesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	rowServiceOptions?: FieldPolicy<any> | FieldReadFunction<any>,
	rowServiceOptionsMultiple?: FieldPolicy<any> | FieldReadFunction<any>,
	rowServiceOptionsMultipleConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	rowSpecialBanner?: FieldPolicy<any> | FieldReadFunction<any>,
	rowSpecialBanners?: FieldPolicy<any> | FieldReadFunction<any>,
	rowSpecialBannersConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	storeConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	trackingData?: FieldPolicy<any> | FieldReadFunction<any>,
	urlResolver?: FieldPolicy<any> | FieldReadFunction<any>,
	usps?: FieldPolicy<any> | FieldReadFunction<any>,
	uspsMultiple?: FieldPolicy<any> | FieldReadFunction<any>,
	uspsMultipleConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	wishlist?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RegionKeySpecifier = ('code' | 'id' | 'name' | RegionKeySpecifier)[];
export type RegionFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RemoveCouponFromCartOutputKeySpecifier = ('cart' | RemoveCouponFromCartOutputKeySpecifier)[];
export type RemoveCouponFromCartOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RemoveItemFromCartOutputKeySpecifier = ('cart' | RemoveItemFromCartOutputKeySpecifier)[];
export type RemoveItemFromCartOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RemoveProductsFromWishlistOutputKeySpecifier = ('user_errors' | 'wishlist' | RemoveProductsFromWishlistOutputKeySpecifier)[];
export type RemoveProductsFromWishlistOutputFieldPolicy = {
	user_errors?: FieldPolicy<any> | FieldReadFunction<any>,
	wishlist?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReorderItemsOutputKeySpecifier = ('cart' | 'userInputErrors' | ReorderItemsOutputKeySpecifier)[];
export type ReorderItemsOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>,
	userInputErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RevokeCustomerTokenOutputKeySpecifier = ('result' | RevokeCustomerTokenOutputKeySpecifier)[];
export type RevokeCustomerTokenOutputFieldPolicy = {
	result?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RichTextKeySpecifier = ('html' | 'markdown' | 'raw' | 'text' | RichTextKeySpecifier)[];
export type RichTextFieldPolicy = {
	html?: FieldPolicy<any> | FieldReadFunction<any>,
	markdown?: FieldPolicy<any> | FieldReadFunction<any>,
	raw?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RoutableInterfaceKeySpecifier = ('redirect_code' | 'relative_url' | 'type' | RoutableInterfaceKeySpecifier)[];
export type RoutableInterfaceFieldPolicy = {
	redirect_code?: FieldPolicy<any> | FieldReadFunction<any>,
	relative_url?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowBlogContentKeySpecifier = ('content' | 'id' | 'identity' | 'locale' | 'pages' | 'stage' | RowBlogContentKeySpecifier)[];
export type RowBlogContentFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identity?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowBlogContentConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | RowBlogContentConnectionKeySpecifier)[];
export type RowBlogContentConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowBlogContentEdgeKeySpecifier = ('cursor' | 'node' | RowBlogContentEdgeKeySpecifier)[];
export type RowBlogContentEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowButtonLinkListKeySpecifier = ('id' | 'identity' | 'links' | 'locale' | 'pages' | 'stage' | 'title' | RowButtonLinkListKeySpecifier)[];
export type RowButtonLinkListFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identity?: FieldPolicy<any> | FieldReadFunction<any>,
	links?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowButtonLinkListConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | RowButtonLinkListConnectionKeySpecifier)[];
export type RowButtonLinkListConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowButtonLinkListEdgeKeySpecifier = ('cursor' | 'node' | RowButtonLinkListEdgeKeySpecifier)[];
export type RowButtonLinkListEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowColumnOneKeySpecifier = ('colOne' | 'id' | 'identity' | 'locale' | 'pages' | 'stage' | RowColumnOneKeySpecifier)[];
export type RowColumnOneFieldPolicy = {
	colOne?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identity?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowColumnOneConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | RowColumnOneConnectionKeySpecifier)[];
export type RowColumnOneConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowColumnOneEdgeKeySpecifier = ('cursor' | 'node' | RowColumnOneEdgeKeySpecifier)[];
export type RowColumnOneEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowColumnThreeKeySpecifier = ('colOne' | 'colThree' | 'colTwo' | 'id' | 'identity' | 'locale' | 'pages' | 'stage' | RowColumnThreeKeySpecifier)[];
export type RowColumnThreeFieldPolicy = {
	colOne?: FieldPolicy<any> | FieldReadFunction<any>,
	colThree?: FieldPolicy<any> | FieldReadFunction<any>,
	colTwo?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identity?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowColumnThreeConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | RowColumnThreeConnectionKeySpecifier)[];
export type RowColumnThreeConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowColumnThreeEdgeKeySpecifier = ('cursor' | 'node' | RowColumnThreeEdgeKeySpecifier)[];
export type RowColumnThreeEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowColumnTwoKeySpecifier = ('colOne' | 'colTwo' | 'id' | 'identity' | 'locale' | 'pages' | 'stage' | RowColumnTwoKeySpecifier)[];
export type RowColumnTwoFieldPolicy = {
	colOne?: FieldPolicy<any> | FieldReadFunction<any>,
	colTwo?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identity?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowColumnTwoConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | RowColumnTwoConnectionKeySpecifier)[];
export type RowColumnTwoConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowColumnTwoEdgeKeySpecifier = ('cursor' | 'node' | RowColumnTwoEdgeKeySpecifier)[];
export type RowColumnTwoEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowContentLinksKeySpecifier = ('contentLinks' | 'id' | 'identity' | 'locale' | 'pages' | 'stage' | 'title' | RowContentLinksKeySpecifier)[];
export type RowContentLinksFieldPolicy = {
	contentLinks?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identity?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowContentLinksConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | RowContentLinksConnectionKeySpecifier)[];
export type RowContentLinksConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowContentLinksEdgeKeySpecifier = ('cursor' | 'node' | RowContentLinksEdgeKeySpecifier)[];
export type RowContentLinksEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowHeroBannerKeySpecifier = ('asset' | 'copy' | 'id' | 'identity' | 'locale' | 'pageLinks' | 'pages' | 'stage' | RowHeroBannerKeySpecifier)[];
export type RowHeroBannerFieldPolicy = {
	asset?: FieldPolicy<any> | FieldReadFunction<any>,
	copy?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identity?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	pageLinks?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowHeroBannerConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | RowHeroBannerConnectionKeySpecifier)[];
export type RowHeroBannerConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowHeroBannerEdgeKeySpecifier = ('cursor' | 'node' | RowHeroBannerEdgeKeySpecifier)[];
export type RowHeroBannerEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowLinksKeySpecifier = ('id' | 'identity' | 'linksVariant' | 'locale' | 'pageLinks' | 'pages' | 'rowLinksCopy' | 'stage' | 'title' | RowLinksKeySpecifier)[];
export type RowLinksFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identity?: FieldPolicy<any> | FieldReadFunction<any>,
	linksVariant?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	pageLinks?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	rowLinksCopy?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowLinksConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | RowLinksConnectionKeySpecifier)[];
export type RowLinksConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowLinksEdgeKeySpecifier = ('cursor' | 'node' | RowLinksEdgeKeySpecifier)[];
export type RowLinksEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowProductKeySpecifier = ('asset' | 'id' | 'identity' | 'locale' | 'pageLinks' | 'pages' | 'productCopy' | 'stage' | 'title' | 'variant' | RowProductKeySpecifier)[];
export type RowProductFieldPolicy = {
	asset?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identity?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	pageLinks?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	productCopy?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowProductConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | RowProductConnectionKeySpecifier)[];
export type RowProductConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowProductEdgeKeySpecifier = ('cursor' | 'node' | RowProductEdgeKeySpecifier)[];
export type RowProductEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowQuoteKeySpecifier = ('id' | 'identity' | 'locale' | 'pages' | 'quote' | 'stage' | RowQuoteKeySpecifier)[];
export type RowQuoteFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identity?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	quote?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowQuoteConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | RowQuoteConnectionKeySpecifier)[];
export type RowQuoteConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowQuoteEdgeKeySpecifier = ('cursor' | 'node' | RowQuoteEdgeKeySpecifier)[];
export type RowQuoteEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowServiceOptionsKeySpecifier = ('id' | 'identity' | 'locale' | 'pages' | 'serviceOptions' | 'stage' | 'title' | RowServiceOptionsKeySpecifier)[];
export type RowServiceOptionsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identity?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	serviceOptions?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowServiceOptionsConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | RowServiceOptionsConnectionKeySpecifier)[];
export type RowServiceOptionsConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowServiceOptionsEdgeKeySpecifier = ('cursor' | 'node' | RowServiceOptionsEdgeKeySpecifier)[];
export type RowServiceOptionsEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowSpecialBannerKeySpecifier = ('asset' | 'copy' | 'id' | 'identity' | 'locale' | 'pageLinks' | 'pages' | 'stage' | 'topic' | RowSpecialBannerKeySpecifier)[];
export type RowSpecialBannerFieldPolicy = {
	asset?: FieldPolicy<any> | FieldReadFunction<any>,
	copy?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identity?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	pageLinks?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	topic?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowSpecialBannerConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | RowSpecialBannerConnectionKeySpecifier)[];
export type RowSpecialBannerConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowSpecialBannerEdgeKeySpecifier = ('cursor' | 'node' | RowSpecialBannerEdgeKeySpecifier)[];
export type RowSpecialBannerEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SalesCommentItemKeySpecifier = ('message' | 'timestamp' | SalesCommentItemKeySpecifier)[];
export type SalesCommentItemFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	timestamp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SalesItemInterfaceKeySpecifier = ('gift_message' | SalesItemInterfaceKeySpecifier)[];
export type SalesItemInterfaceFieldPolicy = {
	gift_message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchResultPageInfoKeySpecifier = ('current_page' | 'page_size' | 'total_pages' | SearchResultPageInfoKeySpecifier)[];
export type SearchResultPageInfoFieldPolicy = {
	current_page?: FieldPolicy<any> | FieldReadFunction<any>,
	page_size?: FieldPolicy<any> | FieldReadFunction<any>,
	total_pages?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SelectedBundleOptionKeySpecifier = ('id' | 'label' | 'type' | 'uid' | 'values' | SelectedBundleOptionKeySpecifier)[];
export type SelectedBundleOptionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	values?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SelectedBundleOptionValueKeySpecifier = ('id' | 'label' | 'price' | 'quantity' | 'uid' | SelectedBundleOptionValueKeySpecifier)[];
export type SelectedBundleOptionValueFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SelectedConfigurableOptionKeySpecifier = ('configurable_product_option_uid' | 'configurable_product_option_value_uid' | 'id' | 'option_label' | 'value_id' | 'value_label' | SelectedConfigurableOptionKeySpecifier)[];
export type SelectedConfigurableOptionFieldPolicy = {
	configurable_product_option_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	configurable_product_option_value_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	option_label?: FieldPolicy<any> | FieldReadFunction<any>,
	value_id?: FieldPolicy<any> | FieldReadFunction<any>,
	value_label?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SelectedCustomizableOptionKeySpecifier = ('customizable_option_uid' | 'id' | 'is_required' | 'label' | 'sort_order' | 'type' | 'values' | SelectedCustomizableOptionKeySpecifier)[];
export type SelectedCustomizableOptionFieldPolicy = {
	customizable_option_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_required?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	values?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SelectedCustomizableOptionValueKeySpecifier = ('customizable_option_value_uid' | 'id' | 'label' | 'price' | 'value' | SelectedCustomizableOptionValueKeySpecifier)[];
export type SelectedCustomizableOptionValueFieldPolicy = {
	customizable_option_value_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SelectedPaymentMethodKeySpecifier = ('code' | 'mollie_meta' | 'purchase_order_number' | 'title' | SelectedPaymentMethodKeySpecifier)[];
export type SelectedPaymentMethodFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	mollie_meta?: FieldPolicy<any> | FieldReadFunction<any>,
	purchase_order_number?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SelectedShippingMethodKeySpecifier = ('amount' | 'base_amount' | 'carrier_code' | 'carrier_title' | 'method_code' | 'method_title' | SelectedShippingMethodKeySpecifier)[];
export type SelectedShippingMethodFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	base_amount?: FieldPolicy<any> | FieldReadFunction<any>,
	carrier_code?: FieldPolicy<any> | FieldReadFunction<any>,
	carrier_title?: FieldPolicy<any> | FieldReadFunction<any>,
	method_code?: FieldPolicy<any> | FieldReadFunction<any>,
	method_title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SendEmailToFriendOutputKeySpecifier = ('recipients' | 'sender' | SendEmailToFriendOutputKeySpecifier)[];
export type SendEmailToFriendOutputFieldPolicy = {
	recipients?: FieldPolicy<any> | FieldReadFunction<any>,
	sender?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SendEmailToFriendRecipientKeySpecifier = ('email' | 'name' | SendEmailToFriendRecipientKeySpecifier)[];
export type SendEmailToFriendRecipientFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SendEmailToFriendSenderKeySpecifier = ('email' | 'message' | 'name' | SendEmailToFriendSenderKeySpecifier)[];
export type SendEmailToFriendSenderFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SendFriendConfigurationKeySpecifier = ('enabled_for_customers' | 'enabled_for_guests' | SendFriendConfigurationKeySpecifier)[];
export type SendFriendConfigurationFieldPolicy = {
	enabled_for_customers?: FieldPolicy<any> | FieldReadFunction<any>,
	enabled_for_guests?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetBillingAddressOnCartOutputKeySpecifier = ('cart' | SetBillingAddressOnCartOutputKeySpecifier)[];
export type SetBillingAddressOnCartOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetGuestEmailOnCartOutputKeySpecifier = ('cart' | SetGuestEmailOnCartOutputKeySpecifier)[];
export type SetGuestEmailOnCartOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetPaymentMethodOnCartOutputKeySpecifier = ('cart' | SetPaymentMethodOnCartOutputKeySpecifier)[];
export type SetPaymentMethodOnCartOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetShippingAddressesOnCartOutputKeySpecifier = ('cart' | SetShippingAddressesOnCartOutputKeySpecifier)[];
export type SetShippingAddressesOnCartOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetShippingMethodsOnCartOutputKeySpecifier = ('cart' | SetShippingMethodsOnCartOutputKeySpecifier)[];
export type SetShippingMethodsOnCartOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShipmentItemKeySpecifier = ('id' | 'order_item' | 'product_name' | 'product_sale_price' | 'product_sku' | 'quantity_shipped' | ShipmentItemKeySpecifier)[];
export type ShipmentItemFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	order_item?: FieldPolicy<any> | FieldReadFunction<any>,
	product_name?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sale_price?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_shipped?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShipmentItemInterfaceKeySpecifier = ('id' | 'order_item' | 'product_name' | 'product_sale_price' | 'product_sku' | 'quantity_shipped' | ShipmentItemInterfaceKeySpecifier)[];
export type ShipmentItemInterfaceFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	order_item?: FieldPolicy<any> | FieldReadFunction<any>,
	product_name?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sale_price?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_shipped?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShipmentTrackingKeySpecifier = ('carrier' | 'number' | 'title' | ShipmentTrackingKeySpecifier)[];
export type ShipmentTrackingFieldPolicy = {
	carrier?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingCartAddressKeySpecifier = ('available_shipping_methods' | 'cart_items' | 'cart_items_v2' | 'city' | 'company' | 'country' | 'customer_notes' | 'firstname' | 'items_weight' | 'lastname' | 'pickup_location_code' | 'postcode' | 'region' | 'selected_shipping_method' | 'street' | 'telephone' | ShippingCartAddressKeySpecifier)[];
export type ShippingCartAddressFieldPolicy = {
	available_shipping_methods?: FieldPolicy<any> | FieldReadFunction<any>,
	cart_items?: FieldPolicy<any> | FieldReadFunction<any>,
	cart_items_v2?: FieldPolicy<any> | FieldReadFunction<any>,
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	customer_notes?: FieldPolicy<any> | FieldReadFunction<any>,
	firstname?: FieldPolicy<any> | FieldReadFunction<any>,
	items_weight?: FieldPolicy<any> | FieldReadFunction<any>,
	lastname?: FieldPolicy<any> | FieldReadFunction<any>,
	pickup_location_code?: FieldPolicy<any> | FieldReadFunction<any>,
	postcode?: FieldPolicy<any> | FieldReadFunction<any>,
	region?: FieldPolicy<any> | FieldReadFunction<any>,
	selected_shipping_method?: FieldPolicy<any> | FieldReadFunction<any>,
	street?: FieldPolicy<any> | FieldReadFunction<any>,
	telephone?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingDiscountKeySpecifier = ('amount' | ShippingDiscountKeySpecifier)[];
export type ShippingDiscountFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingHandlingKeySpecifier = ('amount_excluding_tax' | 'amount_including_tax' | 'discounts' | 'taxes' | 'total_amount' | ShippingHandlingKeySpecifier)[];
export type ShippingHandlingFieldPolicy = {
	amount_excluding_tax?: FieldPolicy<any> | FieldReadFunction<any>,
	amount_including_tax?: FieldPolicy<any> | FieldReadFunction<any>,
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	taxes?: FieldPolicy<any> | FieldReadFunction<any>,
	total_amount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SimpleCartItemKeySpecifier = ('customizable_options' | 'errors' | 'gift_message' | 'id' | 'prices' | 'product' | 'quantity' | 'uid' | SimpleCartItemKeySpecifier)[];
export type SimpleCartItemFieldPolicy = {
	customizable_options?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	gift_message?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	prices?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SimpleProductKeySpecifier = ('activity' | 'attribute_set_id' | 'backorder_delivery_date' | 'backorder_delivery_period' | 'canonical_url' | 'categories' | 'category_gear' | 'climate' | 'collar' | 'color' | 'colors' | 'compatible_phones' | 'country_of_manufacture' | 'created_at' | 'crosssell_products' | 'description' | 'dominant_color' | 'eco_collection' | 'erin_recommends' | 'features_bags' | 'format' | 'gender' | 'gift_message_available' | 'id' | 'image' | 'in_stock_delivery_period' | 'manufacturer' | 'material' | 'media_gallery' | 'media_gallery_entries' | 'meta_description' | 'meta_keyword' | 'meta_title' | 'name' | 'new' | 'new_from_date' | 'new_to_date' | 'only_x_left_in_stock' | 'options' | 'options_container' | 'pattern' | 'performance_fabric' | 'price' | 'price_range' | 'price_tiers' | 'print_art' | 'print_holiday' | 'print_labels' | 'print_landmarks' | 'print_landscape' | 'print_mood' | 'print_pattern_swatch' | 'print_type' | 'product_links' | 'rating_summary' | 'redirect_code' | 'related_products' | 'relative_url' | 'review_count' | 'reviews' | 'sale' | 'short_description' | 'size' | 'sku' | 'sleeve' | 'small_image' | 'special_from_date' | 'special_price' | 'special_to_date' | 'stock_status' | 'strap_bags' | 'style_bags' | 'style_bottom' | 'style_general' | 'swatch_image' | 'th_test_attribute' | 'thumbnail' | 'tier_price' | 'tier_prices' | 'type' | 'type_id' | 'uid' | 'updated_at' | 'upsell_products' | 'url_key' | 'url_path' | 'url_rewrites' | 'url_suffix' | 'websites' | 'weight' | SimpleProductKeySpecifier)[];
export type SimpleProductFieldPolicy = {
	activity?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute_set_id?: FieldPolicy<any> | FieldReadFunction<any>,
	backorder_delivery_date?: FieldPolicy<any> | FieldReadFunction<any>,
	backorder_delivery_period?: FieldPolicy<any> | FieldReadFunction<any>,
	canonical_url?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	category_gear?: FieldPolicy<any> | FieldReadFunction<any>,
	climate?: FieldPolicy<any> | FieldReadFunction<any>,
	collar?: FieldPolicy<any> | FieldReadFunction<any>,
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	colors?: FieldPolicy<any> | FieldReadFunction<any>,
	compatible_phones?: FieldPolicy<any> | FieldReadFunction<any>,
	country_of_manufacture?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	crosssell_products?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	dominant_color?: FieldPolicy<any> | FieldReadFunction<any>,
	eco_collection?: FieldPolicy<any> | FieldReadFunction<any>,
	erin_recommends?: FieldPolicy<any> | FieldReadFunction<any>,
	features_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	format?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	gift_message_available?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	in_stock_delivery_period?: FieldPolicy<any> | FieldReadFunction<any>,
	manufacturer?: FieldPolicy<any> | FieldReadFunction<any>,
	material?: FieldPolicy<any> | FieldReadFunction<any>,
	media_gallery?: FieldPolicy<any> | FieldReadFunction<any>,
	media_gallery_entries?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_description?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_keyword?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_title?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	new?: FieldPolicy<any> | FieldReadFunction<any>,
	new_from_date?: FieldPolicy<any> | FieldReadFunction<any>,
	new_to_date?: FieldPolicy<any> | FieldReadFunction<any>,
	only_x_left_in_stock?: FieldPolicy<any> | FieldReadFunction<any>,
	options?: FieldPolicy<any> | FieldReadFunction<any>,
	options_container?: FieldPolicy<any> | FieldReadFunction<any>,
	pattern?: FieldPolicy<any> | FieldReadFunction<any>,
	performance_fabric?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	price_range?: FieldPolicy<any> | FieldReadFunction<any>,
	price_tiers?: FieldPolicy<any> | FieldReadFunction<any>,
	print_art?: FieldPolicy<any> | FieldReadFunction<any>,
	print_holiday?: FieldPolicy<any> | FieldReadFunction<any>,
	print_labels?: FieldPolicy<any> | FieldReadFunction<any>,
	print_landmarks?: FieldPolicy<any> | FieldReadFunction<any>,
	print_landscape?: FieldPolicy<any> | FieldReadFunction<any>,
	print_mood?: FieldPolicy<any> | FieldReadFunction<any>,
	print_pattern_swatch?: FieldPolicy<any> | FieldReadFunction<any>,
	print_type?: FieldPolicy<any> | FieldReadFunction<any>,
	product_links?: FieldPolicy<any> | FieldReadFunction<any>,
	rating_summary?: FieldPolicy<any> | FieldReadFunction<any>,
	redirect_code?: FieldPolicy<any> | FieldReadFunction<any>,
	related_products?: FieldPolicy<any> | FieldReadFunction<any>,
	relative_url?: FieldPolicy<any> | FieldReadFunction<any>,
	review_count?: FieldPolicy<any> | FieldReadFunction<any>,
	reviews?: FieldPolicy<any> | FieldReadFunction<any>,
	sale?: FieldPolicy<any> | FieldReadFunction<any>,
	short_description?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	sleeve?: FieldPolicy<any> | FieldReadFunction<any>,
	small_image?: FieldPolicy<any> | FieldReadFunction<any>,
	special_from_date?: FieldPolicy<any> | FieldReadFunction<any>,
	special_price?: FieldPolicy<any> | FieldReadFunction<any>,
	special_to_date?: FieldPolicy<any> | FieldReadFunction<any>,
	stock_status?: FieldPolicy<any> | FieldReadFunction<any>,
	strap_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	style_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	style_bottom?: FieldPolicy<any> | FieldReadFunction<any>,
	style_general?: FieldPolicy<any> | FieldReadFunction<any>,
	swatch_image?: FieldPolicy<any> | FieldReadFunction<any>,
	th_test_attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnail?: FieldPolicy<any> | FieldReadFunction<any>,
	tier_price?: FieldPolicy<any> | FieldReadFunction<any>,
	tier_prices?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	upsell_products?: FieldPolicy<any> | FieldReadFunction<any>,
	url_key?: FieldPolicy<any> | FieldReadFunction<any>,
	url_path?: FieldPolicy<any> | FieldReadFunction<any>,
	url_rewrites?: FieldPolicy<any> | FieldReadFunction<any>,
	url_suffix?: FieldPolicy<any> | FieldReadFunction<any>,
	websites?: FieldPolicy<any> | FieldReadFunction<any>,
	weight?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SimpleWishlistItemKeySpecifier = ('added_at' | 'customizable_options' | 'description' | 'id' | 'product' | 'quantity' | SimpleWishlistItemKeySpecifier)[];
export type SimpleWishlistItemFieldPolicy = {
	added_at?: FieldPolicy<any> | FieldReadFunction<any>,
	customizable_options?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SortFieldKeySpecifier = ('label' | 'value' | SortFieldKeySpecifier)[];
export type SortFieldFieldPolicy = {
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SortFieldsKeySpecifier = ('default' | 'options' | SortFieldsKeySpecifier)[];
export type SortFieldsFieldPolicy = {
	default?: FieldPolicy<any> | FieldReadFunction<any>,
	options?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StoreConfigKeySpecifier = ('absolute_footer' | 'allow_guests_to_write_product_reviews' | 'allow_items' | 'allow_order' | 'autocomplete_on_storefront' | 'base_currency_code' | 'base_link_url' | 'base_media_url' | 'base_static_url' | 'base_url' | 'braintree_cc_vault_active' | 'catalog_default_sort_by' | 'category_fixed_product_tax_display_setting' | 'category_url_suffix' | 'cms_home_page' | 'cms_no_cookies' | 'cms_no_route' | 'code' | 'configurable_thumbnail_source' | 'copyright' | 'default_description' | 'default_display_currency_code' | 'default_keywords' | 'default_title' | 'demonotice' | 'front' | 'grid_per_page' | 'grid_per_page_values' | 'head_includes' | 'head_shortcut_icon' | 'header_logo_src' | 'id' | 'is_default_store' | 'is_default_store_group' | 'list_mode' | 'list_per_page' | 'list_per_page_values' | 'locale' | 'logo_alt' | 'logo_height' | 'logo_width' | 'magento_wishlist_general_is_enabled' | 'minimum_password_length' | 'no_route' | 'payment_payflowpro_cc_vault_active' | 'product_fixed_product_tax_display_setting' | 'product_reviews_enabled' | 'product_url_suffix' | 'required_character_classes_number' | 'root_category_id' | 'root_category_uid' | 'sales_fixed_product_tax_display_setting' | 'secure_base_link_url' | 'secure_base_media_url' | 'secure_base_static_url' | 'secure_base_url' | 'send_friend' | 'show_cms_breadcrumbs' | 'store_code' | 'store_group_code' | 'store_group_name' | 'store_name' | 'store_sort_order' | 'timezone' | 'title_prefix' | 'title_separator' | 'title_suffix' | 'use_store_in_url' | 'website_code' | 'website_id' | 'website_name' | 'weight_unit' | 'welcome' | StoreConfigKeySpecifier)[];
export type StoreConfigFieldPolicy = {
	absolute_footer?: FieldPolicy<any> | FieldReadFunction<any>,
	allow_guests_to_write_product_reviews?: FieldPolicy<any> | FieldReadFunction<any>,
	allow_items?: FieldPolicy<any> | FieldReadFunction<any>,
	allow_order?: FieldPolicy<any> | FieldReadFunction<any>,
	autocomplete_on_storefront?: FieldPolicy<any> | FieldReadFunction<any>,
	base_currency_code?: FieldPolicy<any> | FieldReadFunction<any>,
	base_link_url?: FieldPolicy<any> | FieldReadFunction<any>,
	base_media_url?: FieldPolicy<any> | FieldReadFunction<any>,
	base_static_url?: FieldPolicy<any> | FieldReadFunction<any>,
	base_url?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_cc_vault_active?: FieldPolicy<any> | FieldReadFunction<any>,
	catalog_default_sort_by?: FieldPolicy<any> | FieldReadFunction<any>,
	category_fixed_product_tax_display_setting?: FieldPolicy<any> | FieldReadFunction<any>,
	category_url_suffix?: FieldPolicy<any> | FieldReadFunction<any>,
	cms_home_page?: FieldPolicy<any> | FieldReadFunction<any>,
	cms_no_cookies?: FieldPolicy<any> | FieldReadFunction<any>,
	cms_no_route?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	configurable_thumbnail_source?: FieldPolicy<any> | FieldReadFunction<any>,
	copyright?: FieldPolicy<any> | FieldReadFunction<any>,
	default_description?: FieldPolicy<any> | FieldReadFunction<any>,
	default_display_currency_code?: FieldPolicy<any> | FieldReadFunction<any>,
	default_keywords?: FieldPolicy<any> | FieldReadFunction<any>,
	default_title?: FieldPolicy<any> | FieldReadFunction<any>,
	demonotice?: FieldPolicy<any> | FieldReadFunction<any>,
	front?: FieldPolicy<any> | FieldReadFunction<any>,
	grid_per_page?: FieldPolicy<any> | FieldReadFunction<any>,
	grid_per_page_values?: FieldPolicy<any> | FieldReadFunction<any>,
	head_includes?: FieldPolicy<any> | FieldReadFunction<any>,
	head_shortcut_icon?: FieldPolicy<any> | FieldReadFunction<any>,
	header_logo_src?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_default_store?: FieldPolicy<any> | FieldReadFunction<any>,
	is_default_store_group?: FieldPolicy<any> | FieldReadFunction<any>,
	list_mode?: FieldPolicy<any> | FieldReadFunction<any>,
	list_per_page?: FieldPolicy<any> | FieldReadFunction<any>,
	list_per_page_values?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	logo_alt?: FieldPolicy<any> | FieldReadFunction<any>,
	logo_height?: FieldPolicy<any> | FieldReadFunction<any>,
	logo_width?: FieldPolicy<any> | FieldReadFunction<any>,
	magento_wishlist_general_is_enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	minimum_password_length?: FieldPolicy<any> | FieldReadFunction<any>,
	no_route?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_payflowpro_cc_vault_active?: FieldPolicy<any> | FieldReadFunction<any>,
	product_fixed_product_tax_display_setting?: FieldPolicy<any> | FieldReadFunction<any>,
	product_reviews_enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	product_url_suffix?: FieldPolicy<any> | FieldReadFunction<any>,
	required_character_classes_number?: FieldPolicy<any> | FieldReadFunction<any>,
	root_category_id?: FieldPolicy<any> | FieldReadFunction<any>,
	root_category_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	sales_fixed_product_tax_display_setting?: FieldPolicy<any> | FieldReadFunction<any>,
	secure_base_link_url?: FieldPolicy<any> | FieldReadFunction<any>,
	secure_base_media_url?: FieldPolicy<any> | FieldReadFunction<any>,
	secure_base_static_url?: FieldPolicy<any> | FieldReadFunction<any>,
	secure_base_url?: FieldPolicy<any> | FieldReadFunction<any>,
	send_friend?: FieldPolicy<any> | FieldReadFunction<any>,
	show_cms_breadcrumbs?: FieldPolicy<any> | FieldReadFunction<any>,
	store_code?: FieldPolicy<any> | FieldReadFunction<any>,
	store_group_code?: FieldPolicy<any> | FieldReadFunction<any>,
	store_group_name?: FieldPolicy<any> | FieldReadFunction<any>,
	store_name?: FieldPolicy<any> | FieldReadFunction<any>,
	store_sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	timezone?: FieldPolicy<any> | FieldReadFunction<any>,
	title_prefix?: FieldPolicy<any> | FieldReadFunction<any>,
	title_separator?: FieldPolicy<any> | FieldReadFunction<any>,
	title_suffix?: FieldPolicy<any> | FieldReadFunction<any>,
	use_store_in_url?: FieldPolicy<any> | FieldReadFunction<any>,
	website_code?: FieldPolicy<any> | FieldReadFunction<any>,
	website_id?: FieldPolicy<any> | FieldReadFunction<any>,
	website_name?: FieldPolicy<any> | FieldReadFunction<any>,
	weight_unit?: FieldPolicy<any> | FieldReadFunction<any>,
	welcome?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StorefrontPropertiesKeySpecifier = ('position' | 'use_in_layered_navigation' | 'use_in_product_listing' | 'use_in_search_results_layered_navigation' | 'visible_on_catalog_pages' | StorefrontPropertiesKeySpecifier)[];
export type StorefrontPropertiesFieldPolicy = {
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	use_in_layered_navigation?: FieldPolicy<any> | FieldReadFunction<any>,
	use_in_product_listing?: FieldPolicy<any> | FieldReadFunction<any>,
	use_in_search_results_layered_navigation?: FieldPolicy<any> | FieldReadFunction<any>,
	visible_on_catalog_pages?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscribeEmailToNewsletterOutputKeySpecifier = ('status' | SubscribeEmailToNewsletterOutputKeySpecifier)[];
export type SubscribeEmailToNewsletterOutputFieldPolicy = {
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SwatchDataKeySpecifier = ('type' | 'value' | SwatchDataKeySpecifier)[];
export type SwatchDataFieldPolicy = {
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SwatchDataInterfaceKeySpecifier = ('value' | SwatchDataInterfaceKeySpecifier)[];
export type SwatchDataInterfaceFieldPolicy = {
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SwatchLayerFilterItemKeySpecifier = ('items_count' | 'label' | 'swatch_data' | 'value_string' | SwatchLayerFilterItemKeySpecifier)[];
export type SwatchLayerFilterItemFieldPolicy = {
	items_count?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	swatch_data?: FieldPolicy<any> | FieldReadFunction<any>,
	value_string?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SwatchLayerFilterItemInterfaceKeySpecifier = ('swatch_data' | SwatchLayerFilterItemInterfaceKeySpecifier)[];
export type SwatchLayerFilterItemInterfaceFieldPolicy = {
	swatch_data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaxItemKeySpecifier = ('amount' | 'rate' | 'title' | TaxItemKeySpecifier)[];
export type TaxItemFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	rate?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TextSwatchDataKeySpecifier = ('value' | TextSwatchDataKeySpecifier)[];
export type TextSwatchDataFieldPolicy = {
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TierPriceKeySpecifier = ('discount' | 'final_price' | 'quantity' | TierPriceKeySpecifier)[];
export type TierPriceFieldPolicy = {
	discount?: FieldPolicy<any> | FieldReadFunction<any>,
	final_price?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TrackingDataKeySpecifier = ('page_tracking_enabled' | 'region_prefix' | 'roi_tracking_enabled' | 'wbt_profile_id' | TrackingDataKeySpecifier)[];
export type TrackingDataFieldPolicy = {
	page_tracking_enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	region_prefix?: FieldPolicy<any> | FieldReadFunction<any>,
	roi_tracking_enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	wbt_profile_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateCartItemsOutputKeySpecifier = ('cart' | UpdateCartItemsOutputKeySpecifier)[];
export type UpdateCartItemsOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateProductsInWishlistOutputKeySpecifier = ('user_errors' | 'wishlist' | UpdateProductsInWishlistOutputKeySpecifier)[];
export type UpdateProductsInWishlistOutputFieldPolicy = {
	user_errors?: FieldPolicy<any> | FieldReadFunction<any>,
	wishlist?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UrlRewriteKeySpecifier = ('parameters' | 'url' | UrlRewriteKeySpecifier)[];
export type UrlRewriteFieldPolicy = {
	parameters?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UspsKeySpecifier = ('id' | 'identity' | 'stage' | 'uspsMultiple' | UspsKeySpecifier)[];
export type UspsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identity?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	uspsMultiple?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UspsConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | UspsConnectionKeySpecifier)[];
export type UspsConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UspsEdgeKeySpecifier = ('cursor' | 'node' | UspsEdgeKeySpecifier)[];
export type UspsEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VirtualCartItemKeySpecifier = ('customizable_options' | 'errors' | 'id' | 'prices' | 'product' | 'quantity' | 'uid' | VirtualCartItemKeySpecifier)[];
export type VirtualCartItemFieldPolicy = {
	customizable_options?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	prices?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VirtualProductKeySpecifier = ('activity' | 'attribute_set_id' | 'backorder_delivery_date' | 'backorder_delivery_period' | 'canonical_url' | 'categories' | 'category_gear' | 'climate' | 'collar' | 'color' | 'colors' | 'compatible_phones' | 'country_of_manufacture' | 'created_at' | 'crosssell_products' | 'description' | 'dominant_color' | 'eco_collection' | 'erin_recommends' | 'features_bags' | 'format' | 'gender' | 'gift_message_available' | 'id' | 'image' | 'in_stock_delivery_period' | 'manufacturer' | 'material' | 'media_gallery' | 'media_gallery_entries' | 'meta_description' | 'meta_keyword' | 'meta_title' | 'name' | 'new' | 'new_from_date' | 'new_to_date' | 'only_x_left_in_stock' | 'options' | 'options_container' | 'pattern' | 'performance_fabric' | 'price' | 'price_range' | 'price_tiers' | 'print_art' | 'print_holiday' | 'print_labels' | 'print_landmarks' | 'print_landscape' | 'print_mood' | 'print_pattern_swatch' | 'print_type' | 'product_links' | 'rating_summary' | 'redirect_code' | 'related_products' | 'relative_url' | 'review_count' | 'reviews' | 'sale' | 'short_description' | 'size' | 'sku' | 'sleeve' | 'small_image' | 'special_from_date' | 'special_price' | 'special_to_date' | 'stock_status' | 'strap_bags' | 'style_bags' | 'style_bottom' | 'style_general' | 'swatch_image' | 'th_test_attribute' | 'thumbnail' | 'tier_price' | 'tier_prices' | 'type' | 'type_id' | 'uid' | 'updated_at' | 'upsell_products' | 'url_key' | 'url_path' | 'url_rewrites' | 'url_suffix' | 'websites' | VirtualProductKeySpecifier)[];
export type VirtualProductFieldPolicy = {
	activity?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute_set_id?: FieldPolicy<any> | FieldReadFunction<any>,
	backorder_delivery_date?: FieldPolicy<any> | FieldReadFunction<any>,
	backorder_delivery_period?: FieldPolicy<any> | FieldReadFunction<any>,
	canonical_url?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	category_gear?: FieldPolicy<any> | FieldReadFunction<any>,
	climate?: FieldPolicy<any> | FieldReadFunction<any>,
	collar?: FieldPolicy<any> | FieldReadFunction<any>,
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	colors?: FieldPolicy<any> | FieldReadFunction<any>,
	compatible_phones?: FieldPolicy<any> | FieldReadFunction<any>,
	country_of_manufacture?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	crosssell_products?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	dominant_color?: FieldPolicy<any> | FieldReadFunction<any>,
	eco_collection?: FieldPolicy<any> | FieldReadFunction<any>,
	erin_recommends?: FieldPolicy<any> | FieldReadFunction<any>,
	features_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	format?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	gift_message_available?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	in_stock_delivery_period?: FieldPolicy<any> | FieldReadFunction<any>,
	manufacturer?: FieldPolicy<any> | FieldReadFunction<any>,
	material?: FieldPolicy<any> | FieldReadFunction<any>,
	media_gallery?: FieldPolicy<any> | FieldReadFunction<any>,
	media_gallery_entries?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_description?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_keyword?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_title?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	new?: FieldPolicy<any> | FieldReadFunction<any>,
	new_from_date?: FieldPolicy<any> | FieldReadFunction<any>,
	new_to_date?: FieldPolicy<any> | FieldReadFunction<any>,
	only_x_left_in_stock?: FieldPolicy<any> | FieldReadFunction<any>,
	options?: FieldPolicy<any> | FieldReadFunction<any>,
	options_container?: FieldPolicy<any> | FieldReadFunction<any>,
	pattern?: FieldPolicy<any> | FieldReadFunction<any>,
	performance_fabric?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	price_range?: FieldPolicy<any> | FieldReadFunction<any>,
	price_tiers?: FieldPolicy<any> | FieldReadFunction<any>,
	print_art?: FieldPolicy<any> | FieldReadFunction<any>,
	print_holiday?: FieldPolicy<any> | FieldReadFunction<any>,
	print_labels?: FieldPolicy<any> | FieldReadFunction<any>,
	print_landmarks?: FieldPolicy<any> | FieldReadFunction<any>,
	print_landscape?: FieldPolicy<any> | FieldReadFunction<any>,
	print_mood?: FieldPolicy<any> | FieldReadFunction<any>,
	print_pattern_swatch?: FieldPolicy<any> | FieldReadFunction<any>,
	print_type?: FieldPolicy<any> | FieldReadFunction<any>,
	product_links?: FieldPolicy<any> | FieldReadFunction<any>,
	rating_summary?: FieldPolicy<any> | FieldReadFunction<any>,
	redirect_code?: FieldPolicy<any> | FieldReadFunction<any>,
	related_products?: FieldPolicy<any> | FieldReadFunction<any>,
	relative_url?: FieldPolicy<any> | FieldReadFunction<any>,
	review_count?: FieldPolicy<any> | FieldReadFunction<any>,
	reviews?: FieldPolicy<any> | FieldReadFunction<any>,
	sale?: FieldPolicy<any> | FieldReadFunction<any>,
	short_description?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	sleeve?: FieldPolicy<any> | FieldReadFunction<any>,
	small_image?: FieldPolicy<any> | FieldReadFunction<any>,
	special_from_date?: FieldPolicy<any> | FieldReadFunction<any>,
	special_price?: FieldPolicy<any> | FieldReadFunction<any>,
	special_to_date?: FieldPolicy<any> | FieldReadFunction<any>,
	stock_status?: FieldPolicy<any> | FieldReadFunction<any>,
	strap_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	style_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	style_bottom?: FieldPolicy<any> | FieldReadFunction<any>,
	style_general?: FieldPolicy<any> | FieldReadFunction<any>,
	swatch_image?: FieldPolicy<any> | FieldReadFunction<any>,
	th_test_attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnail?: FieldPolicy<any> | FieldReadFunction<any>,
	tier_price?: FieldPolicy<any> | FieldReadFunction<any>,
	tier_prices?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	upsell_products?: FieldPolicy<any> | FieldReadFunction<any>,
	url_key?: FieldPolicy<any> | FieldReadFunction<any>,
	url_path?: FieldPolicy<any> | FieldReadFunction<any>,
	url_rewrites?: FieldPolicy<any> | FieldReadFunction<any>,
	url_suffix?: FieldPolicy<any> | FieldReadFunction<any>,
	websites?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VirtualWishlistItemKeySpecifier = ('added_at' | 'customizable_options' | 'description' | 'id' | 'product' | 'quantity' | VirtualWishlistItemKeySpecifier)[];
export type VirtualWishlistItemFieldPolicy = {
	added_at?: FieldPolicy<any> | FieldReadFunction<any>,
	customizable_options?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebsiteKeySpecifier = ('code' | 'default_group_id' | 'id' | 'is_default' | 'name' | 'sort_order' | WebsiteKeySpecifier)[];
export type WebsiteFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	default_group_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_default?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WishListUserInputErrorKeySpecifier = ('code' | 'message' | WishListUserInputErrorKeySpecifier)[];
export type WishListUserInputErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WishlistKeySpecifier = ('id' | 'items' | 'items_count' | 'items_v2' | 'sharing_code' | 'updated_at' | WishlistKeySpecifier)[];
export type WishlistFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	items_count?: FieldPolicy<any> | FieldReadFunction<any>,
	items_v2?: FieldPolicy<any> | FieldReadFunction<any>,
	sharing_code?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WishlistCartUserInputErrorKeySpecifier = ('code' | 'message' | 'wishlistId' | 'wishlistItemId' | WishlistCartUserInputErrorKeySpecifier)[];
export type WishlistCartUserInputErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	wishlistId?: FieldPolicy<any> | FieldReadFunction<any>,
	wishlistItemId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WishlistItemKeySpecifier = ('added_at' | 'description' | 'id' | 'product' | 'qty' | WishlistItemKeySpecifier)[];
export type WishlistItemFieldPolicy = {
	added_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	qty?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WishlistItemInterfaceKeySpecifier = ('added_at' | 'customizable_options' | 'description' | 'id' | 'product' | 'quantity' | WishlistItemInterfaceKeySpecifier)[];
export type WishlistItemInterfaceFieldPolicy = {
	added_at?: FieldPolicy<any> | FieldReadFunction<any>,
	customizable_options?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WishlistItemsKeySpecifier = ('items' | 'page_info' | WishlistItemsKeySpecifier)[];
export type WishlistItemsFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	page_info?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WishlistOutputKeySpecifier = ('items' | 'items_count' | 'name' | 'sharing_code' | 'updated_at' | WishlistOutputKeySpecifier)[];
export type WishlistOutputFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	items_count?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	sharing_code?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type createKlarnaPaymentsSessionOutputKeySpecifier = ('client_token' | 'payment_method_categories' | createKlarnaPaymentsSessionOutputKeySpecifier)[];
export type createKlarnaPaymentsSessionOutputFieldPolicy = {
	client_token?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_method_categories?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	AddBundleProductsToCartOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddBundleProductsToCartOutputKeySpecifier | (() => undefined | AddBundleProductsToCartOutputKeySpecifier),
		fields?: AddBundleProductsToCartOutputFieldPolicy,
	},
	AddConfigurableProductsToCartOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddConfigurableProductsToCartOutputKeySpecifier | (() => undefined | AddConfigurableProductsToCartOutputKeySpecifier),
		fields?: AddConfigurableProductsToCartOutputFieldPolicy,
	},
	AddDownloadableProductsToCartOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddDownloadableProductsToCartOutputKeySpecifier | (() => undefined | AddDownloadableProductsToCartOutputKeySpecifier),
		fields?: AddDownloadableProductsToCartOutputFieldPolicy,
	},
	AddProductsToCartOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddProductsToCartOutputKeySpecifier | (() => undefined | AddProductsToCartOutputKeySpecifier),
		fields?: AddProductsToCartOutputFieldPolicy,
	},
	AddProductsToWishlistOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddProductsToWishlistOutputKeySpecifier | (() => undefined | AddProductsToWishlistOutputKeySpecifier),
		fields?: AddProductsToWishlistOutputFieldPolicy,
	},
	AddSimpleProductsToCartOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddSimpleProductsToCartOutputKeySpecifier | (() => undefined | AddSimpleProductsToCartOutputKeySpecifier),
		fields?: AddSimpleProductsToCartOutputFieldPolicy,
	},
	AddVirtualProductsToCartOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddVirtualProductsToCartOutputKeySpecifier | (() => undefined | AddVirtualProductsToCartOutputKeySpecifier),
		fields?: AddVirtualProductsToCartOutputFieldPolicy,
	},
	AddWishlistItemsToCartOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddWishlistItemsToCartOutputKeySpecifier | (() => undefined | AddWishlistItemsToCartOutputKeySpecifier),
		fields?: AddWishlistItemsToCartOutputFieldPolicy,
	},
	Aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateKeySpecifier | (() => undefined | AggregateKeySpecifier),
		fields?: AggregateFieldPolicy,
	},
	Aggregation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregationKeySpecifier | (() => undefined | AggregationKeySpecifier),
		fields?: AggregationFieldPolicy,
	},
	AggregationOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregationOptionKeySpecifier | (() => undefined | AggregationOptionKeySpecifier),
		fields?: AggregationOptionFieldPolicy,
	},
	AggregationOptionInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregationOptionInterfaceKeySpecifier | (() => undefined | AggregationOptionInterfaceKeySpecifier),
		fields?: AggregationOptionInterfaceFieldPolicy,
	},
	AppliedCoupon?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppliedCouponKeySpecifier | (() => undefined | AppliedCouponKeySpecifier),
		fields?: AppliedCouponFieldPolicy,
	},
	ApplyCouponToCartOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplyCouponToCartOutputKeySpecifier | (() => undefined | ApplyCouponToCartOutputKeySpecifier),
		fields?: ApplyCouponToCartOutputFieldPolicy,
	},
	Asset?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssetKeySpecifier | (() => undefined | AssetKeySpecifier),
		fields?: AssetFieldPolicy,
	},
	Assets?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssetsKeySpecifier | (() => undefined | AssetsKeySpecifier),
		fields?: AssetsFieldPolicy,
	},
	AssignCompareListToCustomerOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssignCompareListToCustomerOutputKeySpecifier | (() => undefined | AssignCompareListToCustomerOutputKeySpecifier),
		fields?: AssignCompareListToCustomerOutputFieldPolicy,
	},
	Attribute?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeKeySpecifier | (() => undefined | AttributeKeySpecifier),
		fields?: AttributeFieldPolicy,
	},
	AttributeOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeOptionKeySpecifier | (() => undefined | AttributeOptionKeySpecifier),
		fields?: AttributeOptionFieldPolicy,
	},
	AvailablePaymentMethod?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AvailablePaymentMethodKeySpecifier | (() => undefined | AvailablePaymentMethodKeySpecifier),
		fields?: AvailablePaymentMethodFieldPolicy,
	},
	AvailableShippingMethod?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AvailableShippingMethodKeySpecifier | (() => undefined | AvailableShippingMethodKeySpecifier),
		fields?: AvailableShippingMethodFieldPolicy,
	},
	BillingCartAddress?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BillingCartAddressKeySpecifier | (() => undefined | BillingCartAddressKeySpecifier),
		fields?: BillingCartAddressFieldPolicy,
	},
	Breadcrumb?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BreadcrumbKeySpecifier | (() => undefined | BreadcrumbKeySpecifier),
		fields?: BreadcrumbFieldPolicy,
	},
	BundleCartItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BundleCartItemKeySpecifier | (() => undefined | BundleCartItemKeySpecifier),
		fields?: BundleCartItemFieldPolicy,
	},
	BundleCreditMemoItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BundleCreditMemoItemKeySpecifier | (() => undefined | BundleCreditMemoItemKeySpecifier),
		fields?: BundleCreditMemoItemFieldPolicy,
	},
	BundleInvoiceItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BundleInvoiceItemKeySpecifier | (() => undefined | BundleInvoiceItemKeySpecifier),
		fields?: BundleInvoiceItemFieldPolicy,
	},
	BundleItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BundleItemKeySpecifier | (() => undefined | BundleItemKeySpecifier),
		fields?: BundleItemFieldPolicy,
	},
	BundleItemOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BundleItemOptionKeySpecifier | (() => undefined | BundleItemOptionKeySpecifier),
		fields?: BundleItemOptionFieldPolicy,
	},
	BundleOrderItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BundleOrderItemKeySpecifier | (() => undefined | BundleOrderItemKeySpecifier),
		fields?: BundleOrderItemFieldPolicy,
	},
	BundleProduct?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BundleProductKeySpecifier | (() => undefined | BundleProductKeySpecifier),
		fields?: BundleProductFieldPolicy,
	},
	BundleShipmentItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BundleShipmentItemKeySpecifier | (() => undefined | BundleShipmentItemKeySpecifier),
		fields?: BundleShipmentItemFieldPolicy,
	},
	BundleWishlistItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BundleWishlistItemKeySpecifier | (() => undefined | BundleWishlistItemKeySpecifier),
		fields?: BundleWishlistItemFieldPolicy,
	},
	Cart?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartKeySpecifier | (() => undefined | CartKeySpecifier),
		fields?: CartFieldPolicy,
	},
	CartAddressCountry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartAddressCountryKeySpecifier | (() => undefined | CartAddressCountryKeySpecifier),
		fields?: CartAddressCountryFieldPolicy,
	},
	CartAddressInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartAddressInterfaceKeySpecifier | (() => undefined | CartAddressInterfaceKeySpecifier),
		fields?: CartAddressInterfaceFieldPolicy,
	},
	CartAddressRegion?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartAddressRegionKeySpecifier | (() => undefined | CartAddressRegionKeySpecifier),
		fields?: CartAddressRegionFieldPolicy,
	},
	CartDiscount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartDiscountKeySpecifier | (() => undefined | CartDiscountKeySpecifier),
		fields?: CartDiscountFieldPolicy,
	},
	CartItemError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartItemErrorKeySpecifier | (() => undefined | CartItemErrorKeySpecifier),
		fields?: CartItemErrorFieldPolicy,
	},
	CartItemInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartItemInterfaceKeySpecifier | (() => undefined | CartItemInterfaceKeySpecifier),
		fields?: CartItemInterfaceFieldPolicy,
	},
	CartItemPrices?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartItemPricesKeySpecifier | (() => undefined | CartItemPricesKeySpecifier),
		fields?: CartItemPricesFieldPolicy,
	},
	CartItemQuantity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartItemQuantityKeySpecifier | (() => undefined | CartItemQuantityKeySpecifier),
		fields?: CartItemQuantityFieldPolicy,
	},
	CartItemSelectedOptionValuePrice?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartItemSelectedOptionValuePriceKeySpecifier | (() => undefined | CartItemSelectedOptionValuePriceKeySpecifier),
		fields?: CartItemSelectedOptionValuePriceFieldPolicy,
	},
	CartPrices?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartPricesKeySpecifier | (() => undefined | CartPricesKeySpecifier),
		fields?: CartPricesFieldPolicy,
	},
	CartTaxItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartTaxItemKeySpecifier | (() => undefined | CartTaxItemKeySpecifier),
		fields?: CartTaxItemFieldPolicy,
	},
	CartUserInputError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartUserInputErrorKeySpecifier | (() => undefined | CartUserInputErrorKeySpecifier),
		fields?: CartUserInputErrorFieldPolicy,
	},
	Categories?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoriesKeySpecifier | (() => undefined | CategoriesKeySpecifier),
		fields?: CategoriesFieldPolicy,
	},
	CategoryInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryInterfaceKeySpecifier | (() => undefined | CategoryInterfaceKeySpecifier),
		fields?: CategoryInterfaceFieldPolicy,
	},
	CategoryProducts?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryProductsKeySpecifier | (() => undefined | CategoryProductsKeySpecifier),
		fields?: CategoryProductsFieldPolicy,
	},
	CategoryResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryResultKeySpecifier | (() => undefined | CategoryResultKeySpecifier),
		fields?: CategoryResultFieldPolicy,
	},
	CategoryTree?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryTreeKeySpecifier | (() => undefined | CategoryTreeKeySpecifier),
		fields?: CategoryTreeFieldPolicy,
	},
	ChatData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatDataKeySpecifier | (() => undefined | ChatDataKeySpecifier),
		fields?: ChatDataFieldPolicy,
	},
	CheckoutAgreement?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutAgreementKeySpecifier | (() => undefined | CheckoutAgreementKeySpecifier),
		fields?: CheckoutAgreementFieldPolicy,
	},
	CheckoutUserInputError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutUserInputErrorKeySpecifier | (() => undefined | CheckoutUserInputErrorKeySpecifier),
		fields?: CheckoutUserInputErrorFieldPolicy,
	},
	CmsBlock?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CmsBlockKeySpecifier | (() => undefined | CmsBlockKeySpecifier),
		fields?: CmsBlockFieldPolicy,
	},
	CmsBlocks?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CmsBlocksKeySpecifier | (() => undefined | CmsBlocksKeySpecifier),
		fields?: CmsBlocksFieldPolicy,
	},
	CmsPage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CmsPageKeySpecifier | (() => undefined | CmsPageKeySpecifier),
		fields?: CmsPageFieldPolicy,
	},
	ColorSwatchData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ColorSwatchDataKeySpecifier | (() => undefined | ColorSwatchDataKeySpecifier),
		fields?: ColorSwatchDataFieldPolicy,
	},
	ComparableAttribute?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComparableAttributeKeySpecifier | (() => undefined | ComparableAttributeKeySpecifier),
		fields?: ComparableAttributeFieldPolicy,
	},
	ComparableItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComparableItemKeySpecifier | (() => undefined | ComparableItemKeySpecifier),
		fields?: ComparableItemFieldPolicy,
	},
	CompareList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompareListKeySpecifier | (() => undefined | CompareListKeySpecifier),
		fields?: CompareListFieldPolicy,
	},
	ComplexTextValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComplexTextValueKeySpecifier | (() => undefined | ComplexTextValueKeySpecifier),
		fields?: ComplexTextValueFieldPolicy,
	},
	ConfigurableAttributeOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConfigurableAttributeOptionKeySpecifier | (() => undefined | ConfigurableAttributeOptionKeySpecifier),
		fields?: ConfigurableAttributeOptionFieldPolicy,
	},
	ConfigurableCartItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConfigurableCartItemKeySpecifier | (() => undefined | ConfigurableCartItemKeySpecifier),
		fields?: ConfigurableCartItemFieldPolicy,
	},
	ConfigurableOptionAvailableForSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConfigurableOptionAvailableForSelectionKeySpecifier | (() => undefined | ConfigurableOptionAvailableForSelectionKeySpecifier),
		fields?: ConfigurableOptionAvailableForSelectionFieldPolicy,
	},
	ConfigurableProduct?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConfigurableProductKeySpecifier | (() => undefined | ConfigurableProductKeySpecifier),
		fields?: ConfigurableProductFieldPolicy,
	},
	ConfigurableProductOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConfigurableProductOptionKeySpecifier | (() => undefined | ConfigurableProductOptionKeySpecifier),
		fields?: ConfigurableProductOptionFieldPolicy,
	},
	ConfigurableProductOptionValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConfigurableProductOptionValueKeySpecifier | (() => undefined | ConfigurableProductOptionValueKeySpecifier),
		fields?: ConfigurableProductOptionValueFieldPolicy,
	},
	ConfigurableProductOptions?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConfigurableProductOptionsKeySpecifier | (() => undefined | ConfigurableProductOptionsKeySpecifier),
		fields?: ConfigurableProductOptionsFieldPolicy,
	},
	ConfigurableProductOptionsSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConfigurableProductOptionsSelectionKeySpecifier | (() => undefined | ConfigurableProductOptionsSelectionKeySpecifier),
		fields?: ConfigurableProductOptionsSelectionFieldPolicy,
	},
	ConfigurableProductOptionsValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConfigurableProductOptionsValuesKeySpecifier | (() => undefined | ConfigurableProductOptionsValuesKeySpecifier),
		fields?: ConfigurableProductOptionsValuesFieldPolicy,
	},
	ConfigurableVariant?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConfigurableVariantKeySpecifier | (() => undefined | ConfigurableVariantKeySpecifier),
		fields?: ConfigurableVariantFieldPolicy,
	},
	ConfigurableWishlistItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConfigurableWishlistItemKeySpecifier | (() => undefined | ConfigurableWishlistItemKeySpecifier),
		fields?: ConfigurableWishlistItemFieldPolicy,
	},
	Country?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CountryKeySpecifier | (() => undefined | CountryKeySpecifier),
		fields?: CountryFieldPolicy,
	},
	CreatePayflowProTokenOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreatePayflowProTokenOutputKeySpecifier | (() => undefined | CreatePayflowProTokenOutputKeySpecifier),
		fields?: CreatePayflowProTokenOutputFieldPolicy,
	},
	CreateProductReviewOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateProductReviewOutputKeySpecifier | (() => undefined | CreateProductReviewOutputKeySpecifier),
		fields?: CreateProductReviewOutputFieldPolicy,
	},
	CreditMemo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreditMemoKeySpecifier | (() => undefined | CreditMemoKeySpecifier),
		fields?: CreditMemoFieldPolicy,
	},
	CreditMemoItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreditMemoItemKeySpecifier | (() => undefined | CreditMemoItemKeySpecifier),
		fields?: CreditMemoItemFieldPolicy,
	},
	CreditMemoItemInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreditMemoItemInterfaceKeySpecifier | (() => undefined | CreditMemoItemInterfaceKeySpecifier),
		fields?: CreditMemoItemInterfaceFieldPolicy,
	},
	CreditMemoTotal?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreditMemoTotalKeySpecifier | (() => undefined | CreditMemoTotalKeySpecifier),
		fields?: CreditMemoTotalFieldPolicy,
	},
	Currency?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CurrencyKeySpecifier | (() => undefined | CurrencyKeySpecifier),
		fields?: CurrencyFieldPolicy,
	},
	CurrentCartId?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CurrentCartIdKeySpecifier | (() => undefined | CurrentCartIdKeySpecifier),
		fields?: CurrentCartIdFieldPolicy,
	},
	CustomAttributeMetadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomAttributeMetadataKeySpecifier | (() => undefined | CustomAttributeMetadataKeySpecifier),
		fields?: CustomAttributeMetadataFieldPolicy,
	},
	Customer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerKeySpecifier | (() => undefined | CustomerKeySpecifier),
		fields?: CustomerFieldPolicy,
	},
	CustomerAddress?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerAddressKeySpecifier | (() => undefined | CustomerAddressKeySpecifier),
		fields?: CustomerAddressFieldPolicy,
	},
	CustomerAddressAttribute?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerAddressAttributeKeySpecifier | (() => undefined | CustomerAddressAttributeKeySpecifier),
		fields?: CustomerAddressAttributeFieldPolicy,
	},
	CustomerAddressRegion?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerAddressRegionKeySpecifier | (() => undefined | CustomerAddressRegionKeySpecifier),
		fields?: CustomerAddressRegionFieldPolicy,
	},
	CustomerDownloadableProduct?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerDownloadableProductKeySpecifier | (() => undefined | CustomerDownloadableProductKeySpecifier),
		fields?: CustomerDownloadableProductFieldPolicy,
	},
	CustomerDownloadableProducts?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerDownloadableProductsKeySpecifier | (() => undefined | CustomerDownloadableProductsKeySpecifier),
		fields?: CustomerDownloadableProductsFieldPolicy,
	},
	CustomerOrder?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerOrderKeySpecifier | (() => undefined | CustomerOrderKeySpecifier),
		fields?: CustomerOrderFieldPolicy,
	},
	CustomerOrders?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerOrdersKeySpecifier | (() => undefined | CustomerOrdersKeySpecifier),
		fields?: CustomerOrdersFieldPolicy,
	},
	CustomerOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerOutputKeySpecifier | (() => undefined | CustomerOutputKeySpecifier),
		fields?: CustomerOutputFieldPolicy,
	},
	CustomerPaymentTokens?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerPaymentTokensKeySpecifier | (() => undefined | CustomerPaymentTokensKeySpecifier),
		fields?: CustomerPaymentTokensFieldPolicy,
	},
	CustomerToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerTokenKeySpecifier | (() => undefined | CustomerTokenKeySpecifier),
		fields?: CustomerTokenFieldPolicy,
	},
	CustomizableAreaOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomizableAreaOptionKeySpecifier | (() => undefined | CustomizableAreaOptionKeySpecifier),
		fields?: CustomizableAreaOptionFieldPolicy,
	},
	CustomizableAreaValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomizableAreaValueKeySpecifier | (() => undefined | CustomizableAreaValueKeySpecifier),
		fields?: CustomizableAreaValueFieldPolicy,
	},
	CustomizableCheckboxOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomizableCheckboxOptionKeySpecifier | (() => undefined | CustomizableCheckboxOptionKeySpecifier),
		fields?: CustomizableCheckboxOptionFieldPolicy,
	},
	CustomizableCheckboxValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomizableCheckboxValueKeySpecifier | (() => undefined | CustomizableCheckboxValueKeySpecifier),
		fields?: CustomizableCheckboxValueFieldPolicy,
	},
	CustomizableDateOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomizableDateOptionKeySpecifier | (() => undefined | CustomizableDateOptionKeySpecifier),
		fields?: CustomizableDateOptionFieldPolicy,
	},
	CustomizableDateValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomizableDateValueKeySpecifier | (() => undefined | CustomizableDateValueKeySpecifier),
		fields?: CustomizableDateValueFieldPolicy,
	},
	CustomizableDropDownOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomizableDropDownOptionKeySpecifier | (() => undefined | CustomizableDropDownOptionKeySpecifier),
		fields?: CustomizableDropDownOptionFieldPolicy,
	},
	CustomizableDropDownValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomizableDropDownValueKeySpecifier | (() => undefined | CustomizableDropDownValueKeySpecifier),
		fields?: CustomizableDropDownValueFieldPolicy,
	},
	CustomizableFieldOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomizableFieldOptionKeySpecifier | (() => undefined | CustomizableFieldOptionKeySpecifier),
		fields?: CustomizableFieldOptionFieldPolicy,
	},
	CustomizableFieldValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomizableFieldValueKeySpecifier | (() => undefined | CustomizableFieldValueKeySpecifier),
		fields?: CustomizableFieldValueFieldPolicy,
	},
	CustomizableFileOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomizableFileOptionKeySpecifier | (() => undefined | CustomizableFileOptionKeySpecifier),
		fields?: CustomizableFileOptionFieldPolicy,
	},
	CustomizableFileValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomizableFileValueKeySpecifier | (() => undefined | CustomizableFileValueKeySpecifier),
		fields?: CustomizableFileValueFieldPolicy,
	},
	CustomizableMultipleOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomizableMultipleOptionKeySpecifier | (() => undefined | CustomizableMultipleOptionKeySpecifier),
		fields?: CustomizableMultipleOptionFieldPolicy,
	},
	CustomizableMultipleValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomizableMultipleValueKeySpecifier | (() => undefined | CustomizableMultipleValueKeySpecifier),
		fields?: CustomizableMultipleValueFieldPolicy,
	},
	CustomizableOptionInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomizableOptionInterfaceKeySpecifier | (() => undefined | CustomizableOptionInterfaceKeySpecifier),
		fields?: CustomizableOptionInterfaceFieldPolicy,
	},
	CustomizableProductInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomizableProductInterfaceKeySpecifier | (() => undefined | CustomizableProductInterfaceKeySpecifier),
		fields?: CustomizableProductInterfaceFieldPolicy,
	},
	CustomizableRadioOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomizableRadioOptionKeySpecifier | (() => undefined | CustomizableRadioOptionKeySpecifier),
		fields?: CustomizableRadioOptionFieldPolicy,
	},
	CustomizableRadioValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomizableRadioValueKeySpecifier | (() => undefined | CustomizableRadioValueKeySpecifier),
		fields?: CustomizableRadioValueFieldPolicy,
	},
	DeleteCompareListOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteCompareListOutputKeySpecifier | (() => undefined | DeleteCompareListOutputKeySpecifier),
		fields?: DeleteCompareListOutputFieldPolicy,
	},
	DeletePaymentTokenOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeletePaymentTokenOutputKeySpecifier | (() => undefined | DeletePaymentTokenOutputKeySpecifier),
		fields?: DeletePaymentTokenOutputFieldPolicy,
	},
	Discount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DiscountKeySpecifier | (() => undefined | DiscountKeySpecifier),
		fields?: DiscountFieldPolicy,
	},
	DownloadableCartItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DownloadableCartItemKeySpecifier | (() => undefined | DownloadableCartItemKeySpecifier),
		fields?: DownloadableCartItemFieldPolicy,
	},
	DownloadableCreditMemoItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DownloadableCreditMemoItemKeySpecifier | (() => undefined | DownloadableCreditMemoItemKeySpecifier),
		fields?: DownloadableCreditMemoItemFieldPolicy,
	},
	DownloadableInvoiceItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DownloadableInvoiceItemKeySpecifier | (() => undefined | DownloadableInvoiceItemKeySpecifier),
		fields?: DownloadableInvoiceItemFieldPolicy,
	},
	DownloadableItemsLinks?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DownloadableItemsLinksKeySpecifier | (() => undefined | DownloadableItemsLinksKeySpecifier),
		fields?: DownloadableItemsLinksFieldPolicy,
	},
	DownloadableOrderItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DownloadableOrderItemKeySpecifier | (() => undefined | DownloadableOrderItemKeySpecifier),
		fields?: DownloadableOrderItemFieldPolicy,
	},
	DownloadableProduct?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DownloadableProductKeySpecifier | (() => undefined | DownloadableProductKeySpecifier),
		fields?: DownloadableProductFieldPolicy,
	},
	DownloadableProductLinks?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DownloadableProductLinksKeySpecifier | (() => undefined | DownloadableProductLinksKeySpecifier),
		fields?: DownloadableProductLinksFieldPolicy,
	},
	DownloadableProductSamples?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DownloadableProductSamplesKeySpecifier | (() => undefined | DownloadableProductSamplesKeySpecifier),
		fields?: DownloadableProductSamplesFieldPolicy,
	},
	DownloadableWishlistItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DownloadableWishlistItemKeySpecifier | (() => undefined | DownloadableWishlistItemKeySpecifier),
		fields?: DownloadableWishlistItemFieldPolicy,
	},
	EntityUrl?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EntityUrlKeySpecifier | (() => undefined | EntityUrlKeySpecifier),
		fields?: EntityUrlFieldPolicy,
	},
	ExchangeRate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExchangeRateKeySpecifier | (() => undefined | ExchangeRateKeySpecifier),
		fields?: ExchangeRateFieldPolicy,
	},
	FixedProductTax?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FixedProductTaxKeySpecifier | (() => undefined | FixedProductTaxKeySpecifier),
		fields?: FixedProductTaxFieldPolicy,
	},
	Footer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FooterKeySpecifier | (() => undefined | FooterKeySpecifier),
		fields?: FooterFieldPolicy,
	},
	FooterConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FooterConnectionKeySpecifier | (() => undefined | FooterConnectionKeySpecifier),
		fields?: FooterConnectionFieldPolicy,
	},
	FooterEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FooterEdgeKeySpecifier | (() => undefined | FooterEdgeKeySpecifier),
		fields?: FooterEdgeFieldPolicy,
	},
	GenerateCustomerTokenAsAdminOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GenerateCustomerTokenAsAdminOutputKeySpecifier | (() => undefined | GenerateCustomerTokenAsAdminOutputKeySpecifier),
		fields?: GenerateCustomerTokenAsAdminOutputFieldPolicy,
	},
	GiftMessage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftMessageKeySpecifier | (() => undefined | GiftMessageKeySpecifier),
		fields?: GiftMessageFieldPolicy,
	},
	GroupedProduct?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GroupedProductKeySpecifier | (() => undefined | GroupedProductKeySpecifier),
		fields?: GroupedProductFieldPolicy,
	},
	GroupedProductItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GroupedProductItemKeySpecifier | (() => undefined | GroupedProductItemKeySpecifier),
		fields?: GroupedProductItemFieldPolicy,
	},
	GroupedProductWishlistItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GroupedProductWishlistItemKeySpecifier | (() => undefined | GroupedProductWishlistItemKeySpecifier),
		fields?: GroupedProductWishlistItemFieldPolicy,
	},
	GuestWishlist?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GuestWishlistKeySpecifier | (() => undefined | GuestWishlistKeySpecifier),
		fields?: GuestWishlistFieldPolicy,
	},
	GuestWishlistItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GuestWishlistItemKeySpecifier | (() => undefined | GuestWishlistItemKeySpecifier),
		fields?: GuestWishlistItemFieldPolicy,
	},
	HostedProUrl?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HostedProUrlKeySpecifier | (() => undefined | HostedProUrlKeySpecifier),
		fields?: HostedProUrlFieldPolicy,
	},
	HttpQueryParameter?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HttpQueryParameterKeySpecifier | (() => undefined | HttpQueryParameterKeySpecifier),
		fields?: HttpQueryParameterFieldPolicy,
	},
	ImageSwatchData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ImageSwatchDataKeySpecifier | (() => undefined | ImageSwatchDataKeySpecifier),
		fields?: ImageSwatchDataFieldPolicy,
	},
	Invoice?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvoiceKeySpecifier | (() => undefined | InvoiceKeySpecifier),
		fields?: InvoiceFieldPolicy,
	},
	InvoiceItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvoiceItemKeySpecifier | (() => undefined | InvoiceItemKeySpecifier),
		fields?: InvoiceItemFieldPolicy,
	},
	InvoiceItemInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvoiceItemInterfaceKeySpecifier | (() => undefined | InvoiceItemInterfaceKeySpecifier),
		fields?: InvoiceItemInterfaceFieldPolicy,
	},
	InvoiceTotal?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvoiceTotalKeySpecifier | (() => undefined | InvoiceTotalKeySpecifier),
		fields?: InvoiceTotalFieldPolicy,
	},
	IsConfigSettingEnabledOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IsConfigSettingEnabledOutputKeySpecifier | (() => undefined | IsConfigSettingEnabledOutputKeySpecifier),
		fields?: IsConfigSettingEnabledOutputFieldPolicy,
	},
	IsEmailAvailableOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IsEmailAvailableOutputKeySpecifier | (() => undefined | IsEmailAvailableOutputKeySpecifier),
		fields?: IsEmailAvailableOutputFieldPolicy,
	},
	ItemSelectedBundleOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItemSelectedBundleOptionKeySpecifier | (() => undefined | ItemSelectedBundleOptionKeySpecifier),
		fields?: ItemSelectedBundleOptionFieldPolicy,
	},
	ItemSelectedBundleOptionValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItemSelectedBundleOptionValueKeySpecifier | (() => undefined | ItemSelectedBundleOptionValueKeySpecifier),
		fields?: ItemSelectedBundleOptionValueFieldPolicy,
	},
	KeyValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeyValueKeySpecifier | (() => undefined | KeyValueKeySpecifier),
		fields?: KeyValueFieldPolicy,
	},
	LayerFilter?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LayerFilterKeySpecifier | (() => undefined | LayerFilterKeySpecifier),
		fields?: LayerFilterFieldPolicy,
	},
	LayerFilterItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LayerFilterItemKeySpecifier | (() => undefined | LayerFilterItemKeySpecifier),
		fields?: LayerFilterItemFieldPolicy,
	},
	LayerFilterItemInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LayerFilterItemInterfaceKeySpecifier | (() => undefined | LayerFilterItemInterfaceKeySpecifier),
		fields?: LayerFilterItemInterfaceFieldPolicy,
	},
	MediaGalleryEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaGalleryEntryKeySpecifier | (() => undefined | MediaGalleryEntryKeySpecifier),
		fields?: MediaGalleryEntryFieldPolicy,
	},
	MediaGalleryInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaGalleryInterfaceKeySpecifier | (() => undefined | MediaGalleryInterfaceKeySpecifier),
		fields?: MediaGalleryInterfaceFieldPolicy,
	},
	MollieIssuer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MollieIssuerKeySpecifier | (() => undefined | MollieIssuerKeySpecifier),
		fields?: MollieIssuerFieldPolicy,
	},
	MolliePaymentMethod?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MolliePaymentMethodKeySpecifier | (() => undefined | MolliePaymentMethodKeySpecifier),
		fields?: MolliePaymentMethodFieldPolicy,
	},
	MolliePaymentMethodMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MolliePaymentMethodMetaKeySpecifier | (() => undefined | MolliePaymentMethodMetaKeySpecifier),
		fields?: MolliePaymentMethodMetaFieldPolicy,
	},
	MolliePaymentMethodsOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MolliePaymentMethodsOutputKeySpecifier | (() => undefined | MolliePaymentMethodsOutputKeySpecifier),
		fields?: MolliePaymentMethodsOutputFieldPolicy,
	},
	MollieProcessTransactionOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MollieProcessTransactionOutputKeySpecifier | (() => undefined | MollieProcessTransactionOutputKeySpecifier),
		fields?: MollieProcessTransactionOutputFieldPolicy,
	},
	MollieResetCartOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MollieResetCartOutputKeySpecifier | (() => undefined | MollieResetCartOutputKeySpecifier),
		fields?: MollieResetCartOutputFieldPolicy,
	},
	MollieTransactionOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MollieTransactionOutputKeySpecifier | (() => undefined | MollieTransactionOutputKeySpecifier),
		fields?: MollieTransactionOutputFieldPolicy,
	},
	Money?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MoneyKeySpecifier | (() => undefined | MoneyKeySpecifier),
		fields?: MoneyFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Node?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeKeySpecifier | (() => undefined | NodeKeySpecifier),
		fields?: NodeFieldPolicy,
	},
	Order?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderKeySpecifier | (() => undefined | OrderKeySpecifier),
		fields?: OrderFieldPolicy,
	},
	OrderAddress?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderAddressKeySpecifier | (() => undefined | OrderAddressKeySpecifier),
		fields?: OrderAddressFieldPolicy,
	},
	OrderItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderItemKeySpecifier | (() => undefined | OrderItemKeySpecifier),
		fields?: OrderItemFieldPolicy,
	},
	OrderItemInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderItemInterfaceKeySpecifier | (() => undefined | OrderItemInterfaceKeySpecifier),
		fields?: OrderItemInterfaceFieldPolicy,
	},
	OrderItemOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderItemOptionKeySpecifier | (() => undefined | OrderItemOptionKeySpecifier),
		fields?: OrderItemOptionFieldPolicy,
	},
	OrderPaymentMethod?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderPaymentMethodKeySpecifier | (() => undefined | OrderPaymentMethodKeySpecifier),
		fields?: OrderPaymentMethodFieldPolicy,
	},
	OrderShipment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderShipmentKeySpecifier | (() => undefined | OrderShipmentKeySpecifier),
		fields?: OrderShipmentFieldPolicy,
	},
	OrderTotal?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderTotalKeySpecifier | (() => undefined | OrderTotalKeySpecifier),
		fields?: OrderTotalFieldPolicy,
	},
	Page?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageKeySpecifier | (() => undefined | PageKeySpecifier),
		fields?: PageFieldPolicy,
	},
	PageConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageConnectionKeySpecifier | (() => undefined | PageConnectionKeySpecifier),
		fields?: PageConnectionFieldPolicy,
	},
	PageEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageEdgeKeySpecifier | (() => undefined | PageEdgeKeySpecifier),
		fields?: PageEdgeFieldPolicy,
	},
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	PageLink?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageLinkKeySpecifier | (() => undefined | PageLinkKeySpecifier),
		fields?: PageLinkFieldPolicy,
	},
	PageLinkConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageLinkConnectionKeySpecifier | (() => undefined | PageLinkConnectionKeySpecifier),
		fields?: PageLinkConnectionFieldPolicy,
	},
	PageLinkEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageLinkEdgeKeySpecifier | (() => undefined | PageLinkEdgeKeySpecifier),
		fields?: PageLinkEdgeFieldPolicy,
	},
	PayflowLinkToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PayflowLinkTokenKeySpecifier | (() => undefined | PayflowLinkTokenKeySpecifier),
		fields?: PayflowLinkTokenFieldPolicy,
	},
	PayflowProResponseOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PayflowProResponseOutputKeySpecifier | (() => undefined | PayflowProResponseOutputKeySpecifier),
		fields?: PayflowProResponseOutputFieldPolicy,
	},
	PayflowProToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PayflowProTokenKeySpecifier | (() => undefined | PayflowProTokenKeySpecifier),
		fields?: PayflowProTokenFieldPolicy,
	},
	PaymentToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentTokenKeySpecifier | (() => undefined | PaymentTokenKeySpecifier),
		fields?: PaymentTokenFieldPolicy,
	},
	PaypalExpressToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaypalExpressTokenKeySpecifier | (() => undefined | PaypalExpressTokenKeySpecifier),
		fields?: PaypalExpressTokenFieldPolicy,
	},
	PaypalExpressTokenOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaypalExpressTokenOutputKeySpecifier | (() => undefined | PaypalExpressTokenOutputKeySpecifier),
		fields?: PaypalExpressTokenOutputFieldPolicy,
	},
	PaypalExpressUrlList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaypalExpressUrlListKeySpecifier | (() => undefined | PaypalExpressUrlListKeySpecifier),
		fields?: PaypalExpressUrlListFieldPolicy,
	},
	PhysicalProductInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PhysicalProductInterfaceKeySpecifier | (() => undefined | PhysicalProductInterfaceKeySpecifier),
		fields?: PhysicalProductInterfaceFieldPolicy,
	},
	PickupLocation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PickupLocationKeySpecifier | (() => undefined | PickupLocationKeySpecifier),
		fields?: PickupLocationFieldPolicy,
	},
	PickupLocations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PickupLocationsKeySpecifier | (() => undefined | PickupLocationsKeySpecifier),
		fields?: PickupLocationsFieldPolicy,
	},
	PlaceOrderOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceOrderOutputKeySpecifier | (() => undefined | PlaceOrderOutputKeySpecifier),
		fields?: PlaceOrderOutputFieldPolicy,
	},
	Price?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PriceKeySpecifier | (() => undefined | PriceKeySpecifier),
		fields?: PriceFieldPolicy,
	},
	PriceAdjustment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PriceAdjustmentKeySpecifier | (() => undefined | PriceAdjustmentKeySpecifier),
		fields?: PriceAdjustmentFieldPolicy,
	},
	PriceRange?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PriceRangeKeySpecifier | (() => undefined | PriceRangeKeySpecifier),
		fields?: PriceRangeFieldPolicy,
	},
	ProductAttribute?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductAttributeKeySpecifier | (() => undefined | ProductAttributeKeySpecifier),
		fields?: ProductAttributeFieldPolicy,
	},
	ProductDiscount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductDiscountKeySpecifier | (() => undefined | ProductDiscountKeySpecifier),
		fields?: ProductDiscountFieldPolicy,
	},
	ProductImage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductImageKeySpecifier | (() => undefined | ProductImageKeySpecifier),
		fields?: ProductImageFieldPolicy,
	},
	ProductInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductInterfaceKeySpecifier | (() => undefined | ProductInterfaceKeySpecifier),
		fields?: ProductInterfaceFieldPolicy,
	},
	ProductLinks?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductLinksKeySpecifier | (() => undefined | ProductLinksKeySpecifier),
		fields?: ProductLinksFieldPolicy,
	},
	ProductLinksInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductLinksInterfaceKeySpecifier | (() => undefined | ProductLinksInterfaceKeySpecifier),
		fields?: ProductLinksInterfaceFieldPolicy,
	},
	ProductMediaGalleryEntriesContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductMediaGalleryEntriesContentKeySpecifier | (() => undefined | ProductMediaGalleryEntriesContentKeySpecifier),
		fields?: ProductMediaGalleryEntriesContentFieldPolicy,
	},
	ProductMediaGalleryEntriesVideoContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductMediaGalleryEntriesVideoContentKeySpecifier | (() => undefined | ProductMediaGalleryEntriesVideoContentKeySpecifier),
		fields?: ProductMediaGalleryEntriesVideoContentFieldPolicy,
	},
	ProductPrice?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductPriceKeySpecifier | (() => undefined | ProductPriceKeySpecifier),
		fields?: ProductPriceFieldPolicy,
	},
	ProductPrices?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductPricesKeySpecifier | (() => undefined | ProductPricesKeySpecifier),
		fields?: ProductPricesFieldPolicy,
	},
	ProductReview?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductReviewKeySpecifier | (() => undefined | ProductReviewKeySpecifier),
		fields?: ProductReviewFieldPolicy,
	},
	ProductReviewRating?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductReviewRatingKeySpecifier | (() => undefined | ProductReviewRatingKeySpecifier),
		fields?: ProductReviewRatingFieldPolicy,
	},
	ProductReviewRatingMetadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductReviewRatingMetadataKeySpecifier | (() => undefined | ProductReviewRatingMetadataKeySpecifier),
		fields?: ProductReviewRatingMetadataFieldPolicy,
	},
	ProductReviewRatingValueMetadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductReviewRatingValueMetadataKeySpecifier | (() => undefined | ProductReviewRatingValueMetadataKeySpecifier),
		fields?: ProductReviewRatingValueMetadataFieldPolicy,
	},
	ProductReviewRatingsMetadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductReviewRatingsMetadataKeySpecifier | (() => undefined | ProductReviewRatingsMetadataKeySpecifier),
		fields?: ProductReviewRatingsMetadataFieldPolicy,
	},
	ProductReviews?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductReviewsKeySpecifier | (() => undefined | ProductReviewsKeySpecifier),
		fields?: ProductReviewsFieldPolicy,
	},
	ProductTierPrices?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductTierPricesKeySpecifier | (() => undefined | ProductTierPricesKeySpecifier),
		fields?: ProductTierPricesFieldPolicy,
	},
	ProductVideo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVideoKeySpecifier | (() => undefined | ProductVideoKeySpecifier),
		fields?: ProductVideoFieldPolicy,
	},
	Products?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductsKeySpecifier | (() => undefined | ProductsKeySpecifier),
		fields?: ProductsFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Region?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RegionKeySpecifier | (() => undefined | RegionKeySpecifier),
		fields?: RegionFieldPolicy,
	},
	RemoveCouponFromCartOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RemoveCouponFromCartOutputKeySpecifier | (() => undefined | RemoveCouponFromCartOutputKeySpecifier),
		fields?: RemoveCouponFromCartOutputFieldPolicy,
	},
	RemoveItemFromCartOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RemoveItemFromCartOutputKeySpecifier | (() => undefined | RemoveItemFromCartOutputKeySpecifier),
		fields?: RemoveItemFromCartOutputFieldPolicy,
	},
	RemoveProductsFromWishlistOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RemoveProductsFromWishlistOutputKeySpecifier | (() => undefined | RemoveProductsFromWishlistOutputKeySpecifier),
		fields?: RemoveProductsFromWishlistOutputFieldPolicy,
	},
	ReorderItemsOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReorderItemsOutputKeySpecifier | (() => undefined | ReorderItemsOutputKeySpecifier),
		fields?: ReorderItemsOutputFieldPolicy,
	},
	RevokeCustomerTokenOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RevokeCustomerTokenOutputKeySpecifier | (() => undefined | RevokeCustomerTokenOutputKeySpecifier),
		fields?: RevokeCustomerTokenOutputFieldPolicy,
	},
	RichText?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RichTextKeySpecifier | (() => undefined | RichTextKeySpecifier),
		fields?: RichTextFieldPolicy,
	},
	RoutableInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RoutableInterfaceKeySpecifier | (() => undefined | RoutableInterfaceKeySpecifier),
		fields?: RoutableInterfaceFieldPolicy,
	},
	RowBlogContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowBlogContentKeySpecifier | (() => undefined | RowBlogContentKeySpecifier),
		fields?: RowBlogContentFieldPolicy,
	},
	RowBlogContentConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowBlogContentConnectionKeySpecifier | (() => undefined | RowBlogContentConnectionKeySpecifier),
		fields?: RowBlogContentConnectionFieldPolicy,
	},
	RowBlogContentEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowBlogContentEdgeKeySpecifier | (() => undefined | RowBlogContentEdgeKeySpecifier),
		fields?: RowBlogContentEdgeFieldPolicy,
	},
	RowButtonLinkList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowButtonLinkListKeySpecifier | (() => undefined | RowButtonLinkListKeySpecifier),
		fields?: RowButtonLinkListFieldPolicy,
	},
	RowButtonLinkListConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowButtonLinkListConnectionKeySpecifier | (() => undefined | RowButtonLinkListConnectionKeySpecifier),
		fields?: RowButtonLinkListConnectionFieldPolicy,
	},
	RowButtonLinkListEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowButtonLinkListEdgeKeySpecifier | (() => undefined | RowButtonLinkListEdgeKeySpecifier),
		fields?: RowButtonLinkListEdgeFieldPolicy,
	},
	RowColumnOne?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowColumnOneKeySpecifier | (() => undefined | RowColumnOneKeySpecifier),
		fields?: RowColumnOneFieldPolicy,
	},
	RowColumnOneConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowColumnOneConnectionKeySpecifier | (() => undefined | RowColumnOneConnectionKeySpecifier),
		fields?: RowColumnOneConnectionFieldPolicy,
	},
	RowColumnOneEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowColumnOneEdgeKeySpecifier | (() => undefined | RowColumnOneEdgeKeySpecifier),
		fields?: RowColumnOneEdgeFieldPolicy,
	},
	RowColumnThree?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowColumnThreeKeySpecifier | (() => undefined | RowColumnThreeKeySpecifier),
		fields?: RowColumnThreeFieldPolicy,
	},
	RowColumnThreeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowColumnThreeConnectionKeySpecifier | (() => undefined | RowColumnThreeConnectionKeySpecifier),
		fields?: RowColumnThreeConnectionFieldPolicy,
	},
	RowColumnThreeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowColumnThreeEdgeKeySpecifier | (() => undefined | RowColumnThreeEdgeKeySpecifier),
		fields?: RowColumnThreeEdgeFieldPolicy,
	},
	RowColumnTwo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowColumnTwoKeySpecifier | (() => undefined | RowColumnTwoKeySpecifier),
		fields?: RowColumnTwoFieldPolicy,
	},
	RowColumnTwoConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowColumnTwoConnectionKeySpecifier | (() => undefined | RowColumnTwoConnectionKeySpecifier),
		fields?: RowColumnTwoConnectionFieldPolicy,
	},
	RowColumnTwoEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowColumnTwoEdgeKeySpecifier | (() => undefined | RowColumnTwoEdgeKeySpecifier),
		fields?: RowColumnTwoEdgeFieldPolicy,
	},
	RowContentLinks?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowContentLinksKeySpecifier | (() => undefined | RowContentLinksKeySpecifier),
		fields?: RowContentLinksFieldPolicy,
	},
	RowContentLinksConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowContentLinksConnectionKeySpecifier | (() => undefined | RowContentLinksConnectionKeySpecifier),
		fields?: RowContentLinksConnectionFieldPolicy,
	},
	RowContentLinksEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowContentLinksEdgeKeySpecifier | (() => undefined | RowContentLinksEdgeKeySpecifier),
		fields?: RowContentLinksEdgeFieldPolicy,
	},
	RowHeroBanner?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowHeroBannerKeySpecifier | (() => undefined | RowHeroBannerKeySpecifier),
		fields?: RowHeroBannerFieldPolicy,
	},
	RowHeroBannerConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowHeroBannerConnectionKeySpecifier | (() => undefined | RowHeroBannerConnectionKeySpecifier),
		fields?: RowHeroBannerConnectionFieldPolicy,
	},
	RowHeroBannerEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowHeroBannerEdgeKeySpecifier | (() => undefined | RowHeroBannerEdgeKeySpecifier),
		fields?: RowHeroBannerEdgeFieldPolicy,
	},
	RowLinks?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowLinksKeySpecifier | (() => undefined | RowLinksKeySpecifier),
		fields?: RowLinksFieldPolicy,
	},
	RowLinksConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowLinksConnectionKeySpecifier | (() => undefined | RowLinksConnectionKeySpecifier),
		fields?: RowLinksConnectionFieldPolicy,
	},
	RowLinksEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowLinksEdgeKeySpecifier | (() => undefined | RowLinksEdgeKeySpecifier),
		fields?: RowLinksEdgeFieldPolicy,
	},
	RowProduct?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowProductKeySpecifier | (() => undefined | RowProductKeySpecifier),
		fields?: RowProductFieldPolicy,
	},
	RowProductConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowProductConnectionKeySpecifier | (() => undefined | RowProductConnectionKeySpecifier),
		fields?: RowProductConnectionFieldPolicy,
	},
	RowProductEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowProductEdgeKeySpecifier | (() => undefined | RowProductEdgeKeySpecifier),
		fields?: RowProductEdgeFieldPolicy,
	},
	RowQuote?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowQuoteKeySpecifier | (() => undefined | RowQuoteKeySpecifier),
		fields?: RowQuoteFieldPolicy,
	},
	RowQuoteConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowQuoteConnectionKeySpecifier | (() => undefined | RowQuoteConnectionKeySpecifier),
		fields?: RowQuoteConnectionFieldPolicy,
	},
	RowQuoteEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowQuoteEdgeKeySpecifier | (() => undefined | RowQuoteEdgeKeySpecifier),
		fields?: RowQuoteEdgeFieldPolicy,
	},
	RowServiceOptions?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowServiceOptionsKeySpecifier | (() => undefined | RowServiceOptionsKeySpecifier),
		fields?: RowServiceOptionsFieldPolicy,
	},
	RowServiceOptionsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowServiceOptionsConnectionKeySpecifier | (() => undefined | RowServiceOptionsConnectionKeySpecifier),
		fields?: RowServiceOptionsConnectionFieldPolicy,
	},
	RowServiceOptionsEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowServiceOptionsEdgeKeySpecifier | (() => undefined | RowServiceOptionsEdgeKeySpecifier),
		fields?: RowServiceOptionsEdgeFieldPolicy,
	},
	RowSpecialBanner?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowSpecialBannerKeySpecifier | (() => undefined | RowSpecialBannerKeySpecifier),
		fields?: RowSpecialBannerFieldPolicy,
	},
	RowSpecialBannerConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowSpecialBannerConnectionKeySpecifier | (() => undefined | RowSpecialBannerConnectionKeySpecifier),
		fields?: RowSpecialBannerConnectionFieldPolicy,
	},
	RowSpecialBannerEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowSpecialBannerEdgeKeySpecifier | (() => undefined | RowSpecialBannerEdgeKeySpecifier),
		fields?: RowSpecialBannerEdgeFieldPolicy,
	},
	SalesCommentItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SalesCommentItemKeySpecifier | (() => undefined | SalesCommentItemKeySpecifier),
		fields?: SalesCommentItemFieldPolicy,
	},
	SalesItemInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SalesItemInterfaceKeySpecifier | (() => undefined | SalesItemInterfaceKeySpecifier),
		fields?: SalesItemInterfaceFieldPolicy,
	},
	SearchResultPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchResultPageInfoKeySpecifier | (() => undefined | SearchResultPageInfoKeySpecifier),
		fields?: SearchResultPageInfoFieldPolicy,
	},
	SelectedBundleOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SelectedBundleOptionKeySpecifier | (() => undefined | SelectedBundleOptionKeySpecifier),
		fields?: SelectedBundleOptionFieldPolicy,
	},
	SelectedBundleOptionValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SelectedBundleOptionValueKeySpecifier | (() => undefined | SelectedBundleOptionValueKeySpecifier),
		fields?: SelectedBundleOptionValueFieldPolicy,
	},
	SelectedConfigurableOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SelectedConfigurableOptionKeySpecifier | (() => undefined | SelectedConfigurableOptionKeySpecifier),
		fields?: SelectedConfigurableOptionFieldPolicy,
	},
	SelectedCustomizableOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SelectedCustomizableOptionKeySpecifier | (() => undefined | SelectedCustomizableOptionKeySpecifier),
		fields?: SelectedCustomizableOptionFieldPolicy,
	},
	SelectedCustomizableOptionValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SelectedCustomizableOptionValueKeySpecifier | (() => undefined | SelectedCustomizableOptionValueKeySpecifier),
		fields?: SelectedCustomizableOptionValueFieldPolicy,
	},
	SelectedPaymentMethod?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SelectedPaymentMethodKeySpecifier | (() => undefined | SelectedPaymentMethodKeySpecifier),
		fields?: SelectedPaymentMethodFieldPolicy,
	},
	SelectedShippingMethod?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SelectedShippingMethodKeySpecifier | (() => undefined | SelectedShippingMethodKeySpecifier),
		fields?: SelectedShippingMethodFieldPolicy,
	},
	SendEmailToFriendOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SendEmailToFriendOutputKeySpecifier | (() => undefined | SendEmailToFriendOutputKeySpecifier),
		fields?: SendEmailToFriendOutputFieldPolicy,
	},
	SendEmailToFriendRecipient?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SendEmailToFriendRecipientKeySpecifier | (() => undefined | SendEmailToFriendRecipientKeySpecifier),
		fields?: SendEmailToFriendRecipientFieldPolicy,
	},
	SendEmailToFriendSender?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SendEmailToFriendSenderKeySpecifier | (() => undefined | SendEmailToFriendSenderKeySpecifier),
		fields?: SendEmailToFriendSenderFieldPolicy,
	},
	SendFriendConfiguration?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SendFriendConfigurationKeySpecifier | (() => undefined | SendFriendConfigurationKeySpecifier),
		fields?: SendFriendConfigurationFieldPolicy,
	},
	SetBillingAddressOnCartOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetBillingAddressOnCartOutputKeySpecifier | (() => undefined | SetBillingAddressOnCartOutputKeySpecifier),
		fields?: SetBillingAddressOnCartOutputFieldPolicy,
	},
	SetGuestEmailOnCartOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetGuestEmailOnCartOutputKeySpecifier | (() => undefined | SetGuestEmailOnCartOutputKeySpecifier),
		fields?: SetGuestEmailOnCartOutputFieldPolicy,
	},
	SetPaymentMethodOnCartOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetPaymentMethodOnCartOutputKeySpecifier | (() => undefined | SetPaymentMethodOnCartOutputKeySpecifier),
		fields?: SetPaymentMethodOnCartOutputFieldPolicy,
	},
	SetShippingAddressesOnCartOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetShippingAddressesOnCartOutputKeySpecifier | (() => undefined | SetShippingAddressesOnCartOutputKeySpecifier),
		fields?: SetShippingAddressesOnCartOutputFieldPolicy,
	},
	SetShippingMethodsOnCartOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetShippingMethodsOnCartOutputKeySpecifier | (() => undefined | SetShippingMethodsOnCartOutputKeySpecifier),
		fields?: SetShippingMethodsOnCartOutputFieldPolicy,
	},
	ShipmentItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShipmentItemKeySpecifier | (() => undefined | ShipmentItemKeySpecifier),
		fields?: ShipmentItemFieldPolicy,
	},
	ShipmentItemInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShipmentItemInterfaceKeySpecifier | (() => undefined | ShipmentItemInterfaceKeySpecifier),
		fields?: ShipmentItemInterfaceFieldPolicy,
	},
	ShipmentTracking?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShipmentTrackingKeySpecifier | (() => undefined | ShipmentTrackingKeySpecifier),
		fields?: ShipmentTrackingFieldPolicy,
	},
	ShippingCartAddress?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingCartAddressKeySpecifier | (() => undefined | ShippingCartAddressKeySpecifier),
		fields?: ShippingCartAddressFieldPolicy,
	},
	ShippingDiscount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingDiscountKeySpecifier | (() => undefined | ShippingDiscountKeySpecifier),
		fields?: ShippingDiscountFieldPolicy,
	},
	ShippingHandling?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingHandlingKeySpecifier | (() => undefined | ShippingHandlingKeySpecifier),
		fields?: ShippingHandlingFieldPolicy,
	},
	SimpleCartItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SimpleCartItemKeySpecifier | (() => undefined | SimpleCartItemKeySpecifier),
		fields?: SimpleCartItemFieldPolicy,
	},
	SimpleProduct?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SimpleProductKeySpecifier | (() => undefined | SimpleProductKeySpecifier),
		fields?: SimpleProductFieldPolicy,
	},
	SimpleWishlistItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SimpleWishlistItemKeySpecifier | (() => undefined | SimpleWishlistItemKeySpecifier),
		fields?: SimpleWishlistItemFieldPolicy,
	},
	SortField?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SortFieldKeySpecifier | (() => undefined | SortFieldKeySpecifier),
		fields?: SortFieldFieldPolicy,
	},
	SortFields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SortFieldsKeySpecifier | (() => undefined | SortFieldsKeySpecifier),
		fields?: SortFieldsFieldPolicy,
	},
	StoreConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StoreConfigKeySpecifier | (() => undefined | StoreConfigKeySpecifier),
		fields?: StoreConfigFieldPolicy,
	},
	StorefrontProperties?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StorefrontPropertiesKeySpecifier | (() => undefined | StorefrontPropertiesKeySpecifier),
		fields?: StorefrontPropertiesFieldPolicy,
	},
	SubscribeEmailToNewsletterOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscribeEmailToNewsletterOutputKeySpecifier | (() => undefined | SubscribeEmailToNewsletterOutputKeySpecifier),
		fields?: SubscribeEmailToNewsletterOutputFieldPolicy,
	},
	SwatchData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SwatchDataKeySpecifier | (() => undefined | SwatchDataKeySpecifier),
		fields?: SwatchDataFieldPolicy,
	},
	SwatchDataInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SwatchDataInterfaceKeySpecifier | (() => undefined | SwatchDataInterfaceKeySpecifier),
		fields?: SwatchDataInterfaceFieldPolicy,
	},
	SwatchLayerFilterItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SwatchLayerFilterItemKeySpecifier | (() => undefined | SwatchLayerFilterItemKeySpecifier),
		fields?: SwatchLayerFilterItemFieldPolicy,
	},
	SwatchLayerFilterItemInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SwatchLayerFilterItemInterfaceKeySpecifier | (() => undefined | SwatchLayerFilterItemInterfaceKeySpecifier),
		fields?: SwatchLayerFilterItemInterfaceFieldPolicy,
	},
	TaxItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaxItemKeySpecifier | (() => undefined | TaxItemKeySpecifier),
		fields?: TaxItemFieldPolicy,
	},
	TextSwatchData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TextSwatchDataKeySpecifier | (() => undefined | TextSwatchDataKeySpecifier),
		fields?: TextSwatchDataFieldPolicy,
	},
	TierPrice?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TierPriceKeySpecifier | (() => undefined | TierPriceKeySpecifier),
		fields?: TierPriceFieldPolicy,
	},
	TrackingData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TrackingDataKeySpecifier | (() => undefined | TrackingDataKeySpecifier),
		fields?: TrackingDataFieldPolicy,
	},
	UpdateCartItemsOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateCartItemsOutputKeySpecifier | (() => undefined | UpdateCartItemsOutputKeySpecifier),
		fields?: UpdateCartItemsOutputFieldPolicy,
	},
	UpdateProductsInWishlistOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateProductsInWishlistOutputKeySpecifier | (() => undefined | UpdateProductsInWishlistOutputKeySpecifier),
		fields?: UpdateProductsInWishlistOutputFieldPolicy,
	},
	UrlRewrite?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UrlRewriteKeySpecifier | (() => undefined | UrlRewriteKeySpecifier),
		fields?: UrlRewriteFieldPolicy,
	},
	Usps?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UspsKeySpecifier | (() => undefined | UspsKeySpecifier),
		fields?: UspsFieldPolicy,
	},
	UspsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UspsConnectionKeySpecifier | (() => undefined | UspsConnectionKeySpecifier),
		fields?: UspsConnectionFieldPolicy,
	},
	UspsEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UspsEdgeKeySpecifier | (() => undefined | UspsEdgeKeySpecifier),
		fields?: UspsEdgeFieldPolicy,
	},
	VirtualCartItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VirtualCartItemKeySpecifier | (() => undefined | VirtualCartItemKeySpecifier),
		fields?: VirtualCartItemFieldPolicy,
	},
	VirtualProduct?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VirtualProductKeySpecifier | (() => undefined | VirtualProductKeySpecifier),
		fields?: VirtualProductFieldPolicy,
	},
	VirtualWishlistItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VirtualWishlistItemKeySpecifier | (() => undefined | VirtualWishlistItemKeySpecifier),
		fields?: VirtualWishlistItemFieldPolicy,
	},
	Website?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebsiteKeySpecifier | (() => undefined | WebsiteKeySpecifier),
		fields?: WebsiteFieldPolicy,
	},
	WishListUserInputError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WishListUserInputErrorKeySpecifier | (() => undefined | WishListUserInputErrorKeySpecifier),
		fields?: WishListUserInputErrorFieldPolicy,
	},
	Wishlist?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WishlistKeySpecifier | (() => undefined | WishlistKeySpecifier),
		fields?: WishlistFieldPolicy,
	},
	WishlistCartUserInputError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WishlistCartUserInputErrorKeySpecifier | (() => undefined | WishlistCartUserInputErrorKeySpecifier),
		fields?: WishlistCartUserInputErrorFieldPolicy,
	},
	WishlistItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WishlistItemKeySpecifier | (() => undefined | WishlistItemKeySpecifier),
		fields?: WishlistItemFieldPolicy,
	},
	WishlistItemInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WishlistItemInterfaceKeySpecifier | (() => undefined | WishlistItemInterfaceKeySpecifier),
		fields?: WishlistItemInterfaceFieldPolicy,
	},
	WishlistItems?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WishlistItemsKeySpecifier | (() => undefined | WishlistItemsKeySpecifier),
		fields?: WishlistItemsFieldPolicy,
	},
	WishlistOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WishlistOutputKeySpecifier | (() => undefined | WishlistOutputKeySpecifier),
		fields?: WishlistOutputFieldPolicy,
	},
	createKlarnaPaymentsSessionOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | createKlarnaPaymentsSessionOutputKeySpecifier | (() => undefined | createKlarnaPaymentsSessionOutputKeySpecifier),
		fields?: createKlarnaPaymentsSessionOutputFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;