import useFetch from ".";

export default function useFetchTest(){
    const {data, error, pending}=useFetch("https://dummyjson.com/products",{});

    return (
        <div>
            <h1>Custom useFetch hook test</h1>
            { pending? <h3>wait on</h3>: null}
            { error? <h3>{error}</h3>:null}
            {data && data.products && data.products.length
                ? data.products.map((productItem) => (
                    <p key={productItem.key}>{productItem.title}</p>
                ))
                : null}
        </div>
    )
}