// interfaces corresponding to the expected data elements in a product

export interface IWeekData {
    weekEnding: string,
    retailSales: number,
    wholesaleSales: number,
    unitsSold: number,
    retailerMargin: number
}

export interface IReview {
    customer: string,
    review: string,
    score: number
}

export interface IProduct {
    id: string,
    title: string,
    image?: string,
    subtitle?: string,
    brand: string,
    reviews?: IReview[],
    retailer: string,
    details: string[],
    tags: string[],
    sales: IWeekData[]
}