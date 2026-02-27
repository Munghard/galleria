import './App.css'
import { useRef, useState } from 'react';
import { artworks, type Artwork } from './artworks'
import Entry from './components/Entry'

function App() {

	const [year, setYear] = useState<number>(2017);

	const [showBlowUp, setShowBlowup] = useState<boolean>(false);
	const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);


	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });


	const filteredArtworks = artworks.filter(a => a.year == year);

	const years = Array.from(new Set(artworks.map(a => a.year).sort((a, b) => a - b)));


	const zoomSize = 512; // w-96 / h-96 = 24rem = 384px
	const zoomFactor = 2; // 2x zoom

	const [imgRect, setImgRect] = useState<DOMRect | null>(null);
	const imgRef = useRef<HTMLImageElement>(null);

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!imgRef.current) return;

		const rect = imgRef.current.getBoundingClientRect();
		setImgRect(rect); // Fix: Set it to the actual rect

		// Calculate mouse position relative to the image
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		setMousePos({ x, y });
	};

	return (
		<>
			{
				showBlowUp && selectedArtwork &&
				<div
					id='blowup'
					onMouseMove={handleMouseMove}
					onClick={() => { setShowBlowup(false); setSelectedArtwork(null); }}
					className='fixed flex bg-black/50 inset-0 h-full justify-center items-center backdrop-blur-2xl'>

					{/* MAIN IMAGE */}
					<div className='relative inline-block cursor-none'>
						<img
							className={` max-w-[95vw] max-h-[95vh]`} src={selectedArtwork?.imageUrl}
							ref={imgRef}
						/>
						{/* ZOOM RECT */}
						{imgRect && <div
							id='ZoomRect'
							className='absolute rounded-full border-white border-4 overflow-hidden shadow-xl pointer-events-none '
							style={{
								width: zoomSize,
								height: zoomSize,
								top: mousePos.y - zoomSize / 2, // half of height to center
								left: mousePos.x - zoomSize / 2, // half of width to center
							}}
						>
							{/* ZOOMED IMAGE */}
							<img
								src={selectedArtwork.imageUrl}
								className='absolute max-w-none'
								style={{
									// Match the size of the zoomed space
									width: imgRect.width * zoomFactor,
									height: imgRect.height * zoomFactor,
									// Offset calculation
									left: -mousePos.x * zoomFactor + zoomSize / 2,
									top: -mousePos.y * zoomFactor + zoomSize / 2,
								}}
							/>
						</div>}
					</div>
				</div>
			}
			<div>
				<h1 className='text-7xl!'>Gallery</h1>
				<p className="mt-2 text-zinc-400">
					Niklas Granqvist artwork for sale.
				</p>
			</div>
			<div className='flex gap-2 justify-center'>

				{years.map(y => {
					return (
						<button key={y} className='text-zinc-400 mt-2' onClick={() => setYear(y)}>{y}</button>
					)
				})}
			</div>

			{filteredArtworks.map(a => {
				return (
					<Entry
						onClick={() => { setSelectedArtwork(a); setShowBlowup(true); console.log("clicked") }}
						key={a.id}
						id={a.id}
						title={a.title}
						year={a.year}
						price={a.price}
						description={a.description}
						imageUrl={a.imageUrl}
						available={a.available}
					/>
				)
			})}

		</>
	)
}

export default App
