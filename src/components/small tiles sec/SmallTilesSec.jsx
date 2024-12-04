import React from 'react';
import SmallTiles from '../common component/small tiles/SmallTiles';
import './small-tile-comp.css';

const SmallTilesSec = () => {
  return (
    <section className='small-tiles-comp'>
        <SmallTiles 
        para1="Fabien Charuau "
        para2="Les Bouchons"
        featured="Featured in Time magazine, Nov 2021"/>
    </section>
  )
}

export default SmallTilesSec;