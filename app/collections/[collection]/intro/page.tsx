export default async function Page({params}: {params : { collection : string }}){
    const collection = params.collection
    return(
        <main>
            <div>
                Collection Intro page {collection}
            </div>
        </main>
    )
}