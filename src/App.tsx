import './App.css'
import { useState } from 'react';
import { artworks } from './artworks'
import Entry from './components/Entry'

function App() {

  const [year, setYear] = useState<number>(2017);
  const filteredArtworks = artworks.filter(a => a.year == year);

  const years = Array.from(new Set(artworks.map(a => a.year).sort((a, b) => a - b)));

  return (
    <>
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
