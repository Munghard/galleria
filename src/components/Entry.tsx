import type { Artwork } from "../artworks";

export default function Entry({ id, title, year, description, price, imageUrl, available }: Artwork) {
    return (
        <>
            <div className="bg-zinc-900 m-4 p-4" key={id}>
                <img className="w-4xl mb-4" src={imageUrl} title={title} />
                <div className="justify-center flex flex-row mb-4">
                    <h1 className="text-4xl! text-zinc-200">{title}</h1>
                    <div title={`${available ? "Available" : "Unavailable"}`} className={`mx-4 my-auto rounded-4xl w-4 h-4 ${available ? 'bg-green-500' : 'bg-red-500'} `}></div>
                </div>
                <p className="text-zinc-400">{description + " " + "(" + year.toString() + ")"}</p>
                {
                    available &&
                    <>
                        <h2 className="text-amber-400">{price.toString() + "€"}</h2>
                        <button
                            onClick={() =>
                                window.location.href = `mailto:niklasgranqvist@windowslive.com?subject=Purchase Request: ${title}&body=Hi, I would like to purchase "${title}" "${id}".`
                            }
                            className="" title="This will open your email app to send a purchase request">Reserve</button>
                    </>
                }
            </div>
        </>
    )
}
