const localConfig = {
    apiUrl: "http://localhost:5000"
}

const prodConfig = {
    apiUrl: "myproductionURLhere"
}

export const config = process.env.NODE_ENV === "production" ? prodConfig : localConfig
